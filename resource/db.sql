set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- table `slideshow`
create table `slideshow` (
  `key` tinyint(11) not null,
  `address` varchar(30) not null comment 'watch address',
  `title` varchar(120) not null,
  `description` varchar(255) default null,
  `slideshow` longtext not null comment 'slideshow JSON data',
  `password` varchar(120) not null comment 'slideshow password',
  `salt` varchar(120) not null comment 'salt for password',
  `thumbnail` varchar(100) default null comment 'thumbnail image address',
  `public` tinyint(1) default 1 not null comment 'is public item',
  `regdate` datetime not null,
  `update` datetime not null
) engine=InnoDB default charset=utf8mb4;

alter table `slideshow` add primary key (`key`), add unique key `address` (`address`);
alter table `slideshow` modify `key` tinyint(11) not null auto_increment;
