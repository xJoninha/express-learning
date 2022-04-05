const express = require('express')
const path = require('path')

const app = express()
const port = 3333

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')))

app.listen(port, () => console.info(`Servidor rodando, Porta: ${port}`))