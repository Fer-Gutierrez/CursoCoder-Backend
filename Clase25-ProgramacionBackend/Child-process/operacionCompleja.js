function operacionCompleja() {
  let result = 0;
  for (let i = 0; i < 5e9; i++) {
    result += i;
  }
  return result;
}

process.on("message", (data) => {
  console.log("Estoy escuchando el proceso nuevo", data);
  const result = operacionCompleja();
  process.send(result);
});
