var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "));
var segundoValor = parseFloat(prompt("Digite o segundo valor: "));


    var escolha = prompt("Escolha um número correspondente à operação:  \n\n " +
        "1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n");

    var resultado;

    if (escolha == 1) {
        resultado = primeiroValor + segundoValor;
    } else if (escolha == 2) {
        resultado = primeiroValor - segundoValor;
    } else if (escolha == 3) {
        resultado = primeiroValor * segundoValor;
    } else if (escolha == 4) {
        resultado = primeiroValor / segundoValor;
    } 


document.write("<h2>" + resultado + "</h2>");