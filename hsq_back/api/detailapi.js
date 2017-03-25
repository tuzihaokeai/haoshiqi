var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/restaurant', function(req, res, next) {
   console.log(req.query) ;
    spider("/shopping/restaurant/"+req.query.goodsID+"?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=38.91279&longitude=121.65665",function(result){
        res.send(result)
    })
    })
router.get('/menu', function(req, res, next) {
    console.log(req.query) ;
    spider("/shopping/v2/menu?restaurant_id="+req.query.goodsID,function(result){
        res.send(result)
    })
})


router.get('/tags', function(req, res, next) {
    console.log(req.query) ;
    spider("/ugc/v2/restaurants/"+req.query.goodsID+"/ratings/tags",function(result){
        res.send(result)
    })
})

router.get('/rating', function(req, res, next) {
    console.log(req.query) ;
    spider("/ugc/v2/restaurants/"+req.query.goodsID+"/ratings?has_content=true&offset=0&limit=10",function(result){
        res.send(result)
    })
})

module.exports = router;
