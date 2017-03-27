
var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/category', function(req, res, next) {
    console.log(req.query) ;
    spider("/category/categorylist?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23category%3Fchannel_id%3Dh5",function(result){
        res.send(result)

    })
});







module.exports = router;
