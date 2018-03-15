Set names UTF8;
DROP DATABASE IF EXISTS seammark;
CREATE DATABASE seammark CHARSET=UTF8;
USE seammark;
CREATE TABLE se_userlist(
                         id INT auto_increment primary key,
			 uname VARCHAR(16) UNIQUE,
			 pwd VARCHAR(16),
			 em VARCHAR(32),
			 phone INT(11) UNIQUE,
			 vname VARCHAR(16),
			 vbirth DATE);