import Swal from 'sweetalert2'; 

import {getPreciosLentes, createPreciosLentes, updatePreciosLentes, deletePreciosLentes}
from "../../api/PreciosLentes.api.js";

export const getPreciosLentesjs = async (setPreciosLentesjs) => {
  try {
    const data = await getPreciosLentes();
    setPreciosLentesjs(data);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema obteniendo los productos.',
    });
  }
};



export const createPreciosLentesjs = async (tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio , setShowModal, getPreciosLentesjs) => {
console.log("Llegando", {tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio });
  try {
    await createPreciosLentes(tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio );
    getPreciosLentesjs();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Producto registrado correctamente',
    });
    setShowModal(false);
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema registrando el producto.',
    });
  }
};


export const updatePreciosLentesjs = async (idPrecio, tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio , setShowEditModal, getPreciosLentesjs) => {
console.log("Llegando", {tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio }); 
  try {
        await updatePreciosLentes(idPrecio, tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio);
        getPreciosLentesjs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Producto actualizado correctamente',
        });
        setShowEditModal(false);
        } catch (error) {
        console.error('Error al actualizar el producto:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema actualizando el producto.',
        });
    }
};

export const deletePreciosLentesjs = async (idPrecio, setShowDeleteModal, getPreciosLentesjs) => {
    try {
        await deletePreciosLentes(idPrecio);
        getPreciosLentesjs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Producto eliminado correctamente',
        });
        setShowDeleteModal(false);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema eliminando el producto.',
        });
    }
};