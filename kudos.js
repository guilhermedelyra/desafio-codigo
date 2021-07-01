const { numToText } = require('./spelledOutNumber');

// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'SUPER', value: 100 },
  { name: 'GREAT', value: 50 },
  { name: 'GOOD', value: 20 },
  { name: 'NICE', value: 10 },
  { name: 'OK', value: 5 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = {
  'OK': 2,
  'NICE': 5,
  'GOOD': 8,
  'GREAT': 15,
  'SUPER': 25,
};

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/

function buildKudosArray(result, quantityOfKudos, name) {
  const kudos_array = Array(quantityOfKudos).fill(name)
  return result.concat(kudos_array);
}

function getKudosForUser(points) {
  let result = [];
  KUDOS_TO_POINTS.forEach(({ name, value }) => {
    const quantityOfKudos = Math.floor(points / value);
    result = buildKudosArray(result, quantityOfKudos, name);
    points -= quantityOfKudos * value;
  });
  return result;
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function valueWithCurrency(msg) {
  if (msg === 'um milhão') return `${msg} de reais`;
  if (msg === 'um') return `${msg} real`; // não tem como já que o valor minimo é 2 reais, mas por prevenção :)
  return `${msg} reais`;
} 

function getKudosValueMessageForUser(kudos) {
  const value = valueFromKudos(kudos);
  const spelledOutValue = valueWithCurrency(numToText(value));
  const kudosArrayMsg = kudos.join(', ');
  return `Você recebeu ${spelledOutValue} em retorno aos kudos ${kudosArrayMsg}!`
}


function valueFromKudos(kudos) {
  return kudos.reduce((acc, k) => 
    acc + KUDOS_TO_REAL[k], 0
  );
}

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
