const Article = require('../models/Article');

async function getListOfArticles() {
    const data = await Article.find({}).lean(); // for security measurements 
    // .lean maha slujebnite poleta suzdadeni v bazata danni ... nsh takova
    // t.e ako ima nqkakvi metodi v/y modela nqma da gi zaredi, kato napr .get('fullName')
    return data;
}

module.exports = {
    getListOfArticles
}