const { changeViews } = require("./htmlViews");

function catalogView(req, res) {
    const catalogView = `<h1>Catalog</h1> <h3>List of Items:</h3>`;
    res.write(changeViews(catalogView, 'Catalog'));
    res.end();
} 

module.exports = {
    catalogView
}