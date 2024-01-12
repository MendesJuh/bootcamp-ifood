

const palavra = "Juliana";

 const firtLetter = palavra.charAt(0).toLocaleLowerCase();

 const vogal = "a" == firtLetter || "e" == firtLetter || "i"== firtLetter || "o"== firtLetter || "u"== firtLetter;

console.log(vogal);


// IF ELSE 

let number = 45;
let saida;

saida = number  == 45 ? console.log("São iguais ") : console.log("Não são iguais");

// switch

var diaDaSemana = 2;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia não reconhecido");
}

   
const nomes = ["Maria" , "João", "Leo", "Juliana"];

const remove = "Leo"

if(nomes[2] == remove)
{
    nomes.splice(2,1);
}

console.log(nomes);
