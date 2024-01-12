const pessoas = [
  {
    nome: "Juliana",
    idade: 30,
    aptoBolsa: true,
    matriculas: ['css', 'html', 'javascript'],
    niveis: { css: 8, html: 10, javascript: 7 },
  },
  {
    nome: "Simon",
    idade: 17,
    aptoBolsa: true,
    matriculas: ['css', 'html', 'javascript'],
    niveis: { css: 8, html: 10, javascript: 8 },
  },
  {
    nome: "Talita",
    idade: 40,
    aptoBolsa: true,
    matriculas: ['css', 'html', 'javascript'],
    niveis: { css: 8, html: 10, javascript: 6 },
  },
];

const matriculas = ['css', 'html', 'javascript'];

const finalList = pessoas
  .filter((pessoa) => {
    const regra1 = matriculas.every((curso, i) => curso === pessoa.matriculas[i]);
    const regra2 = pessoa.niveis.javascript > 5;

    return regra1 && regra2;
  })
  .map((pessoa) => ({
    ...pessoa,
    matriculas: [...pessoa.matriculas, 'react'],
  }))
  .sort((a, b) => a.niveis.javascript - b.niveis.javascript);

const investimento = finalList
  .map((pessoa) => (pessoa.idade < 18 ? 250 : 250 / 2))
  .reduce((acumulador, atual) => acumulador + atual, 0);

console.log(investimento);
console.table(finalList);
