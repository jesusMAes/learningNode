//para trabajar con express, lo primero es requerirlo/importarlo
const express = require('express');

//crea una aplicación de express
const app = express();

//simular una base de datos
const {infoCursos} = require('./datos/cursos.js')

//routers, un router permite acortar el routing y no tener que escribir /api/cursos/programacion cada vez ESTÁN EXPORTADOS, SE DEFINE ALLI LAS RUTAS, es decir todos los routerProgramacion.get van en programacion



//lo asociamos a un path, si queremos usar el router cuando hacemos el get en lugar de llamar a app.get, usamos routerProgramacion.get y en el path partimos de ese router, en lugar de app.get(api/cursos/programacion/:lenguaje) usariamos routerProgramacion.get(/:lenguaje)

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

//Para implementar rutas en express usamos la app de express y sus metodos, si usamos app.get estamos manejando un metodo get para la ruta que le digamos, esto se llama routing
app.get('/', (req,res)=>{
  res.send('Mi primer servidor. Cursos')
})

app.get('/api/cursos', (req,res)=>{
  res.send(JSON.stringify(infoCursos))
});




//coge el puerto que te asigne el servidor donde se ejecute la app, en su defecto coge 3000
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=> {
  console.log(`El puerto esta escuchando en el puerto ${PUERTO}...`)
})