package com.prettylife.model.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.Accessors;

/**
 * @author 二青
 */
@Accessors(chain = true)
@NoArgsConstructor
@Data
@ToString
public class Article implements Serializable {
    private static final long serialVersionUID = 8604990093149376515L;

    private Long id;
    private Date gmtCreate;
    private Date gmtModified;
    private Long categoryId;
    private String categoryName;
    private String title;
    private String content;
    private String labels;
    private String author;
    private Integer status;
}
