// MAP
    // modificar o array
    // retorna novo array com a mesma qunatidade posições que o array original podendo personalizar 100% o conteudo de cada posição deste array.
    // editar

// FILTER
  // saber tem um informação dentro de um array
  // novo array filtrado
  // busca
  // retorna novo array com qtd de itens variaveis com base em uma condição

const listaConvidados = [
  {
      nome: "Samuel",
      idade: 25
  },
  {
      nome: "Cássia",
      idade: 18
  },
  {
      nome: "Eduardo",
      idade: 57
  },
  {
      nome: "Vitor",
      idade: 15
  },
  {
      nome: "José",
      idade: 82
  }
]

// let isEnergyAllowed = listaConvidados.filter((convidado)=>{
//   if(convidado.idade >= 18  && convidado.idade <= 75){
//     return true;
//   }
// })
// console.log(isEnergyAllowed)


const listaConvidadosMaiusculo = listaConvidados.map((convidado) => {
  return {
    nome: convidado.nome.toUpperCase(),
    idade: convidado.idade
  };
});

console.log(listaConvidadosMaiusculo);

