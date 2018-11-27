use burger_db;

CREATE TABLE burger (
    burger_id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY(burger_id)
);
