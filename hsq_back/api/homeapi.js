var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/icon', function(req, res, next) {
    spider("/common/index?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23portal%3Fchannel_id%3Dh5",function(result){
        res.send(result)
    })
});



module.exports = router;
