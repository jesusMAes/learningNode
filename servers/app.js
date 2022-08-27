//el modulo http permite crear un servidor que escuche las solicitudes

const http = require('http');

//definimos una constante para almacenar el servidor, con el metodo se crea y lo guardamos aquí
//cada vez que reciba una solicitud ejecutará la función que hay dentro
const servidor = http.createServer((req,res) =>{
  res.end('Hola mundo'); //envia la respuesta al cliente
})

//para que un servidor escuche las solicitudes y el puerto, podemos pasarle una función como 2 argumento para que se ejecute cuando empiece a escuchar
const puerto = 3000
servidor.listen(puerto, ()=>{
  console.log(`El servidor está escuchando en el puerto: ${puerto}`)
});
//hecho esto si ejecutas con node y en navegaor vas a localhost:3000 funciona