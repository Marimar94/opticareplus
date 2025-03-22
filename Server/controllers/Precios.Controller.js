import { db } from "../db/connection.js";

// Obtener todos los precios
export const getPrecios = async (req, res) => {
    try {
        const query = `
            SELECT p.idPrecio, p.idHistorialMaterial, m.nombre AS material, 
                   p.idTratamiento, t.nombre AS tratamiento, 
                   p.serie, p.esfera, p.cilindro, 
                   p.combinada, p.precio
            FROM Precios p
            JOIN Historial_Material m ON p.idHistorialMaterial = m.idHistorialMaterial
            JOIN Tratamientos t ON p.idTratamiento = t.idTratamiento
        `;

        const [rows] = await db.query(query);

        if (rows.length > 0) {
            res.json({ message: "Precios obtenidos correctamente", data: rows });
        } else {
            res.status(404).json({ message: "No se encontraron precios" });
        }
    } catch (error) {
        console.error("Error al obtener precios:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

// Crear un nuevo precio
export const createPrecios = async (req, res) => {
    try {
        const {
            idHistorialMaterial,
            idTratamiento,
            serie,
            esfera,
            cilindro,
            combinada,
            precio
        } = req.body;

        // Validar campos obligatorios
        if (!idHistorialMaterial || !idTratamiento || !precio) {
            return res.status(400).json({ 
                message: "Los campos obligatorios son: idHistorialMaterial, idTratamiento, precio" 
            });
        }

        const [result] = await db.query(
            `INSERT INTO Precios (
                idHistorialMaterial, idTratamiento, serie,
                esfera, cilindro, combinada,
                precio
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                idHistorialMaterial, idTratamiento, serie,
                esfera, cilindro, combinada,
                precio
            ]
        );

        res.status(201).json({
            message: "Precio creado correctamente",
            idPrecio: result.insertId
        });
    } catch (error) {
        console.error("Error al crear precio:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

// Actualizar un precio existente
export const updatePrecios = async (req, res) => {
    try {
        const { idPrecio } = req.params;
        const {
            idHistorialMaterial,
            idTratamiento,
            serie,
            esfera,
            cilindro,
            combinada,
            precio
        } = req.body;

        // Verificar si el precio existe
        const [exists] = await db.query("SELECT 1 FROM Precios WHERE idPrecio = ?", [idPrecio]);

        if (!exists.length) {
            return res.status(404).json({ message: "El precio no existe" });
        }

        // Actualizar el precio
        const [result] = await db.query(
            `UPDATE Precios SET
                idHistorialMaterial = ?, idTratamiento = ?, serie = ?, esfera = ?,
                cilindro = ?, combinada = ?, precio = ?
            WHERE idPrecio = ?`,
            [
                idHistorialMaterial, idTratamiento, serie, esfera,
                cilindro, combinada, precio,
                idPrecio
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "No se pudo actualizar el precio" });
        }

        res.status(200).json({
            message: "Precio actualizado correctamente",
            idPrecio
        });
    } catch (error) {
        console.error("Error al actualizar precio:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

// Eliminar un precio
export const deletePrecios = async (req, res) => {
    try {
        const { idPrecio } = req.params;

        // Verificar si el precio existe
        const [precio] = await db.query("SELECT 1 FROM Precios WHERE idPrecio = ?", [idPrecio]);

        if (!precio.length) {
            return res.status(404).json({ message: "Precio no encontrado" });
        }

        // Eliminar el precio
        const [result] = await db.query("DELETE FROM Precios WHERE idPrecio = ?", [idPrecio]);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: "Precio eliminado correctamente" });
        } else {
            res.status(400).json({ message: "No se pudo eliminar el precio" });
        }
    } catch (error) {
        console.error("Error al eliminar precio:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};