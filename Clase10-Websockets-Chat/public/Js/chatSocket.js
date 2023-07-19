console.log("Se activo el socket del cliente -chat-");

const socket = io(); //Iniciamos el socket del lado del servidor - Necesitamos tener el script socket.io/socket.io.js en la vista (html)

//Enviado de mensajes
const input = document.querySelector("#mensaje");
const form = document.querySelector("#formMsj");
const ul = document.querySelector("#list-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let p1 = document.createElement("p");
  p1.classList.add("meUser")
  p1.innerText = "Yo:";
  let p2 = document.createElement("p");
  p2.innerText = `${input.value}`;
  let div = document.createElement("div");
  div.classList.add("contenedor-msg");
  div.append(p1);
  div.append(p2);
  li.append(div);
  li.classList.add("right");
  ul.append(li);
  socket.emit("chatMessage", input.value);
  form.reset();
});

//Escuchando
socket.on("chatMessage", (data) => {
  let li = document.createElement("li");
  let p1 = document.createElement("p");
  p1.classList.add("oterUser")
  p1.innerText = `${data.user}:`;
  let p2 = document.createElement("p");
  p2.innerText = `${data.body}`;
  let div = document.createElement("div");
  div.classList.add("contenedor-msg");
  div.append(p1);
  div.append(p2);
  li.append(div);
  li.classList.add("left");
  ul.append(li);
  console.log(data);
});
