/*const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end ('<h1>oiiii ne</h1>');

})

server.listen(port, hostname, ()=> {
    console.log('server running at http://${hostname}:${port}/')
})
*/

const port  = 3000;
const express = require('express')
const app = express()

app.set("view engine",'ejs')

app.get('/', function(request, res){
    res.render("exemplo", {'nome':'mateus', 'clientes': ['lucas','joão']})
});

app.listen(port)