var numeroSecreto = parseInt(Math.floor(Math.random() * 10 + 11));
console.log(numeroSecreto)
var tentativas = 3;


var campoDaTela = document.getElementById("container");
var mensagem = document.getElementById("mensagem-escolha")

function adivinhar() {
    
    do {
        
        var chute = document.querySelector("#chute").value;
        /*  if (tentativas > 0) { */

        if (numeroSecreto === chute) {
            campoDaTela.innerHTML = "<div>" + numeroSecreto + "</div>";
            mensagem.innerHTML = "Parabéns, você acertou!";
            console.log("Parabéns, você acertou!");
        } else if (chute > numeroSecreto) {
            mensagem.innerHTML = "<div> O número secreto é menor </div>";
            tentativas = tentativas - 1;
            alert(tentativas);
            console.log("O número secreto é menor");
        } else if (chute < numeroSecreto) {
            mensagem.innerHTML = "<div> O número secreto é maior </div>";
            tentativas = tentativas - 1;
            alert(tentativas);
            console.log("O número secreto é maior");
        }
        /* } else if (tentativas === 0) {
        } */
    } while (tentativas > 0);
    mensagem.innerHTML = "Acabaram suas tentativas! O número secreto era " + numeroSecreto
}
/* } */

/* if (chute != numeroSecreto) {
    campoDaTela.innerHTML = "<div> ? </div>";
    mensagem.innerHTML = "Acabaram suas tentativas! O número secreto era " + numeroSecreto
} */


