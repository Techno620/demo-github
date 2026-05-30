-- init.sql
USE college_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    course VARCHAR(50) NOT NULL,
    year INT NOT NULL
);

INSERT INTO students (name, course, year) VALUES 
('Aarav Sharma', 'B.Tech CSE', 3),
('Priya Singh', 'B.Tech Mechanical', 2),
('Rohan Gupta', 'B.Tech Civil', 4);