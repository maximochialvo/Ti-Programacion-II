CREATE DATABASE IF NOT EXISTS proyecto_catalogo;
USE proyecto_catalogo;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    usuario VARCHAR(50),
    contrasena VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL,
    foto_perfil TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME NULL DEFAULT NULL
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    imagen_producto VARCHAR(255),
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME NULL DEFAULT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    texto TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME NULL DEFAULT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


INSERT INTO usuarios (email, usuario, contrasena, fecha_nacimiento, dni, foto_perfil) VALUES
('ljoaquin@udesa.edu.ar', 'jLanusse', 'jLanusse', '1990-01-01', 12345678, 'perfil1.jpg'),
('juan@mail.com',  'Jaaimejuan', 'cac457', '1985-05-10', 23456789, 'perfil2.jpg'),
('lucas@mail.com',  'Pirulito', 'cale454', '1992-07-20', 34567890, 'perfil3.jpg'),
('max@mail.com',  'Juni', 'pipooo124', '2000-12-12', 45678901, 'perfil4.jpg'),
('jaoquin@mail.com',  'joaqui', 'pa12o11', '1995-03-30', 56789012, 'perfil5.jpg');


INSERT INTO productos (usuario_id, imagen_producto, nombre_producto, descripcion) VALUES
(1, 'prod1.jpg', 'Producto 1', 'Descripción del producto 1'),
(1, 'prod2.jpg', 'Producto 2', 'Descripción del producto 2'),
(2, 'prod3.jpg', 'Producto 3', 'Descripción del producto 3'),
(2, 'prod4.jpg', 'Producto 4', 'Descripción del producto 4'),
(3, 'prod5.jpg', 'Producto 5', 'Descripción del producto 5'),
(3, 'prod6.jpg', 'Producto 6', 'Descripción del producto 6'),
(4, 'prod7.jpg', 'Producto 7', 'Descripción del producto 7'),
(4, 'prod8.jpg', 'Producto 8', 'Descripción del producto 8'),
(5, 'prod9.jpg', 'Producto 9', 'Descripción del producto 9'),
(5, 'prod10.jpg', 'Producto 10', 'Descripción del producto 10');


INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(1, 2, 'tremendoo'),
(1, 3, 'Me encantó'),
(1, 4, 'Lo recomiendo'),
(2, 2, 'Excelente'),
(2, 3, 'Funciona bien'),
(2, 5, 'god'),
(3, 1, 'No me gustó '),
(3, 4, 're barato'),
(3, 5, 'Cumple'),
(4, 1, 'Perfecto para lo que necesito'),
(4, 3, 'se rompio'),
(4, 5, 'Muy bueno'),
(5, 1, 'me dejo en banda'),
(5, 2, 'Todo OK'),
(5, 4, 'Me gustó'),
(6, 1, 'auto joya'),
(6, 2, 'cumplio con los 100k'),
(6, 5, 'Buena camioneta'),
(7, 2, 'Muy recomendable'),
(7, 3, 'bestial'),
(7, 5, 'me cagaron'),
(8, 1, 'Perfecto'),
(8, 3, 'Medio pelo'),
(8, 5, 'Buen precio'),
(9, 1, 'Calidad de cuero los asientos'),
(9, 2, 'aboyado'),
(9, 4, 'Muy cómodo'),
(10, 2, 'de uso diario es un lujo'),
(10, 3, '10/10'),
(10, 4, 'Recomendado');
