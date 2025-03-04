import { Router } from 'express';
import { getPreciosLentes, createPreciosLentes, updatePreciosLentes, deletePreciosLentes}
from '../controllers/PreciosLentes.Controller.js';

const router = Router();
router.get('/', getPreciosLentes);
router.post('/create', createPreciosLentes);
router.put('/update/:idPrecio', updatePreciosLentes);
router.delete('/delete/:idPrecio', deletePreciosLentes);

export default router;