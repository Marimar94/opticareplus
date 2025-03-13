import axios from 'axios';

// URL base de la API
const BASE_URL = "http://localhost:3000";

// Obtener todos los registros de Historial_TipoLente
export const getHistorial_TipoLente = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Historial_TipoLente`);
    return response.data.data; // Retorna los datos de Historial_TipoLente
  } catch (error) {
    console.error("Error al obtener el historial de tipos de lente:", error.response?.data || error.message);
    throw new Error('Error al obtener el historial de tipos de lente');
  }
};

// Crear un nuevo registro en Historial_TipoLente
export const createHistorial_TipoLente = async (nombre) => {
  console.log("Llegando a createHistorial_TipoLente con:", { nombre });  
  try {
    await axios.post(`${BASE_URL}/Historial_TipoLente/create`, { nombre });
  } catch (error) {
    console.error("Error al registrar el historial de tipo de lente:", error.response?.data || error.message);
    throw new Error('Error al registrar el historial de tipo de lente');
  }
};

// Actualizar un registro existente en Historial_TipoLente
export const updateHistorial_TipoLente = async (idHistorialTipoLente, nombre) => {
  try {
    await axios.put(`${BASE_URL}/Historial_TipoLente/update/${idHistorialTipoLente}`, { nombre });
  } catch (error) {
    console.error("Error al actualizar el historial de tipo de lente:", error.response?.data || error.message);
    throw new Error('Error al actualizar el historial de tipo de lente');
  }
};

// Eliminar un registro en Historial_TipoLente
export const deleteHistorial_TipoLente = async (idHistorialTipoLente) => {
  try {
    await axios.delete(`${BASE_URL}/Historial_TipoLente/delete/${idHistorialTipoLente}`);
  } catch (error) {
    console.error("Error al eliminar el historial de tipo de lente:", error.response?.data || error.message);
    throw new Error('Error al eliminar el historial de tipo de lente');
  }
};



