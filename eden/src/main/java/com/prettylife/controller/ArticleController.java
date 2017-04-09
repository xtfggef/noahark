package com.prettylife.controller;

import java.net.URI;

import com.prettylife.constant.PageConstant;
import com.prettylife.constant.ResourceNameConstant;
import com.prettylife.exception.ResourceNotFoundException;
import com.prettylife.model.dto.PaginatedResult;
import com.prettylife.model.entity.Article;
import com.prettylife.service.ArticleService;
import com.prettylife.util.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * @author 二青
 */
@RestController
@RequestMapping("/articles")
public class ArticleController {

    private ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<?> getArticles(@RequestParam(value = "page", required = false) String pageString,
                                      @RequestParam(value = "per_page", required = false) String perPageString) {
        // Parse request parameters
        int page = PageUtil.parsePage(pageString, PageConstant.PAGE);
        int perPage = PageUtil.parsePerPage(perPageString, PageConstant.PER_PAGE);

        return ResponseEntity
                .ok(new PaginatedResult()
                        .setData(articleService.getArticlesByPage(page, perPage))
                        .setCurrentPage(page)
                        .setTotalPage(articleService.getTotalPage(perPage)));
    }

    @GetMapping("/{articleId}")
    public ResponseEntity<?> getArticleById(@PathVariable Long articleId) {
        return articleService
                .getArticleById(articleId)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResourceNotFoundException()
                        .setResourceName(ResourceNameConstant.ARTICLE)
                        .setId(articleId));
    }

    @PostMapping
    public ResponseEntity<?> postArticle(@RequestBody Article article) {
        articleService.saveArticle(article);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(article.getId())
                .toUri();

        return ResponseEntity
                .created(location)
                .body(article);

    }

    @PutMapping("/{ArticleId}")
    public ResponseEntity<?> putArticle(@PathVariable Long articleId, @RequestBody Article article) {
        assertArticleExist(articleId);

        articleService.modifyArticleOnNameById(article.setId(articleId));

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(article);
    }

    @DeleteMapping("/{ArticleId}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long articleId) {
        assertArticleExist(articleId);

        articleService.deleteArticleById(articleId);

        return ResponseEntity
                .noContent()
                .build();
    }

    /********************************** HELPER METHOD **********************************/
    private void assertArticleExist(Long articleId) {
        articleService
                .getArticleById(articleId)
                .orElseThrow(() -> new ResourceNotFoundException()
                        .setResourceName(ResourceNameConstant.ARTICLE)
                        .setId(articleId));
    }

}
