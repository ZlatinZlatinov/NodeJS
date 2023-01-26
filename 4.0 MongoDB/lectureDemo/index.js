

const server = require('express')();
const connectDB = require('./config/connectToDatabase');
require('./config/requireExpress')(server);
require('./config/routes')(server);



server.listen(3000, async () => {
    await connectDB();
    console.log('The server is now listening on port 3000...');
});