/**
 * 文章读写模块
 *
 * @author 二青
 * @type {*}
 */
var mongojs = require("mongojs");
// var mongojs = require('promised-mongo');
var connection_string = '127.0.0.1:27017/noahark';
var db = mongojs(connection_string, ['noahark']);
var collect = db.collection("article");

/**
 * 创建新文章
 *
 * @param params
 */
var postNew = function postNew(params) {
    var article = {};
    article.title = params.title;
    article.description = params.description;
    article.location = params.location;
    article.postedOn = new Date();
    collect.save(article, function (err, result) {
        console.log('[article-postNew] result: ' + result.toString());
        console.log('[article-postNew] error: ' + err.toString());
        return result;
    });
}

/**
 * 分页查询所有文章
 *
 * @param req
 * @param res
 */
var findAll = function findAll(params) {
    collect.find().limit(20).sort({postedOn: -1}, function (err, result) {
        console.log('[article-findAll] result: ' + result.toString());
        console.log('[article-findAll] error: ' + err.toString());
        return result;
    });

}

/**
 * 通过ID查找文章
 *
 * @param id
 */
var findById = function findById(id) {
    collect.findOne({_id: mongojs.ObjectId(id)}, function (err, result) {
        console.log('[article-findById] result: ' + result.toString());
        console.log('[article-findById] error: ' + err.toString());
        return result;
    })
}

/**
 * 删除文章
 *
 * @param req
 * @param res
 */
var deleteById = function deleteById(id){
    jobs.remove({_id:mongojs.ObjectId(id)} , function(err , result){
        console.log('[article-deleteById] result: ' + result.toString());
        console.log('[article-deleteById] error: ' + err.toString());
        return result;
    })
}

exports.findAll = findAll;
exports.findById = findById;
exports.postNew = postNew;
exports.deleteById = deleteById;