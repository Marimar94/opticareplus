import { db } from "../db/connection.js";

// Obtener todos los materiales k
export const getHistorial_Material = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Historial_Material");
    if (rows.length > 0) {
      res.json({ message: "Materiales obtenidos correctamente", data: rows });
    } else {
      res.status(404).json({ message: "No se encontraron Materiales" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal", error });
  }
};

// Crear un nuevo material
export const createHistorial_Material = async (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: "El nombre es requerido" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO Historial_Material (nombre) VALUES (?)",
      [nombre]
    );

    res.status(201).json({
      message: "Material creado correctamente",
      data: { idHistorialMaterial: result.insertId, nombre }
    });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal", error });
  }
};

// Actualizar un material existente
export const updateHistorial_Material = async (req, res) => {
  const { idHistorialMaterial } = req.params; // Mantener idHistorialMaterial en lugar de usar otro nombre
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: "El nombre es requerido" });
  }

  try {
    const [result] = await db.query(
      "UPDATE Historial_Material SET nombre = ? WHERE idHistorialMaterial = ?",
      [nombre, idHistorialMaterial] // Usamos idHistorialMaterial aquí
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Material no encontrado" });
    }

    res.json({ message: "Material actualizado correctamente", data: { idHistorialMaterial, nombre } });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal", error });
  }
};

// Eliminar un material existente
export const deleteHistorial_Material = async (req, res) => {
  const { idHistorialMaterial } = req.params; // Mantener idHistorialMaterial aquí también

  try {
    const [result] = await db.query(
      "DELETE FROM Historial_Material WHERE idHistorialMaterial = ?",
      [idHistorialMaterial] // Usamos idHistorialMaterial aquí
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Material no encontrado" });
    }

    res.json({ message: "Material eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal", error });
  }
};
