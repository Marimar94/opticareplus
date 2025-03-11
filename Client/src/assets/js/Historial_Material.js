import Swal from 'sweetalert2';

import {getHistorial_Material, createHistorial_Material, updateHistorial_Material, deleteHistorial_Material } 
from "../../api/Historial_Material.api.js";

export const getHistorial_Materialjs = async (setHistorial_Materialjs) => {
  try {
    const data = await getHistorial_Material();
    setHistorial_Materialjs(data);
  } catch (error) {
    console.error('Error al obtener los materiales:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema obteniendo los materiales.',
    });
  }
};


export const createHistorial_Materialjs = async (nombre, setShowModal, getHistorial_Materialjs) => {
    try {
      await createHistorial_Material(nombre);
      getHistorial_Materialjs();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Material registrado correctamente',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al agregar el material:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema registrando el material.',
      });
    }
  };
  

  export const updateHistorial_Materialjs = async (idHistorialMaterial, nombre, setShowModal, getHistorial_Materialjs) => {
    console.log("Llegando a js", {idHistorialMaterial, nombre });
    try {
      await updateHistorial_Material(idHistorialMaterial, nombre);
      getHistorial_Materialjs();
      Swal.fire({
        icon:'success',
        title: '¡Éxito!',
        text: 'Material actualizado correctamente',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al actualizar el material:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema actualizando el material.',
      });
    }
  };

  
  export const deleteHistorial_Materialjs = async (idHistorialMaterial, setShowModal, getHistorial_Materialjs) => {
    try {
      await deleteHistorial_Material(idHistorialMaterial);
      getHistorial_Materialjs();
      Swal.fire({
        icon:'success',
        title: '¡Éxito!',
        text: 'Material eliminado correctamente',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al eliminar el material:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema eliminando el material.',
      });
    }
  };
