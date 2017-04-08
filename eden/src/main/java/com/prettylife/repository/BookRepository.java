package com.prettylife.repository;

import java.util.List;

import com.prettylife.model.entity.Book;

/**
 * @author 二青
 */
public interface BookRepository {

    Book selectBookById(Long id);

    List<Book> selectBooksByAuthor(String author);

    List<Book> selectBooksByLowPriceAndHighPrice(Double lowPrice, Double highPrice);

    List<Book> selectAllBooks();

    List<Book> selectBooksByPage(Integer offset, Integer perPage);

    Integer selectCount();

    Integer insertBook(Book book);

    Integer updateBookOnNameById(Book book);

    Integer deleteBookById(Long id);

}
