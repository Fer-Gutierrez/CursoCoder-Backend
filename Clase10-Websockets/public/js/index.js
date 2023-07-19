console.log("Estamos trabajando con plantillas");

//Este seria el Socket:
const socket = io();
socket.emit(
  "message",
  "Hola soy un cliente y me estoy comunicando desde un WebSocket"
);
socket.on('evento_para_socket', data =>{
    console.log(data)
})
