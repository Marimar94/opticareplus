import { db } from "../db/connection.js";

export const getPreciosLentesContacto = async(req, res) => {
    try{
        const [rows] = await db.query("SELECT * FROM precioslentescontacto");
        if (rows.length > 0){
            res.json({ message: "Precios de Lentes de contacto obtenidos correctamente", data : rows});
        }else{
            res.status(404).json({ message: "No se encontraron datos del Precios de Lentes de contacto" });
        }
        } catch (error){
            return res.status(500).json({ message: "Algo salió mal" });
        }
            };

export const createPreciosLentesContacto = async (req, res) =>{
    try{
        const{ marca, duracion, esfera, precio} = req.body;
        if (! marca || !duracion || !precio){
            return res.status(400).json({ message: "Todos los campos son requeridos: marca, duracion, precio"});
        }
        const [rows] = await db.query(
            "INSERT INTO  preciosLentesContacto (marca, duracion, esfera, precio) VALUES (?, ?, ?, ?)",
            [marca, duracion, esfera, precio]
        );
        res.status(201).json({
            message: `PreciosLentesContacto '${marca} ${precio}' creado`,
            idPrecioContacto: rows.insertId,
            marca, 
            duracion, 
            esfera, 
            precio
        });
    } catch (error){
        console.error("Error al crear Precios Lentes contacto:", error);
        res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
    };

    export const updatePreciosLentesContacto = async (req, res) => {
        try{
            const {idPrecioContacto} = req.params;
            const { marca, duracion, esfera, precio} = req.body;
            if (! marca || !duracion || !precio){
                return res.status(400).json({ message: "Todos los campos son requerios: marca, duracion, precio"});
            }
            const [rows] = await db.query(
                "UPDATE PreciosLentesContacto SET marca = ?, duracion = ?, esfera = ?, precio = ? WHERE idPrecioContacto = ?",
                [marca, duracion, esfera, precio, idPrecioContacto]
            );
            if (rows.affectedRows > 0){
                res.json({ message: "Precios Lentes contacto actualizado correctamente"});
            }else{
                res.status(404).json({ message: "Precios lentes contacto no encontrado"});
                    
                }
            } catch (error){
                console.error("Error al actualizar Precios Lentes contacto:", error);
                res.status(500).json({ message: "Algo salió mal", error: error.message });
            }
        };

    export const deletePreciosLentesContacto = async (req, res) => {
        try{
            const {  idPrecioContacto } = req.params;
            const [rows] = await db.query("DELETE FROM PreciosLentesContacto WHERE idPrecioContacto = ?", [idPrecioContacto]);
            if (rows.affectedRows > 0){
                res.json({ message: "Precios Lentes contacto eliminado correctamente"});
            }else{
                res.status(404).json({ message: "Precios Lentes contacto no encontrado"});
            }
        } catch (error){
            console.error("Error al eliminar Precios Lentes contacto:", error);
            res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
    };