const path = require("path");
const Ciudad = require("../utils/database").models.ciudad;

exports.postAgregarCiudad = (req, res) => {
  console.log(req.body);
  const found = Ciudad.findOne({
    where: {
      nombre: req.body.nombre,
      pais: req.body.pais,
    },
  });
  if (found === null) {
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
    console.log("La ciudad ya existe");
    res.json({ estado: "La ciudad ya existe" });
    //Aqui se actualiza el contador
  }
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
