/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

// IMPORTAR LOS GET DE TUS LLAVES FORÁNEAS
import { getHistorialClinico } from "../../api/HistorialClinico.api.js";
import { getTratamientos } from "../../api/Tratamientos.api.js";

export const Historial_TratamientoCRUD = ({
  idTratamiento, setIdTratamiento,
  idHistorialClinico, setIdHistorialClinico,
  showModal, setShowModal,
  showEditModal, setShowEditModal,
  showDeleteModal, setShowDeleteModal,
  handleAdd, handleUpdate, handleDelete,
  selectedHistorial_Tratamiento
}) => {
  // CONSTANTES PARA LLAMAR LAS OTRAS TABLAS (FK)
  const [historialClinicoList, setHistorialClinicoList] = useState([]);
  const [tratamientoList, setTratamientoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historialData = await getHistorialClinico();
        const tratamientoData = await getTratamientos();
        setHistorialClinicoList(historialData);
        setTratamientoList(tratamientoData);
      } catch (err) {
        setError(err);
        console.error("Error al obtener los datos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos: {error.message}</div>;

  return (
    <>
      {/* Modal para registrar */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Agrega Tratamiento</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Historial Clínico:</span>
                <select className="form-select" value={idHistorialClinico} onChange={(event) => setIdHistorialClinico(event.target.value)}>
                  <option value="">Selecciona un Historial Clínico</option>
                  {historialClinicoList.map((historial) => (
                    <option key={historial.idHistorialClinico} value={historial.idHistorialClinico}>
                      {historial.nombrePaciente}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tratamiento:</span>
                <select className="form-select" value={idTratamiento} onChange={(event) => setIdTratamiento(event.target.value)}>
                  <option value="">Selecciona un Tratamiento</option>
                  {tratamientoList.map((tratamiento) => (
                    <option key={tratamiento.idTratamiento} value={tratamiento.idTratamiento}>
                      {tratamiento.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleAdd}>Registrar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para editar tratamiento */}
      <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Editar Tratamiento</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Historial Clínico:</span>
                <select className="form-select" value={idHistorialClinico} onChange={(event) => setIdHistorialClinico(event.target.value)}>
                  <option value="">Selecciona un Historial Clínico</option>
                  {historialClinicoList.map((historial) => (
                    <option key={historial.idHistorialClinico} value={historial.idHistorialClinico}>
                      {historial.nombrePaciente}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tratamiento:</span>
                <select className="form-select" value={idTratamiento} onChange={(event) => setIdTratamiento(event.target.value)}>
                  <option value="">Selecciona un Tratamiento</option>
                  {tratamientoList.map((tratamiento) => (
                    <option key={tratamiento.idTratamiento} value={tratamiento.idTratamiento}>
                      {tratamiento.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para eliminar tratamiento */}
      <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Eliminar Tratamiento</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar el tratamiento de: <strong>{selectedHistorial_Tratamiento?.nombrePaciente}</strong>?</p>
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