/* eslint-disable react/prop-types */

export const InventarioCRUD = ({
    //CAMPOS DE LA TABLA 
    marca, setMarca,
    modelo, setModelo,
    color, setColor,
    numeroColor, setNumeroColor,
    material, setMaterial,
    cantidad, setCantidad,
    exhibicion, setExhibicion,
    precio, setPrecio,
    fecha, setFecha,
    estatus, setEstatus,
    precioVenta, setPrecioVenta,

    //ANIMACIONES 
    showModal, setShowModal,
    showEditModal, setShowEditModal,
    showDeleteModal, setShowDeleteModal,

    //FUNCIONES 
    handleAdd, handleUpdate, handleDelete,

    selectedInventario
  }) => {
    return (
        <>
          {}
          <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">Registrar Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Marca:</span>
                                <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Modelo:</span>
                                <input type="text" className="form-control" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Color:</span>
                                <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Número de Color:</span>
                                <input type="text" className="form-control" value={numeroColor} onChange={(e) => setNumeroColor(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                <span className="input-group-text">Material:</span>
                                <input type="text" className="form-control" value={material} onChange={(e) => setMaterial(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Cantidad:</span>
                                <input type="number" className="form-control" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                    <span className="input-group-text">Exhibición:</span>
                    <select className="form-select" value={exhibicion} onChange={(event) => setExhibicion(event.target.value)}>
                      <option value="">Selecciona un tipo de exhibicion</option>
                      <option value="Dama">Dama</option>
                      <option value="Caballero">Caballero</option>
                      <option value="Niño">Niño</option>
                    </select>
                  </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Precio:</span>
                                <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Fecha:</span>
                                <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                    <span className="input-group-text">Estatus:</span>
                    <select className="form-select" value={estatus} onChange={(event) => setEstatus(event.target.value)}>
                      <option value="">Selecciona un tipo de estatus</option>
                      <option value="Disponible">Disponible</option>
                      <option value="Vendido">Vendido</option>
                    </select>
                  </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Precio de Venta:</span>
                                <input type="number" className="form-control" value={precioVenta} onChange={(e) => setPrecioVenta(e.target.value)} />
                            </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
                  <button type="button" className="btn btn-primary" onClick={handleAdd}>Registrar</button>
                </div>
              </div>
            </div>
          </div>
          
          {}
          <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="editModalLabel">Editar Producto</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
      </div>
      <div className="modal-body">
        
        <div className="input-group mb-3">
          <span className="input-group-text">Marca:</span>
          <input type="text" className="form-control" value={marca} onChange={(event) => setMarca(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Modelo</span>
          <input type="text" className="form-control" value={modelo} onChange={(event) => setModelo(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Color</span>
          <input type="text" className="form-control" value={color} onChange={(event) => setColor(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Número de Color</span>
          <input type="text" className="form-control" value={numeroColor} onChange={(event) => setNumeroColor(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Material</span>
          <input type="text" className="form-control" value={material} onChange={(event) => setMaterial(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Cantidad</span>
          <input type="number" className="form-control" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Exhibición</span>
          <select className="form-select" value={exhibicion} onChange={(event) => setExhibicion(event.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Dama">Dama</option>
            <option value="Caballero">Caballero</option>
            <option value="Niño">Niño</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Precio</span>
          <input type="number" className="form-control" value={precio} onChange={(event) => setPrecio(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Fecha</span>
          <input type="date" className="form-control" value={fecha} onChange={(event) => setFecha(event.target.value)} />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Estatus</span>
          <select className="form-select" value={estatus} onChange={(event) => setEstatus(event.target.value)}>
            <option value="">Selecciona un estatus</option>
            <option value="Disponible">Disponible</option>
            <option value="Vendido">Vendido</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Precio de Venta</span>
          <input type="number" className="form-control" value={precioVenta} onChange={(event) => setPrecioVenta(event.target.value)} />
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cerrar</button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
      </div>
    </div>
  </div>
</div>

          {}
          <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">Eliminar Producto</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>¿Estás seguro de que deseas eliminar el producto: <strong>{selectedInventario?.nombre}</strong>?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                </div>
              </div>
            </div>
          </div><div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="deleteModalLabel">Eliminar Producto</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
      </div>
      <div className="modal-body">
        <p>¿Estás seguro de que deseas eliminar el producto: <strong>{selectedInventario?.marca} {selectedInventario?.modelo}</strong>?</p>
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