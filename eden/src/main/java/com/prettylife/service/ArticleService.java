package com.prettylife.service;

import java.util.List;
import java.util.Optional;

import com.prettylife.model.entity.Article;

/**
 * @author 二青
 */
public interface ArticleService {

    Optional<Article> getArticleById(Long id);

    List<Article> getArticlesByAuthor(String author);

    List<Article> getArticlesByPage(Integer page, Integer perPage);

    List<String> getAllArticleNames();

    Integer getTotalPage(Integer perPage);

    boolean saveArticle(Article article);

    boolean modifyArticleOnNameById(Article article);

    boolean deleteArticleById(Long id);

}
