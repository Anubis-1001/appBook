const express = require("express");
const router = express.Router();

router.get('/', function(req, res){
    res.render("view");
});



module.exports = {home: router, about: 34};