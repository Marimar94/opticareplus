import { Router } from 'express';
import {
 getHistorialesClinicos, 
 createHistorialClinico, 
 updateHistorialClinico, 
 deleteHistorialClinico
} from '../controllers/HistorialClinico.Controller.js';

const router = Router();

router.get('/', getHistorialesClinicos);

router.post('/create', createHistorialClinico);

router.put('/update/:idHistorialClinico', updateHistorialClinico);

router.delete('/delete/:idHistorialClinico', deleteHistorialClinico);

export default router;
