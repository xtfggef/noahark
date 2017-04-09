# noahark 一个拯救世界的项目。

## 新增文章
http请求方式: POST  
请求URL：/articles?token=ACCESS_TOKEN

调用示例
<pre>
{
    "categoryId":CATEGORY_ID,
    "categoryName":CATEGORY_NAME,
    "title":TITLE,
    "content":CONTENT,
    "labels":LABELS,
    "author":AUTHOR
}
</pre>  
参数说明  

|参数|是否必填|说明|  
|---|---|---|  
|1|2|3|  

返回说明
<pre>
{
  "id":ARTICLE_ID
}
</pre>