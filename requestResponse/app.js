const http = require('http')

//request contiene la información de la solicitud al servidor, lleva la url, el metdo si es get o post y header con más info
// const servidor = http.createServer((req,res)=>{
//   console.log('===> req (Solicitud)')
//   console.log(req.url)
//   console.log(req.method)
//   console.log(req.headers)
//   res.end('hola mundo')
// })


//---------Respuestas
const servidor = http.createServer((req,res)=>{
  console.log('===> res (Respuestas)');
  console.log(res.statusCode)
 
  //con set header podemos añadir información a la cabecera
  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders())
  
  res.end('hola mundo')
})

const puerto = 5000
servidor.listen(puerto, ()=>{
  console.log("escuchando")
})
