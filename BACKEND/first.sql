CREATE DATABASE college;
create database instagram;

use instagram;

create table user(
id int,
age int,
name varchar(30) not null,
email varchar(50) unique,
followers int default 0,
following int,
constraint check (age>=18),
primary key(id)
);

create table posts (
id int,
content varchar(100),
user_id int,
foreign key (user_id) references user(id)
);