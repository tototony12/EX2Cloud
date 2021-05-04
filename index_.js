'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

app.use(express.static(__dirname + '/public'))
app.use(express.json())


app.listen(PORT, (err) => {
    if (err) {
      throw err
    }
    console.log('Servidor iniciado en el puerto ' + PORT)
  })
