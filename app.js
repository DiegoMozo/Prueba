import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import express from "express";

import rUsers from "./routes/rUsers.js";
import rProfile from "./routes/rProfile.js";
import error from "./middlewares/error.js";

let app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.set("viwes", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "publics")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rutas y errores aquí
app.use(rUsers);
app.use(rProfile);
app.use(error.e404);

app.listen(port, () => {
    console.log(`La aplicación está funcionando en: http://localhost:${port}`);
});