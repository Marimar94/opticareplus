import '../../assets/css/App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import {getHistorial_Materialjs, createHistorial_Materialjs, updateHistorial_Materialjs, deleteHistorial_Materialjs} 
from '../../assets/js/Historial_Material.js';

import {Historial_MaterialCRUD} from './Historial_MaterialCRUD.jsx';

function Historial_Material() {
  // LISTADO
  const [Historial_MaterialList, setHistorial_Material] = useState([]);
  const [idHistorialMaterial, setidHistorialMaterial] = useState("");
  const [nombre, setNombre] = useState("");

  // MODALES
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // BUSQUEDA
  const [searchText, setSearchText] = useState("");

  const [selectedHistorial_Material, setselectedHistorial_Material] = useState(null);

  useEffect(() => {
    getHistorial_Materialjs(setHistorial_Material);
  }, []);

  const handleAdd = () => {
    console.log("Añadiendo nuevo material:", {
      idHistorialMaterial,
      nombre
    });
    createHistorial_Materialjs(nombre,setShowModal,
      () => getHistorial_Materialjs(setHistorial_Material)
    );
  };

  const handleUpdate = () => {
    updateHistorial_Materialjs(
      selectedHistorial_Material.idHistorialMaterial,
      nombre,
      setShowEditModal,
      () => getHistorial_Materialjs(setHistorial_Material)
    );
  };

  const handleDelete = () => {
    deleteHistorial_Materialjs(
      selectedHistorial_Material.idHistorialMaterial,
      setShowDeleteModal,
      () => getHistorial_Materialjs(setHistorial_Material)
    );
  };

  const filteredData = Historial_MaterialList.filter(item =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">📦 Materiales </h2>
        <button
          className="btn btn-success"
          onClick={() => {
            setNombre("");
            setselectedHistorial_Material(null);
            setShowModal(true);
          }}
        >
          <FaPlus /> Registrar Material
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
              <th>Material</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((Historial_Material) => (
                <tr key={Historial_Material.idHistorialMaterial}>
                  <td>{Historial_Material.nombre}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setShowEditModal(true);
                        setselectedHistorial_Material(Historial_Material);
                        setidHistorialMaterial(Historial_Material.idHistorialMaterial);
                        setNombre(Historial_Material.nombre);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setselectedHistorial_Material(Historial_Material);
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
      <Historial_MaterialCRUD  
      nombre={nombre} setNombre={setNombre}
      showModal={showModal} setShowModal={setShowModal}
      showEditModal={showEditModal} setShowEditModal={setShowEditModal}
      showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}
      selectedHistorial_Material={selectedHistorial_Material}
      handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete}  
      />

    </div>
  );
}

export default Historial_Material;
