import axios from 'axios';

const BASE_URL = "http://localhost:3000";

export const getPreciosLentesContacto = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/PreciosLentesContacto`);
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los precios de lentes de contacto:", error.response?.data || error.message);
      throw new Error('Error al obtener los precios de lentes de contacto');
    }
  };

    export const createPreciosLentesContacto = async ( marca, duracion, esfera, precio) => {
        try {
        await axios.post(`${BASE_URL}/PreciosLentesContacto/create`, { marca, duracion, esfera, precio});
        } catch (error) {
        console.error("Error al registrar el precio:", error.response?.data || error.message);
        throw new Error('Error al registrar el precio');
        }
    };

    export const updatePreciosLentesContacto = async (idPrecioContacto, marca, duracion, esfera, precio) => {
      console.log("Llegando update api", {marca, duracion, esfera, precio });  
      try {
        await axios.put(`${BASE_URL}/PreciosLentesContacto/update/${idPrecioContacto}`, {marca, duracion, esfera, precio});
        } catch (error) {
        console.error("Error al actualizar el precio:", error.response?.data || error.message);
        throw new Error('Error al actualizar el precio');
        }
    };

    export const deletePreciosLentesContacto  = async (idPrecioContacto) => {
        try {
        await axios.delete(`${BASE_URL}/PreciosLentesContacto/delete/${idPrecioContacto}`);
        } catch (error) {
        console.error("Error al eliminar el precio:", error.response?.data || error.message);
        throw new Error('Error al eliminar el precio');
        }
    }