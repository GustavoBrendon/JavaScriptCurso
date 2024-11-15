
function botaoClicado(){
    alert('Botão 1 Clicado');
}


//ADICIONANDO EVENTOS
document.getElementById("meuSegundoBotao").addEventListener("click", function () {
    //AÇÃO EXECUTADA
    alert('Botão 2 Clicado');
});


let segundoBotao = document.getElementById('meuSegundoBotao');

segundoBotao.addEventListener('mouseover', function(){
    segundoBotao.style.backgroundColor = 'Red';
})

segundoBotao.addEventListener('mouseout', function(){
    segundoBotao.style.backgroundColor = '';
})