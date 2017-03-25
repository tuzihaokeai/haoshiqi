/**
 * Created by Administrator on 2017/3/25 0025.
 */
var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/weather', function(req, res, next) {
    spider("/bgs/weather/current?latitude=31.23037&longitude=121.473701",function(result){
        res.send(result)
    })
});

router.get('/hotsearch', function(req, res, next) {
    spider("/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701",function(result){
        res.send(result)
    })
});

router.get('/index_entry', function(req, res, next) {
    spider("/v2/index_entry?geohash=wtw3sjq6n6um&group_type=1&flags[]=F",function(result){
        res.send(result)
    })
});

router.get('/restaurants', function(req, res, next) {
    spider("/shopping/restaurants?latitude=31.23037&longitude=121.473701&offset=0&limit=20&extras[]=activities&terminal=h5",function(result){
        res.send(result)
    })
});

router.get('/location', function(req, res, next) {
    spider("/v2/pois/wtw3sjq6n6um",function(result){
        res.send(result)
    })
});

module.exports = router;
