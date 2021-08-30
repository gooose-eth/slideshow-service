set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- table `slideshow`
create table `slideshow` (
  `key` tinyint(11) not null,
  `address` varchar(24) default null,
  `title` varchar(30) default null,
  `description` varchar(120) default null,
  `body` text,
  `id` varchar(24) default null,
  `password` varchar(100) default null,
  `regdate` datetime default null,
  `update` datetime default null
) engine=InnoDB default charset=utf8mb4;

alter table `slideshow` add primary key (`key`), add unique key `address` (`address`), add unique key `id` (`id`);
alter table `slideshow` modify `key` tinyint(11) not null auto_increment;
