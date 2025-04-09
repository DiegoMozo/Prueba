let error = {
    e404: (req, res, err) => {
        res.render("error", { title: "Error 404 'Not Found'",
            emsj: "El recurso que buscas no existe"
        });
    },
    e500: (req, res, err) => {
        res.render("error", { title: "Error 500 'Error interno'", emsj: err.message});
    }
};

export default error;