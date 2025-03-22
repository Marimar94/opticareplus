/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

//IMPORTAR LOS GET DE TUS LLAVES FORÁNEAS
//import { getHistorial_TipoLente } from "../../api/Historial_TipoLentes.api.js";
import { getHistorial_Material } from "../../api/Historial_Material.api.js";
import { getTratamientos } from "../../api/Tratamientos.api.js";

export const PrecioCRUD = ({
    idHistorialMaterial, setidHistorialMaterial, 
    idTratamiento, setidTratamiento, 
    serie, setSerie,
    esfera, setEsfera,
    cilindro, setCilindro,
    combinada, setCombinada,
    
    precio, setPrecio,  

    showModal, setShowModal, 
    showEditModal, setShowEditModal, 
    showDeleteModal, setShowDeleteModal, 
    handleAdd, handleUpdate, handleDelete, 
    selectedPrecio
}) => {
   //CONSTANTES PARA LLAMAR LAS OTRAS TABLAS (FK) 
  const [HistorialMaterialList, setHistorialMaterialList] = useState([]);
  const [TratamientosList, setTratamientosList] = useState([]);

  useEffect(() => {
    getHistorial_Material().then(data => setHistorialMaterialList(data)).catch(error => console.error("Error al obtener los Materiales:", error));
  }, []);

  useEffect(() => {
    getTratamientos().then(data => setTratamientosList(data)).catch(error => console.error("Error al obtener los tratamientos:", error));
  }, []);

  return (
    <>
      {/* Modal para registrar */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Agrega Precio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">

              <div className="input-group mb-3">
                <span className="input-group-text">Material:</span>
                <select className="form-select" value={idHistorialMaterial} onChange={(event) => setidHistorialMaterial(event.target.value)}>
                  <option value="">Selecciona un Material</option>
                  {HistorialMaterialList.map((material) => (
                    <option key={material.idHistorialMaterial} value={material.idHistorialMaterial}>{material.nombre} </option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tratamiento:</span>
                <select className="form-select" value={idTratamiento} onChange={(event) => setidTratamiento(event.target.value)}>
                  <option value="">Selecciona un Tratamiento</option>
                  {TratamientosList.map((tratamiento) => (
                    <option key={tratamiento.idTratamiento} value={tratamiento.idTratamiento}>{tratamiento.nombre} </option>
                  ))}
                </select>
              </div>


                <div className="input-group mb-3">
                <span className="input-group-text">Serie:</span>
                <input
                    type="text"
                    className="form-control"
                    value={serie}
                    onChange={(event) => setSerie(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Esfera:</span>
                <input
                    type="text"
                    className="form-control"
                    value={esfera}
                    onChange={(event) => setEsfera(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Cilindro:</span>
                <input
                    type="text"
                    className="form-control"
                    value={cilindro}
                    onChange={(event) => setCilindro(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Combinada:</span>
                <input
                    type="text"
                    className="form-control"
                    value={combinada}
                    onChange={(event) => setCombinada(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Costo:</span>
                <input
                    type="text"
                    className="form-control"
                    value={precio}
                    onChange={(event) => setPrecio(event.target.value)}
                />
                </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleAdd}>Registrar</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal para editar aula */}
      <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Editar Precio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <div className="modal-body">

            <div className="input-group mb-3">
                <span className="input-group-text">Material:</span>
                <select className="form-select" value={idHistorialMaterial} onChange={(event) => setidHistorialMaterial(event.target.value)}>
                  <option value="">Selecciona un Material</option>
                  {HistorialMaterialList.map((material) => (
                    <option key={material.idHistorialMaterial} value={material.idHistorialMaterial}>{material.nombre} </option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tratamiento:</span>
                <select className="form-select" value={idTratamiento} onChange={(event) => setidTratamiento(event.target.value)}>
                  <option value="">Selecciona un Tratamiento</option>
                  {TratamientosList.map((tratamiento) => (
                    <option key={tratamiento.idTratamiento} value={tratamiento.idTratamiento}>{tratamiento.nombre} </option>
                  ))}
                </select>
              </div>


                <div className="input-group mb-3">
                <span className="input-group-text">Serie:</span>
                <input
                    type="text"
                    className="form-control"
                    value={serie}
                    onChange={(event) => setSerie(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Esfera:</span>
                <input
                    type="text"
                    className="form-control"
                    value={esfera}
                    onChange={(event) => setEsfera(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Cilindro:</span>
                <input
                    type="text"
                    className="form-control"
                    value={cilindro}
                    onChange={(event) => setCilindro(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Combinada:</span>
                <input
                    type="text"
                    className="form-control"
                    value={combinada}
                    onChange={(event) => setCombinada(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Costo:</span>
                <input
                    type="text"
                    className="form-control"
                    value={precio}
                    onChange={(event) => setPrecio(event.target.value)}
                />
                </div>
                   
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para eliminar aula */}
      <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Eliminar Precio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar el precio de: <strong>{selectedPrecio?.material}</strong> con tratamiento  <strong>{selectedPrecio?.tratamiento}</strong>?</p>
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
