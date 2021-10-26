USE WishList_Senai

INSERT INTO Usuarios(Nome, Email, Senha)
VALUES ('João','joao@email.com', '12345678'),
('Claudia','claudia@hotmail.com','87654321'),
('Ana','ana@email.com.br','14725836'),
('Marcelo','marcelo@gmail.com','97643146');
GO

INSERT INTO ListaDesejos(idUsuario, Descricao)
VALUES (1, 'Carro novo'),(2, 'Apartamento na praia'),
(3, 'Viajar para Australia'),(4, 'PS5')
GO