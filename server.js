const express = require('express');
const server = express();
const port = 3003;

server.get('/', (req, res) => res.send('Hello World!'))
server.get('/api/itemList',(req,res)=>res.send("itemList Update soon"))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))