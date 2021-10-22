const path = require("path");
const Ciudad = require("../utils/database").models.ciudad;

exports.postAgregarCiudad = (req, res) => {
    console.log(req.body);
    Ciudad.findOne({
        where: {
            nombre: req.body.nombre,
            pais: req.body.pais,
        },
    }).then((existe) => {
        if (existe == null) {
            Ciudad.create(req.body)
                .then((result) => {
                    console.log("Ciudad creada");
                    res.json({ estado: "aceptada" });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ estado: "error" });
                });
        } else {
            Ciudad.update(
                {
                    contador: existe.contador + 1
                },
                {
                    where: {
                        nombre: req.body.nombre,
                        pais: req.body.pais,
                    },
                }
            )
                .then(() => {
                    console.log("Registro de Ciudad actualizado");
                    res.json({ estado: "aceptado" });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ estado: "error" });
                });
            console.log("Ya existe");
            res.json({ estado: "Ya existe" });
        }
    });
};

exports.getConsultarCiudades = (req, res) => {
    Ciudad.findAll()
        .then((ciudad) => {
            console.log(ciudad);
            res.json(ciudad);
        })
        .catch((err) => {
            console.log(err);
            res.json({ estado: "error" });
        });
};

exports.postBorrarCiudad = (req, res) => {
    console.log(req.body);
    Ciudad.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then(() => {
            console.log("Registro de ciudad eliminado");
            res.json({ estado: "aceptado" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ estado: "error" });
        });
};

exports.postActualizarCiudad = (req, res) => {
    console.log(req.body);

    Ciudad.update(
        {
            nombre: req.body.nombre,
            pais: req.body.pais,
            descripcion: req.body.descripcion,
        },
        {
            where: {
                id: req.body.id,
            },
        }
    )
        .then(() => {
            console.log("Registro de Ciudad actualizado");
            res.json({ estado: "aceptado" });
        })
        .catch((err) => {
            console.log(err);
            res.json({ estado: "error" });
        });
};

exports.getConsultarPais = (req, res) => {
    Ciudad.findAll({
        where: {
            pais: req.body.pais,
        },
    })
        .then((ciudad) => {
            console.log(ciudad);
            res.json(ciudad);
        })
        .catch((err) => {
            console.log(err);
            res.json({ estado: "error" });
        });
};
