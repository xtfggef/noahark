DROP TABLE user IF EXISTS;

CREATE TABLE `prettylife`.`user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nick` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `avatar` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `openid` VARCHAR(45) NULL,
  `gender` VARCHAR(10) NULL,
  `address` VARCHAR(100) NULL,
  `labels` VARCHAR(200) NULL,
  `status` INT NOT NULL,
  `gmt_created` DATETIME NOT NULL,
  `gmt_modified` DATETIME NOT NULL,
  PRIMARY KEY (`id`));
);

CREATE TABLE `prettylife`.`module` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `gmt_created` DATETIME NULL,
  `gmt_modified` DATETIME NULL,
  PRIMARY KEY (`id`));

