require('dotenv').config();


const express = require('express');
const app = express();    
const cors = require('cors');

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

app.use(express.json())
app.use(cors())

app.listen(PORT, (err) => {
    if (err) {
      throw err
    }
    console.log('Servidor iniciado en el puerto ' + PORT)
  })

