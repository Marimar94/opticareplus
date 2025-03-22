/* eslint-disable react/prop-types */

export const TratamientosCRUD = ({
    //CAMPOS DE LA TABLA 
   nombre, setNombre,
  
    //ANIMACIONES 
    showModal, setShowModal,
    showEditModal, setShowEditModal,
    showDeleteModal, setShowDeleteModal,
  
    //FUNCIONES 
    handleAdd, handleUpdate, handleDelete,

    selectedTratamientos
}) => {
  return (
      <>
      {/* ------------------- registrar ------------------------------------------ */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">Registrar Tratamientos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">

                <div className="input-group mb-3">
                  <span className="input-group-text">Nombre</span>
                  <input type="text" className="form-control" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleAdd}>Registrar</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal para editar periodo */}
        <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Editar Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">

              <div className="input-group mb-3">
                  <span className="input-group-text">Nombre</span>
                  <input type="text" className="form-control" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Modal para eliminar periodo */}
        <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Eliminar Tratamientos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar el tratamiento: <strong> {selectedTratamientos?.nombre}</strong>?</p>
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