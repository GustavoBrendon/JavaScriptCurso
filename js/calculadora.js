
// FUNCAO EM JS
function soma(num1,num2){
    return num1 + num2;
}

function subtracao(num1,num2){
    return num1 - num2;
}

function multiplicacao(num1,num2){
    return num1 * num2;
}

function divisao(num1,num2){
    return num1 / num2;
}

let parametro1 = parseFloat(prompt('Insira o primeiro número a ser calculado:'));
let parametro2 = parseFloat(prompt('Insira o segundo número a ser calculado:'));

let operacao = prompt('Escolha a operação, 1-soma, 2-subtracao, 3-multiplicação e 4-divisão');

if(operacao === '1'){
    alert('Resultado: '+soma(parametro1,parametro2));
}else if(operacao === '2') {
    alert('Resultado: '+ subtracao(parametro1,parametro2));
}else if(operacao === '3'){
    alert('Resultado: '+multiplicacao(parametro1,parametro2));
}else if(operacao==='4'){
    alert('Resultado: '+divisao(parametro1,parametro2));
}else {
    alert('Operação inválida, tente novamente');
}