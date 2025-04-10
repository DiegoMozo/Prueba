import mProfile from "../models/mProfile.js";
import error from "../middlewares/error.js";

let cProfile = {
    info: async (req, res) => {
        try {
            let listaUsuarios = await mProfile.getUsers();
            res.redirect("profile", {title0: " - Profile ", listaUsuarios} );
        } catch(err) {
            error.e500(req, res, err);
        }
    }
};
 
export default cProfile;