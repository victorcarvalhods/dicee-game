const imgs = new Map();
imgs.set(1, "./assets/images/dice-six-faces-one.png");
imgs.set(2, "./assets/images/dice-six-faces-two.png");
imgs.set(3, "./assets/images/dice-six-faces-three.png");
imgs.set(4, "./assets/images/dice-six-faces-four.png")
imgs.set(5, "./assets/images/dice-six-faces-five.png")
imgs.set(6, "./assets/images/dice-six-faces-six.png")


function vencedor(player1, player2){
    var botaoJogar = document.getElementById("botaoJogar");
    if (player1 == player2){
     botaoJogar.innerText = "Empate."

    }else if (player1 > player2){
     botaoJogar.innerText = "Jogador 1 venceu."

    }else{
     botaoJogar.innerText = "Jogador 2 venceu"
    }
}

function alterar_imagens(link1,link2){

    var img1 = document.getElementById("img-dado1");
    var img2 = document.getElementById("img-dado2");

    img1.src = link1;
    img2.src = link2;


}

function jogar(){
    var numero_dado1 = Math.floor(Math.random() * 6) + 1;
    var numero_dado2 = Math.floor(Math.random() * 6) + 1;

    var dado1 = imgs.get(numero_dado1);
    var dado2 = imgs.get(numero_dado2);

    console.log(dado1, dado2)

    alterar_imagens(dado1, dado2);

    vencedor(numero_dado1, numero_dado2);

}
