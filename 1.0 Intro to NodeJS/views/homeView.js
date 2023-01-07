const { changeViews } = require("./htmlViews");

function homeView(req, res) {
    const homeView = `<h1>Home Page</h1`;
    res.write(changeViews(homeView, 'Homepage'));
    res.end();
} 

module.exports  = {
    homeView
}