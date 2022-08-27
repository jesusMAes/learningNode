//función que devuelve una promesa
function ordenarProducto(producto) {
  return new Promise((resolve, reject) =>{
    console.log(`Ordenando: ${producto} de freecodecamp`);

    setTimeout(()=>{
      if(producto == 'taza'){
        resolve('Ordenando una taza');
      }else{
        reject('No quedan tazas')
      }
    }, 2000)
  });
}

//el argumento de esta función será la respuesta de ordenar producto, es decir, una promesa
function procesarPedido (respuesta){
  return new Promise ((resolve, reject) =>{
      console.log('procesando respuesta')
      console.log(`la respuesta fue ${respuesta}`)
      setTimeout(()=>{
        resolve('Gracias por tu compra');
      },4000)
  })
}

//vale tenemos dos funciones asíncronas, la primera devuelve una promesa con su resolve y reject que pasan sendas strings por argumentos, la segunda recibe como parametro una respuesta que será lo que devuelva la primera función cuando su promesa se cumpla, y retorna otra promese que muestra el valor de esa respuesta hace una pausa y llama a su resolve, siendo los dos asincronos, la manera de asegurarse de que el primero se cumple antes que el segundo es encadenando las promesas

// ordenarProducto('taza')
//   .then(respuesta =>{
//     console.log('respuesta recibida');
//     return procesarPedido(respuesta)
//   })
//   .then(respuestaProcesada =>{//este then es la resolución de la promesa de procesa pedido
//     console.log(respuestaProcesada)
//   })
//   .catch(error =>{
//     console.log(error)
//   })

  //al llamar a procesar pedido en el return del then nos aseguramos de que se llame al segundo metodo cuando acabe el primero porque then no se ejecuta hasta que acaba
  //Al llamarlo dentro de return podemos retornar la promesa y así podemos ponerle un segundo then, este then será el then correspondiente a procesarPedido

  //versión del codigo de arriba usando asicn await, asincAwait permite escribirlo como si fuese síncrono

  //todas las funciones con async retornan una promise
  async function realizarPedido (producto){
    //al usar await haces que la función pare hasta que la función sincrona se completa, luego sigue. trycatch permite detectar errores
    try{
      const respuesta  = await ordenarProducto(producto);
      console.log('respuesta recibida')
      const respuestaProcesada = await procesarPedido(respuesta)
      console.log(respuestaProcesada)
    } catch (error) {
      console.log(error)
    }
    
  }
realizarPedido('taza')