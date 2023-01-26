const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    authorName: {
        type: String,
        required: true,
        minlength: 4
    },
    title: {
        type: String,
        required: true,
        minlength: 4
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
});

const Article = model('Article', articleSchema);

module.exports = Article;