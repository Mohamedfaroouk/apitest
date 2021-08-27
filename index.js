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
    // "Single Broast":[],
  //  "Family Broast":[],
   // "Salad":[],
  //  "Kids":[],
   // "Side Items":[],
   // "Extra":[]

/* 
   {
    "Chease Tasa": [
      {
        "name": "Cheese Tasa",
        "incart": false,
        "price": 35,
        "type": "Cheese Tasa",
        "cont": "أصابع البطاطس المتبله بالخلطة السرية مع صوص جبن شيلتر والموتزاريلا"
      },
      {
        "name": "MIX CHEESE",
        "incart": false,
        "price": 52,
        "type": "Cheese Tasa",
        "cont": "جبن شيدر و موتزاريلا و صوص جبن شيلتر"
      },
      {
        "name": "SAUSAGE CHEESE",
        "incart": false,
        "price": 54,
        "type": "Cheese Tasa",
        "cont": "طاسة سجق مع صوص جبن شيلتر و الموتزاريلا"
      },
      {
        "name": "HOT DOG CHEESE",
        "incart": false,
        "price": 54,
        "type": "Cheese Tasa",
        "cont": "هوت دوج وصوص جبن شيلتر مع الجبن الموتزاريلا"
      },
      {
        "name": "SPINACH MUSHROOM",
        "incart": false,
        "price": 54,
        "type": "Cheese Tasa",
        "cont": "سبانخ والمشروم وصوص جبن شيلتر و الموتزاريلا"
      },
      {
        "name": "ZINGER CHEESE",
        "incart": false,
        "price": 62,
        "type": "Cheese Tasa",
        "cont": "طاسة صدور الدجاج المقرمش مع وصوص جبن شيلتر و الموتزاريلا"
      },
      {
        "name": "MEATBALLS",
        "incart": false,
        "price": 70,
        "type": "Cheese Tasa",
        "cont": "كور اللحم و صوص جبن شيلتر و الموتزاريلا"
      },
      {
        "name": "SEAFOOD",
        "incart": false,
        "price": 80,
        "type": "Cheese Tasa",
        "cont": "جمبري و كابوريا و صوص جبن شيلتر و جبنة موتزاريلا"
      }
    ] ,"id":3} */
  const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(jsonServer.bodyParser)

server.use(middlewares)
server.post("/echo1",(req, res, next) => {
    const {logo}=req.body;
  
        if(!logo){
            res.sendStatus(404)

        }
     
    else{
        next()
    }
})
server.get('/echo', (req, res,next) => {
   next()
  })
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
