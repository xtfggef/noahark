/**
 * 服务入口，通过rest api提供服务
 *
 * @author 二青
 */

var restify = require('restify');
var article = require('./lib/article');
// var user = require('./lib/user');
// var category = require('./lib/category');


// 服务器定义
var server = restify.createServer({
    name: "noahark"
});
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// 首页数据
// var index_path = '/'
// server.get({path: index_path, version: '0.0.1'}, findIndexDataMock);

// 文章相关
var article_path = '/article'
server.post({path: article_path, version: '0.0.1'}, postArticleAction);
server.get({path: article_path, version: '0.0.1'}, findAllAction);
server.get({path: article_path + '/:id', version: '0.0.1'}, findByIdAction);
server.del({path: article_path + '/:jobId', version: '0.0.1'}, deleteAction);

/**
 * 新增文章
 */
function postArticleAction(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var result = article.postNew(req.params)
    res.send(200, result);
    return next();
}

/**
 * 获取所有文章
 */
function findAllAction(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var result = article.findAll(req.params)

        res.send(200, result);
        return next();
}

/**
 * 通过ID查询文章
 */
function findByIdAction(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var result = article.findById(req.params.id)
    if (result) {
        res.send(200, result);
        return next();
    } else {
        return next(err);
    }
}

/**
 * 通过ID删除文章
 */
function deleteAction(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var result = article.deleteById(req.params.id)
    if (result) {
        res.send(200, result);
        return next();
    } else {
        return next(err);
    }
}

// 服务器信息设置
var ip_addr = '127.0.0.1';
var port = '8000';

server.listen(port, ip_addr, function () {
    console.log('%s listening at %s ', server.name, server.url);
});