
var http = require("http"); //http 请求

function request(path,callback){
    var options = {
        hostname: 'm.haoshiqi.net',
        port: 80, //端口号 https默认端口 443， http默认的端口号是80
        path: path,
        method: 'GET'
    };

    var req = http.request(options,function(res){

        var json = "";
        console.log( res.statusCode);

        res.on("data",function(chunk){
            json+=chunk;
        })

        res.on("end",function(){
            callback(json)
        })
    })

    req.on("error",function(){

    })

    req.end();
}

module.exports = request;