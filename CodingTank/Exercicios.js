//----------------------------------------------------------------------------------------------------------

// function capitalizeFolgas(diasDaSemana) {
//     return diasDaSemana.map(function(dia) {
//       return dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();
//     });
//   }
  
//   const folgas = [
//     "quinta-Feira",
//     "Sexta-feira",
//     "sábado",
//     "Domingo",
//     "segunda",
//     "quarta",
//     "Quarta-feira",
//   ];
  
//   const diasCapitalizados = capitalizeFolgas(folgas);
//   console.log(diasCapitalizados);


//----------------------------------------------------------------------------------------------------------

//   function retornarPrimeiraImobiliaria(listaImobiliarias) {

//     if (listaImobiliarias.length > 0) 
//       return listaImobiliarias.shift();
//   }
  
//   const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];
//   const primeiraImobiliaria = retornarPrimeiraImobiliaria(imobiliarias);
  
//----------------------------------------------------------------------------------------------------------


// function quantidadeAprovados(alunos) {
//     let countAprovados = 0;
  

//     for (let i = 0; i < alunos.length; i++) {
//       const nota = Number(alunos[i].nota);
//       if (nota >= 70) {
//         countAprovados++;
//       }
//     }
//     return countAprovados;
//   }
  
//   const alunos = [
//     { nome: "Filipe Diogo", nota: "80" },
//     { nome: "Enzo Miguel", nota: "77" },
//     { nome: "Mateus Danilo", nota: "88" },
//     { nome: "Olivia Stella", nota: "95" },
//     { nome: "César Paulo", nota: "68" },
//   ];
  
//   const qtdAprovados = quantidadeAprovados(alunos);
  
//   console.log("Quantidade de alunos aprovados: " + qtdAprovados);
  

//----------------------------------------------------------------------------------------------------------

// function removerFeedbacksDuplicados(feedbacks) {
//     return feedbacks.filter((valor, indice, self) => {
//       return self.indexOf(valor) === indice;
//     });
//   }
  
//   const feedbacks = [
//     "Melhorar responsividade do site",
//     "Erros confusos",
//     "Os botões são intuitivos",
//     "Erros confusos",
//   ];
  
//   const feedbacksSemDuplicatas = removerFeedbacksDuplicados(feedbacks);
//   console.log(feedbacksSemDuplicatas);
  


//----------------------------------------------------------------------------------------------------------

