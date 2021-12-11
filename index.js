const express = require('express')
const app = express()
const operaciones = require("./utilis/operaciones")

app.use(express.json());

app.get('/prueba',(req, res) => {
    res.send("Prueba Superada")
} )

app.post('/camilo', (req, res) => {
    res.json({
        "cedula": "123456789",
        "nombre": "camilo"
    })
})

app.post('/mezu', (req, res) => {
    res.json({
        "cedula": "987654321",
        "apellido": "mezu"
    })
})

app.post('/pares', (req, res) => {
    let numero = req.body.numero
    let result = operaciones.pares(numero)
    res.send(result)
   })



app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("Conectado Puerto 3000")
})

