const express = require('express');
require('dotenv').config();
const cors = require('cors');
//servidor de express
const app = express();
//CORS
app.use(cors());

//Directorio publico
app.use(express.static('public'));

app.get('*', (req, res) =>{//comodin para que regrese el index si no existe la ruta del url para el back en produccion
    res.sendFile( __dirname +'/public/index.html')
})

app.listen(process.env.PORT, () =>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})