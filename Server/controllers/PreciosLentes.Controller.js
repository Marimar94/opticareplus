import { db } from "../db/connection.js";

export const getPreciosLentes = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM PreciosLentes");
        if (rows.length > 0) {
            res.json({ message: "Precios de Lentes obtenidos correctamente", data: rows });
        } else {
            res.status(404).json({ message: "No se encontraron datos del Precios de Lentes" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

export const createPreciosLentes = async (req, res) => {
    try {
        const { tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio } = req.body;
        if (!tipoLente || !material || !tratamiento || !precio) {
            return res.status(400).json({ message: "Todos los campos son requeridos: tipoLente, material, tratamiento, precio" });
        }
        const [rows] = await db.query(
            "INSERT INTO PreciosLentes (tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio]
        );
        res.status(201).json({
            message: `PreciosLentes '${tipoLente} ${material}' creado`,
            idPrecio: rows.insertId,
            tipoLente,
            material,
            serie,
            esfera,
            cilindro,
            combinada,
            tratamiento,
            precio,
        });
    } catch (error) {
        console.error("Error al crear Precios Lentes:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

export const updatePreciosLentes = async (req, res) => {
    try {
        const { idPrecio } = req.params;
        const { tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio } = req.body;
        if (!tipoLente || !material || !tratamiento || !precio) {
            return res.status(400).json({ message: "Todos los campos son requeridos: tipoLente, material, tratamiento, precio" });
        }
        const [rows] = await db.query(
            "UPDATE PreciosLentes SET tipoLente = ?, material = ?, serie = ?, esfera = ?, cilindro = ?, combinada = ?, tratamiento = ?, precio = ? WHERE idPrecio = ?",
            [tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio, idPrecio]
        );
        if (rows.affectedRows > 0) {
            res.json({ message: "Precios Lentes actualizado correctamente" });
        } else {
            res.status(404).json({ message: "Precios lentes no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar Precios Lentes:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

export const deletePreciosLentes = async (req, res) => {
    try {
        const { idPrecio } = req.params;
        const [rows] = await db.query("DELETE FROM PreciosLentes WHERE idPrecio = ?", [idPrecio]); // Corregido 'idPrecios' a 'idPrecio'
        if (rows.affectedRows > 0) {
            res.json({ message: "PreciosLentes eliminado correctamente" });
        } else {
            res.status(404).json({ message: "PreciosLentes no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar PreciosLentes:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};
