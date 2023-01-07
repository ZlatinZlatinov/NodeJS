//const { log } = require('console');
const htpp = require('http'); 


const server = htpp.createServer((request, response) => {
    console.log('The servers seems to be working'); 
    console.log('The request is: ' + request.method); 
    console.log(request.headers);
    console.log(request.url);  

    response.write('<h1>Merhaba<h1?'); 
    response.end();

}); 


server.listen(3000);