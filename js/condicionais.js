let nota1 = Number(prompt('Digite o valor da primeira nota:'));
let nota2 = Number(prompt('Digite o valor da segunda nota:'));

let media = (nota1 + nota2)/2;

if(media>=5){
    alert('Você foi aprovado, parabéns!!');
}else{
    alert('Você foi reprovado, precisa estudar mais');
}
