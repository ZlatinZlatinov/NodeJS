const { connectDB } = require('./config/connectToDatabase');


start()

async function start() {
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);

    await connectDB();

    app.listen(3000, () => { console.log('Listening on port 3000...'); })
}