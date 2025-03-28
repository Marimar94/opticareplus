import { Router} from "express";
import { createHistorial_TipoLente, deleteHistorial_TipoLente, getHistorial_TipoLente, updateHistorial_TipoLente}
from "../controllers/Historial_TipoLente.Controller.js";

const router = Router();

router.get("/", getHistorial_TipoLente);
router.post("/create", createHistorial_TipoLente );
router.put("/update/:idHistorialTipoLente", updateHistorial_TipoLente);
router.delete("/delete/:idHistorialTipoLente", deleteHistorial_TipoLente);

export default router;
