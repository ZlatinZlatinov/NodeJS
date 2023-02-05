const server = require('express')();
const session = require('express-session'); // probably wont use it

//const server = express();

require('./config/express')(server); 
require('./config/routes')(server);



// server.use(session({
//     secret: 'my-secret-key',
//     resave: 'false',
//     /*saveUnitialized: true,*/
//     cookie: { secure: false }
// }));

// server.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1>');
// })

// server.get('/setSession', (req, res) => {
//     req.session.message = 'Hello';
//     res.end('Session set');
// });

// server.get('/readSession', (req, res) => {
//     res.json(req.session); // returns the session in json format
// });



server.listen(3000, () => {
    console.log('The server is now listening on port 3000...');
});
