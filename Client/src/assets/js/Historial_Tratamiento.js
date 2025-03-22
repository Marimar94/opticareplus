import Swal from 'sweetalert2'; 

import { getHistorial_Tratamiento, createHistorial_Tratamiento, updateHistorial_Tratamiento, deleteHistorial_Tratamiento} 
from '../../api/Historial_Tratamiento.api'; 

export const getHistorial_Tratamientojs = async (setHistorial_Tratamientojs) => {
  try {
    const data = await getHistorial_Tratamiento();
    setHistorial_Tratamientojs(data);
  } catch (error) {
    console.error('Error al obtener los historiales y tratamientos:', error);
  }
};

export const createHistorial_Tratamientojs = async (idTratamiento, idHistorialClinico, setShowModal, getHistorial_Tratamientojs) => {
    console.log("Llegando al create js:", {idTratamiento, idHistorialClinico});
    try {
    await createHistorial_Tratamiento(idTratamiento, idHistorialClinico);
    getHistorial_Tratamientojs();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'tratamiento asociado correctamente',
    });
    setShowModal(false);
  } catch (error) {
    console.error('Error al asociar el tratamiento:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema al asociar el tratamiento.',
    });
  }
};

export const updateHistorial_Tratamientojs = async (idHistorialTratamiento, idTratamiento, idHistorialClinico, setShowEditModal, getHistorial_Tratamientojs) => {
  try {
    await updateHistorial_Tratamiento(idHistorialTratamiento, idTratamiento, idHistorialClinico);
    getHistorial_Tratamientojs();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'actualización de tratamiento asociado correctamente',
    });
    setShowEditModal(false);
  } catch (error) {
    console.error('Error al actualizar el tratamiento asociado:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema actualizando el tratamiento asociado.',
    });
  }
};

export const deleteHistorial_Tratamientojs = async (idHistorialTratamiento, setShowDeleteModal, getHistorial_Tratamientojs) => {
  try {
    await deleteHistorial_Tratamiento(idHistorialTratamiento);
    getHistorial_Tratamientojs();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Aula eliminada correctamente',
    });
    setShowDeleteModal(false);
  } catch (error) {
    console.error('Error al eliminar el aula:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema eliminando el aula.',
    });
  }
};
