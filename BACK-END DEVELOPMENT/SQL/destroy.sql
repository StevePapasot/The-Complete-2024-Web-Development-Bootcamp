-- The DELETE statement is used to delete existing records in a table.
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
)

INSERT INTo products (id, name,price) VALUES(1, "Pen", 1,20)
INSERT INTo products (id, name) VALUES(1, "Rubber")
DELETE FROM products WHERE name="Pen"
