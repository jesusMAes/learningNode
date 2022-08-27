//routing es manejar las solicitudes del navegador en base a ciertos criterios

//una ruta es una combinación de: el método, es decir si es pot, get put..., el path, es decir el recurso que se llama o entrega y el cómo manejarlo, es decir la función que se ejecuta, es decir: qué va a hacer, donde lo va a hacer y cómo lo va a hacer

const http = require('http');

const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res) =>{
  //procesar la solicitud

  //extraer el metodo
  const {method} = req;

  //actuar segun el metodo
  switch(method){
    case 'GET':
      return manejarSolicitudGet(req,res);

    case 'POST':
      return manejarSolicitudPost(req,res);

    default:
      console.log('El metodo usado no puede ser manejado')
  }
  
});

function manejarSolicitudGet(req,res){
  //para implementar routing debemos saber el verbo, en este caso get, y además el path, que viene en la url 
  const path = req.url;

  //usamos un condicional para verificar el path, actualizamos el statuscode y hacemos lo que queramos, hay que hacer return tras cada end para evitar el error write before end
  if(path === '/'){
    res.statusCode = 200;
    return res.end('Bienvenido a mi primer servidor y API creado con Node.js')
   
  }else if(path === '/cursos'){
    res.statusCode = 200;
    res.writeHead(200,{'Content-Type': 'application/json'})
    return res.end(JSON.stringify(infoCursos))
  
  }else if(path === '/cursos/programacion'){
    res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.programacion))
    
  }

  res.statusCode = 404;
  res.end('No se encontro el recurso');

}

function manejarSolicitudPost (req,res){
  const path = req.url
  if(path ==='/cursos/programacion'){

    //trabajar con el body de la solicitud
    let cuerpo = '';
    //cuando recibe el data, lo guardamos en la variable
    req.on('data', contenido => {
      cuerpo += contenido.toString();
      console.log(contenido)
    });

    //cuando termina de recibir la informacion
    req.on('end', ()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);

      
     res.end('el servidor recibió una solicitud post para cursos/programacion');
    })


    res.statusCode = 200;
    //return res.end('el servidor recibió una solicitud post para cursos/programacion')
  }
  // res.statusCode = 404;
  // return res.end('No se encontro el recurso');
}

const PUERTO = 5000

servidor.listen(PUERTO, ()=>{
  console.log(`Escuchando puerto: ${PUERTO}...`)
})