function saludar (nombre){
  return  `Hola ${nombre}`;
}

function saludarHolaMundo(){
  return 'Hola, Mundo!';
}

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

//otra forma de exportar los modulos
module.exports = {
  saludar:saludar,
  saludarHolaMundo: saludarHolaMundo
}
 