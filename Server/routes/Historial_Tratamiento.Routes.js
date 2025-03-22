import { Router } from 'express';
import {
 getHistoriales_Tratamiento, 
 createHistorial_Tratamiento, 
 updateHistorial_Tratamiento, 
 deleteHistorial_Tratamiento
} from '../controllers/Historial_Tratamiento.Controller.js';

const router = Router();

router.get('/', getHistoriales_Tratamiento);

router.post('/create', createHistorial_Tratamiento);

router.put('/update/:idHistorialTratamiento', updateHistorial_Tratamiento);

router.delete('/delete/:idHistorialTratamiento', deleteHistorial_Tratamiento);

export default router;