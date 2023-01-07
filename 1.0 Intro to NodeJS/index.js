//const { log } = require('console');
const htpp = require('http');
const { changeViews } = require('./htmlViews');

const homeView = `<h1>Home Page</h1`;
const aboutView = `<h1>About us</h1 <p>We are here!</p>`;
const catalogView = `<h1>Catalog</h1> <h3>List of Items:</h3>`; 
const defaultView = `<h1>404 Not Found</h1>`;

const server = htpp.createServer((request, response) => {
    console.log('The servers seems to be working');
    console.log('The request is: ' + request.method);
    console.log('Url: ' + request.url); 

    const url = new URL(request.url, `http:${request.headers.host}`);

    switch (url.pathname) {
        case '/':
            response.write(changeViews(homeView));
            response.end();
            break;
        case '/about':
            response.write(changeViews(aboutView));
            response.end();
            break;
        case '/catalog':
            response.write(changeViews(catalogView));
            break;
        default:
            response.write(changeViews(defaultView));
            response.statusCode = 404;
            response.end();
            break;
    }

});


server.listen(3000);