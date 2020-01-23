//  const http = require('http');
//  http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World');
//    console.log('salut');
//  }).listen(8081);

//  console.log('Server running at http://127.0.0.1:8081/');

 const  express = require('express')
 const app = express()
 const port = 3000

 let ressources = 'Narcisse';
 app.get('/', (req, res) => res.send('Hello World!'))
 app.get('/res', (req, res) => res.send('Hello'+ ressources))
 app.listen(port, () => console.log(`Example app listening on port port!`))