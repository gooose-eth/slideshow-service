set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- table `slideshow`
create table `slideshow` (
  `key` tinyint(11) not null,
  `address` varchar(24) not null comment 'Watch ID',
  `title` varchar(30) not null,
  `description` varchar(120) default null,
  `slideshow` text not null,
  `id` varchar(24) not null comment 'Slideshow ID',
  `password` varchar(100) not null comment 'Slideshow password',
  `regdate` datetime not null,
  `update` datetime not null,
  `thumbnail` varchar(100) default null comment 'Thumbnail image address'
) engine=InnoDB default charset=utf8mb4;

alter table `slideshow` add primary key (`key`), add unique key `address` (`address`), add unique key `id` (`id`);
alter table `slideshow` modify `key` tinyint(11) not null auto_increment;
