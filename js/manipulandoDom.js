// CAPTURANDO UM ELEMENTO POR ID

let titulo1 = document.getElementById("titulo1");

//CAPTURANDO POR CLASSE

let titulo2 = document.getElementsByClassName("titulo2");

console.log(titulo1);
console.log(titulo2);

//CAPTURANDO POR TAGS

let tags = document.getElementsByTagName("h1");
console.log(tags);

// INSERINDO CONTÉUDO DINAMICAMENTE NO HTML

let novoTitulo = (document.getElementById("nome").innerHTML =
  prompt("Qual o seu nome?"));
let msg = prompt("Deseja ver mensagem escondida? 1-Sim 2-Nao");

if (msg === "1") {
  let novoElemento = document.createElement("h2");
  novoElemento.innerHTML = "Olá, eu sou um novo elemento criado no JS";
  document.body.appendChild(novoElemento);
}

//REMOVENDO NOME DINAMICAMENTE
let removerNome = document.getElementById("nome");
removerNome.remove();
