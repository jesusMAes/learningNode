//modulo files permite leer y modificar archivos del system
const fs = require('fs');

//leer un archivo, usamos readfile y le indicamos la ruta, hjay que añadir el tipo de letra utf-8 y como es asincrono hay que pasar una función callback para que se ejecute cuando acabe el proceso

//PUEDES AÑADIR SYNC SI QUIERES QUE SE EJECUTEN EN ORDEN, ESTO LAS HACE SINCRONAS


fs.readFile('index.html', 'utf-8', (err, contenido)=>{

  if(err){ //si error no es nulo es que pasó algo
    throw err; //detiene ejecución del programa
  }else{
    console.log(contenido)
  }
})

//cambiar nombre de archivo también usa un callback para cuando se complete
fs.rename('index.html', 'main.html', (err)=>{

  if(err){
    throw err;
  }else{
    console.log('nombre cambiado')
  }
})

//añadir contenido al final de un archivo
fs.appendFile('index.html', '<p>hola</p>', (err)=>{
  if(err){throw err}
  console.log('archivo actualizado')
})

//reemplazar contenido del archivo si no existe crea uno nuevo

fs.writeFile('index.html', 'Contenido nuevo', (err)=>{
  if(err){throw err}
  console.log("contenido reemplazado")
})

//eliminar archivos

fs.unlink('e.html', (err)=>{
  if(err){throw err}
  console.log("eliminado")
})