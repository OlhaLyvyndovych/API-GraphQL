const mongoose = require('mongoose');

const WriterSchema = mongoose.Schema({
    name: String
})

const BloggerSchema = mongoose.Schema({
    name: String,
    blog: {
        title: String,
        content: String
    }
})

const AuthorSchema = mongoose.Schema({
    name: String,
    quote: {
        about: String,
        text: String
    }
});

const Writer = mongoose.model('Writer', WriterSchema);
const Blogger = mongoose.model('Blogger', BloggerSchema);
const Author = mongoose.model('Author', AuthorSchema);

module.exports = { Writer, Blogger, Author };
