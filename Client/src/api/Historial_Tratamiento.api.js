import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getHistorial_Tratamiento = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Historial_Tratamiento`);
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los historiales tratamiento:", error.response?.data || error.message);
      throw new Error('Error al obtener los historiales tratamiento');
    }
  };


  export const createHistorial_Tratamiento = async (idTratamiento, idHistorialClinico) => {
    console.log("Llegando al create API:", {idTratamiento, idHistorialClinico});

    try {
      await axios.post(`${BASE_URL}/Historial_Tratamiento/create`, {idTratamiento, idHistorialClinico});
    } catch (error) {
      console.error("Error al registrar el historial tratamiento:", error.response?.data || error.message);
      throw new Error('Error al registrar el historial tratamiento');
    }
  };


  export const updateHistorial_Tratamiento = async (idHistorialTratamiento, idTratamiento, idHistorialClinico) => {
    try {
      await axios.put(`${BASE_URL}/Historial_Tratamiento/update/${idHistorialTratamiento}`, {idTratamiento, idHistorialClinico});
    } catch (error) {
      console.error("Error al actualizar el historial tratamiento:", error.response?.data || error.message);
      throw new Error('Error al actualizar el historial tratamiento');
    }
  };
  
  
  export const deleteHistorial_Tratamiento = async (idHistorialTratamiento) => {
    try {
      await axios.delete(`${BASE_URL}/Historial_Tratamiento/delete/${idHistorialTratamiento}`);
    } catch (error) {
      console.error("Error al eliminar el historial tratamiento:", error.response?.data || error.message);
      throw new Error('Error al eliminar el historial tratamiento');
    }
  };