CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   rID int NOT NULL AUTO_INCREMENT,
--   roomname varchar(20),
--   PRIMARY KEY (rID)
-- );


CREATE TABLE users (
  uID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (uID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  mID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  textMSG varchar(100),
  roomname varchar(20),
  uID int NOT NULL,
  PRIMARY KEY (mID),
  FOREIGN KEY (uID) REFERENCES users(uID) 
);





/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

