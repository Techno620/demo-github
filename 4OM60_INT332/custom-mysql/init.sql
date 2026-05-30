USE companydb;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(100),
    salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary) VALUES
('Prince Kumar', 'Developer', 55000),
('Rahul Sharma', 'DevOps', 62000),
('Anjali Singh', 'HR', 45000),
('Amit Verma', 'Testing', 50000),
('Sneha Kapoor', 'Manager', 75000);