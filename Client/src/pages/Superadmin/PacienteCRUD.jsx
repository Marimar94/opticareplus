/* eslint-disable react/prop-types */

const PacienteFormModal = ({
  showModal,
  setShowModal,
  modalTitle,
  handleAction,
  paciente,
  setPaciente,
  actionButtonText
}) => {
  return (
    <div className={`modal fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
          </div>
          <div className="modal-body">
            {[
              { label: "Nombre", key: "nombre", type: "text" },
              { label: "Apellido", key: "apellido", type: "text" },
              { label: "Edad", key: "edad", type: "number" },
              {
                label: "Sexo",
                key: "sexo",
                type: "select",
                options: ["Masculino", "Femenino", "Otro"]
              },
              { label: "Ocupación", key: "ocupacion", type: "text" },
              { label: "Dirección", key: "direccion", type: "text" },
              { label: "Localidad", key: "localidad", type: "text" },
              { label: "Estado", key: "estado", type: "text" },
              { label: "Teléfono", key: "telefono", type: "number" },
              { label: "Observaciones", key: "observaciones", type: "text" }
            ].map(({ label, key, type, options }) => (
              <div className="input-group mb-3" key={key}>
                <span className="input-group-text">{label}:</span>
                {type === "select" ? (
                  <select className="form-select" value={paciente[key]} onChange={(e) => setPaciente({ ...paciente, [key]: e.target.value })}>
                    <option value="">Selecciona una opción</option>
                    {options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input type={type} className="form-control" value={paciente[key]} onChange={(e) => setPaciente({ ...paciente, [key]: e.target.value })} />
                )}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleAction}>{actionButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PacienteCRUD = ({
  nombre, setNombre,
  apellido, setApellido,
  edad, setEdad,
  sexo, setSexo,
  ocupacion, setOcupacion,
  direccion, setDireccion,
  localidad, setLocalidad,
  estado, setEstado,
  telefono, setTelefono,
  observaciones, setObservaciones,

  showModal, setShowModal,
  showEditModal, setShowEditModal,
  showDeleteModal, setShowDeleteModal,

  handleAdd, handleUpdate, handleDelete,
  selectedPaciente
}) => {
  const paciente = { nombre, apellido, edad, sexo, ocupacion, direccion, localidad, estado, telefono, observaciones };
  const setPaciente = (updatedPaciente) => {
    setNombre(updatedPaciente.nombre);
    setApellido(updatedPaciente.apellido);
    setEdad(updatedPaciente.edad);
    setSexo(updatedPaciente.sexo);
    setOcupacion(updatedPaciente.ocupacion);
    setDireccion(updatedPaciente.direccion);
    setLocalidad(updatedPaciente.localidad);
    setEstado(updatedPaciente.estado);
    setTelefono(updatedPaciente.telefono);
    setObservaciones(updatedPaciente.observaciones);
  };

  return (
    <>
      {/* Registrar Paciente */}
      <PacienteFormModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle="Registrar Paciente"
        handleAction={handleAdd}
        paciente={paciente}
        setPaciente={setPaciente}
        actionButtonText="Registrar"
      />

      {/* Editar Paciente */}
      <PacienteFormModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        modalTitle="Editar Paciente"
        handleAction={handleUpdate}
        paciente={paciente}
        setPaciente={setPaciente}
        actionButtonText="Actualizar"
      />

      {/* Eliminar Paciente */}
      <div className={`modal fade ${showDeleteModal ? "show" : ""}`} style={{ display: showDeleteModal ? "block" : "none" }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Eliminar Paciente</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar el paciente: <strong>{selectedPaciente?.nombre}</strong>?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
