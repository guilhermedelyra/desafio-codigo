const { numToText } = require('./spelledOutNumber');

const KUDOS_TO_REAL = {
    'OK': 2,
    'NICE': 5,
    'GOOD': 8,
    'GREAT': 15,
    'SUPER': 25,
};


function valueWithCurrency(msg) {
    if (msg === 'um milhão') return `${msg} de reais`;
    if (msg === 'um') return `${msg} real`; // não tem como já que o valor minimo é 2 reais, mas por prevenção :)
    return `${msg} reais`;
} 


function valueFromKudos(kudos) {
    return kudos.reduce((acc, kudosName) => 
        acc + KUDOS_TO_REAL[kudosName], 0
    );
}


function getKudosValueMessageForUser(kudos) {
    const value = valueFromKudos(kudos);
    const spelledOutValue = valueWithCurrency(numToText(value));
    const kudosArrayMsg = kudos.join(', ');
    return `Você recebeu ${spelledOutValue} em retorno aos kudos ${kudosArrayMsg}!`
}


module.exports = {
    getKudosValueMessageForUser
};
  