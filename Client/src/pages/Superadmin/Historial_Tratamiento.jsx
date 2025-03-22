import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { 
  getHistorial_Tratamientojs, 
  createHistorial_Tratamientojs, 
  updateHistorial_Tratamientojs, 
  deleteHistorial_Tratamientojs
} from '../../assets/js/Historial_Tratamiento.js';

import { Historial_TratamientoCRUD } from './Historial_TratamientoCRUD.jsx';

function Historial_Tratamiento() {
    const [historialTratamientoList, setHistorialTratamientoList] = useState([]);
    const [idHistorialTratamiento, setIdHistorialTratamiento] = useState(""); // Clave primaria
    const [idHistorialClinico, setIdHistorialClinico] = useState(""); // Llave foránea
    const [idTratamiento, setIdTratamiento] = useState(""); // Llave foránea

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [selectedHistorial_Tratamiento, setSelectedHistorial_Tratamiento] = useState(null);

    useEffect(() => { 
        getHistorial_Tratamientojs(setHistorialTratamientoList); 
    }, []);

    const filteredData = historialTratamientoList.filter(item =>
        (item?.nombrePaciente ?? "").toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAdd = async () => {
        try {
            await createHistorial_Tratamientojs(
                idTratamiento, idHistorialClinico, setShowModal, () => getHistorial_Tratamientojs(setHistorialTratamientoList)
            );
        } catch (error) {
            console.error("Error al agregar el tratamiento:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            await updateHistorial_Tratamientojs(
                selectedHistorial_Tratamiento.idHistorialTratamiento, 
                idTratamiento, idHistorialClinico, setShowEditModal, () => getHistorial_Tratamientojs(setHistorialTratamientoList)
            );
        } catch (error) {
            console.error("Error al actualizar el tratamiento:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteHistorial_Tratamientojs(
                selectedHistorial_Tratamiento.idHistorialTratamiento, setShowDeleteModal, () => getHistorial_Tratamientojs(setHistorialTratamientoList)
            );
        } catch (error) {
            console.error("Error al eliminar el tratamiento:", error);
        }
    };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">Historial Tratamiento</h2>
                <button className="btn btn-success" onClick={() => {
                    setIdHistorialTratamiento("");
                    setIdHistorialClinico("");
                    setIdTratamiento("");
                    setShowModal(true);
                }}>
                    <FaPlus /> Agregar Tratamiento
                </button>
            </div>

            {/* Buscador */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group shadow-sm">
                        <input
                            type="text"
                            className="form-control"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="🔍 Buscar por ..."
                        />
                        <span className="input-group-text bg-primary text-white">
                            <FaSearch />
                        </span>
                    </div>
                </div>
            </div>

            {/* Tabla de Historial Clínico */}
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID Historial Clínico</th>
                            <th>Paciente</th>
                            <th>ID Tratamiento</th>
                            <th>Tratamiento</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((tratamiento) => (
                                <tr key={tratamiento.idHistorialTratamiento}>
                                    <td>{tratamiento.idHistorialClinico}</td>
                                    <td>{tratamiento.nombrePaciente}</td>
                                    <td>{tratamiento.idTratamiento}</td>
                                    <td>{tratamiento.tratamiento}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                            setShowEditModal(true);
                                            setSelectedHistorial_Tratamiento(tratamiento); // Corregido
                                            setIdHistorialTratamiento(tratamiento.idHistorialTratamiento);
                                            setIdHistorialClinico(tratamiento.idHistorialClinico);
                                            setIdTratamiento(tratamiento.idTratamiento);
                                        }}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setShowDeleteModal(true);
                                            setSelectedHistorial_Tratamiento(tratamiento); // Corregido
                                        }}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">No hay registros para mostrar.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Componente de modales */}
            <Historial_TratamientoCRUD
                idHistorialTratamiento={idHistorialTratamiento} setIdHistorialTratamiento={setIdHistorialTratamiento}
                idHistorialClinico={idHistorialClinico} setIdHistorialClinico={setIdHistorialClinico}
                idTratamiento={idTratamiento} setIdTratamiento={setIdTratamiento}
                showModal={showModal} setShowModal={setShowModal}
                showEditModal={showEditModal} setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}
                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                selectedHistorial_Tratamiento={selectedHistorial_Tratamiento} // Corregido
            />
        </div>
    );
}

export default Historial_Tratamiento;