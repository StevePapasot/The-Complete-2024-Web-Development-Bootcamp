--Create Table and Insert Data
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
)

INSERT INTo products (id, name,price) VALUES(1, "Pen", 1,20)
INSERT INTo products (id, name) VALUES(1, "Rubber")