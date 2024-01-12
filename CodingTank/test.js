
//Escreva um programa que calcule a soma de todos os números pares de 1 a 100.

let soma = 0;

for (var i = 2; i <= 100; i += 2) {
    soma += i;
}
console.log("A soma de todos os números pares de 1 a 100 é: " + soma);


//-------------------------------------------------------------------------------------------------

//Crie uma função que calcule a média de um array de números.

const lista = [50, 100, 150];
let som = 0;


for(let i=0; i < lista.length; i++){
som += lista[i];
}
let media = som/lista.length;

console.log("A media dos valores da lista é:" + media);


//-------------------------------------------------------------------------------------------------



