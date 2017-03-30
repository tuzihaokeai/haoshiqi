var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/icon', function(req, res, next) {
    spider("/common/index?device=iphone&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23portal%3Fchannel_id%3Dh5",function(result){
        res.send(result)
    })
});
router.get('/product', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/recommendproducts?token=124dd1ce3de28aba5bb1c9a054b220b3&device=iphone&uuid=10887631&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23portal%3Fchannel_id%3Dh5&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490409043&user_id=10887631&isRegister=true&needBind=2&inviteCode=A621CFXB&userId=10887631&needPagination=1&pageNum="+req.query.num+"&pageLimit=20",function(result){
        res.send(result)

    })
});
router.get('/topiclist', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/topiclist?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23zt_top10%3Fchannel_id%3Dh5",function(result){
        res.send(result)

    })
});
router.get('/topiclist1', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/topiclist?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23zt_top10%3Fchannel_id%3Dh5",function(result){
        res.send(result)

    })
});
router.get('/topiclist2', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/itemssearch?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23list%3Fsearchtag%3D%E8%BF%9B%E5%8F%A3%26channel_id%3Dh5&searchTag=%E8%BF%9B%E5%8F%A3&q=%E8%BF%9B%E5%8F%A3&needPagination=1&pageNum=1&pageLimit=20",function(result){
        res.send(result)

    })
});
router.get('/topiclist3', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/topicskusinfo?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23zt_template%3Ftopic_code%3D572f7cf939c1e6478c64b567f3293bae%26channel_id%3Dh5&topicCode=572f7cf939c1e6478c64b567f3293bae",function(result){
        res.send(result)

    })
});
router.get('/topiclist4', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/topicskusinfo?device=android&channel=h5&swidth=360&sheight=640&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23zt_template%3Ftopic_code%3D585ff9959fa8b613d192de4ff665fa13%26channel_id%3Dh5&topicCode=585ff9959fa8b613d192de4ff665fa13",function(result){
        res.send(result)

    })
});
router.get('/city', function(req, res, next) {
    console.log(req.query) ;
    spider("/nation/provincelist?device=pc&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23city%3Fchannel_id%3Dh5",function(result){
        res.send(result)

    })
});

module.exports = router;
