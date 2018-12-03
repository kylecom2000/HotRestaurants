const express = require('express');
const router = express.Router();

const {add,tables} = require('../data/tables.js');


router.get("/reserve", function(req, res){
    res.send("Get: API/Reserve");
});
router.post('/reserve', function(req, res){
    
    add(req.body);
    console.log(tables);
    res.send("Post: API/Reserve");

});

module.exports = (router);