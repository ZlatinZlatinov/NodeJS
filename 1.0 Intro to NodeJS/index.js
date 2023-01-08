const htpp = require('http');
const { aboutView } = require('./views/aboutView');
const { catalogView } = require('./views/catalogView');
const { defaultView } = require('./views/defaultView'); 
const { homeView } = require('./views/homeView');
const router = require('./router');

router.register('/', homeView); 
router.register('/catalog', catalogView); 
router.register('/about', aboutView);  
router.register('default', defaultView);

const server = htpp.createServer(router.match);

server.listen(3000); 
console.log('The server seems to work just fine');