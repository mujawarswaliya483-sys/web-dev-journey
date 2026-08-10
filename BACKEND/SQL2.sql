create database if not exists student;
use student;

CREATE TABLE student(
roll_no int primary key,
name varchar(50),
city varchar(30),
marks float
);
select *from student;

insert into student
(roll_no,name,city,marks)
values
(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"casey","Pune",94),
(112,"duke","Pune",80);

select * from student;

-- select city
-- from student
-- group by city;

select city, max(marks)
from student
group by city;

-- average of the class
select avg(marks)
from student;

-- add a new colunm grade

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student 
SET grade = "O"
WHERE marks >= 80;

UPDATE student 
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student 
SET grade = "B"
WHERE marks >= 60 AND marks < 70;
