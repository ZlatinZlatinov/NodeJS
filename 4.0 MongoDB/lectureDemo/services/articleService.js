const Article = require('../models/Article');

async function getListOfArticles() {
    const data = await Article.find({}).lean(); // for security measurements 
    // .lean maha slujebnite poleta suzdadeni v bazata danni ... nsh takova
    return data;
}

module.exports = {
    getListOfArticles
}