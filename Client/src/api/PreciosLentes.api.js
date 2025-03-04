import axios from 'axios';

const BASE_URL = "http://localhost:3000";

export const getPreciosLentes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/PreciosLentes`);
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los precios de lentes:", error.response?.data || error.message);
      throw new Error('Error al obtener los precios de lentes');
    }
  };

    export const createPreciosLentes = async (tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio) => {
        try {
        await axios.post(`${BASE_URL}/PreciosLentes/create`, {tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio});
        } catch (error) {
        console.error("Error al registrar el precio:", error.response?.data || error.message);
        throw new Error('Error al registrar el precio');
        }
    };

    export const updatePreciosLentes = async (idPrecio, tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio) => {
        try {
        await axios.put(`${BASE_URL}/PreciosLentes/update/${idPrecio}`, {tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio});
        } catch (error) {
        console.error("Error al actualizar el precio:", error.response?.data || error.message);
        throw new Error('Error al actualizar el precio');
        }
    };

    export const deletePreciosLentes = async (idPrecio) => {
        try {
        await axios.delete(`${BASE_URL}/PreciosLentes/delete/${idPrecio}`);
        } catch (error) {
        console.error("Error al eliminar el precio:", error.response?.data || error.message);
        throw new Error('Error al eliminar el precio');
        }
    }