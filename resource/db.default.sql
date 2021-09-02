set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- table `slideshow`
create table `slideshow` (
  `key` tinyint(11) not null,
  `address` varchar(24) not null,
  `title` varchar(30) not null,
  `description` varchar(120) default null,
  `body` text not null,
  `id` varchar(24) not null,
  `password` varchar(100) not null,
  `regdate` datetime not null,
  `update` datetime not null,
  `thumbnail` varchar(100) default null
) engine=InnoDB default charset=utf8mb4;

alter table `slideshow` add primary key (`key`), add unique key `address` (`address`), add unique key `id` (`id`);
alter table `slideshow` modify `key` tinyint(11) not null auto_increment;
