const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    authorName: {
        type: String,
        required: true,
        minLength: 4
    },
    title: {
        type: String,
        required: true,
        minLength: 4
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
});

const Article = model('Article', articleSchema);

module.exports = Article;