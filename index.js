const express = require('express')

const app = express()
const port = 3333

app.get('/', (req, res) => res.send('<h1>Página Inicial<h1>'))

app.listen(port, () => console.info(`Servidor rodando, Porta: ${port}`))