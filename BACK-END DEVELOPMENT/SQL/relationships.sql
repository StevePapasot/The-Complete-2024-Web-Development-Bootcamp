CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
)

INSERT INTO products (id, name,price) VALUES(1, "Pen", 1,20)
INSERT INTO products (id, name) VALUES(1, "Rubber")

CREATE TABLE orders(
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)-- The foreign key is the key that connects different tables.
    FOREIGN KEY (product_id) REFERENCES products(id)
)

INSERT INTO orders VALUES(1, 4362, 2, 1)

-- Join our two tables with Inner Join statement
SELECT orders.order_number, products.id FROM orders INNER JOIN products ON orders.customer_id = products.id






