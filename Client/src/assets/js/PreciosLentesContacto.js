import Swal from 'sweetalert2'; 

import {getPreciosLentesContacto, createPreciosLentesContacto, updatePreciosLentesContacto, deletePreciosLentesContacto}
from "../../api/PreciosLentesContacto.api.js";

export const getPreciosLentesContactojs = async (setPreciosLentesContactojs) => {
  try {
    const data = await getPreciosLentesContacto();
    setPreciosLentesContactojs(data);
  } catch (error) {
    console.error('Error al obtener los precio:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema obteniendo los precio.',
    });
  }
};



export const createPreciosLentesContactojs = async (marca, duracion, esfera, precio , setShowModal, getPreciosLentesContactojs) => {
console.log("Llegando", {marca, duracion, esfera, precio });
  try {
    await createPreciosLentesContacto(marca, duracion, esfera, precio );
    getPreciosLentesContactojs();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Precio registrado correctamente',
    });
    setShowModal(false);
  } catch (error) {
    console.error('Error al agregar el precio:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema registrando el precio.',
    });
  }
};


export const updatePreciosLentesContactojs = async (idPrecioContacto, marca, duracion, esfera, precio , setShowEditModal, getPreciosLentesContactojs) => {
  console.log("Llegando update", {marca, duracion, esfera, precio });
  try {
        await updatePreciosLentesContacto(idPrecioContacto, marca, duracion, esfera, precio);
        getPreciosLentesContactojs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Precio actualizado correctamente',
        });
        setShowEditModal(false);
        } catch (error) {
        console.error('Error al actualizar el precio:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema actualizando el precio.',
        });
    }
};

export const deletePreciosLentesContactojs = async (idPrecioContacto, setShowDeleteModal, getPreciosLentesContactojs) => {
    try {
        await deletePreciosLentesContacto(idPrecioContacto);
        getPreciosLentesContactojs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Precio eliminado correctamente',
        });
        setShowDeleteModal(false);
    } catch (error) {
        console.error('Error al eliminar el precio:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema eliminando el precio.',
        });
    }
};