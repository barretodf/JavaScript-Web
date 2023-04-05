function pulaLinha() {
    console.log('\n');
}

function mostra(frase) {
    console.log(frase);
    pulaLinha();
}

function somarDoisNumeros(numero1, numero2) {
    mostra(`A soma de dois números é: ${numero1 + numero2}`);
}

somarDoisNumeros(60, 40);
//------------------------------------------------------------------

function multiplicarDoisNumeros(a, b){
    console.log(a * b)
}

multiplicarDoisNumeros(90, 90)

//--------------------------------------------------------------
function tresNumeros (a, b, c){
    console.log('A multiplicação de 10 * 10 * 3 é:')
    console.log(a * b * c)
}
tresNumeros(10, 10, 3)
//--------------------------------------------------------------

