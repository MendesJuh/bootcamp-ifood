// -------------------- QUESTÃO 1 - RESPOSTA:

const time12h = "06:15:25PM";
const time24h = changeTheTime(time12h);

function changeTheTime(time12h) {
  const parts = time12h.match(/(\d+):(\d+):(\d+)([APM]+M)/);
  let time = parseInt(parts[1], 10);
  const minutes = parseInt(parts[2], 10);
  const seconds = parseInt(parts[3], 10);
  const period = parts[4];
  
  if (period === "PM" && time !== 12) {
    time += 12;
  } else if (period === "AM" && time === 12) {
    time = 0;
  }
  
  return `${time.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

console.log("São:", time24h);




// -------------------- QUESTÃO 2 - RESPOSTA:

const phrase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const numberOfWords = words(phrase);

function words(phrase) {
    let wordCounter = 1;

    for (let i = 0; i < phrase.length; i++) {
      const caractere = phrase[i];

      if (caractere === caractere.toUpperCase()) {
        wordCounter++;
      }
    }
    return wordCounter;
  }
  console.log("Nessa frase existem " + numberOfWords, "palavras");




// -------------------- QUESTÃO 3 - RESPOSTA:

const numbers = [12, 17, 15, 19, 22, 17, 19, 12];
const lonelyNumbers = lonelyNumber(numbers);

function lonelyNumber(numbers) {
    return numbers.filter((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
  }
  console.log(lonelyNumbers); 




// QUESTÃO 4 - RESPOSTA: E -  1 1 2 1 2 3 1 2 3 4

document.write("<hr>");

// QUESTÃO 5 - RESPOSTA: A - TRUE

document.write("<hr>");

// QUESTÃO 6 - RESPOSTA: B-2


