import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { 
    getHistorialClinicojs, 
    createHistorialClinicojs, 
    updateHistorialClinicojs, 
    deleteHistorialClinicojs 
} from '../../assets/js/HistorialClinico.js';

import {HistorialClinicoCRUD} from './HistorialClinicoCRUD.JSX';

function HistorialClinico() {
    const [historialClinicoList, setHistorialClinicoList] = useState([]);
    // Campos del historial clínico
    const [idHistorialClinico, setIdHistorialClinico] = useState(""); // Clave primaria
    const [idPaciente, setIdPaciente] = useState(""); // Llave foránea
    const [idInventario, setIdInventario] = useState(""); // Llave foránea
    const [idHistorialTipoLente, setIdHistorialTipoLente] = useState(""); // Llave foránea
    const [idHistorialMaterial, setIdHistorialMaterial] = useState(""); // Llave foránea
    
    const [rx_esfera_od, setRx_esfera_od] = useState("");
    const [rx_cilindro_od, setRx_cilindro_od] = useState("");
    const [rx_eje_od, setRx_eje_od] = useState("");
    
    const [rx_esfera_oi, setRx_esfera_oi] = useState("");
    const [rx_cilindro_oi, setRx_cilindro_oi] = useState("");
    const [rx_eje_oi, setRx_eje_oi] = useState("");
    
    const [add_lente, setAdd_lente] = useState("");
    const [ao, setAo] = useState("");
    const [dnp, setDnp] = useState("");
    
    const [antecedentes_salud, setAntecedentes_salud] = useState("");
    const [antecedentes_familiares, setAntecedentes_familiares] = useState("");
    const [medicamentos, setMedicamentos] = useState("");
    const [dosis, setDosis] = useState("");
    const [cirugias, setCirugias] = useState("");
    

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchText, setSearchText] = useState("");

    const [selectedHistorial, setSelectedHistorial] = useState(null);

    useEffect(() => { 
        getHistorialClinicojs(setHistorialClinicoList); 
    }, []);

    const filteredData = historialClinicoList.filter(item =>
        (item?.nombrePaciente ?? "").toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAdd = () => {
        createHistorialClinicojs( idPaciente,
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
            cirugias, setShowModal, () => getHistorialClinicojs(setHistorialClinicoList));
    };

    const handleUpdate = () => {
        updateHistorialClinicojs(selectedHistorial.idHistorialClinico, 
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
            cirugias, setShowEditModal, () => getHistorialClinicojs(setHistorialClinicoList));
    };

    const handleDelete = () => {
        deleteHistorialClinicojs(selectedHistorial.idHistorialClinico, setShowDeleteModal, () => getHistorialClinicojs(setHistorialClinicoList));
    };

    const formatDateString = (dateString) => {
        return dateString ? dateString.split('T')[0] : "";
    };

    return (
        <div className="container mt-4">
            {/* Encabezado con botón */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold">Historial Clínico</h2>
                <button className="btn btn-success" onClick={() => {

                    setIdPaciente("");
                    setIdInventario("");
                    setIdHistorialTipoLente("");
                    setIdHistorialMaterial("");

                    setRx_esfera_od("");
                    setRx_cilindro_od("");
                    setRx_eje_od("");

                    setRx_esfera_oi("");
                    setRx_cilindro_oi("");
                    setRx_eje_oi("");

                    setAdd_lente("");
                    setAo("");
                    setDnp("");

                    setAntecedentes_salud("");
                    setAntecedentes_familiares("");
                    setMedicamentos("");
                    setDosis("");
                    setCirugias("");

                    setShowModal(true);
                }}>
                    <FaPlus /> Agregar Historial
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
                            placeholder="🔍 Buscar por paciente..."
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
                        
                            <th>ID</th>
                            <th>ID Paciente</th>
                            <th>Paciente</th>
                            <th>ID Inventario</th>
                            <th>Inventario</th>
                            <th>ID Tipo Lente</th>
                            <th>Tipo Lente</th>
                            <th>ID Material</th>
                            <th>Material</th>
                            <th>RX Esfera OD</th>
                            <th>RX Cilindro OD</th>
                            <th>RX Eje OD</th>
                            <th>RX Esfera OI</th>
                            <th>RX Cilindro OI</th>
                            <th>RX Eje OI</th>
                            <th>Add Lente</th>
                            <th>AO</th>
                            <th>DNP</th>
                            <th>Antecedentes Salud</th>
                            <th>Antecedentes Familiares</th>
                            <th>Medicamentos</th>
                            <th>Dosis</th>
                            <th>Cirugías</th>
                            <th>Fecha Registro</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                   

                  
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((historial) => (
                                <tr key={historial.idHistorialClinico}>
                                    <td>{historial.idHistorialClinico}</td>
                                    <td>{historial.idPaciente}</td>
                                    <td>{historial.nombrePaciente}</td>
                                    <td>{historial.idInventario}</td>
                                    <td>{historial.modeloInventario} {historial.modeloCompleto}</td>
                                    <td>{historial.idHistorialTipoLente}</td>
                                    <td>{historial.tipoLente}</td>
                                    <td>{historial.idHistorialMaterial}</td>
                                    <td>{historial.materialLente}</td>
                                    <td>{historial.rx_esfera_od}</td>
                                    <td>{historial.rx_cilindro_od}</td>
                                    <td>{historial.rx_eje_od}</td>
                                    <td>{historial.rx_esfera_oi}</td>
                                    <td>{historial.rx_cilindro_oi}</td>
                                    <td>{historial.rx_eje_oi}</td>
                                    <td>{historial.add_lente}</td>
                                    <td>{historial.ao}</td>
                                    <td>{historial.dnp}</td>
                                    <td>{historial.antecedentes_salud}</td>
                                    <td>{historial.antecedentes_familiares}</td>
                                    <td>{historial.medicamentos}</td>
                                    <td>{historial.dosis}</td>
                                    <td>{historial.cirugias}</td>
                                    <td>{formatDateString(historial.fechaRegistro)}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => {
                                            setShowEditModal(true);
                                            setSelectedHistorial(historial);
                                            setIdHistorialClinico(historial.idHistorialClinico);
                                            setIdPaciente(historial.idPaciente);
                                            setIdInventario(historial.idInventario);
                                            setIdHistorialTipoLente(historial.idHistorialTipoLente);
                                            setIdHistorialMaterial(historial.idHistorialMaterial);
                                            setRx_esfera_od(historial.rx_esfera_od);
                                            setRx_cilindro_od(historial.rx_cilindro_od);
                                            setRx_eje_od(historial.rx_eje_od);
                                            setRx_esfera_oi(historial.rx_esfera_oi);
                                            setRx_cilindro_oi(historial.rx_cilindro_oi);
                                            setRx_eje_oi(historial.rx_eje_oi);
                                            setAdd_lente(historial.add_lente);
                                            setAo(historial.ao);
                                            setDnp(historial.dnp);
                                            setAntecedentes_salud(historial.antecedentes_salud);
                                            setAntecedentes_familiares(historial.antecedentes_familiares);
                                            setMedicamentos(historial.medicamentos);
                                            setDosis(historial.dosis);
                                            setCirugias(historial.cirugias);
                                            
                                        }}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            setShowDeleteModal(true);
                                            setSelectedHistorial(historial);
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
            <HistorialClinicoCRUD

            idPaciente={idPaciente} setIdPaciente={setIdPaciente}
            idInventario={idInventario} setIdInventario={setIdInventario}
            idHistorialTipoLente={idHistorialTipoLente} setIdHistorialTipoLente={setIdHistorialTipoLente}
            idHistorialMaterial={idHistorialMaterial} setIdHistorialMaterial={setIdHistorialMaterial}

            rx_esfera_od={rx_esfera_od} setRx_esfera_od={setRx_esfera_od}
            rx_cilindro_od={rx_cilindro_od} setRx_cilindro_od={setRx_cilindro_od}
            rx_eje_od={rx_eje_od} setRx_eje_od={setRx_eje_od}

            rx_esfera_oi={rx_esfera_oi} setRx_esfera_oi={setRx_esfera_oi}
            rx_cilindro_oi={rx_cilindro_oi} setRx_cilindro_oi={setRx_cilindro_oi}
            rx_eje_oi={rx_eje_oi} setRx_eje_oi={setRx_eje_oi}

            add_lente={add_lente} setAdd_lente={setAdd_lente}
            ao={ao} setAo={setAo}
            dnp={dnp} setDnp={setDnp}

            antecedentes_salud={antecedentes_salud} setAntecedentes_salud={setAntecedentes_salud}
            antecedentes_familiares={antecedentes_familiares} setAntecedentes_familiares={setAntecedentes_familiares}
            medicamentos={medicamentos} setMedicamentos={setMedicamentos}
            dosis={dosis} setDosis={setDosis}
            cirugias={cirugias} setCirugias={setCirugias}


                showModal={showModal} setShowModal={setShowModal}
                showEditModal={showEditModal} setShowEditModal={setShowEditModal}
                showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}

                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}

                selectedHistorial={selectedHistorial}
            /> 
        </div>
    );
}

export default HistorialClinico;
