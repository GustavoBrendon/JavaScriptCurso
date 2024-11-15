// for(inicializador; condicao-de-saida;expressao-final){
     //executa o código
// }

// Exercício


let notas = [2,3,5,10,25,50,100,5,10,25,50,100,5,10,25,50,100,5,10,25,50,100,5,10,25,50,100];

let total = 0;

for(let repeticao = 0;repeticao < notas.length;repeticao++ ){
   total += notas[repeticao]; 
}

console.log(`O valor total de notas é ${total}`);

