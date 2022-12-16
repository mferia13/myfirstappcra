const listaNumerosEntrada = [2,4,3,5,7,11,13,15,17,19,23,29,50,80];
let listaOrdenada = listaNumerosEntrada.sort(function(a, b){return b - a});
console.log(listaOrdenada);
let listaValidada = [];
console.log(listaValidada);

for(let i = 0; i < listaOrdenada.length; i++){    
    listaValidada.push([listaOrdenada[i],esPrimo(listaOrdenada[i])]);
}

function esPrimo(numero){
    if(numero == 0 || numero == 1 || numero == 4) return false;
    for(let x = 2; x < numero / 2; x++){
        if (numero % x == 0 ) return false;
    }
    return true;
}
console.log(listaValidada);