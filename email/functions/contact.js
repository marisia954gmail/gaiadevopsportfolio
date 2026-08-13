import nodemailer from 'nodemailer'

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ message: 'Missing required fields.' }) }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `Gaia DevOps message from ${name}`,
      text: message,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent.' }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Unable to send message.' }),
    }
  }
}