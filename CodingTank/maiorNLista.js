// let numeros = [10, 20, 50, 70, 43, 3, 2, 33, 77, 59];
// let maiorNumero = encontrarMaiorNumero(numeros);

// function encontrarMaiorNumero(lista) {
//     let maior = lista[0]; 
//     for (let i = 1; i < lista.length; i++) {
//       if (lista[i] > maior) {
//         maior = lista[i];
//       }
//     }
  
//     return maior;
//   }
//   console.log("O maior número é:", maiorNumero);

//-----------------------------------------------------------------------------------------------------------------


let num = [10, 20, 50, 70, 43, 3, 2, 33, 77, 59];
let maiorNum = Math.max(...num);
console.log("O maior número é:", maiorNum);
  