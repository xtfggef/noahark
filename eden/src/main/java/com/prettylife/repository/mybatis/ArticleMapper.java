package com.prettylife.repository.mybatis;

import java.util.List;

import com.prettylife.model.entity.Article;
import com.prettylife.repository.ArticleRepository;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author 二青
 */
@Mapper
public interface ArticleMapper extends ArticleRepository {

    @Override
    List<Article> selectArticlesByLowPriceAndHighPrice(@Param("lowPrice") Double lowPrice,
                                                       @Param("highPrice") Double highPrice);

    @Override
    List<Article> selectArticlesByPage(@Param("offset") Integer offset, @Param("perPage") Integer perPage);

}
