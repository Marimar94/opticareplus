import axios from 'axios';

// URL base de la API
const BASE_URL = "http://localhost:3000";

// Obtener todas los periodos
export const getHistorial_Material = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Historial_Material`);
    return response.data.data; // Retorna los datos de los periodos
  } catch (error) {
    console.error("Error al obtener los materiales:", error.response?.data || error.message);
    throw new Error('Error al obtener los materiales');
  }
};

// Crear un nuevo periodo
export const createHistorial_Material = async (nombre) => {
  console.log("Llegando a js", {nombre });  
  try {
    await axios.post(`${BASE_URL}/Historial_Material/create`, {nombre});
  } catch (error) {
    console.error("Error al registrar el material:", error.response?.data || error.message);
    throw new Error('Error al registrar el material');
  }
};

// Actualizar un periodo existente
export const updateHistorial_Material = async (idHistorialMaterial, nombre) => {
  try {
    await axios.put(`${BASE_URL}/Historial_Material/update/${idHistorialMaterial}`, {nombre});
  } catch (error) {
    console.error("Error al actualizar el material:", error.response?.data || error.message);
    throw new Error('Error al actualizar el material');
  }
};

// Eliminar un periodo
export const deleteHistorial_Material = async (idHistorialMaterial) => {
  try {
    await axios.delete(`${BASE_URL}/Historial_Material/delete/${idHistorialMaterial}`);
  } catch (error) {
    console.error("Error al eliminar el material:", error.response?.data || error.message);
    throw new Error('Error al eliminar el material');
  }
};
