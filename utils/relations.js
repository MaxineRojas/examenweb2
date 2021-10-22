function aplicarRelaciones(sequelize){
   //Imprimir los modelos adheridos al objeto de conexión
   console.log(sequelize.models)
   const Ciudad = sequelize.models.ciudad
   const Pais = sequelize.models.pais

    Pais.hasMany(Ciudad) //uno a muchos
    Ciudad.belongsToMany(Pais) //muchos a uno
}

module.exports = {aplicarRelaciones}