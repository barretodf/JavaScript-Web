function pulaLinha() {
    console.log('\n');
}

function mostra(frase) {
    console.log(frase);
    pulaLinha();
}

function somarDoisNumeros(numero1, numero2) {
    mostra("A soma dos dois números é : " + (numero1 + numero2) );
}

somarDoisNumeros(60, 40);