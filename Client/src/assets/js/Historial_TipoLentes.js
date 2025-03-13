  import Swal from 'sweetalert2';
  
  import {
    getHistorial_TipoLente,
    createHistorial_TipoLente,
    updateHistorial_TipoLente,
    deleteHistorial_TipoLente
  } from "../../api/Historial_TipoLentes.api";
  
  export const getHistorial_TipoLentejs = async (setHistorial_TipoLentejs) => {
    try {
      const data = await getHistorial_TipoLente();
      setHistorial_TipoLentejs(data);
    } catch (error) {
      console.error('Error al obtener los tipos de lente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema obteniendo los tipos de lente.',
      });
    }
  };
  
  export const createHistorial_TipoLentejs = async (nombre, setShowModal, getHistorial_TipoLentejs) => {
    try {
      await createHistorial_TipoLente(nombre);
      getHistorial_TipoLentejs();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Tipo de lente registrado correctamente.',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al agregar el tipo de lente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema registrando el tipo de lente.',
      });
    }
  };
  
  export const updateHistorial_TipoLentejs = async (idHistorialTipoLente, nombre, setShowModal, getHistorial_TipoLentejs) => {
    console.log("Llegando a js", { idHistorialTipoLente, nombre });
    try {
      await updateHistorial_TipoLente(idHistorialTipoLente, nombre);
      getHistorial_TipoLentejs();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Tipo de lente actualizado correctamente.',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al actualizar el tipo de lente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema actualizando el tipo de lente.',
      });
    }
  };
  
  export const deleteHistorial_TipoLentejs = async (idHistorialTipoLente, setShowModal, getHistorial_TipoLentejs) => {
    try {
      await deleteHistorial_TipoLente(idHistorialTipoLente);
      getHistorial_TipoLentejs();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Tipo de lente eliminado correctamente.',
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error al eliminar el tipo de lente:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema eliminando el tipo de lente.',
      });
    }
  };
  