//https://arielfuggini.com/javascript-definitivo-vol1/eventos-del-dom/

const titulo = document.createElement("h1");

titulo.textContent = "hola soy spiderman";
document.body.appendChild(titulo);

const boton = document.createElement("button");

boton.innerText = "click";
boton.style = "background: cyan; ";
document.body.appendChild(boton);

boton.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>hola Tecnalia</h1>
    <button id='boton2'>click2</button>
    `;
});
