-- The most used SQL read statement is the statement SELECT.
-- It gives us the opportunity to select data from the database. The data returned is stored in a result table, called the result-set.

-- We have our table and our values
CREATE TABLE products (
	id INT NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
)

INSERT INTo products (id, name,price) VALUES(1, "Pen", 1,20)
INSERT INTo products (id, name) VALUES(1, "Rubber")

-- Let's say we want to return everything from the table.
SELECT * FROM products
-- Return particular columns
SELECT name,price FROM products
-- Return a specific row with WHERE statement.
SELECT * FROM products WHERE id=1

-- DIFFERENT OPERATORS FOR THE WHERE STATEMENT 
/*
Operator	Description	Example
    =	          Equal	
    >	       Greater than	
    <	        Less than	
    >=	    Greater than or equal	
    <=	    Less than or equal	
    <>	     Not equal. Note: In some versions of SQL this operator may be written as !=	
  BETWEEN	        Between a certain range	
   LIKE	        Search for a pattern	
    IN	    To specify multiple possible values for a column
 */










