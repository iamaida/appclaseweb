const express = require('express')
const app = express()

app.get('/prueba',(req, res) => {
    res.send("Prueba Superada")
} )

app.post('/camilo', (req, res) => {
    res.json({
        "cedula": "123456789",
        "nombre": "camilo"
    })
})

app.listen(3000,()=>{
    console.log("Conectado Puerto 3000")
})