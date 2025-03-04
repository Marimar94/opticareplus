import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { getPreciosLentesContactojs, createPreciosLentesContactojs, updatePreciosLentesContactojs, deletePreciosLentesContactojs } 
from '../../assets/js/PreciosLentesContacto.js';

import { PreciosLentesContactoCRUD } from './PreciosLentesContactoCRUD.jsx';

function PreciosLentesContacto() {
    const [PreciosLentesContactoList, setPreciosLentesContacto] = useState([]);
    const [marca, setMarca] = useState("");
    const [duracion, setDuracion] = useState("");
    const [esfera, setEsfera] = useState("");
    const [precio, setPrecio] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [selectedPreciosLentesContacto, setSelectedPreciosLentesContacto] = useState(null);

    useEffect(() => { getPreciosLentesContactojs(setPreciosLentesContacto); }, []);

    const filteredData = PreciosLentesContactoList.filter(item =>
        (item?.marca ?? "").toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAdd = () => {
        createPreciosLentesContactojs(marca, duracion, esfera, precio, setShowModal, () => getPreciosLentesContactojs(setPreciosLentesContacto));
    };

    const handleUpdate = () => {
        updatePreciosLentesContactojs(selectedPreciosLentesContacto.idPrecioContacto, marca, duracion, esfera, precio, setShowEditModal, () => getPreciosLentesContactojs(setPreciosLentesContacto));
    };

    const handleDelete = () => {
        deletePreciosLentesContactojs(selectedPreciosLentesContacto.idPrecioContacto, setShowDeleteModal, () => getPreciosLentesContactojs(setPreciosLentesContacto));
    };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">👁️ Precios de Lentes de Contacto</h2>
                <button className="btn btn-success" onClick={() => {
                    setMarca(""); setDuracion(""); setEsfera(""); setPrecio("");
                    setShowModal(true);
                }}>
                    <FaPlus /> Agregar Precio
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
                            placeholder="🔍 Buscar por Marca..."
                        />
                        <span className="input-group-text bg-primary text-white">
                            <FaSearch />
                        </span>
                    </div>
                </div>
            </div>

            {/* Tabla de Precios de Lentes de Contacto */}
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Marca</th>
                            <th>Duración</th>
                            <th>Esfera</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((PreciosLentesContacto) => (
                                <tr key={PreciosLentesContacto.idPrecioContacto}>
                                    <td>{PreciosLentesContacto.idPrecioContacto}</td>
                                    <td>{PreciosLentesContacto.marca}</td>
                                    <td>{PreciosLentesContacto.duracion}</td>
                                    <td>{PreciosLentesContacto.esfera}</td>
                                    <td>${PreciosLentesContacto.precio}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                            setShowEditModal(true);
                                            setSelectedPreciosLentesContacto(PreciosLentesContacto);
                                            setMarca(PreciosLentesContacto.marca);
                                            setDuracion(PreciosLentesContacto.duracion);
                                            setEsfera(PreciosLentesContacto.esfera);
                                            setPrecio(PreciosLentesContacto.precio);
                                        }}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setShowDeleteModal(true);
                                            setSelectedPreciosLentesContacto(PreciosLentesContacto);
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

            <PreciosLentesContactoCRUD
                marca={marca} setMarca={setMarca}
                duracion={duracion} setDuracion={setDuracion}
                esfera={esfera} setEsfera={setEsfera}
                precio={precio} setPrecio={setPrecio}
                
                showModal={showModal} setShowModal={setShowModal}
                showEditModal={showEditModal} setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}

                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}

                selectedPreciosLentes={selectedPreciosLentesContacto}
            />
        </div>
    );
}

export default PreciosLentesContacto;
