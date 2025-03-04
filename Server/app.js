import express from "express";
import cors from "cors";

import indexRoutes from "./routes/index.Routes.js";

//------------------------------------- EJEMPLOS------------------------------------------------------
import edificioRoutes from "./routes/edificio.Routes.js";
import aulaRoutes from "./routes/aula.Routes.js";

//---------------------------------- IMPORTACIÓN DE RUTAS --------------------------------------------
import pacienteRoutes from "./routes/Paciente.Routes.js";
import inventarioRoutes from "./routes/Inventario.Routes.js";
import preciosLentesRoutes from "./routes/PreciosLentes.Routes.js";
import preciosLentesContactoRoutes from "./routes/PreciosLentesContacto.Routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/",indexRoutes);


//------------------------------------------ RUTAS EJEMPL--------------------------------------------
app.use("/edificio",edificioRoutes);
app.use("/aula", aulaRoutes);
//--------------------------------------------- RUTAS -----------------------------------------
app.use("/Paciente", pacienteRoutes); // Rutas para Paciente para la api (front)
app.use("/Inventario", inventarioRoutes);
app.use("/PreciosLentes", preciosLentesRoutes);
app.use("/PreciosLentesContacto", preciosLentesContactoRoutes);

export default app;
