import mUsers from "../models/mUsers.js";
import error from "../middlewares/error.js";

let cUsers = {
    start: (req, res) => {
        res.render("start", { title0: "" });
    },
    showLogin: (req, res) => {
        res.render("login", { title0: " - Iniciar Sesión"});
    },
    showSignup: (req, res) => {
        res.render("signup", { title0: " - Nueva Cuenta"});
    },
    showPassword: (req, res) => {
        res.render("password", { title0: " - Recuperar Contraseña"});
    }
};

export default cUsers;