import Swal from 'sweetalert2'; 

import { getEdificios, createEdificio, updateEdificio, deleteEdificio } from '../../api/edificio.api.js'; 

export const getEdificio = async (setEdificio) => {
  try {
    const data = await getEdificios();
    setEdificio(data);
  } catch (error) {
    console.error('Error al obtener los Edificios:', error);
  }
};

export const addEdificio = async (Nombre, Sigla,setShowModal, getEdificio) => {
  try {
    await createEdificio(Nombre , Sigla);
    getEdificio();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Edificio registrado correctamente',
    });
    setShowModal(false);
  } catch (error) {
    console.error('Error al agregar un Edificio:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema registrando un Edificio.',
    });
  }
};

export const updateEdificioFunc = async (id_edificio, Nombre,Sigla, setShowEditModal, getEdificio) => {
  try {
    await updateEdificio(id_edificio, Nombre, Sigla);
    getEdificio();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Edificio actualizada correctamente',
    });
    setShowEditModal(false);
  } catch (error) {
    console.error('Error al actualizar la edificio:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema actualizando la edificio.',
    });
  }
};

export const deleteEdificioFunc = async (id_edificio, setShowDeleteModal, getEdificio) => {
  try {
    await deleteEdificio(id_edificio);
    getEdificio();
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Edificio eliminada correctamente',
    });
    setShowDeleteModal(false);
  } catch (error) {
    console.error('Error al eliminar el Edificio:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema eliminando el Edificio.',
    });
  }
};
