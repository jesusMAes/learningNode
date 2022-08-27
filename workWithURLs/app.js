
//modulo url, extraer datos de los parámetros
const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

//extrae el www.nombre.com
console.log(miUrl.hostname)

//extrae el /cursos/programacion
console.log(miUrl.pathname)

//extrae los parámetros query, lo devuelve como un objeto clave valor, usamos get para obtener el valor de un parametro
console.log(miUrl.searchParams.get('ordenar'));