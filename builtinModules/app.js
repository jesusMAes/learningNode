//-------------------------MODULO CONSOLE
// console.log("hola")

// console.warn("ey")

// console.error(new Error("ocurrió un error"))

//-----------------------MODULO PROCESS
//console.log(process)
// console.log(process.env)

//proces permite acceder a los argumentos que pasas por el terminar, si en terminal pones node app.js 1 2 y luego usas 

// console.log(process.argv)

//te da esos valores, para acceder hay que empezzar por argv[2] porque los dos primeros están ya definidos

//para ver la memoria que se está usando

// console.log(process.memoryUsage());

//----------------------MODULO OS
//da info sobre el sistema operativo, hay que importarlo

const os = require('os')

//type dice el tipo de SO
// console.log(os.type());

//homedir da acceso al directorio principal del sistema
// console.log(os.homedir())

//uptime dice cuanto tiempo lleva ejecutandose el SO
//  console.log(os.uptime())

//user info 
// console.log(os.userInfo())

//------------------------MODULO TIMERS
//Simula operaciones asincronas, sus funciones hacen cosas tras x tiempo es el que tiene settimeout, setinterval y setinmediate 

//-----------------------MODULO FS para file system, permite trabajar con el sistema de archivos, todos sus métodos son asíncronos

