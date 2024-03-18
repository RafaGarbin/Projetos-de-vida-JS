const botoes=document.querySelectorAll(".botao");
for (let i=0; i<botoes.length; i++){
    botoes[i].onclick=function(){
        for (let j=0; j<botoes.lenghth;j++){
            botoes[j].classList.remove("ative");
        }
        
        botoes[i].classList.add("ativo");
    }
}