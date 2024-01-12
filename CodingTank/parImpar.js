let numbers = [10, 20, 50, 70, 43, 3, 2, 33, 37, 59];

function verificarParOuImpar() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i] + " é Par");
    } else {
      console.log(numbers[i] + " é Ímpar");
    }
  }
}

verificarParOuImpar();
