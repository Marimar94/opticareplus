CREATE DATABASE OpticaDB;    
USE OpticaDB;

CREATE TABLE Rol (
    idRol INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    idRol INT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (idRol) REFERENCES Rol(idRol)
);

CREATE TABLE Paciente (
    idPaciente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    sexo ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,
    ocupacion VARCHAR(100),
    direccion VARCHAR(255),
    localidad varchar(255), 
    estado varchar(255),
    telefono varchar (15), 
    observaciones TEXT,
    fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Paciente (nombre, apellido, edad, sexo, ocupacion, direccion, localidad, estado, telefono, observaciones) VALUES
('Juan', 'Pérez', 28, 'Masculino', 'Ingeniero', 'Calle Falsa 123', 'Ciudad de México', 'CDMX', 5551234567, 'Paciente con miopía, requiere lentes de -2.50 dioptrías.'),
('María', 'Gómez', 34, 'Femenino', 'Doctora', 'Avenida Siempreviva 456', 'Guadalajara', 'Jalisco', 5552345678, 'Paciente con astigmatismo, necesita lentes tóricos.'),
('Carlos', 'López', 45, 'Masculino', 'Arquitecto', 'Boulevard de los Sueños Rotos 789', 'Monterrey', 'Nuevo León', 5553456789, 'Presbicia detectada, requiere lentes bifocales.'),
('Ana', 'Martínez', 29, 'Femenino', 'Diseñadora Gráfica', 'Calle Luna 101', 'Puebla', 'Puebla', 5554567890, 'Paciente con ojo seco, recomendar lágrimas artificiales.'),
('Luis', 'Rodríguez', 50, 'Masculino', 'Abogado', 'Avenida Libertad 202', 'Tijuana', 'Baja California', 5555678901, 'Catarata incipiente en ojo izquierdo, seguimiento requerido.'),
('Sofía', 'Hernández', 22, 'Femenino', 'Estudiante', 'Calle Sol 303', 'Cancún', 'Quintana Roo', 5556789012, 'Miopía progresiva, revisión en 6 meses.'),
('Miguel', 'Díaz', 38, 'Masculino', 'Contador', 'Avenida Reforma 404', 'Mérida', 'Yucatán', 5557890123, 'Paciente con hipermetropía, lentes de +1.75 dioptrías.'),
('Lucía', 'Moreno', 27, 'Femenino', 'Enfermera', 'Calle Estrella 505', 'Oaxaca', 'Oaxaca', 5558901234, 'Conjuntivitis alérgica, tratamiento con antihistamínicos.'),
('Jorge', 'García', 33, 'Masculino', 'Programador', 'Avenida Juárez 606', 'Querétaro', 'Querétaro', 5559012345, 'Paciente con visión borrosa, posible queratocono.'),
('Fernanda', 'Sánchez', 40, 'Femenino', 'Psicóloga', 'Calle Arcoiris 707', 'San Luis Potosí', 'San Luis Potosí', 5550123456, 'Astigmatismo y miopía combinados, lentes complejos.'),
('Roberto', 'Ramírez', 55, 'Masculino', 'Empresario', 'Avenida Hidalgo 808', 'Toluca', 'Estado de México', 5551234509, 'Glaucoma detectado, tratamiento con gotas.'),
('Patricia', 'Flores', 31, 'Femenino', 'Maestra', 'Calle Primavera 909', 'Veracruz', 'Veracruz', 5552345601, 'Paciente con diplopía, requiere evaluación neurológica.'),
('Daniel', 'Cruz', 26, 'Masculino', 'Fotógrafo', 'Avenida Revolución 1010', 'Chihuahua', 'Chihuahua', 5553456702, 'Sensibilidad a la luz, recomendar lentes fotocromáticos.'),
('Gabriela', 'Ortíz', 42, 'Femenino', 'Dentista', 'Calle Roble 1111', 'Culiacán', 'Sinaloa', 5554567803, 'Paciente con degeneración macular, seguimiento anual.'),
('Ricardo', 'Mendoza', 47, 'Masculino', 'Ingeniero Civil', 'Avenida Universidad 1212', 'Hermosillo', 'Sonora', 5555678904, 'Paciente con visión doble, posible estrabismo.');

CREATE TABLE Inventario (
    idInventario INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    numeroColor VARCHAR(50),
    material VARCHAR(100),
    cantidad INT NOT NULL,
    exhibicion ENUM('Dama', 'Caballero', 'Niño') NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,
    estatus ENUM('Disponible', 'Vendido') NOT NULL,
    precioVenta DECIMAL(10,2)
);

INSERT INTO Inventario (marca, modelo, color, numeroColor, material, cantidad, exhibicion, precio, fecha, estatus, precioVenta) VALUES
('Ray-Ban', 'Aviator', 'Dorado', 'G15', 'Metal', 15, 'Caballero', 150.00, '2023-10-01', 'Disponible', NULL),
('Oakley', 'Holbrook', 'Negro', 'OO9102', 'Acetato', 20, 'Dama', 180.00, '2023-09-25', 'Disponible', NULL),
('Prada', 'PR 16WS', 'Plateado', '1AB06A', 'Metal', 8, 'Dama', 250.00, '2023-10-05', 'Vendido', 240.00),
('Gucci', 'GG0337O', 'Negro', '002', 'Acetato', 12, 'Caballero', 300.00, '2023-09-30', 'Disponible', NULL),
('Tom Ford', 'FT5401', 'Marrón', 'TF03', 'Metal', 10, 'Caballero', 280.00, '2023-10-02', 'Disponible', NULL),
('Michael Kors', 'MK5001', 'Tortuga', 'MK12', 'Acetato', 18, 'Dama', 120.00, '2023-09-28', 'Disponible', NULL),
('Dior', 'Sostellaire2', 'Azul', 'DI01', 'Metal', 7, 'Dama', 320.00, '2023-10-03', 'Vendido', 310.00),
('Versace', 'VE4385', 'Rojo', 'VE01', 'Acetato', 25, 'Caballero', 270.00, '2023-09-27', 'Disponible', NULL),
('Chanel', 'CH5346', 'Negro', 'CH01', 'Metal', 9, 'Dama', 350.00, '2023-10-04', 'Disponible', NULL),
('Burberry', 'BE4297', 'Beige', 'BU01', 'Acetato', 14, 'Caballero', 220.00, '2023-09-29', 'Disponible', NULL),
('Armani Exchange', 'AX3001', 'Plateado', 'AX01', 'Metal', 5, 'Caballero', 190.00, '2023-10-06', 'Vendido', 180.00),
('Fendi', 'FF0175', 'Dorado', 'FE01', 'Metal', 6, 'Dama', 400.00, '2023-10-07', 'Disponible', NULL),
('Dolce & Gabbana', 'DG2201', 'Negro', 'DG01', 'Acetato', 3, 'Caballero', 380.00, '2023-10-08', 'Disponible', NULL),
('Miu Miu', 'MU04TS', 'Rosa', 'MI01', 'Acetato', 30, 'Dama', 260.00, '2023-10-09', 'Disponible', NULL),
('Polaroid', 'PLD 4059/S', 'Azul', 'PO01', 'Plástico', 11, 'Niño', 80.00, '2023-10-10', 'Disponible', NULL),
('Vogue', 'VO4061', 'Verde', 'VO01', 'Acetato', 4, 'Dama', 90.00, '2023-10-11', 'Vendido', 85.00),
('Carrera', 'CA6001', 'Negro', 'CA01', 'Acetato', 8, 'Caballero', 200.00, '2023-10-12', 'Disponible', NULL),
('Persol', 'PO3225S', 'Marrón', 'PE01', 'Acetato', 10, 'Caballero', 240.00, '2023-10-13', 'Disponible', NULL),
('Hugo Boss', 'BOSS 0806', 'Gris', 'HB01', 'Metal', 12, 'Caballero', 210.00, '2023-10-14', 'Disponible', NULL),
('Coach', 'HC4001', 'Tortuga', 'CO01', 'Acetato', 7, 'Dama', 170.00, '2023-10-15', 'Disponible', NULL);


CREATE TABLE HistorialClinico (
    idHistorialClinico INT PRIMARY KEY AUTO_INCREMENT,
    idPaciente INT NOT NULL,
    idInventario INT,
    rx_esfera_od VARCHAR(10),
    rx_cilindro_od VARCHAR(10),
    rx_eje_od VARCHAR(10),
    rx_esfera_oi VARCHAR(10),
    rx_cilindro_oi VARCHAR(10),
    rx_eje_oi VARCHAR(10),
    add_lente VARCHAR(10),
    ao VARCHAR(10),
    dnp VARCHAR(10),
    antecedentes_salud TEXT,
    antecedentes_familiares TEXT,
    medicamentos TEXT,
    dosis TEXT,
    cirugias TEXT,
    fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente),
    FOREIGN KEY (idInventario) REFERENCES Inventario(idInventario)
);

CREATE TABLE Historial_TipoLente (
    idHistorialTipoLente INT PRIMARY KEY AUTO_INCREMENT,
    idHistorialClinico INT NOT NULL,
    nombre ENUM('Monofocal', 'Flat Top', 'Progresivo', 'Younger') NOT NULL,
    FOREIGN KEY (idHistorialClinico) REFERENCES HistorialClinico(idHistorialClinico) ON DELETE CASCADE
);

CREATE TABLE Historial_Tratamiento (
    idHistorialTratamiento INT PRIMARY KEY AUTO_INCREMENT,
    idHistorialClinico INT NOT NULL,
    nombre ENUM('Blanco', 'Fotocromático', 'Transitions', 'AR', 'Crizal Rock', 'Xperio', 'Antiblue', 'Otro') NOT NULL,
    FOREIGN KEY (idHistorialClinico) REFERENCES HistorialClinico(idHistorialClinico) ON DELETE CASCADE
);

CREATE TABLE Historial_Material (
    idHistorialMaterial INT PRIMARY KEY AUTO_INCREMENT,
    idHistorialClinico INT NOT NULL,
    nombre ENUM('CR-39', 'Policarbonato', 'Multifocal', 'HI Index', 'Otro') NOT NULL,
    FOREIGN KEY (idHistorialClinico) REFERENCES HistorialClinico(idHistorialClinico) ON DELETE CASCADE
);

CREATE TABLE Optometrista (
    idOptometrista INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    noCedula VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE Receta (
    idReceta INT PRIMARY KEY AUTO_INCREMENT,
    idPaciente INT NOT NULL,
    idHistorialClinico INT NOT NULL,
    idOptometrista INT NOT NULL,
    fechaEmision TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    noExamen VARCHAR(50) NOT NULL,
    diagnostico ENUM('Miopía', 'Hipermetropía', 'Astigmatismo', 'Presbicia') NOT NULL,
    observacion TEXT,
    FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente) ON DELETE CASCADE,
    FOREIGN KEY (idHistorialClinico) REFERENCES HistorialClinico(idHistorialClinico) ON DELETE CASCADE,
    FOREIGN KEY (idOptometrista) REFERENCES Optometrista(idOptometrista) ON DELETE CASCADE
);

CREATE TABLE Cotizacion (
    idCotizacion INT PRIMARY KEY AUTO_INCREMENT,
    idPaciente INT NOT NULL,
    idOptometrista INT NOT NULL,
    idReceta INT NOT NULL,
    idHistorialTipoLente INT NOT NULL,
    fechaEmision TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tratamiento TEXT,
    costoTratamiento DECIMAL(10,2) NOT NULL,
    iva DECIMAL(10,2) NOT NULL,
    totalConIVA DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente) ON DELETE CASCADE,
    FOREIGN KEY (idOptometrista) REFERENCES Optometrista(idOptometrista) ON DELETE CASCADE,
    FOREIGN KEY (idReceta) REFERENCES Receta(idReceta) ON DELETE CASCADE,
    FOREIGN KEY (idHistorialTipoLente) REFERENCES Historial_TipoLente(idHistorialTipoLente) ON DELETE CASCADE
);

CREATE TABLE PreciosLentes (
    idPrecio INT PRIMARY KEY AUTO_INCREMENT,
    tipoLente ENUM('Monofocal', 'Bifocal', 'Progresivo', 'Solar', 'Otro') NOT NULL,
    material ENUM('CR-39', 'Policarbonato', 'HI Index', 'Otro') NOT NULL,
    serie VARCHAR(50),
    esfera VARCHAR(50),
    cilindro VARCHAR(50),
    combinada VARCHAR(50),
    tratamiento ENUM('AR', 'FOTO AR/W', 'ANTI-BLUE', 'FOTO ANTIBLUE', 'SETO', 'Otro') NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE PreciosLentesContacto (
    idPrecioContacto INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(100) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    esfera VARCHAR(50),
    precio DECIMAL(10,2) NOT NULL
);

-- Poblar la tabla PreciosLentes
INSERT INTO PreciosLentes (tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio) VALUES
('Monofocal', 'CR-39', 'A12345', '-1.00', '-0.50', '-1.50', 'AR', 800.00),
('Bifocal', 'Policarbonato', 'B23456', '+2.00', '-1.25', '+0.75', 'FOTO AR/W', 1200.00),
('Progresivo', 'HI Index', 'C34567', '-2.50', '-0.75', '-3.25', 'ANTI-BLUE', 2500.00),
('Solar', 'CR-39', 'D45678', '-1.75', '-1.00', '-2.75', 'FOTO ANTIBLUE', 1500.00),
('Monofocal', 'Policarbonato', 'E56789', '+0.50', '0.00', '+0.50', 'SETO', 700.00),
('Bifocal', 'HI Index', 'F67890', '-3.00', '-2.00', '-5.00', 'AR', 1800.00),
('Progresivo', 'CR-39', 'G78901', '-4.00', '-1.50', '-5.50', 'FOTO AR/W', 2700.00),
('Solar', 'Policarbonato', 'H89012', '+1.50', '-0.25', '+1.25', 'ANTI-BLUE', 1600.00),
('Monofocal', 'HI Index', 'I90123', '-2.00', '-0.75', '-2.75', 'FOTO ANTIBLUE', 1300.00),
('Otro', 'Otro', 'J01234', '-1.25', '-1.00', '-2.25', 'Otro', 900.00);

-- Poblar la tabla PreciosLentesContacto
INSERT INTO PreciosLentesContacto (marca, duracion, esfera, precio) VALUES
('Acuvue', 'Diaria', '-1.00', 250.00),
('Bausch & Lomb', 'Mensual', '-2.50', 500.00),
('Air Optix', 'Quincenal', '-1.75', 400.00),
('CooperVision', 'Anual', '-3.00', 1200.00),
('SofLens', 'Mensual', '-0.50', 450.00),
('Biofinity', 'Mensual', '-4.00', 550.00),
('Clariti', 'Diaria', '-2.25', 270.00),
('Dailies', 'Diaria', '+1.50', 260.00),
('Ultra', 'Mensual', '-1.25', 520.00),
('Otro', 'Otro', '-2.00', 300.00);