const { gql } = require('apollo-server');

const typeDefs = gql`
    interface Writer {
        id: ID
        name: String
    }

    type Author implements Writer {
        id: ID
        name: String
        quote: Quote
    }

    input AuthorInput {
        name: String
        quote: QuoteInput
        
    }

    type Quote {
        about: String
        text: String
    }

    input QuoteInput {
        about: String
        text: String
    }

    type Blogger implements Writer {
        id: ID
        name: String
        blog: Blog
    }

    input BloggerInput {
        name: String
        blog: BlogInput
    }

    input BlogInput {
        title: String
        content: String
    }

    type Blog {
        title: String
        content: String
    }

    type Query {
        getAuthorById(id: ID): Author
        getBloggerById(id: ID): Blogger
        getSorted(author: AuthorInput): [Author]
        getAllAuthors: [Author]
        getAllBloggers: [Blogger]
        writers: [Writer]
    }

    type Mutation {
        addAuthor(author: AuthorInput): Author
        addBlogger(blogger: BloggerInput): Blogger
        updateAuthor(author: AuthorInput): Author
        deleteAuthor(author: AuthorInput): String
    }
`

module.exports = typeDefs;