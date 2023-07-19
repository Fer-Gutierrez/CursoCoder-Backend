const mostrarLista = (lista = []) => {
  if (lista.length === 0) {
    return "lista vacia.";
  } else {
    lista.forEach((e) => console.log(e));
    return lista.length;
  }
};

let resultado1 = mostrarLista();
console.log(resultado1);

let resultado2 = mostrarLista([1, 2, 3, 4, 5]);
console.log(resultado2);
