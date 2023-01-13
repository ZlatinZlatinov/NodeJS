const http = require('http'); 

const router = require('./changeRoutes');  
const {showHomeView} = require('./views/home/homeView'); 
const { sendCSS } = require('./views/home/sendCss');
const { defaultView } = require('./views/notFound');

router.register('/', showHomeView);  
router.register('/site.css', sendCSS);

router.register('default', defaultView);


const server = http.createServer(router.match); 

server.listen(3000); 
console.log('The server is now running on port 3000...');