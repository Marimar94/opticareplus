import { Router } from 'express';
import { getPreciosLentesContacto, createPreciosLentesContacto, updatePreciosLentesContacto, deletePreciosLentesContacto}
from '../controllers/PreciosLentesContacto.Controller.js';

const router = Router();
router.get('/', getPreciosLentesContacto);
router.post('/create', createPreciosLentesContacto);
router.put('/update/:idPrecioContacto', updatePreciosLentesContacto);
router.delete('/delete/:idPrecioContacto', deletePreciosLentesContacto);

export default router;