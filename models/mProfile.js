import conectMongo from "../databases/mongodb.js";
import pool from "../databases/db.js";

let mProfile = {
    getInfo: async (user) => {
        try {
            const db = await conectMongo();
            const info = await db.collection(`${user}`).find().toArray();
            console.table(info);
            return info;
        } catch(err) {
            throw { stauts: 500, message: "Error al mostrar información" };
        }
    },
    getUsers: async () => {
        try {
            let listaUsuarios = await pool.query("SELECT * FROM listaUsuarios");
            return listaUsuarios.rows;
        } catch(err) {
            throw { stauts: 500, message: "Error al obtener Usuarios" }
        }
    }
};

export default mProfile;