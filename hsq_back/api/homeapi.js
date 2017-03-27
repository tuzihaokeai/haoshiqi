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
    spider("/product/recommendproducts?token=124dd1ce3de28aba5bb1c9a054b220b3&device=iphone&uuid=10887631&channel=h5&swidth=375&sheight=667&zoneId=857&v=2.1.3&terminal=wap&page=http%3A%2F%2Fm.haoshiqi.net%2F%23portal%3Fchannel_id%3Dh5&username=155****4323&avatar=http%3A%2F%2Fimg.haoshiqi.net%2Favatar%2Favatar_default.png%40120w_120h_90Q&birthday=0000-00-00&enabled=1&created_at=1490409043&user_id=10887631&isRegister=true&needBind=2&inviteCode=A621CFXB&userId=10887631&needPagination=1&pageNum=1&pageLimit=20",function(result){
        res.send(result)

    })
});



module.exports = router;
