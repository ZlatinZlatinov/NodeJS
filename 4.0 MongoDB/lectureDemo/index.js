

const server = require('express')();
require('./config/requireExpress')(server);
require('./config/routes')(server);

server.listen(3000, () => {
    console.log('The server is now listening on port 3000...');
});