var express = require('express')

var books = [
    {
        title: 'How to Fail at Almost Everything and Still Win Big',
        genre: 'Nonfiction',
        author: 'Scott Adams',
        bookId: 17859574,
        read: false
    },
    {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        genre: 'Programming',
        author: 'Robert C. Martin',
        bookId: 3735293,
        read: false
    },
    {
        title: 'Zero to One: Notes on Startups, or How to Build the Future',
        genre: 'Business',
        author: 'Peter Thiel',
        bookId: 18050143,
        read: false
    },
    {
        title: 'Thinking, Fast and Slow',
        genre: 'Science',
        author: 'Daniel Kahneman',
        bookId: 11468377,
        read: false
    },
    {
        title: 'The Rosie Project',
        genre: 'Novel',
        author: 'Graeme Simsion',
        bookId: 16181775,
        read: false
    },
    {
        title: 'Influence: The Psychology of Persuasion',
        genre: 'Psychology',
        author: 'Robert Cialdini',
        bookId: 28815,
        read: false
    },
    {
        title: 'The Pragmatic Programmer',
        genre: 'Programming',
        author: 'Andrew Hunt, Dave Thomas',
        bookId: 4099,
        read: false
    },
    {
        title: 'Mindset: The New Psychology of Success',
        genre: 'Psychology',
        author: 'Carol Dweck',
        bookId: 40745,
        read: false
    }
];

var routes = function (Book) {
    var adminRouter = express.Router();

    adminRouter.route('/addBooks')
        .get(function (req, res) {

            books.forEach(function (item) {
                var book = new Book(item);
                book.save();
            });

            res.status(201);
            res.send(books);
        });

    return adminRouter;
};

module.exports = routes;
