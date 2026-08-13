import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { handler as contactHandler } from './email/functions/contact.js'

const app = express()
const directory = path.dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/api/contact', async (request, response) => {
  const result = await contactHandler({
    httpMethod: request.method,
    body: JSON.stringify(request.body),
  })

  response.status(result.statusCode).type('json').send(result.body)
})

app.use(express.static(path.join(directory, 'dist')))
app.get('{*path}', (request, response) => {
  response.sendFile(path.join(directory, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`)
})