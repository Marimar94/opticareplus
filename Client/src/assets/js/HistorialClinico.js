import Swal from 'sweetalert2'; 

import {getHistorialClinico, createHistorialClinico, updateHistorialClinico, deleteHistorialClinico}
from "../../api/HIstorialClinico.api.js";

export const getHistorialClinicojs = async (setHistorialClinicojs) => {
    try {
      const data = await getHistorialClinico();
      setHistorialClinicojs(data);
    } catch (error) {
      console.error('Error al obtener el historial Clínico:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema obteniendo el historial Clinico.',
      });
    }
  };

  export const createHistorialClinicojs = async (idPaciente, idInventario, idHistorialTipoLente, idHistorialMaterial,
  rx_esfera_od, rx_cilindro_od, rx_eje_od, rx_esfera_oi, rx_cilindro_oi, rx_eje_oi, add_lente, ao, dnp, antecedentes_salud,
  antecedentes_familiares, medicamentos, dosis, cirugias, setShowModal, getHistorialClinicojs) => {
    
 console.log("Llegando", { idPaciente,idInventario, idHistorialTipoLente, idHistorialMaterial,
 rx_esfera_od, rx_cilindro_od, rx_eje_od, rx_esfera_oi, rx_cilindro_oi, rx_eje_oi, add_lente, ao, dnp, antecedentes_salud,
 antecedentes_familiares, medicamentos, dosis});

      try {
        await createHistorialClinico( 
            idPaciente,
            idInventario,
            idHistorialTipoLente,
            idHistorialMaterial,
            rx_esfera_od,
            rx_cilindro_od,
            rx_eje_od,
            rx_esfera_oi,
            rx_cilindro_oi,
            rx_eje_oi,
            add_lente,
            ao,
            dnp,
            antecedentes_salud,
            antecedentes_familiares,
            medicamentos,
            dosis, 
            cirugias);
        getHistorialClinicojs();
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Historial registrado correctamente',
        });
        setShowModal(false);
      } catch (error) {
        console.error('Error al agregar el Historial:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema registrando el historial.',
        });
      }
    };

    export const updateHistorialClinicojs = async (idHistorialClinico,  idPaciente,
        idInventario,
        idHistorialTipoLente,
        idHistorialMaterial,
        rx_esfera_od,
        rx_cilindro_od,
        rx_eje_od,
        rx_esfera_oi,
        rx_cilindro_oi,
        rx_eje_oi,
        add_lente,
        ao,
        dnp,
        antecedentes_salud,
        antecedentes_familiares,
        medicamentos,
        dosis, cirugias, setShowModal, getHistorialClinicojs) => {
                
 console.log("LlegandoUP", { idPaciente,idInventario, idHistorialTipoLente, idHistorialMaterial,
    rx_esfera_od, rx_cilindro_od, rx_eje_od, rx_esfera_oi, rx_cilindro_oi, rx_eje_oi, add_lente, ao, dnp, antecedentes_salud,
    antecedentes_familiares, medicamentos, dosis});
      try {
        await updateHistorialClinico(idHistorialClinico, idPaciente,
            idInventario,
            idHistorialTipoLente,
            idHistorialMaterial,
            rx_esfera_od,
            rx_cilindro_od,
            rx_eje_od,
            rx_esfera_oi,
            rx_cilindro_oi,
            rx_eje_oi,
            add_lente,
            ao,
            dnp,
            antecedentes_salud,
            antecedentes_familiares,
            medicamentos,
            dosis,
            cirugias);
        getHistorialClinicojs();
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Historial actualizado correctamente',
        });
        setShowModal(false);
      } catch (error) {
        console.error('Error al actualizar el Historial:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema actualizando el Historial.',
        });
      }
    };

    export const deleteHistorialClinicojs = async (idHistorialClinico, setShowDeleteModal, getHistorialClinicojs) => {
        try {
            await deleteHistorialClinico(idHistorialClinico);
            getHistorialClinicojs();
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Historial eliminado correctamente',
            });
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error al eliminar el Historial:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema eliminando el historial.',
            });
        }
    };