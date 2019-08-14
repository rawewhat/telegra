import '@babel/polyfill'
import axios from 'axios'
import cors from 'cors'
import express from 'express'

const PORT = 3000
const API = 'https://api.telegram.org/bot'
const TOKEN = '859381465:AAEKJmldKVdvlTEu5PusTBC9WVl9UEeF_pM'
const URL = method => `${API}${TOKEN}/${method || 'getMe'}`

const app = express()
app.use(cors())
app.get('/', async (request, response) => {
  const res = await axios.get(URL('getUpdates'))
  console.log('res:', res)
  return response.send(res.data)
})
app.listen(PORT, (req, res) => {
  console.log(`Ready on http://localhost:${PORT}`)
})
