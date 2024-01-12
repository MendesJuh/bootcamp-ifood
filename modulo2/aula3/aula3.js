//  // Mescla os dois arrays em um único array
// const array1 = [1, 2];
// const array2 = [3, 4];
// const mergedArray = [...array1, ...array2];


// //Argumentos de função
// function somar(a, b, c) {
//     return a + b + c;
//   }
  
//   const valores = [1, 2, 3];
//   const resultado = somar(...valores); // Equivalente a somar(1, 2, 3)
  


// //array de objetos
// let pessoas = [
//     { nome: "João", idade: 30 },
//     { nome: "Maria", idade: 25 }
//   ];

//Adicionando uma pessoa na lista de objetos com o prompt 

const pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 }
  ];
  
  const pessoa1 = prompt("Digite o nome da pessoa1:");
  const pessoa2 = prompt("Digite o nome da pessoa2:");
  
  pessoas.push({ nome: pessoa1, idade: 35 });
  pessoas.push({ nome: pessoa2, idade: 15 });
  
  console.log(pessoas);




