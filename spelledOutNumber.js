const digitos = {
    '0': 'zero', '1': 'um', '2': 'dois', '3': 'tres', '4': 'quatro',
    '5': 'cinco', '6': 'seis', '7': 'sete', '8': 'oito', '9': 'nove',
    '10': 'dez', '11': 'onze', '12': 'doze', '13': 'treze', '14': 'quatorze',
    '15': 'quinze', '16': 'dezesseis', '17': 'dezessete', '18': 'dezoito', '19': 'dezenove'
}

const dezenas = {
    '2': 'vinte', '3': 'trinta', '4': 'quarenta', '5': 'cinquenta', '6': 'sessenta',
    '7': 'setenta', '8': 'oitenta', '9': 'noventa'
}

const centenas = {
    '1': 'cento', '2': 'duzentos', '3': 'trezentos', '4': 'quatrocentos', '5': 'quinhentos',
    '6': 'seissentos', '7': 'setecentos', '8': 'oitocentos', '9': 'novecentos'
}

function hundreds(num, i, result) {
    if (num[i+1] != '0' || num[i+2] != '0') {
        result += centenas[num[i]] + ' e '
    } else {
        result += num[i] == '1' ? 'cem' : centenas[num[i]];
        i += 2;
    }
    return [i, result];
}

function dozens(num, i, result) {
    if (num[i] == '1') {
        result += digitos[num.slice(i, i+2)];
    } else if (num[i] == '0') {
        result += digitos[num[++i]]; 
    } else {
        result += dezenas[num[i]] + ((num[i+1] != '0') ? (' e ' + digitos[num[i+1]]) : '');
    }
    i++;
    return [i, result];
}


const isFirstDigitOfHundred = (i, len) => (len == 3 && i == 0);
const isFirstDigitOfDozens = (i, len) => (i == 0 && len == 2) || (i == 1 && len == 3);

function _numToText(num) {
    if (!num) return '';
 
    const intNum = parseInt(num);
    const strNum = intNum.toString();
    const len = strNum.length;
    
    let result = "";
    if (intNum < 10) {
        return digitos[strNum];
    }

    for (let i = 0; i < len; i++) {       
        if (isFirstDigitOfDozens(i, len)) {
            [i, result] = dozens(strNum, i, result);
        }
        
        if (isFirstDigitOfHundred(i, len)) {
            [i, result] = hundreds(strNum, i, result);
        }
    }

    return result;        
}

const fixedThousands = (txt, hundreds) => {
    if (txt) {
        const complement = hundreds ? ' e ' : '';
        return ((txt == 'um') ? '' : txt+' ') + 'mil' + complement;
    }
    return '';
}

const fixedHundreds = (txt, num) => {
    if (num.length > 3 && txt == 'zero') {
        return '';
    }
    return txt;
}

function numToText(_num) {
    if (_num == 1000000) return 'um milhão';
    const num = _num.toString();
    const hundreds = fixedHundreds(_numToText(num.slice(-3)), num);
    const thousands = fixedThousands(_numToText(num.slice(0, -3)), hundreds);
    return thousands + hundreds;
}

module.exports = {
    numToText,
};
  