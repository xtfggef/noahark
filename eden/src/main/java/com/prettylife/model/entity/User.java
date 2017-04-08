package com.prettylife.model.entity;

import java.io.Serializable;

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
public class User implements Serializable {

    private static final long serialVersionUID = 7698862379923111158L;

    private Long id;
    private String username;
    private String password;

}
