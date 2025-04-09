import mProfile from "../models/mProfile.js";
import error from "../middlewares/error.js";

let cProfile = {
    info: async (req, res) => {
        try {
            let info = await mProfile.getInfo("Prueba");
            res.redirect("/");
        } catch(err) {
            error.e500(req, res, err);
        }
    }
};
 
export default cProfile;