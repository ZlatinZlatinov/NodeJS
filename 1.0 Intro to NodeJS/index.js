const htpp = require('http');
const { aboutView } = require('./views/aboutView');
const { catalogView } = require('./views/catalogView');
const { defaultView } = require('./views/defaultView'); 
const { homeView } = require('./views/homeView');

const routes = {
    '/': homeView,
    '/about': aboutView,
    '/catalog': catalogView,
}

const server = htpp.createServer((request, response) => {
    console.log('The servers seems to be working');
    console.log('The request is: ' + request.method);
    console.log('Url: ' + request.url);

    const url = new URL(request.url, `http:${request.headers.host}`);
    const handler = routes[url.pathname];

    if (typeof handler == 'function') {
        handler(request, response);
    } else {
        defaultView(request, response);
    }

});

server.listen(3000);