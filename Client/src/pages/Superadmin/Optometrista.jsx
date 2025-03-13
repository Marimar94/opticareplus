import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { getOptometristajs, createOptometristajs, updateOptometristajs, deleteOptometristajs } 
from '../../assets/js/Optometrista.js';

import { OptometristaCRUD } from './OptometristaCRUD.jsx';

function Optometrista() {
    const [OptometristaList, setOptometrista] = useState([]);
    const [nombre, setNombre] = useState("");
    const [noCedula, setNoCedula] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [selectedOptometrista, setSelectedOptometrista] = useState(null);

    useEffect(() => { getOptometristajs(setOptometrista); }, []);
    const filteredData = OptometristaList.filter(item =>
        (item?.nombre ?? "").toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAdd = () => {
        createOptometristajs(nombre, noCedula, setShowModal, () => getOptometristajs(setOptometrista));
    };

    const handleUpdate = () => {
        updateOptometristajs(selectedOptometrista.idOptometrista, nombre, noCedula, setShowEditModal, () => getOptometristajs(setOptometrista));
    };

    const handleDelete = () => {
        deleteOptometristajs(selectedOptometrista.idOptometrista, setShowDeleteModal, () => getOptometristajs(setOptometrista));
    };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">Optometrista</h2>
                <button className="btn btn-success" onClick={() => {
                    setNombre(""); setNoCedula("");
                    setShowModal(true);
                }}>
                    <FaPlus /> Agregar Optometrista
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
                            placeholder="🔍 Buscar por Optometrista..."
                        />
                        <span className="input-group-text bg-primary text-white">
                            <FaSearch />
                        </span>
                    </div>
                </div>
            </div>

 {/* Tabla de Optometrista */}
 <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>No. Cédula</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((Optometrista) => (
                                <tr key={Optometrista.idOptometrista}>
                                    <td>{Optometrista.idOptometrista}</td>
                                    <td>{Optometrista.nombre}</td>
                                    <td>{Optometrista.noCedula}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                            setShowEditModal(true);
                                            setSelectedOptometrista(Optometrista);
                                            setNombre(Optometrista.nombre);
                                            setNoCedula(Optometrista.noCedula);
                                        }}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setShowDeleteModal(true);
                                            setSelectedOptometrista(Optometrista);
                                        }}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">No hay registros para mostrar.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <OptometristaCRUD
                nombre={nombre} setNombre={setNombre}
                noCedula={noCedula} setNoCedula={setNoCedula}
                
                showModal={showModal} setShowModal={setShowModal}
                showEditModal={showEditModal} setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}

                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}

                selectedOptometrista={selectedOptometrista}
            />
        </div>
    );
}

export default Optometrista;