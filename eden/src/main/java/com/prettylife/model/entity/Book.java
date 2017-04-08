package com.prettylife.model.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * @author 二青
 */
@Accessors(chain = true)
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Book implements Serializable {

    private static final long serialVersionUID = 8604990093149376515L;

    private Long id;
    private String name;
    private String author;
    private Double price;
    private String topic;
    private Date publishDate;

    private Long bookStoreId;

}
