// function gerarNumeroAleatorio(minimo, maximo) {
//     return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
//   }
  
//   const numeroSorteio = gerarNumeroAleatorio(1, 10);
//   const tentativasMaximas = 3;
  
//   for (let tentativa = 1; tentativa <= tentativasMaximas; tentativa++) {
//     const palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 10):"));
  
//     if (palpite === numeroSorteio) {
//       setTimeout( winner , 3000);
//       break;
//     } else if (tentativa === tentativasMaximas) {
//       console.log("Desculpe, você não acertou. O número correto era " + numeroSorteio);
//     } else {
//       console.log("Tente novamente. Tentativa #" + tentativa);
//     }
//   }
  
//   function winner() {
//     console.log("Parabéns! Você acertou!");
//   }
  //-------------------------------------------------------------------------------------------


let frutas = ["maçã", "banana", "laranja", "morango"];

frutas.forEach(() => console.log(frutas));

