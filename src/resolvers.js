const { Writer, Blogger, Author } = require('./models/Authors');

const resolvers = {
    Writer: {
        __resolveType(writer, context, info) {
            if(writer.quote) {
                return 'Author';
            }

            if(writer.blog) {
                return 'Blogger';
            }

            return null;
        }
    },

    Query: {
        async getAllAuthors () {
            return await Author.find();
        },
        async getAllBloggers () {
            return await Blogger.find();
        },
        async getAuthorById (parent, { id }, context, info) {
            return await Author.findById(id);
        },
        async getBloggerById (parent, { id }, context, info) {
            return await Blogger.findById(id);
        },
        async getSorted() {
            return await Author.find().sort();
        },
        async writers() {
            return await Writer.find();
        }
     },
    Mutation: {
        async addAuthor (parent, args, context, info) {
            const {name, quote: {about, text}} = args.author;
            const author = new Author({ name, quote: {about, text} });
            await author.save();
            return author;
        },

        async addBlogger (parent, args, context, info) {
            const { name, blog: {title, content}} = args.blogger;
            const blogger = new Blogger({ name, blog: {title, content}});
            await blogger.save();
            return blogger;
        },

        async updateAuthor (parent, args, context, info) {
            const {name, quote: { about, text }} = args.author;
            const updates = {};
            if (quote.about !== undefined) {
                updates.quote.about = quote.about;
            }
            if (quote.text !== undefined) {
                updates.quote.text = quote.text;
            }
          
          const quote = await Author.findByIdAndUpdate(id, { updates }, { new: true });
          return author;
        }
    }
};

module.exports = resolvers