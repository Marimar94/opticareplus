import { db } from "../db/connection.js";

// Obtener todos los tipos de lentes
export const getHistorial_TipoLente = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Historial_TipoLente");
        if (rows.length > 0) {
        res.json({ message: "Tipos de lentes obtenidos correctamente", data: rows });
        } else {
        res.status(404).json({ message: "No se encontraron Tipos de lentes" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal", error });
    }
    };


// Crear un nuevo tipo de lente
export const createHistorial_TipoLente = async (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: "El nombre es requerido" });
    }

    try {
        const [result] = await db.query(
        "INSERT INTO Historial_TipoLente (nombre) VALUES (?)",
        [nombre]
        );

        res.status(201).json({
        message: "Tipo de lente creado correctamente",
        data: { idHistorialTipoLente: result.insertId, nombre }
        });
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal", error });
    }
    };


// Actualizar un tipo de lente existente
export const updateHistorial_TipoLente = async (req, res) => {
    const { idHistorialTipoLente } = req.params; // Mantener idHistorialTipoLente en lugar de usar otro nombre
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: "El nombre es requerido" });
    }

    try {
        const [result] = await db.query(
        "UPDATE Historial_TipoLente SET nombre = ? WHERE idHistorialTipoLente = ?",
        [nombre, idHistorialTipoLente] // Usamos idHistorialTipoLente aquí
        );

        if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Tipo de lente no encontrado" });
        }

        res.json({ message: "Tipo de lente actualizado correctamente", data: { idHistorialTipoLente, nombre } });
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal", error });
    }
    };

// Eliminar un tipo de lente existente
export const deleteHistorial_TipoLente = async (req, res) => {
    const { idHistorialTipoLente } = req.params; // Mantener idHistorialTipoLente aquí también

    try {
        const [result] = await db.query(
        "DELETE FROM Historial_TipoLente WHERE idHistorialTipoLente = ?",
        [idHistorialTipoLente]
        );

        if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Tipo de lente no encontrado" });
        }

        res.json({ message: "Tipo de lente eliminado correctamente", id: idHistorialTipoLente });
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal", error });
    }
    };