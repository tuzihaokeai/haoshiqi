var express = require('express');
var router = express.Router();
var spider = require("./spider");

/* GET home page. */
router.get('/categorylist', function(req, res, next) {
   console.log(req) ;
    spider("/product/iteminfo?token=124dd1ce3de28aba5bb1c9a054b220b3&device=pc&uuid=10887631&channel=h5&swidth=1366&sheight=768&zoneId="+req.query.id+"&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23detail%3Fsid%3D12960%26channel_id%3Dh5&username=155****4323&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490409043&user_id=10887631&isRegister=true&needBind=2&inviteCode=A621CFXB&userId=10887631&skuId=12960",function(result){
        res.send(result)
    })
    //spider("/category/categorylist?device=android&channel=h5&swidth=360&sheight=640&zoneId="+req.query.id+"&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23category%3Fchannel_id%3Dh5",function(result){
    //    res.send(result)
    //})
    })
//这是商品详情的请求
router.get('/goodsdetail', function(req, res, next) {
    console.log(req.query) ;
    spider("/product/iteminfo?token=124dd1ce3de28aba5bb1c9a054b220b3&device=pc&uuid=10887631&channel=h5&swidth=1366&sheight=768&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23detail%3Fsid%3D12772%26channel_id%3Dh5&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490409043&user_id=10887631&isRegister=true&needBind=2&inviteCode=A621CFXB&userId=10887631&skuId="+req.query.goodsID,function(result){
        res.send(result)

    })
});

module.exports = router;
