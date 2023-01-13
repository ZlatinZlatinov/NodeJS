const http = require('http');

const router = require('./changeRoutes');
const { addBreed } = require('./views/addBreed');
const { addCat, createCat } = require('./views/addCat');
const { showHomeView } = require('./views/home/homeView');
const { sendCSS } = require('./views/home/sendCss');
const { defaultView } = require('./views/notFound');

router.get('/', showHomeView);
router.get('/site.css', sendCSS);
router.get('/cats/addBreed', addBreed);
router.get('/cats/addCat', addCat);
router.post('/cats/addCat', createCat);

router.get('default', defaultView);


const server = http.createServer(router.match);

server.listen(3000);
console.log('The server is now running on port 3000...');