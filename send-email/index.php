<?php

declare(strict_types=1);
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;
use Resend;

/*
 * PHP 8.4 contact-mail endpoint using vlucas/phpdotenv and Resend.
 *
 * Required .env values (keep this file outside the web root if possible):
 *   RESEND_API_KEY=re_your_resend_api_key
 *   RESEND_FROM=contact@your-verified-domain.com
 *   MAIL_TO=recipient@example.com
 *   ALLOWED_ORIGIN=https://www.example.com
 */

const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW = 600; // seconds

function respond(int $status, array $body): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($body, JSON_THROW_ON_ERROR);
    exit;
}

function envValue(string $name): string
{
    $value = $_ENV[$name] ?? $_SERVER[$name] ?? '';
    if (!is_string($value) || $value === '') {
        throw new RuntimeException("Missing required configuration: {$name}");
    }

    return $value;
}

function sendResend(string $apiKey, string $from, string $recipient, string $replyTo, string $name, string $message): void
{
    $safeName = str_replace(["\r", "\n"], '', $name);
    $resend = Resend::client($apiKey);
    $resend->emails->send([
        'from' => "Website Contact <{$from}>",
        'to' => [$recipient],
        'reply_to' => $replyTo,
        'subject' => 'Website contact from ' . $safeName,
        'text' => "Name: {$safeName}\nEmail: {$replyTo}\n\n{$message}",
    ]);
}

try {
    if (!is_file(__DIR__ . '/.env')) {
        throw new RuntimeException('Configuration is unavailable.');
    }
    Dotenv::createImmutable(__DIR__)->load();

    $allowedOrigin = rtrim(envValue('ALLOWED_ORIGIN'), '/');
    $origin = rtrim($_SERVER['HTTP_ORIGIN'] ?? '', '/');
    if (!hash_equals($allowedOrigin, $origin)) {
        respond(403, ['error' => 'Origin not allowed.']);
    }

    // header('Vary: Origin');

    // // A JSON POST triggers a browser preflight request. It must succeed before
    // // the browser will send the actual POST request.
    // if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

    //     http_response_code(204);
    //     exit;
    // }

    // if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    //     header('Allow: POST, OPTIONS');
    //     respond(405, ['error' => 'Method not allowed.']);
    // }

    $ip = filter_var($_SERVER['REMOTE_ADDR'] ?? '', FILTER_VALIDATE_IP) ?: 'unknown';
    $rateFile = sys_get_temp_dir() . '/mail-contact-' . hash('sha256', $ip);
    $now = time();
    $attempts = is_file($rateFile) ? json_decode((string) file_get_contents($rateFile), true) : [];
    $attempts = is_array($attempts) ? array_values(array_filter($attempts, fn ($time) => is_int($time) && $time > $now - RATE_LIMIT_WINDOW)) : [];
    if (count($attempts) >= RATE_LIMIT_REQUESTS) {
        respond(429, ['error' => 'Please try again later.']);
    }
    $attempts[] = $now;
    file_put_contents($rateFile, json_encode($attempts), LOCK_EX);

    $input = json_decode((string) file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    if (!is_array($input)) {
        respond(400, ['error' => 'Invalid request body.']);
    }
    $name = trim((string) ($input['name'] ?? ''));
    $email = trim((string) ($input['email'] ?? ''));
    $message = trim((string) ($input['message'] ?? ''));
    if ($name === '' || mb_strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '' || mb_strlen($message) > MAX_MESSAGE_LENGTH) {
        respond(422, ['error' => 'Please provide a valid name, email address, and message.']);
    }

    $resendApiKey = envValue('RESEND_API_KEY');
    $from = envValue('RESEND_FROM');
    $recipient = envValue('MAIL_TO');
    if (!filter_var($from, FILTER_VALIDATE_EMAIL) || !filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('Invalid sender or recipient configuration.');
    }

    sendResend($resendApiKey, $from, $recipient, $email, $name, $message);
    respond(200, ['ok' => true]);
} catch (JsonException) {
    respond(400, ['error' => 'Invalid JSON request body.']);
} catch (Throwable $exception) {
    error_log('mailsmtp.php: ' . $exception->getMessage());
    respond(500, ['error' => 'Unable to send your message right now.'. $exception->getMessage()]);
}
