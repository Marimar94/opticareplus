import './css/Navbar.css'; // Archivo de estilos personalizado
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Usuario">Usuario</Link></li>
                <li><Link to="/Persona">Persona</Link></li>
                <li><Link to="/Alumno">Alumno</Link></li>
                <li><Link to="/Administrativo">Administrativo</Link></li>
                <li><Link to="/Profesor">Profesor</Link></li>
                <li><Link to="/Periodo">Periodo</Link></li>
                <li><Link to="/Departamento">Departamento</Link></li>
                <li><Link to="/Puesto">Puesto</Link></li>
                <li><Link to="/Tramite">Tramite</Link></li>  
                <li><Link to="/AlumnoTramite">Alumno Tramite</Link></li>  
                <li><Link to="/TramiteProceso">Tramite Proceso</Link></li>  
                <li><Link to="/AlumnoProceso">Alumno Proceso</Link></li>  
                <li><Link to="/Actividad">Actividad</Link></li>  
                <li><Link to="/Edificio">Edificio</Link></li>  
                <li><Link to="/Aula">Aula</Link></li>  
                <li><Link to="/Bloque">Bloque</Link></li>  
                <li><Link to="/NivelEstudio" >Nivel de Estudio</Link></li>
                <li><Link to="/AsignarPA" >Asignar Programa Academico</Link></li>
                <li><Link to="/ProgramaAcademico" >Programa Academico</Link></li>
                <li><Link to="/MapaCurricular">Mapa Curricular</Link></li>
                <li><Link to="/Grupo">Grupo</Link></li>
                <li><Link to="/MateriaUnidad">Materia Unidad</Link></li>
            </ul>  
        </div>
    );
}

export default Navbar;
