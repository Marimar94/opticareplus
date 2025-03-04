import '../../assets/css/App.css'; // No se mueve
import { useState, useEffect } from 'react'; // No se mueve
import 'bootstrap/dist/css/bootstrap.min.css'; // No se mueve
import { FaUserCircle } from "react-icons/fa"; // Icono de usuario

import { getPacientejs, createPacientejs, updatePacientejs, deletePacientejs } 
from '../../assets/js/Paciente.js';

import { PacienteCRUD } from './PacienteCRUD.jsx';

function Paciente() {
  const [pacienteList, setPaciente] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [estado, setEstado] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  useEffect(() => { getPacientejs(setPaciente); }, []);

  const filteredData = pacienteList.filter(item =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAdd = () => {
    createPacientejs(nombre, apellido, edad, sexo, ocupacion, direccion, localidad, estado, telefono, observaciones, setShowModal, () => getPacientejs(setPaciente));
  };

  const handleUpdate = () => {
    updatePacientejs(selectedPaciente.idPaciente, nombre, apellido, edad, sexo, ocupacion, direccion, localidad, estado, telefono, observaciones, setShowEditModal, () => getPacientejs(setPaciente));
  };

  const handleDelete = () => {
    deletePacientejs(selectedPaciente.idPaciente, setShowDeleteModal, () => getPacientejs(setPaciente));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>📋 Lista de Pacientes</h2>
        <button className="btn btn-success" onClick={() => {
          setNombre("");
          setApellido("");
          setEdad("");
          setSexo("");
          setOcupacion("");
          setDireccion("");
          setLocalidad("");
          setEstado("");
          setTelefono("");
          setObservaciones("");
          setSelectedPaciente(null);
          setShowModal(true);
        }}>
          + Registrar Paciente
        </button>
      </div>

      {/* Buscador */}
      <input
        type="text"
        className="form-control mb-3"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="🔍 Buscar Paciente..."
      />

      {/* Cards de Pacientes */}
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((paciente) => (
            <div key={paciente.idPaciente} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-header text-center bg-primary text-white">
                  <FaUserCircle size={50} />
                  <h5 className="mt-2">{paciente.nombre} {paciente.apellido}</h5>
                </div>
                <div className="card-body">
                  <p><strong>Edad:</strong> {paciente.edad} años</p>
                  <p><strong>Sexo:</strong> {paciente.sexo}</p>
                  <p><strong>Ocupación:</strong> {paciente.ocupacion}</p>
                  <p><strong>Dirección:</strong> {paciente.direccion}, {paciente.localidad}, {paciente.estado}</p>
                  <p><strong>Teléfono:</strong> {paciente.telefono}</p>
                  <p><strong>Observaciones:</strong> {paciente.observaciones}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-warning btn-sm" onClick={() => {
                    setShowEditModal(true);
                    setSelectedPaciente(paciente);
                    setNombre(paciente.nombre);
                    setApellido(paciente.apellido);
                    setEdad(paciente.edad);
                    setSexo(paciente.sexo);
                    setOcupacion(paciente.ocupacion);
                    setDireccion(paciente.direccion);
                    setLocalidad(paciente.localidad);
                    setEstado(paciente.estado);
                    setTelefono(paciente.telefono);
                    setObservaciones(paciente.observaciones);
                  }}>
                    ✏️ Editar
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => {
                    setShowDeleteModal(true);
                    setSelectedPaciente(paciente);
                  }}>
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No hay registros para mostrar.</p>
        )}
      </div>

      {/* Modal de CRUD */}
      <PacienteCRUD
        nombre={nombre} setNombre={setNombre}
        apellido={apellido} setApellido={setApellido}
        edad={edad} setEdad={setEdad}
        sexo={sexo} setSexo={setSexo}
        ocupacion={ocupacion} setOcupacion={setOcupacion}
        direccion={direccion} setDireccion={setDireccion}
        localidad={localidad} setLocalidad={setLocalidad}
        estado={estado} setEstado={setEstado}
        telefono={telefono} setTelefono={setTelefono}
        observaciones={observaciones} setObservaciones={setObservaciones}
        showModal={showModal} setShowModal={setShowModal}
        showEditModal={showEditModal} setShowEditModal={setShowEditModal}
        showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        selectedPaciente={selectedPaciente}
      />
    </div>
  );
}

export default Paciente;
