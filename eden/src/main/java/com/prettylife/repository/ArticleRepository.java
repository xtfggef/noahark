package com.prettylife.repository;

import java.util.List;

import com.prettylife.model.entity.Article;

/**
 * @author 二青
 */
public interface ArticleRepository {

    Article selectArticleById(Long id);

    List<Article> selectArticlesByAuthor(String author);

    List<Article> selectArticlesByLowPriceAndHighPrice(Double lowPrice, Double highPrice);

    List<Article> selectAllArticles();

    List<Article> selectArticlesByPage(Integer offset, Integer perPage);

    Integer selectCount();

    Integer insertArticle(Article article);

    Integer updateArticleOnNameById(Article article);

    Integer deleteArticleById(Long id);

}
