 const promesaCumplida = true
 
 //creamos un objeto promesa, recibe dos funciones como argumento, 
  const miPromise = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(promesaCumplida){
          resolve('promesa cumplida');
        }else {
          reject('promesa rechazada');
        }
      }, 3000)
  });

  const manejarPromesaCumplida = (valor)=>{
    console.log(valor)
  }
  const manejarPromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo)
  };

  

//en los parametros definimos la condición para que se devuelva resolve o reject, si se devuelve resolve se ejecuta este then, le puedes pasar parametros desde el resolve
// miPromise.then((valor)=>{
//   console.log(valor)
// });

//con un segundo parámetro podemos manejar cuando la promise es rechazada
miPromise.then(manejarPromesaCumplida, manejarPromesaRechazada)

