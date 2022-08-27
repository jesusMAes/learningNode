const estatusPedido = ()=>{
  const estatus = Math.random() < 0.8;
  return estatus
}

const miPedidoDePizza = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    if(estatusPedido()){
      resolve('pedido exitoso! Su pizza está en camino');
    }else{
      reject('Ocurrió un error, intente de nuevo');
    }
  },3000)
});

//función que se llama cuando resolve
const manejarPedido = (mensajeDeConfirmación) =>{
  console.log(mensajeDeConfirmación)
}
//función de reject
const rechazarPedido = (mensajeDeError) =>{
  console.log(mensajeDeError)
}
// miPedidoDePizza.then(manejarPedido, rechazarPedido)

//sintaxis alternativa y mas comun
    miPedidoDePizza
      .then((mensajeDeConfirmación)=>{
        console.log(mensajeDeConfirmación)
      })
      //para el reject también puede usarse catch
      // .then(null, (mensajeDeError)=>{
      //   console.log(mensajeDeError)
      // })
      //version con catch:
      .catch((mensajeDeError)=>{
        console.log(mensajeDeError)
      })