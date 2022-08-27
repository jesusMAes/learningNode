const EventEmitter = require('events');//importamos la clase


//creamos un emisor
const emisorProductos = new EventEmitter();

//definimos que pasa cuando ocurre el evento
//cuando ocurra el evento con el nombre compra, haz esto
emisorProductos.on('compra', (total , numProductos)=>{
  console.log(`Se realizó una compra por $ ${total}`);
  console.log(`Numero de productos: ${numProductos}`)
});

//como emitir el evento 
emisorProductos.emit('compra', 500,5)