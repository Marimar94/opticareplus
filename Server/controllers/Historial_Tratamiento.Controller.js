import { db } from "../db/connection.js";

// Obtener todos los historiales de tratamiento
export const getHistoriales_Tratamiento = async (req, res) => {
    try {
        const query = `
        SELECT ht.*,
        t.nombre AS tratamiento, 
        hc.antecedentes_familiares AS nombreTratamiento,
        CONCAT(p.nombre, ' ', p.apellido) AS nombrePaciente
        FROM Historial_Tratamiento ht
        JOIN Tratamientos t ON ht.idTratamiento = t.idTratamiento
        JOIN HistorialClinico hc ON ht.idHistorialClinico = hc.idHistorialClinico
        LEFT JOIN Paciente p ON hc.idPaciente = p.idPaciente
        `;

        const [rows] = await db.query(query);

        if (rows.length > 0) {
          res.json({ message: "Historiales Tratamientos obtenidos correctamente", data: rows });
        } else {
          res.status(404).json({ message: "No se encontraron historiales tratamenros" });
        }
      } catch (error) {
        console.error("Error al obtener historiales tratamientos:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
      }
    };

/** -------------------- Crear un nuevo historial de tratamiento -------------------- */
export const createHistorial_Tratamiento = async (req, res) => {
    try {
      const { idTratamiento, idHistorialClinico } = req.body;
  
      // Validación de datos requeridos
      if (!idTratamiento || !idHistorialClinico) {
        return res.status(400).json({
          message: "Los campos obligatorios son: idTratamiento, idHistorialClinico",
        });
      }
  
      const [result] = await db.query(
        `INSERT INTO Historial_Tratamiento (idTratamiento, idHistorialClinico)
         VALUES (?, ?)`,
        [idTratamiento, idHistorialClinico]
      );
  
      res.status(201).json({
        message: "Historial de tratamiento creado correctamente",
        idHistorialTratamiento: result.insertId,
      });
    } catch (error) {
      console.error("Error al crear el historial de tratamiento:", error);
      res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
  };
  
  /** -------------------- Actualizar un historial de tratamiento -------------------- */
  export const updateHistorial_Tratamiento = async (req, res) => {
    try {
      const { idHistorialTratamiento } = req.params;
      const { idTratamiento, idHistorialClinico } = req.body;
  
      // Validación de existencia
      const [exists] = await db.query(
        "SELECT 1 FROM Historial_Tratamiento WHERE idHistorialTratamiento = ?",
        [idHistorialTratamiento]
      );
  
      if (exists.length === 0) {
        return res.status(404).json({
          message: `No existe el historial de tratamiento con id ${idHistorialTratamiento}`,
        });
      }
  
      const [result] = await db.query(
        `UPDATE Historial_Tratamiento
         SET idTratamiento = ?, idHistorialClinico = ?
         WHERE idHistorialTratamiento = ?`,
        [idTratamiento, idHistorialClinico, idHistorialTratamiento]
      );
  
      if (result.affectedRows > 0) {
        res.json({
          message: "Historial de tratamiento actualizado correctamente",
        });
      } else {
        res.status(400).json({
          message: "No se pudo actualizar el historial de tratamiento",
        });
      }
    } catch (error) {
      console.error("Error al actualizar el historial de tratamiento:", error);
      res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
  };
  
  /** -------------------- Eliminar un historial de tratamiento -------------------- */
  export const deleteHistorial_Tratamiento = async (req, res) => {
    try {
      const { idHistorialTratamiento } = req.params;
  
      // Validación de existencia
      const [exists] = await db.query(
        "SELECT 1 FROM Historial_Tratamiento WHERE idHistorialTratamiento = ?",
        [idHistorialTratamiento]
      );
  
      if (exists.length === 0) {
        return res.status(404).json({
          message: `No existe el historial de tratamiento con id ${idHistorialTratamiento}`,
        });
      }
  
      const [result] = await db.query(
        "DELETE FROM Historial_Tratamiento WHERE idHistorialTratamiento = ?",
        [idHistorialTratamiento]
      );
  
      if (result.affectedRows > 0) {
        res.json({
          message: "Historial de tratamiento eliminado correctamente",
        });
      } else {
        res.status(400).json({
          message: "No se pudo eliminar el historial de tratamiento",
        });
      }
    } catch (error) {
      console.error("Error al eliminar el historial de tratamiento:", error);
      res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
  };