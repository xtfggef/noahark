package com.prettylife.service;

import java.util.List;
import java.util.Optional;

import com.prettylife.model.entity.Book;

/**
 * @author 二青
 */
public interface BookService {

    Optional<Book> getBookById(Long id);

    List<Book> getBooksByAuthor(String author);

    List<Book> getBooksByPage(Integer page, Integer perPage);

    List<String> getAllBookNames();

    Integer getTotalPage(Integer perPage);

    boolean saveBook(Book book);

    boolean modifyBookOnNameById(Book book);

    boolean deleteBookById(Long id);

}
