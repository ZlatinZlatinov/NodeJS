const connectDB = require('./config/connectToDatabase');

const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, async () => {
    await connectDB(); 
    console.log(`Listening on port ${config.port}! lay low...`);
}); 
// seems a lot more clean now xdd