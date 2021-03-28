function dolarEmReal() {
    var valorEmDolar = parseFloat(prompt("Qual o preço em dólar? "));

    if (isNaN(valorEmDolar)) {
        alert("Não é um número válido. Tente novamente!")
        dolarEmReal();
    } else {
        alert("O valor $ " + valorEmDolar + ", em real brasileiro, corresponde a: R$ " + (valorEmDolar * 5.50).toFixed(2));
    }
}

function anosEmMeses() {
    var idadeEmAnos = parseFloat(prompt("Qual sua idade em anos? "));

    if (isNaN(idadeEmAnos)) {
        alert("Não é um número válido. Tente novamente!")
        anosEmMeses();
    } else {
        alert("Você tem " + idadeEmAnos * 12 + " meses de vida!");
    }

}

function centimetrosEmMetros() {
    var centimetros = parseFloat(prompt("Informe o valor em centímetros"));

    if (isNaN(centimetros)) {
        alert("Não é um número válido. Tente novamente!")
        centimetrosEmMetros();
    } else {
        alert("Você terá " + centimetros / 100 + " metros!");
    }

}

function escolhaNumero() {
    var escolha = prompt("Escolha o número correspondente ao conversor desejado: \n\n 1 - Dolar em real \n 2 - Anos em meses \n 3 - Centimetros em metros")
    numeroSelecionado = parseInt(escolha);

    while (numeroSelecionado != 1 || numeroSelecionado != 2) {
        if (numeroSelecionado == 1) {
            dolarEmReal();
            callback();
        } else if (numeroSelecionado == 2) {
            anosEmMeses();
            callback();
        } else if (numeroSelecionado == 3) {
            centimetrosEmMetros();
            callback();
        } else {
            alert("Opção inválida. Tente novamente!");
            escolhaNumero();
        }
    }
}

escolhaNumero();