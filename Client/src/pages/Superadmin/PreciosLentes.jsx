import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

import { getPreciosLentesjs, createPreciosLentesjs, updatePreciosLentesjs, deletePreciosLentesjs }
  from '../../assets/js/PreciosLentes.js';

import { PreciosLentesCRUD } from './PreciosLentesCRUD.jsx';

function PreciosLentes() {
  const [PreciosLentesList, setPreciosLentes] = useState([]);
  const [tipoLente, setTipoLente] = useState("");
  const [material, setMaterial] = useState("");
  const [serie, setSerie] = useState("");
  const [esfera, setEsfera] = useState("");
  const [cilindro, setCilindro] = useState("");
  const [combinada, setCombinada] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [precio, setPrecio] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedPreciosLentes, setSelectedPreciosLentes] = useState(null);
  const [selectedTipoLente, setSelectedTipoLente] = useState(""); // Estado para filtrar por tipo de lente

  useEffect(() => { getPreciosLentesjs(setPreciosLentes); }, []);
  
  // Filtrar por tipo de lente y nombre
  const filteredData = PreciosLentesList.filter(item =>
    (selectedTipoLente === "" || item.tipoLente === selectedTipoLente) && 
    (item?.nombre ?? "").toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAdd = () => {
    createPreciosLentesjs(tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio, setShowModal, () => getPreciosLentesjs(setPreciosLentes));
  };

  const handleUpdate = () => {
    updatePreciosLentesjs(selectedPreciosLentes.idPrecio, tipoLente, material, serie, esfera, cilindro, combinada, tratamiento, precio, setShowEditModal, () => getPreciosLentesjs(setPreciosLentes));
  };

  const handleDelete = () => {
    deletePreciosLentesjs(selectedPreciosLentes.idPrecio, setShowDeleteModal, () => getPreciosLentesjs(setPreciosLentes));
  };

  // Obtener lista de tipos de lentes únicos para el filtro
  const uniqueTiposLentes = [...new Set(PreciosLentesList.map(item => item.tipoLente))];

  return (
    <div className="container mt-4">
      <h1 className="fw-bold">💡 Precios de Lentes</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className='btn btn-success' onClick={() => {
          setTipoLente("");
          setMaterial("");
          setSerie("");
          setEsfera("");
          setCilindro("");
          setCombinada("");
          setTratamiento("");
          setPrecio("");
          setShowModal(true);
        }}>
          <FaPlus /> Agregar
        </button>
        <div className="input-group w-50">
          <input 
            type="text" 
            className="form-control" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="Aún no funciona" 
          />
          <span className="input-group-text bg-primary text-white">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* Filtro por Tipo de Lente */}
      <div className="mb-4">
        <select className="form-select" value={selectedTipoLente} onChange={(e) => setSelectedTipoLente(e.target.value)}>
          <option value="">Filtrar por Tipo de Lente</option>
          {uniqueTiposLentes.map((tipo, index) => (
            <option key={index} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      {/* Mostrar tablas filtradas por tipo de lente */}
      {uniqueTiposLentes.map((tipo) => (
        <div className="card mb-4" key={tipo}>
          <div className="card-header">
            <h4>{tipo}</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Material</th>
                    <th>Serie</th>
                    <th>Esfera</th>
                    <th>Cilindro</th>
                    <th>Combinada</th>
                    <th>Tratamiento</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((PreciosLentes) => (
                      PreciosLentes.tipoLente === tipo && (
                        <tr key={PreciosLentes.idPrecio}>
                          <td>{PreciosLentes.material}</td>
                          <td>{PreciosLentes.serie}</td>
                          <td>{PreciosLentes.esfera}</td>
                          <td>{PreciosLentes.cilindro}</td>
                          <td>{PreciosLentes.combinada}</td>
                          <td>{PreciosLentes.tratamiento}</td>
                          <td>${PreciosLentes.precio}</td>
                          <td>
                            <button 
                              className="btn btn-warning btn-sm me-2" 
                              onClick={() => {
                                setShowEditModal(true);
                                setSelectedPreciosLentes(PreciosLentes);
                                setTipoLente(PreciosLentes.tipoLente);
                                setMaterial(PreciosLentes.material);
                                setSerie(PreciosLentes.serie);
                                setEsfera(PreciosLentes.esfera);
                                setCilindro(PreciosLentes.cilindro);
                                setCombinada(PreciosLentes.combinada);
                                setTratamiento(PreciosLentes.tratamiento);
                                setPrecio(PreciosLentes.precio);
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button 
                              className="btn btn-danger btn-sm" 
                              onClick={() => {
                                setShowDeleteModal(true);
                                setSelectedPreciosLentes(PreciosLentes);
                              }}
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      )
                    ))
                  ) : (
                    <tr><td colSpan="8" className="text-center">No hay registros para mostrar</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      <PreciosLentesCRUD
        tipoLente={tipoLente} setTipoLente={setTipoLente}
        material={material} setMaterial={setMaterial}
        serie={serie} setSerie={setSerie}
        esfera={esfera} setEsfera={setEsfera}
        cilindro={cilindro} setCilindro={setCilindro}
        combinada={combinada} setCombinada={setCombinada}
        tratamiento={tratamiento} setTratamiento={setTratamiento}
        precio={precio} setPrecio={setPrecio}
        
        showModal={showModal} setShowModal={setShowModal}
        showEditModal={showEditModal} setShowEditModal={setShowEditModal}
        showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}
        
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        
        selectedPreciosLentes={selectedPreciosLentes}
      />
    </div>
  );
}

export default PreciosLentes;
