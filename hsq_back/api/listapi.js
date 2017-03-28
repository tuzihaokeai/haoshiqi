
var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
/*这是分类页的请求*/
router.get('/category', function(req, res, next) {
    console.log(req.query) ;
    spider("/category/categorylist?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23category%3Fchannel_id%3Dh5",function(result){
        res.send(result)

    })
});
/*这是搜索页热门搜索的请求*/
router.get('/hotsearch', function(req, res, next) {
    console.log(req.query) ;
    spider("/common/hotsearchsug?device=pc&uuid=10887631&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23search%3Fchannel_id%3Dh5&username=155****4323&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490409043&user_id=10887631&inviteCode=A621CFXB&userId=10887631",function(result){
        res.send(result)

    })
});
/******  这是搜索框中搜索目标商品的请求·  *******/
router.get('/itemssearch', function(req, res, next) {
    //console.log(req.query.index+"1111122222222222222111")
    console.log(encodeURIComponent(req.query.searchKey)) ;
    spider("/product/itemssearch?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag="+encodeURIComponent(req.query.searchKey)+"%26backLevel%3D-2%26channel_id%3Dh5&searchTag="+encodeURIComponent(req.query.searchKey)+"&q="+encodeURIComponent(req.query.searchKey)+"&needPagination=1&pageNum="+req.query.index+"&pageLimit=20",function(result){
        console.log(result+"11111")
s
        res.send(result)

    })
});



module.exports = router;
