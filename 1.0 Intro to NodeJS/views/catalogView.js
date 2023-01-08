const { changeViews, items } = require("./htmlViews");

function catalogView(req, res) {
    const catalogView = `
    <h1>Catalog</h1> 
    <h3>List of Items:</h3>
    <ul>
    ${items.map((i) => `<li>${i.name} - ${i.color}</li>`).join('\n')}
    </ul>`;
    res.write(changeViews(catalogView, 'Catalog'));
    res.end();
} 

module.exports = {
    catalogView
}