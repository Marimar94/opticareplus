/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

//IMPORTAR LOS GET DE TUS LLAVES FORÁNEAS
import { getPaciente } from "../../api/Paciente.api.js";
import { getInventario } from "../../api/Inventario.api.js";
import { getHistorial_TipoLente } from "../../api/Historial_TipoLentes.api.js";
import { getHistorial_Material } from "../../api/Historial_Material.api.js";

export const HistorialClinicoCRUD = ({
    idHistorialClinico, setIdHistorialClinico,
    idPaciente, setIdPaciente,
    idInventario, setIdInventario,
    idHistorialTipoLente, setIdHistorialTipoLente,
    idHistorialMaterial, setIdHistorialMaterial,
    
    rx_esfera_od, setRx_esfera_od,
    rx_cilindro_od, setRx_cilindro_od,
    rx_eje_od, setRx_eje_od,
    
    rx_esfera_oi, setRx_esfera_oi,
    rx_cilindro_oi, setRx_cilindro_oi,
    rx_eje_oi, setRx_eje_oi,
    
    add_lente, setAdd_lente,
    ao, setAo,
    dnp, setDnp,
    
    antecedentes_salud, setAntecedentes_salud,
    antecedentes_familiares, setAntecedentes_familiares,
    medicamentos, setMedicamentos,
    dosis, setDosis,
    cirugias, setCirugias,    

    showModal, setShowModal, 
    showEditModal, setShowEditModal, 
    showDeleteModal, setShowDeleteModal, 
    handleAdd, handleUpdate, handleDelete, 
    selectedHistorial
}) => {
   //CONSTANTES PARA LLAMAR LAS OTRAS TABLAS (FK) 
  const [pacientesList, setPacientesList] = useState([]);
  const [inventarioList, setInventarioList] = useState([]);
  const [tipoLentesList, setTipoLentesList] = useState([]);
  const [materialList, setMaterialList] = useState([]);

  useEffect(() => {
    getPaciente().then(data => setPacientesList(data)).catch(error => console.error("Error al obtener los Pacientes:", error));
    getInventario().then(data => setInventarioList(data)).catch(error => console.error("Error al obtener los Inventarios:", error));
    getHistorial_TipoLente().then(data => setTipoLentesList(data)).catch(error => console.error("Error al obtener los Tipos de lentes:", error));
    getHistorial_Material().then(data => setMaterialList(data)).catch(error => console.error("Error al obtener los Materiales:", error));
  }, []);

  return (
    <>
      {/* Modal para registrar */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Agrega Historial</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">

              <div className="input-group mb-3">
                <span className="input-group-text">Paciente:</span>
                <select className="form-select" value={idPaciente} onChange={(event) => setIdPaciente(event.target.value)}>
                  <option value="">Selecciona un Paciente</option>
                  {pacientesList.map((paciente) => (
                    <option key={paciente.idPaciente} value={paciente.idPaciente}>{paciente.nombre} {paciente.apellido}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Inventario:</span>
                <select className="form-select" value={idInventario} onChange={(event) => setIdInventario(event.target.value)}>
                  <option value="">Selecciona un modelo de lentes</option>
                  {inventarioList.map((Inventario) => (
                    <option key={Inventario.idInventario} value={Inventario.idInventario}>{Inventario.modelo}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tipo de Lente:</span>
                <select className="form-select" value={idHistorialTipoLente} onChange={(event) => setIdHistorialTipoLente(event.target.value)}>
                  <option value="">Selecciona un tipo de lente </option>
                  {tipoLentesList.map((tipoLente) => (
                    <option key={tipoLente.idHistorialTipoLente} value={tipoLente.idHistorialTipoLente}>{tipoLente.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Material:</span>
                <select className="form-select" value={idHistorialMaterial} onChange={(event) => setIdHistorialMaterial(event.target.value)}>
                  <option value="">Selecciona un Paciente</option>
                  {materialList.map((material) => (
                    <option key={material.idHistorialMaterial} value={material.idHistorialMaterial}>{material.nombre}</option>
                  ))}
                </select>
              </div>
              
                            <div className="input-group mb-3">
                <span className="input-group-text">Rx Esfera OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_esfera_od}
                    onChange={(event) => setRx_esfera_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Cilindro OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_cilindro_od}
                    onChange={(event) => setRx_cilindro_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Eje OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_eje_od}
                    onChange={(event) => setRx_eje_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Esfera OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_esfera_oi}
                    onChange={(event) => setRx_esfera_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Cilindro OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_cilindro_oi}
                    onChange={(event) => setRx_cilindro_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Eje OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_eje_oi}
                    onChange={(event) => setRx_eje_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Add Lente:</span>
                <input
                    type="text"
                    className="form-control"
                    value={add_lente}
                    onChange={(event) => setAdd_lente(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">AO:</span>
                <input
                    type="text"
                    className="form-control"
                    value={ao}
                    onChange={(event) => setAo(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">DNP:</span>
                <input
                    type="text"
                    className="form-control"
                    value={dnp}
                    onChange={(event) => setDnp(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Antecedentes de Salud:</span>
                <textarea
                    className="form-control"
                    value={antecedentes_salud}
                    onChange={(event) => setAntecedentes_salud(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Antecedentes Familiares:</span>
                <textarea
                    className="form-control"
                    value={antecedentes_familiares}
                    onChange={(event) => setAntecedentes_familiares(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Medicamentos:</span>
                <textarea
                    className="form-control"
                    value={medicamentos}
                    onChange={(event) => setMedicamentos(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Dosis:</span>
                <textarea
                    className="form-control"
                    value={dosis}
                    onChange={(event) => setDosis(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Cirugías:</span>
                <textarea
                    className="form-control"
                    value={cirugias}
                    onChange={(event) => setCirugias(event.target.value)}
                ></textarea>
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
              <h5 className="modal-title" id="editModalLabel">Editar Aula</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <div className="modal-body">

             <div className="input-group mb-3">
                <span className="input-group-text">Paciente:</span>
                <select className="form-select" value={idPaciente} onChange={(event) => setIdPaciente(event.target.value)}>
                  <option value="">Selecciona un Paciente</option>
                  {pacientesList.map((paciente) => (
                    <option key={paciente.idPaciente} value={paciente.idPaciente}>{paciente.nombre}{paciente.apellido}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Inventario:</span>
                <select className="form-select" value={idInventario} onChange={(event) => setIdInventario(event.target.value)}>
                  <option value="">Selecciona un modelo de lentes</option>
                  {inventarioList.map((Inventario) => (
                    <option key={Inventario.idInventario} value={Inventario.idInventario}>{Inventario.modelo}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tipo de Lente:</span>
                <select className="form-select" value={idHistorialTipoLente} onChange={(event) => setIdHistorialTipoLente(event.target.value)}>
                  <option value="">Selecciona un tipo de lente </option>
                  {tipoLentesList.map((tipoLente) => (
                    <option key={tipoLente.idHistorialTipoLente} value={tipoLente.idHistorialTipoLente}>{tipoLente.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Material:</span>
                <select className="form-select" value={idHistorialMaterial} onChange={(event) => setIdHistorialMaterial(event.target.value)}>
                  <option value="">Selecciona un Paciente</option>
                  {materialList.map((material) => (
                    <option key={material.idHistorialMaterial} value={material.idHistorialMaterial}>{material.nombre}</option>
                  ))}
                </select>
              </div>
              
                            <div className="input-group mb-3">
                <span className="input-group-text">Rx Esfera OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_esfera_od}
                    onChange={(event) => setRx_esfera_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Cilindro OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_cilindro_od}
                    onChange={(event) => setRx_cilindro_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Eje OD:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_eje_od}
                    onChange={(event) => setRx_eje_od(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Esfera OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_esfera_oi}
                    onChange={(event) => setRx_esfera_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Cilindro OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_cilindro_oi}
                    onChange={(event) => setRx_cilindro_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Rx Eje OI:</span>
                <input
                    type="text"
                    className="form-control"
                    value={rx_eje_oi}
                    onChange={(event) => setRx_eje_oi(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Add Lente:</span>
                <input
                    type="text"
                    className="form-control"
                    value={add_lente}
                    onChange={(event) => setAdd_lente(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">AO:</span>
                <input
                    type="text"
                    className="form-control"
                    value={ao}
                    onChange={(event) => setAo(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">DNP:</span>
                <input
                    type="text"
                    className="form-control"
                    value={dnp}
                    onChange={(event) => setDnp(event.target.value)}
                />
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Antecedentes de Salud:</span>
                <textarea
                    className="form-control"
                    value={antecedentes_salud}
                    onChange={(event) => setAntecedentes_salud(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Antecedentes Familiares:</span>
                <textarea
                    className="form-control"
                    value={antecedentes_familiares}
                    onChange={(event) => setAntecedentes_familiares(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Medicamentos:</span>
                <textarea
                    className="form-control"
                    value={medicamentos}
                    onChange={(event) => setMedicamentos(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Dosis:</span>
                <textarea
                    className="form-control"
                    value={dosis}
                    onChange={(event) => setDosis(event.target.value)}
                ></textarea>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text">Cirugías:</span>
                <textarea
                    className="form-control"
                    value={cirugias}
                    onChange={(event) => setCirugias(event.target.value)}
                ></textarea>
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
              <h5 className="modal-title" id="deleteModalLabel">Eliminar Historial</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar el historial de: <strong>{selectedHistorial?.nombrePaciente}</strong>?</p>
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
