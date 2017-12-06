CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(150) NOT NULL,
devoured BOOLEAN DEFAULT FALSE NOT NULL,
stamp TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);
