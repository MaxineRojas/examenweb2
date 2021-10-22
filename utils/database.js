//const {aplicarRelaciones} = require('./relations')
//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")
//Objeto de Conexion
const sequelize= new Sequelize('examen2Max','user4','root',{
    dialect: 'mysql',
    host: '18.234.222.26', 
    define:{
        timestamps:false,
        freezeTableName: true
    }
})

//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/ciudades')
]

//Adherir al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la BD
//aplicarRelaciones(sequelize)

//Para poder usar en archivo externos la conexion
module.exports = sequelize;


