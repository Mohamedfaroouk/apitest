/* const express = require("express");
app=express();
const PORT = 8080;
app.use(express.json()  )
var allcars=Map;
allcars={"bmw":"red","fiat":"yellow"}
app.listen(PORT,()=>console.log("hi"))

app.get("/cars",(req,res)=>{
    res.status(200).send(allcars)


})

app.post("/cars/:id",(req,res)=>{
    const {id}=req.params;
    const {logo}=req.body;
allcars[id]=logo

console.log(allcars)

    res.status(200).send(allcars)
    


}) */
/* 
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
server.use((req, res, next) => {

    const {logo}=req.body;
    if(req.method==='POST'){
        res. res.sendStatus(401)
    }
    // Continue to JSON Server router
    next()
  }) */
  const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(jsonServer.bodyParser)

server.use(middlewares)
server.use((req, res, next) => {
    const {logo}=req.body;
    if(req.method==='POST'){
        if(!logo){
            res.sendStatus(404)

        }
       res.sendStatus(401)
    } else{
        next()
    }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
