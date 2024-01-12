
// let contador = 1; //valor inicial
// let limite = 11;

// while (contador < limite) {
//     document.write(contador, "<br>");
//     contador++
// };

// document.write("<hr>");

// contador = 50;
// limite = 1;

// while(contador >= limite){
//     document.write(contador, "<br>");
//     contador--
// }

// // const escola = "Ada"
// // document.write(escola, typeof escola);
// // document.write(escola.charAt(0));
// // document.write(escola.charCodeAt(A));
// // document.write(String.fromCharCode(65));

// let alfabeto = 97;
// limite = 122;

// while(alfabeto <= limite){
//     document.write(String.fromCharCode(alfabeto))
//     alfabeto++
// }

// alfabeto = 97;
// limite = 122;
// document.write("<hr>");


// while (alfabeto <= limite) {
//     document.write(String.fromCharCode(alfabeto), ' ');
//     alfabeto ++;
// }

// const frase = "Code Tank Ifood";
// contador = 0;

// while (contador < frase.length) {
//     document.write(frase.charCodeAt(contador), ' ');
//  contador ++;
// }

// document.write("<hr>");

// for (i = 1; i <= 10; i++){
//     document.write(i, " ")

// }
//  let saida = ' ';
// for (i = 100; i >=2; i -=2 ){
//     saida+= i;
//     if(i > 2){
//         saida += ' - ';
//     }
// }
// document.write(saida);
// document.write("<hr>");


// for(i=1;  i <= 5; i++){
// document.write("*");
// for( j=1; j<=10; j++){
//     document.write("*");
// }
// document.write("<br>");
// }
document.write("<hr>");

const letras = ["a", "b", "c","d","e"];
for(i=0; i < letras.length; i++){
    document.write(letras[i].toUpperCase(), " ");
}
document.write("<hr>");
const carros = [];
let controle = true;

while(controle){
    carros[carros.length] = prompt(`Digite o nome do veiculo ${carros.length}:`)
    if(carros .length == 5){
        controle = false;
    }
   for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
   }
  
}
document.write(carros);
