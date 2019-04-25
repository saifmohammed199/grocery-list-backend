const express = require('express');
const server = express();
const port = 3003;
const { Client } = require('pg')
const client = new Client()

server.get('/api/list',async (req,res)=>{
await client.connect()
const dres = await client.query('SELECT *from grocery_items')
console.log(dres.rows) 
await client.end()
res.send(dres.rows);
})


server.get('/', (req, res) => res.send('Hello World!'))
server.get('/api/itemList',(req,res)=>res.send('GroceryItems'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))