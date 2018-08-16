CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_name varchar(255) NOT NULL,
	watched BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);