CREATE DATABASE MundoVerde;
USE MundoVerde;

CREATE TABLE Produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(60) NOT NULL,
    categoria INT NOT NULL,
    preco FLOAT NOT NULL,
    quantidade INT NOT NULL,
    url VARCHAR(255)
);

INSERT INTO Produtos values (1, 'Granola com castanhas 1kg', 0, 40.18, 6, 'cereias.png');
INSERT INTO Produto values (2, 'Whey protein 907g',          1, 379.39, 10, 'suplementos.png');
INSERT INTO Produtos values (3, 'Alho em pó 59g',            2, 5.18, 15, 'tempero.png');

SELECT * FROM Produtos; 