
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

        res.send(result)

    })
});


//searchtag="+encodeURIComponent(req.query.searchKey)+"%26backLevel%3D-2%26channel_id%3Dh5&searchTag="+encodeURIComponent(req.query.searchKey)+"&q="+encodeURIComponent(req.query.searchKey)+"&needPagination=1&pageNum="+req.query.index+"&pageLimit=20"
//categoryname%3D"+encodeURIComponent(req.query.searchKey)+"%26categoryid%3D"+req.query. ID+" %26channel_id%3Dh5 &categoryId="+req.query. ID+" &category="+req,query.name"
//"categoryname=速食调味                                                                                        &categoryid=3      &channel_id=h5   &categoryId=3  &category=速食调味"
//
//categoryname%3D%E7%BD%90%E5%A4%B4%E9%80%9F%E9%A3%9F%26categoryid%3D15%26channel_id%3Dh5&categoryId=15&category=%E7%BD%90%E5%A4%B4%E9%80%9F%E9%A3%9F&needPagination=1&pageNum=1&pageLimit=20
//categoryname%3D%E9%80%9F%E9%A3%9F%E8%B0%83%E5%91%B3%26categoryid%3D3%26channel_id%3Dh5&categoryId=3&category=%E9%80%9F%E9%A3%9F%E8%B0%83%E5%91%B3
//
//"categoryname=罐头速食 &categoryid=15 &channel_id=h5&categoryId=15 &category=罐头速食"


//---- 搜索页 ---热门搜索的请求----------
router.get('/hotsearched', function(req, res, next) {
    console.log(req.query+"1111122222222222222111")
    //console.log(encodeURIComponent(req.query.searchKey)) ;
             ///product/itemssearch?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag="+encodeURIComponent(req.query.searchKey)+"%26backLevel%3D-2%26channel_id%3Dh5&searchTag="+encodeURIComponent(req.query.searchKey)+"&q="+encodeURIComponent(req.query.searchKey)+"&needPagination=1&pageNum="+req.query.index+"&pageLimit=20"
    spider("/product/itemssearch?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag%3D"+encodeURIComponent(req.query.hotKey)+"%26backLevel%3D-2%26channel_id%3Dh5&searchTag="+encodeURIComponent(req.query.hotKey)+"&q="+encodeURIComponent(req.query.hotKey)+"&needPagination=1&pageNum=1&pageLimit=20",function(result){
    		                                                                                                                                                   //searchtag=提拉米苏&backLevel=-2&channel_id=h5&searchTag=提拉米苏&q=提拉米苏&"
        console.log(result+"11111")

        res.send(result)

    })
});


module.exports = router;
