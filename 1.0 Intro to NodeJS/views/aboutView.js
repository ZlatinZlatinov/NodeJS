const { changeViews } = require("./htmlViews");

function aboutView(req, res) {
    const aboutView = `<h1>About us</h1 <p>We are here!</p>`;
    res.write(changeViews(aboutView, 'About'));
    res.end();
} 

module.exports = {
    aboutView
}