//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const ciudadRoutes = require('./routes/ciudades')
const sequelize = require('./utils/database')

//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))

//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/ciudades",ciudadRoutes);

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8083,()=>{
            console.log("Aplicación web en línea en el puerto 8083")
        })        
    })
    .catch(err=>console.log(err))