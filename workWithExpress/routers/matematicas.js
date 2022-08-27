const express = require('express');
//routers, un router permite acortar el routing y no tener que escribir /api/cursos/programacion cada vez

const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos

//para cursos de mates
routerMatematicas.get('/', (req,res) =>{
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req,res)=>{
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso =>curso.tema == tema)

  if(resultados.length == 0){
    res.status =404
    return res.send(`No hay cursos de ${tema}`)
  }

  res.send(JSON.stringify(resultados))
})

module.exports = routerMatematicas