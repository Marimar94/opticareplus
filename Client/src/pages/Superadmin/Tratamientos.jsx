import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { getTratamientosjs, createTratamientosjs, updateTratamientosjs, deleteTratamientosjs } 
from '../../assets/js/Tratamientos.js';

import { TratamientosCRUD } from './TratamientosCRUD.jsx';

function Tratamientos () {
     const [TratamientosList, setTratamientos] = useState([]);
        const [nombre, setNombre] = useState("");
    
        const [showModal, setShowModal] = useState(false);
        const [showEditModal, setShowEditModal] = useState(false);
        const [showDeleteModal, setShowDeleteModal] = useState(false);
        const [searchText, setSearchText] = useState("");
        const [selectedTratamientos, setSelectedTratamientos] = useState(null);
    
        useEffect(() => { getTratamientosjs(setTratamientos); }, []);
    
        const filteredData = TratamientosList.filter(item =>
            (item?.nombre ?? "").toLowerCase().includes(searchText.toLowerCase())
        );
    
        const handleAdd = () => {
            createTratamientosjs(nombre, setShowModal, () => getTratamientosjs(setTratamientos));
        };
    
        const handleUpdate = () => {
            updateTratamientosjs(selectedTratamientos.idTratamiento, nombre, setShowEditModal, () => getTratamientosjs(setTratamientos));
        };
    
        const handleDelete = () => {
            deleteTratamientosjs(selectedTratamientos.idTratamiento, setShowDeleteModal, () => getTratamientosjs(setTratamientos));
        };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">Tratamientos</h2>
                <button className="btn btn-success" onClick={() => {
                    setNombre("");
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
                            placeholder="Buscar por nombre"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="btn btn-primary">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabla */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nombre}</td>
                            <td>
                                <button className="btn btn-warning me-2" onClick={() => {
                                    setSelectedTratamientos(item);
                                    setNombre(item.nombre);
                                    setShowEditModal(true);
                                }}>
                                    <FaEdit />
                                </button>
                                <button className="btn btn-danger" onClick={() => {
                                    setSelectedTratamientos(item);
                                    setShowDeleteModal(true);
                                }}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* CRUD Modals */}
            <TratamientosCRUD
                nombre={nombre}
                setNombre={setNombre}
                showModal={showModal}
                setShowModal={setShowModal}
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                selectedTratamientos = {selectedTratamientos}
            />
        </div>
    );
}
export default Tratamientos;