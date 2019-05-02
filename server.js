const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const port = 3003;
const { Client } = require('pg')
const client = new Client()


const connectClient = async ()=> {
    await client.connect()

}
connectClient();
server.get('/api/list',async (req,res)=>{
res.header("Access-Control-Allow-Origin","*");
const dres = await client.query('SELECT *from grocery_items')
console.log(dres.rows) 
//await client.end()
res.send(dres.rows);
res.end();
})
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.post('/api/list',async (req, res) =>{

  console.log(req.body)
    res.send('Got a POST request')
   const dres= await client.query('insert into grocery_items(id,item_name,quantity,amount) values($1,$2,$3,$4) RETURNING *',[req.body.id,req.body.item_name,req.body.quantity,req.body.amount]);
  })

server.get('/', (req, res) => res.send('Hello World!'))
//server.get('/api/itemList',(req,res)=>res.send('GroceryItems'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))