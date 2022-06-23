// importation de modules
import express from 'express'

// importation de la BD
import db from './config/connectDB.js';

// parametrage du serveur
const app = express()
const PORT = process.env.PORT || 5000;


// * pemettre le json dns les requets
app.use(express.json())

// * definition des ressources pour les API

db.sync().then(()=> console.log("Connexion a la base de données effectué avec succès")).catch(err => console.log(err))

// importation des routes

import ArticlesRoutes from './Routes/ArtcilesRoutes.js'


app.use("/api/articles",ArticlesRoutes)















app.listen(PORT,()=>{
    console.log('express run effectly on port 5000')
})