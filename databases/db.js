import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "Chivas001002",
    database: "Usuarios"
});

export default pool;