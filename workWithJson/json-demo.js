//al recibir un json javascript lo pasa a json automáticamente
// const curso = require('./curso.json')

// console.log(curso.temas[0])

//pasar un objeto a Json

let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45,
  "numLikes": 21123,
  "temas": [
    "Javascript",
    "node.js"
           ],
  "esPublico": true
}

let infoCursoJson = JSON.stringify(infoCurso)

//pasar de json string a objeto

let infoCursoObject = JSON.parse(infoCursoJson);
console.log(infoCursoObject)