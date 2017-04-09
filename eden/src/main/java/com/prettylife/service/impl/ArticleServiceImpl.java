package com.prettylife.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.prettylife.model.entity.Article;
import com.prettylife.repository.ArticleRepository;
import com.prettylife.service.ArticleService;
import com.prettylife.util.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author 二青
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Optional<Article> getArticleById(Long id) {
        return Optional.ofNullable(articleRepository.selectArticleById(id));
    }

    @Override
    public List<Article> getArticlesByAuthor(String author) {
        return articleRepository.selectArticlesByAuthor(author);
    }

    @Override
    public List<Article> getArticlesByPage(Integer page, Integer perPage) {
        Integer offset = PageUtil.calculateOffset(page, perPage);
        return articleRepository.selectArticlesByPage(offset, perPage);
    }

    @Override
    public List<String> getAllArticleNames() {
        return articleRepository
                .selectAllArticles()
                .stream()
                .map(Article::getTitle)
                .collect(Collectors.toList());
    }

    @Override
    public Integer getTotalPage(Integer perPage) {
        return PageUtil.calculateTotalPage(articleRepository.selectCount(), perPage);
    }

    @Override
    @Transactional
    public boolean saveArticle(Article article) {
        return articleRepository.insertArticle(article) > 0;
    }

    @Override
    @Transactional
    public boolean modifyArticleOnNameById(Article article) {
        return articleRepository.updateArticleOnNameById(article) > 0;
    }

    @Override
    @Transactional
    public boolean deleteArticleById(Long id) {
        return articleRepository.deleteArticleById(id) > 0;
    }
}
