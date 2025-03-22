import Swal from 'sweetalert2'; 

import {getPrecios, createPrecios, updatePrecios, deletePrecios}
from "../../api/Precios.api.js";

export const getPreciosjs = async (setPreciosjs) => {
    try {
      const data = await getPrecios();
      setPreciosjs(data);
    } catch (error) {
      console.error('Error al obtener el precio:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema obteniendo el precio.',
      });
    }
  };


export const createPreciosjs = async (idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio, setShowModal, getPreciosjs) => {
    
 console.log("Llegando", { idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio});

      try {
        await createPrecios( 
          idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio);
        getPreciosjs();
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Precios registrado correctamente',
        });
        setShowModal(false);
      } catch (error) {
        console.error('Error al agregar el Precios:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema registrando el precios.',
        });
      }
    };


 export const updatePreciosjs = async (idPrecio, idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio, setShowModal, getPreciosjs) => {
                
 console.log("LlegandoUP", { idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio});
      try {
        await updatePrecios(idPrecio, idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio);
        getPreciosjs();
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Precio actualizado correctamente',
        });
        setShowModal(false);
      } catch (error) {
        console.error('Error al actualizar el Precio:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema actualizando el Precio.',
        });
      }
    };

    
    export const deletePreciosjs = async (idPrecio, setShowDeleteModal, getPreciosjs) => {
        try {
            await deletePrecios(idPrecio);
            getPreciosjs();
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Precio eliminado correctamente',
            });
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error al eliminar el Precio:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema eliminando el precio.',
            });
        }
    };