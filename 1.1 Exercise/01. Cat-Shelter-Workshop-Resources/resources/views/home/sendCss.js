const {myStyle} = require('../../content/styles/style'); 
const {changeViews} = require('./indexHtml');

function sendCSS(request, response){
    response.writeHead(200, {
        'Content-Type' : 'text/css'
    }); 
    response.write(myStyle); 
    response.end();
} 

module.exports = {
    sendCSS
}