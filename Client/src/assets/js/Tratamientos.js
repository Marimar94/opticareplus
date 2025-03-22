import Swal from 'sweetalert2'; 

import {getTratamientos, createTratamientos, updateTratamientos, deleteTratamientos}
from "../../api/Tratamientos.api.js";

export const getTratamientosjs = async (setTratamientosjs) => {
    try {
        const data = await getTratamientos();
        setTratamientosjs(data);
    } catch (error) {
        console.error('Error al obtener los tratamiento:', error);
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema obteniendo los tratamiento.',
        });
    }
    };


export const createTratamientosjs = async (nombre , setShowModal, getTratamientosjs) => {
    console.log("Llegando", {nombre });
    try {
        await createTratamientos(nombre );
        getTratamientosjs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Tratamiento registrado correctamente',
        });
        setShowModal(false);
    } catch (error) {
        console.error('Error al agregar el tratamiento:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema registrando el tratamiento.',
        });
    }
    };


export const updateTratamientosjs = async (idTratamiento, nombre , setShowEditModal, getTratamientosjs) => {
    console.log("Llegando update", {nombre });
    try {
        await updateTratamientos(idTratamiento, nombre);
        getTratamientosjs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Tratamiento actualizado correctamente',
        });
        setShowEditModal(false);
        } catch (error) {
        console.error('Error al actualizar el tratamiento:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema actualizando el tratamiento.',
        });
    }
    };

export const deleteTratamientosjs = async (idTratamiento, getTratamientosjs) => {
    try {
        await deleteTratamientos(idTratamiento);
        getTratamientosjs();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Tratamiento eliminado correctamente',
        });
        } catch (error) {
        console.error('Error al eliminar el tratamiento:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema eliminando el tratamiento.',
        });
    }
    };