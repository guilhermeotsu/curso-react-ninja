'use strict'

const { join } = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

// Comprimindo arquivos a todos os arquivos que passarem pelo app - passando gzip
app.use(compression())

// Informando ao node o diretorio de arquivos estaticos que o browser pode ter acesso
app.use(express.static(join(__dirname, 'dist')))

// Qualquer get para qualquer url do site
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('Server listening on localhost:3000'))