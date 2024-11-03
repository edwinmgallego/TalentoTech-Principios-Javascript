//https://arielfuggini.com/javascript-definitivo-vol1/eventos-del-dom/

const v1 = "tio ben";
const v2 = "recueda lo siguiente!";
const v3 = "un gran poder  requiere una gran responsabilidad";
const v4 = "ten cuidado con el duende verde";

const spiderman = (peligro) => {
  if (peligro == true) {
    return `como decia el ${v1} ${v2} ${v4}`;
  } else {
    return `como decia el ${v1} ${v3}`;
  }
};

//let recordando = spiderman(peligro);

const titulo = document.createElement("h1");

titulo.textContent = "hola soy spiderman";
document.body.appendChild(titulo);

const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText = "peligro";
boton2.innerText = "No Peligro";

boton.style = "background: cyan; ";

document.body.appendChild(boton);
document.body.appendChild(boton2);

boton.addEventListener("click", () => {
  peligro = false;
  recordando = spiderman(peligro);
  window.location.href="index.html "
  document.body.innerHTML = `
    
    <h1>${recordando}</h1>
    <button id='boton2'><a href="index.html">click2</a></button>
    `;
});

boton2.addEventListener("click", () => {
  peligro = true;
  recordando = spiderman(peligro);
  document.body.innerHTML = `
    
    <h1>${recordando}</h1>
    <button id='boton2'>click2</button>
    `;
});

const botonNombre = document.createElement("button");
botonNombre.innerText = "nombre";
botonNombre.addEventListener("click", () => {
  let entrada = document.getElementById("name");
  let valorEntrada = entrada.value;
  console.log(valorEntrada);
  if (valorEntrada.trim().length == 0) {
    alert("no has escrito nada");
  } else {
    alert(`${valorEntrada}`);
  }
});
document.body.appendChild(botonNombre);
