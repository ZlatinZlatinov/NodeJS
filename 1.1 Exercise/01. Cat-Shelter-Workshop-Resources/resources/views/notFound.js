const { changeViews } = require('./home/indexHtml');

function defaultView(req, res) {
    const defaultView = `<h1>404 Not Found</h1>`;
    res.write(changeViews(defaultView, 'Not Found'));
    res.statusCode = 404;
    res.end();
} 

module.exports = {
    defaultView
}