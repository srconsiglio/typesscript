









//importando express
import express from 'express'
import { Server } from 'http'

//usando express
const server = express()

server.listen (3000)
server.get('/',(req,res) =>{
res.send("Por que choras Brad pitt")
})



server.get('./',(req,res) => {
    res.send("olá mundo ")
})

server.get('/login',(req,res) =>{
    res.send("Pagina de login")
})

server.get('/contato',(req,res) =>{
    res.send("pagina de contato")
})

server.get('/noticia/:noticia',(req,res) =>{
    let noticia: string = req.params.noticia
    res.send("noticias:"+noticia)

})

server.get('/viagens/:origem-:destino',(req,res) =>{
    let origem: string = req.params.origem
    let destino: string = req.params.destino
    res.send(`procurando trajetos de ${origem} até ${destino}`)

})
























/*
import filmes from './filmes'


console.log(filmes)






/*
import matematica from './matematica'

let n1: number = 10
let n2: number = 20


console.log("SOMA:"+matematica.somar(n1,n2))
console.log("subtrair "+matematica.subtrair(n1,n2))
console.log("multiplicar"+matematica.multiplicar(n1,n2))




import validator from "validator"
let date = "1995/10/29"
console.log(validator.isDate(date))


console.log(validator.isEmail("caio@hotmail.com"))
*/