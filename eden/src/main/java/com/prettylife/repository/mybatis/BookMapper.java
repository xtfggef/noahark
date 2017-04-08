package com.prettylife.repository.mybatis;

import java.util.List;

import com.prettylife.model.entity.Book;
import com.prettylife.repository.BookRepository;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author 二青
 */
@Mapper
public interface BookMapper extends BookRepository {

    @Override
    List<Book> selectBooksByLowPriceAndHighPrice(@Param("lowPrice") Double lowPrice,
                                                 @Param("highPrice") Double highPrice);

    @Override
    List<Book> selectBooksByPage(@Param("offset") Integer offset, @Param("perPage") Integer perPage);

}
