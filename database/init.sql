create database if not exists `ufaz_hackathon` default character set utf8 collate utf8_general_ci;

create table if not exists `ufaz_hackathon`.`users` (
  `id` int(11) not null auto_increment,
  `name` varchar(255) not null,
  `password` varchar(255) not null,
  primary key (`id`)
) engine=InnoDB default charset=utf8;


insert into `ufaz_hackathon`.`users` (`id`, `name`, `password`) values (1, 'admin', 'admin');
insert into `ufaz_hackathon`.`users` (`id`, `name`, `password`) values (2, 'user', 'user');