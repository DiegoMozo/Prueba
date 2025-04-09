import { Router } from "express";
import cUsers from "../controllers/cUsers.js";

let rUsers = new Router();

rUsers.get("/", cUsers.start);
rUsers.get("/login", cUsers.showLogin);
rUsers.get("/signup", cUsers.showSignup);
rUsers.get("/password", cUsers.showPassword);

export default rUsers;