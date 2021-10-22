const Sequelize = require("sequelize")

const Ciudad = (sequelize)=>{
    sequelize.define('ciudad',{
        id:{
            type : Sequelize.INTEGER,
            allowNull : false,
            primaryKey : true
        },
        nombre:{
            type : Sequelize.STRING(20), // nombre de la Ciudad
            allowNull : false
        },
        pais:{
            type : Sequelize.STRING(30), // pais en el que se encuentra
            allowNull : false
        },
        descripcion:{
            type : Sequelize.STRING(300), // descripcion del lugar
            allowNull : true
        },
        contador:{
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}

module.exports = Ciudad