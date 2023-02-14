const express = require('express');
const router = express.Router();
const Author = require('../../model/author');

const bodyParser = require('body-parser');

router.get('/', async (req, res)=>{
    let searchOptions = {};
    if(req.query.authorName !== null && req.query.authorName !==''){
        searchOptions.name = new RegExp(req.query.authorName, 'i');
    }
    try{
        const authors = await Author.find(searchOptions);
        console.log(authors);
        res.render('authors/list', {authors: authors, searchOptions: req.query});
    }
    catch{
        res.redirect("/");
    }
});

router.get('/new', (req, res)=>{
    res.render('authors/new', {author: new Author()});
});


router.post('/', async (req, res)=>{

    const author = new Author({
        name: req.body.name
    });

    try{
        var saved = await author.save();
        res.redirect('authors');
    } catch{
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author'
        });
    }
    /*var saved = await author.save((err, newAuthor)=>{
        if(err){

            res.render('authors/new', {
                author: author,
                errorMessage: 'Error creating author'
            });
        } else {
            res.redirect('authors');
        }
    });*/
    //res.send(`New Author ${req.body.name}`);

});











module.exports = router;