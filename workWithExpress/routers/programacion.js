const express = require('express');
//routers, un router permite acortar el routing y no tener que escribir /api/cursos/programacion cada vez

const {programacion} = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req,res) =>{
  res.send(JSON.stringify(programacion))
})

//trabajando con parametros URL, es igual que la ruta pero ponemos caracteres especiales para indicar que puede variar, los : indican que es un parametro url
routerProgramacion.get('/:lenguaje', (req,res)=>{
  const lenguaje = req.params.lenguaje;
 const resultados = programacion.filter(curso => curso.lenguaje == lenguaje)

 if(resultados.length == 0){
  res.status(404)
  return res.send(`No se encontraron cursos de ${lenguaje}`)
 }

 if(req.query.ordenar === 'vistas'){
  return res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas)))
 }

  res.send(JSON.stringify(resultados))


});

//usar varios parametros
routerProgramacion.get('/:lenguaje/:nivel', (req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel
 
  const resultados = programacion.filter(curso => curso.lenguaje == lenguaje && curso.nivel == nivel)

  if(resultados.length == 0){
    res.status(404)
    return res.send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
   }

  res.send(JSON.stringify(resultados))
});

//nos permite procesar los json
routerProgramacion.use(express.json())

//todas las solicitudes de tipo POST a /api/cursos/programacion
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion))

});

//modifica datos
routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0){
    programacion[indice] = cursoActualizado
  }
  res.send(JSON.stringify(programacion))

})

//modificar solo algunos datos
routerProgramacion.patch('/:id', (req,res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >=0){
    const cursoAmodificar = programacion[indice]
    //assign permite actualizar solo lo que cambia
    Object.assign(cursoAmodificar, infoActualizada)
  }

  res.send(JSON.stringify(programacion))
});

module.exports = routerProgramacion