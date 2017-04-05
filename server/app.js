// 引入模块
var restify = require('restify');
var mongojs = require("mongojs");

// 服务器定义
var server = restify.createServer({
    name : "noahark"
});
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// 数据库连接信息
var connection_string = '127.0.0.1:27017/noahark';
var db = mongojs(connection_string, ['noahark']);
var user = db.collection("user");
var article = db.collection("article");
var module = db.collection("module");
var category = db.collection("category");
var articleItem = db.collection("articleitem");

// 首页数据
var index_path = '/'
server.get({path : index_path , version : '0.0.1'} , findIndexDataMock);

// 类目页数据
// var category_path = '/category'
// server.get({path : PATH +'/:catId' , version : '0.0.1'} , findCategoryData);

// 首页数据处理
function findIndexDataMock(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    var data = {
        "modules": [
            {
                "id": "mo01",
                "name": "养生专区",
                "category": [
                    {
                        "id": "cid01",
                        "name": "膳食",
                        "image": "http://qty83k.creatby.com/materials/origin/c9d02bea043b4223ebce53dff1f7e4ab_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid02",
                        "name": "调息",
                        "image": "http://qty83k.creatby.com/materials/origin/df80c40c531659e206df0ed0c1df9447_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid03",
                        "name": "运动",
                        "image": "http://qty83k.creatby.com/materials/origin/08338391421e09eb953abaa6fc2491d5_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid04",
                        "name": "心理",
                        "image": "http://qty83k.creatby.com/materials/origin/fda268308a114bbe1dd06efed0107b2d_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid05",
                        "name": "太极",
                        "image": "http://qty83k.creatby.com/materials/origin/aa5d7911f55886e3f57834326ae43cb7_origin.png",
                        "url": "../articlelist/articlelist"
                    }
                ]
            },
            {
                "id": "mo02",
                "name": "特殊人群",
                "category": [
                    {
                        "id": "cid01",
                        "name": "老人",
                        "image": "http://qty83k.creatby.com/materials/origin/8450abbdfc0884a819b0936c8cf9ad23_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid02",
                        "name": "孕妇",
                        "image": "http://qty83k.creatby.com/materials/origin/16c59c2be24e7d7a6c2ddd9bf49e5803_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid03",
                        "name": "婴儿",
                        "image": "http://qty83k.creatby.com/materials/origin/d20e5fce53df6abd3c5c4b1750768ca7_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid04",
                        "name": "学生",
                        "image": "http://qty83k.creatby.com/materials/origin/6402b967b9e92ae246a8c3ea424d4cbe_origin.png",
                        "url": "../articlelist/articlelist"
                    },
                    {
                        "id": "cid05",
                        "name": "残疾人",
                        "image": "http://qty83k.creatby.com/materials/origin/dc1d3326b41734a3cbe4114dc7abc492_origin.png",
                        "url": "../articlelist/articlelist"
                    }
                ]
            }
        ]
    };
    res.send(200, data)
}

function findIndexData(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    jobs.find().limit(20).sort({postedOn : -1} , function(err , success){
        console.log('[findIndexData success] ' + success);
        console.log('[Response error] ' + err);
        if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
    });
}


// 服务器信息设置
var ip_addr = '127.0.0.1';
var port    =  '8000';

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});

// server.get({path : PATH +'/:jobId' , version : '0.0.1'} , findJob);
// server.post({path : PATH , version: '0.0.1'} ,postNewJob);
// server.del({path : PATH +'/:jobId' , version: '0.0.1'} ,deleteJob);
//
// function findAllJobs(req, res , next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     jobs.find().limit(20).sort({postedOn : -1} , function(err , success){
//         console.log('Response success '+success);
//         console.log('Response error '+err);
//         if(success){
//             res.send(200 , success);
//             return next();
//         }else{
//             return next(err);
//         }
//     });
//
// }
//
// function findJob(req, res , next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     jobs.findOne({_id:mongojs.ObjectId(req.params.jobId)} , function(err , success){
//         console.log('Response success '+success);
//         console.log('Response error '+err);
//         if(success){
//             res.send(200 , success);
//             return next();
//         }
//         return next(err);
//     })
// }
//
// function postNewJob(req , res , next){
//     var job = {};
//     job.title = req.params.title;
//     job.description = req.params.description;
//     job.location = req.params.location;
//     job.postedOn = new Date();
//
//     res.setHeader('Access-Control-Allow-Origin','*');
//
//     jobs.save(job , function(err , success){
//         console.log('Response success '+success);
//         console.log('Response error '+err);
//         if(success){
//             res.send(201 , job);
//             return next();
//         }else{
//             return next(err);
//         }
//     });
// }
//
// function deleteJob(req , res , next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     jobs.remove({_id:mongojs.ObjectId(req.params.jobId)} , function(err , success){
//         console.log('Response success '+success);
//         console.log('Response error '+err);
//         if(success){
//             res.send(204);
//             return next();
//         } else{
//             return next(err);
//         }
//     })
//
// }