-- The UPDATE statement is used to modify the existing records in a table. The
-- We have our table and we want to update the price on the second row.
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
)

INSERT INTO products (id, name,price) VALUES(1, "Pen", 1,20)
INSERT INTO products (id, name) VALUES(1, "Rubber")

UPDATE products SET price = 0.80 WHERE id=2 --We update what we want BUT we want to target the specific thing we want to UPDATE or else everything with the same name will change.
-- Update the table by adding one more column. ALTER TABLE command
ALTER TABLE products ADD stock int
UPDATE products SET stock = 32 WHERE id=1
UPDATE products SET stock = 18 WHERE id=2