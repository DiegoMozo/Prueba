import conectMongo from "../databases/mongodb.js";

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
    }
};

export default mProfile;