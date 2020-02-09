CREATE DATABASE nightwatchDb;

GO
USE nightwatchDb
CREATE TABLE people(
    person_id INT PRIMARY KEY IDENTITY,
    first_name VARCHAR(200),
    last_name VARCHAR(200)
);

GO

INSERT INTO 
    dbo.people(first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jane', 'Doe'),
    ('Really', 'Mello');
    
GO