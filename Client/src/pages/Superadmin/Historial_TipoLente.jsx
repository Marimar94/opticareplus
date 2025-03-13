import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import {getHistorial_TipoLentejs, createHistorial_TipoLentejs, updateHistorial_TipoLentejs, deleteHistorial_TipoLentejs} 
from '../../assets/js/Historial_TipoLentes.js';

import {Historial_TipoLenteCRUD} from './Historial_TipoLenteCRUD.jsx';

function Historial_TipoLente() {
  // LISTADO
  const [Historial_TipoLenteList, setHistorial_TipoLenteList] = useState([]);
  const [idHistorialTipoLente, setidHistorialTipoLente] = useState("");
  const [nombre, setNombre] = useState("");

  // MODALES
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // BUSQUEDA
  const [searchText, setSearchText] = useState("");

  const [selectedHistorial_TipoLente, setselectedHistorial_TipoLente] = useState(null);

  useEffect(() => {
    getHistorial_TipoLentejs(setHistorial_TipoLenteList);
  }, []);

  const handleAdd = () => {
    console.log("Añadiendo nuevo tipo lente:", {
      idHistorialTipoLente,
      nombre
    });
    createHistorial_TipoLentejs(nombre,setShowModal,
      () => getHistorial_TipoLentejs(setHistorial_TipoLenteList)
    );
  };

  const handleUpdate = () => {
    updateHistorial_TipoLentejs(
      selectedHistorial_TipoLente.idHistorialTipoLente,
      nombre,
      setShowEditModal,
      () => getHistorial_TipoLentejs(setHistorial_TipoLenteList)
    );
  };

  const handleDelete = () => {
    deleteHistorial_TipoLentejs(
      selectedHistorial_TipoLente.idHistorialTipoLente,
      setShowDeleteModal,
      () => getHistorial_TipoLentejs(setHistorial_TipoLenteList)
    );
  };

  const filteredData = Historial_TipoLenteList.filter(item =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">📦 Tipos de lentes </h2>
        <button
          className="btn btn-success"
          onClick={() => {
            setNombre("");
            setselectedHistorial_TipoLente(null);
            setShowModal(true);
          }}
        >
          <FaPlus /> Registrar Tipo de lentes
        </button>
      </div>

      {/* Buscador */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <input
              type="text"
              className="form-control"
              value={searchText} // <- aquí el cambio
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="🔍 Buscar..."
            />
            <span className="input-group-text bg-primary text-white">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>

      {/* Tabla de Inventario */}
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Tipo Lente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((Historial_TipoLentes) => (
                <tr key={Historial_TipoLentes.idHistorialTipoLente}>
                  <td>{Historial_TipoLentes.nombre}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setShowEditModal(true);
                        setselectedHistorial_TipoLente(Historial_TipoLentes);
                        setidHistorialTipoLente(Historial_TipoLentes.idHistorialTipoLente);
                        setNombre(Historial_TipoLentes.nombre);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setselectedHistorial_TipoLente(Historial_TipoLentes);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No hay registros para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Modales */}
      <Historial_TipoLenteCRUD  
      nombre={nombre} setNombre={setNombre}
      showModal={showModal} setShowModal={setShowModal}
      showEditModal={showEditModal} setShowEditModal={setShowEditModal}
      showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}
      selectedHistorial_TipoLente={selectedHistorial_TipoLente}
      handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete}  
      /> 

    </div>
  );
}

export default Historial_TipoLente;
