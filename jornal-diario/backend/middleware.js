const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()
const APIKEY = process.env.api_key


app.use(cors())


app.get('/', (req, res) => {
  res.json({ message: 'API do Jornal Diário está funcionando!' });
});


app.get('/dados' , async (req,res) => {
    const categoria = req.query.categoria
    const pais = req.query.pais

    const apikey = `${APIKEY}&countries=${pais}&categories=${categoria}`

    const valores = await fetch(apikey)
    const valoresM = await valores.json()
    res.json(valoresM)
});

app.listen(3000 , () => {
    console.log('Servidor está rodando na porta 3000')
});
