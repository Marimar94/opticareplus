import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { 
    getPreciosjs, 
    createPreciosjs, 
    updatePreciosjs, 
    deletePreciosjs 
} from '../../assets/js/Precios.js';

 import {PrecioCRUD} from './PreciosCRUD.jsx';

function Precio() {
    const [PrecioList, setPrecioList] = useState([]);
    // Campos del historial clínico
    const [idPrecio, setidPrecio] = useState(""); // Clave primaria
    const [idHistorialMaterial, setidHistorialMaterial] = useState(""); // Llave foránea
    const [idTratamiento, setidTratamiento] = useState(""); // Llave foránea
    
    const [serie, setSerie] = useState("");
    const [esfera, setEsfera] = useState("");
    const [cilindro, setCilindro] = useState("");
    const [combinada, setCombinada] = useState("");
    const [precio, setPrecio] = useState("");
    
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchText, setSearchText] = useState("");

    const [selectedPrecio, setSelectedPrecio] = useState(null);

    useEffect(() => { 
        getPreciosjs(setPrecioList); 
    }, []);

    const filteredData = PrecioList.filter(item =>
        (item?.material ?? "").toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAdd = () => {
        createPreciosjs( idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio, setShowModal, () => getPreciosjs(setPrecioList));
    };

    const handleUpdate = () => {
        updatePreciosjs(selectedPrecio.idPrecio, idHistorialMaterial, idTratamiento, serie, esfera, cilindro, combinada, precio, setShowEditModal, () => getPreciosjs(setPrecioList));
    };

    const handleDelete = () => {
        deletePreciosjs(selectedPrecio.idPrecio, setShowDeleteModal, () => getPreciosjs(setPrecioList));
    };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">Precio Lente</h2>
                <button className="btn btn-success" onClick={() => {

                    setidHistorialMaterial("");           
                    setidTratamiento("");
                    setSerie("");
                    setEsfera("");
                    setCilindro("");
                    setCombinada("");
                    setPrecio("");

                    setShowModal(true);
                }}>
                    <FaPlus /> Agregar Precio de Lente
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
                            placeholder="🔍 Buscar por precio lente..."
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
                        
                            <th>ID Material</th>
                            <th>Material</th>
                            <th>ID Tratamiento</th>
                            <th>Tratamiento</th>
                            <th>Serie</th>
                            <th>Esfera</th>
                            <th>Cilindro</th>
                            <th>Combinada</th>
                            <th>Costo</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>

                  
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((precio) => (
                                <tr key={precio.idPrecio}>
                                    <td>{precio.idHistorialMaterial}</td>
                                    <td>{precio.material}</td>
                                    <td>{precio.idTratamiento}</td>
                                    <td>{precio.tratamiento}</td>
                                    <td>{precio.serie}</td>
                                    <td>{precio.esfera}</td>
                                    <td>{precio.cilindro}</td>
                                    <td>{precio.combinada}</td>
                                    <td>${precio.precio}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                            setShowEditModal(true);
                                            setSelectedPrecio(precio);
                                            setidPrecio(precio.idPrecio);
                                            setidHistorialMaterial(precio.idHistorialMaterial);
                                            setidTratamiento(precio.idTratamiento);
                                            setSerie(precio.serie);
                                            setEsfera(precio.esfera);
                                            setCilindro(precio.cilindro);
                                            setCombinada(precio.combinada);
                                            setPrecio(precio.precio);
                                            
                                        }}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setShowDeleteModal(true);
                                            setSelectedPrecio(precio);
                                        }}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">No hay registros para mostrar.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Aquí deberías incluir tu componente de modales para agregar, editar y eliminar */}
            <PrecioCRUD

            idHistorialMaterial={idHistorialMaterial} setidHistorialMaterial={setidHistorialMaterial}
            idTratamiento={idTratamiento} setidTratamiento={setidTratamiento}
            serie={serie} setSerie={setSerie}
            esfera={esfera} setEsfera={setEsfera}
            cilindro={cilindro} setCilindro={setCilindro}
            combinada={combinada} setCombinada={setCombinada}
            precio={precio} setPrecio={setPrecio}


                showModal={showModal} setShowModal={setShowModal}
                showEditModal={showEditModal} setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}

                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}

                selectedPrecio={selectedPrecio}
            /> 
        </div>
    );
}

export default Precio;