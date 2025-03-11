import { db } from "../db/connection.js";
export const getHistorialClinico = async (req, res) => {
    try {
      const query = `
      SELECT hc.*, 
      p.nombre AS NombrePaciente,
      i.modelo AS modelo
      FROM HistorialClinico hc
      LEFT JOIN Paciente p ON hc.idPaciente = p.idPaciente
      LEFT JOIN Inventario i ON hc.idInventario = i.idInventario
      `;
      const [rows] = await db.query(query);
      if (rows.length > 0) {
        res.json({ message: "Historial obtenido correctamente", data: rows });
      } else {
        res.status(404).json({ message: "No se encontró Historial" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Algo salió mal" });
    }
  };

  



  