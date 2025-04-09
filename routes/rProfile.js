import { Router } from "express";
import cProfile from "../controllers/cProfile.js";

let rProfile = new Router();

rProfile.get("/profile", cProfile.info);

export default rProfile;
