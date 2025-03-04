/* eslint-disable react/prop-types */

export const PreciosLentesCRUD = ({
  //CAMPOS DE LA TABLA 
 tipoLente, setTipoLente,
 material, setMaterial,
 serie, setSerie,
 esfera, setEsfera,
 cilindro, setCilindro,
 combinada, setCombinada,
 tratamiento, setTratamiento,
 precio, setPrecio,

  //ANIMACIONES 
  showModal, setShowModal,
  showEditModal, setShowEditModal,
  showDeleteModal, setShowDeleteModal,

  //FUNCIONES 
  handleAdd, handleUpdate, handleDelete,

  selectedPreciosLentes
}) => {
  return (
      <>
        {/* ------------------- registrar ------------------------------------------ */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">Registrar Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                  
              <div className="input-group mb-3">
                  <span className="input-group-text">Tipo de Lente:</span>
                  <select className="form-select" value={tipoLente} onChange={(event) => setTipoLente(event.target.value)}>
                    <option value="">Selecciona un tipo de lente</option>
                    <option value="Monofocal">Monofocal</option>
                    <option value="Bifocal">Bifocal</option>
                    <option value="Progresivo">Progresivo</option>
                    <option value="Solar">Solar</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Tipo de material:</span>
                  <select className="form-select" value={material} onChange={(event) => setMaterial(event.target.value)}>
                    <option value="">Selecciona un tipo de material</option>
                    <option value="CR-39">CR-39</option>
                    <option value="Policarbonato">Policarbonato</option>
                    <option value="HI Index">HI Index</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Serie</span>
                  <input type="text" className="form-control" value={serie} onChange={(event) => setSerie(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Esfera</span>
                  <input type="text" className="form-control" value={esfera} onChange={(event) => setEsfera(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Cilindro</span>
                  <input type="text" className="form-control" value={cilindro} onChange={(event) => setCilindro(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Combinada</span>
                  <input type="text" className="form-control" value={combinada} onChange={(event) => setCombinada(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Tratamiento:</span>
                  <select className="form-select" value={tratamiento} onChange={(event) => setTratamiento(event.target.value)}>
                    <option value="">Selecciona un tipo de tratamiento</option>
                    <option value="AR">AR</option>
                    <option value="FOTO AR/W">FOTO AR/W</option>
                    <option value="ANTI-BLUE">ANTI-BLUE</option>
                    <option value="FOTO ANTIBLUE">FOTO ANTIBLUE</option>
                    <option value="SETO">SETO</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                                <span className="input-group-text">Precio:</span>
                                <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
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
                  <span className="input-group-text">Tipo de Lente:</span>
                  <select className="form-select" value={tipoLente} onChange={(event) => setTipoLente(event.target.value)}>
                    <option value="">Selecciona un tipo de lente</option>
                    <option value="Monofocal">Monofocal</option>
                    <option value="Bifocal">Bifocal</option>
                    <option value="Progresivo">Progresivo</option>
                    <option value="Solar">Solar</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Tipo de material:</span>
                  <select className="form-select" value={material} onChange={(event) => setMaterial(event.target.value)}>
                    <option value="">Selecciona un tipo de material</option>
                    <option value="CR-39">CR-39</option>
                    <option value="Policarbonato">Policarbonato</option>
                    <option value="HI Index">HI Index</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Serie</span>
                  <input type="text" className="form-control" value={serie} onChange={(event) => setSerie(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Esfera</span>
                  <input type="text" className="form-control" value={esfera} onChange={(event) => setEsfera(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Cilindro</span>
                  <input type="text" className="form-control" value={cilindro} onChange={(event) => setCilindro(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Combinada</span>
                  <input type="text" className="form-control" value={combinada} onChange={(event) => setCombinada(event.target.value)} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Tratamiento:</span>
                  <select className="form-select" value={tratamiento} onChange={(event) => setTratamiento(event.target.value)}>
                    <option value="">Selecciona un tipo de tratamiento</option>
                    <option value="AR">AR</option>
                    <option value="FOTO AR/W">FOTO AR/W</option>
                    <option value="ANTI-BLUE">ANTI-BLUE</option>
                    <option value="FOTO ANTIBLUE">FOTO ANTIBLUE</option>
                    <option value="SETO">SETO</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Precio:</span>
                <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
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
                <h5 className="modal-title" id="deleteModalLabel">Eliminar Precio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar el precio: <strong>{selectedPreciosLentes?.tipoLente} con material {selectedPreciosLentes?.material}</strong>?</p>
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