import {Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Inicio from './pages/Superadmin/Inicio';
import NotFound from './pages//Superadmin/NotFound'; //Página por si no se encuentra la ruta


//-------------------------------IMPORTACION DE RUTAS EJEMPLOS ------------------------------ 
import Edificio from './pages/Superadmin/Edificio';
import Aula from "./pages/Superadmin/Aula";


//---------------------------------- IMPORTACION DE RUTAS ------------------------------------- 
import Paciente from './pages/Superadmin/Paciente';
import Inventario from './pages/Superadmin/Inventario';
import PreciosLentes from './pages/Superadmin/PreciosLentes';
import PreciosLentesContacto from './pages/Superadmin/PreciosLentesContacto';
import Histrorial_Material from './pages/Superadmin/Histrorial_Material';

function App() {
  return(
  <>
  <Navbar /> {/* Componente de la barra de navegación */}
    <div style={{ marginTop: '56px' }}> {/* Ajusta según la altura de tu Navbar */}
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path='/Pacientes' element={<Paciente/>}> </Route>
      <Route path='/Inventario' element={<Inventario/>}> </Route>
      <Route path='/PreciosLentes' element={<PreciosLentes/>}> </Route>
      <Route path='/PreciosLentesContacto' element={<PreciosLentesContacto/>}> </Route>
      <Route path='/Materiales' element={<Histrorial_Material/>}> </Route> 
      {/*---------------------------------RUTAS EJEMPLOS--------------------------------- */}
      <Route path="/Edificio" element={<Edificio />} />
      <Route path="/Aula" element={<Aula />} />
      <Route path="*" element={< NotFound/>} /> {/* Página por si no se encuentra la ruta */}
    </Routes>
    </div>
  </>
  );
}

export default App
