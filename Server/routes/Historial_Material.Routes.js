import { Router } from "express";
import { createHistorial_Material, deleteHistorial_Material, getHistorial_Material, updateHistorial_Material} 
from "../controllers/Historial_Material.Controller.js";

const router = Router();

router.get("/", getHistorial_Material);
router.post("/create", createHistorial_Material );
router.put("/update/:idHistorialMaterial", updateHistorial_Material);
router.delete("/delete/:idHistorialMaterial", deleteHistorial_Material);

export default router;
