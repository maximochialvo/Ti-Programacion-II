CREATE DATABASE IF NOT EXISTS proyecto_catalogo;
USE proyecto_catalogo;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    usuario VARCHAR(50),
    contrasena VARCHAR(50) NOT NULL,
    birthDate DATE,
    remember_token VARCHAR(255),
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
(1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgnW7I-duvxlziaV7asW0JaOUF-_DNBkVmg&s', 'Chevrolet Onix', 'Auto compacto moderno y eficiente.'),
(1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHSdEJadvtDqJSNWKbZiwtRstZXE5JwzgFg&s', 'Toyota Hilux', 'Camioneta robusta ideal para trabajo pesado.'),
(2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksKXx6XFbAcamfGqA5hXYNVtb1Xkr5Ri2mg&s', 'Ford Ranger', 'Pick-up de gran potencia y tecnología.'),
(2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmYeonymIcZMegNpptqkkVvX7y_v8GaJHdg&s', 'Renault Sandero RS', 'Versión deportiva del hatchback Sandero.'),
(3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqXrX-iDk8j7GWmiLbzociG9ZELjdZBe9dA&s', 'Volkswagen Amarok', 'Camioneta potente y cómoda.'),
(3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcp_6cVVi8H-cjguN3g8KH_8DE0MUv1xuMg&s', 'Fiat Cronos', 'Sedán compacto, el más vendido en Argentina.'),
(4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwB4ycF5IY3rH2JshQ8QRLnu9I57iTEs50A&s', 'Peugeot 208', 'Auto urbano con gran diseño europeo.'),
(4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDbgWPepZEX8CDA8mAi2evRRnhQeRKG6tjA&s', 'Honda Civic Type R', 'Hatchback deportivo de alto rendimiento.'),
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqdEWLWW8MyBB4lfeCPPmx3DiVhQfXiJVDg&s', 'Kia Sportage', 'SUV elegante con buen rendimiento.'),
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcutsJgqhXOMWqUUUVMiXPmVhKyb8uIm4qQ&s', 'Tesla Cybertruck', 'Camioneta eléctrica futurista.');


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
