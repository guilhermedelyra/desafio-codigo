const DIGITS = {
    '0': 'zero', '1': 'um', '2': 'dois', '3': 'tres', '4': 'quatro',
    '5': 'cinco', '6': 'seis', '7': 'sete', '8': 'oito', '9': 'nove',
    '10': 'dez', '11': 'onze', '12': 'doze', '13': 'treze', '14': 'quatorze',
    '15': 'quinze', '16': 'dezesseis', '17': 'dezessete', '18': 'dezoito', '19': 'dezenove'
}


const DOZENS = {
    '2': 'vinte', '3': 'trinta', '4': 'quarenta', '5': 'cinquenta', '6': 'sessenta',
    '7': 'setenta', '8': 'oitenta', '9': 'noventa'
}


const HUNDREDS = {
    '1': 'cento', '2': 'duzentos', '3': 'trezentos', '4': 'quatrocentos', '5': 'quinhentos',
    '6': 'seissentos', '7': 'setecentos', '8': 'oitocentos', '9': 'novecentos'
}


function calcHundreds(num, i, result) {
    if (num[i+1] != '0' || num[i+2] != '0') {
        result += HUNDREDS[num[i]] + ' e '
    } else {
        result += num[i] == '1' ? 'cem' : HUNDREDS[num[i]];
        i += 2;
    }
    return [i, result];
}


const isRoundNumber = (next_digit) => {
    return next_digit === '0'
         ? ''
         : ` e ${DIGITS[next_digit]}`
}


function calcDozens(num, i, result) {
    if (num[i] == '1') {
        result += DIGITS[num.slice(i, i+2)];
    } else if (num[i] == '0') {
        result += DIGITS[num[++i]]; 
    } else {
        result += DOZENS[num[i]] + isRoundNumber(num[i+1]);
    }
    i++;
    return [i, result];
}


const isFirstDigitOfHundreds = (i, len) => (len == 3 && i == 0);
const isFirstDigitOfDozens = (i, len) => (i == 0 && len == 2) || (i == 1 && len == 3);


function _numToText(num) {
    if (!num) return '';
 
    const intNum = parseInt(num);
    const strNum = intNum.toString();
    
    if (intNum < 10) {
        return DIGITS[strNum];
    }
    
    let result = "";
    const len = strNum.length;

    for (let i = 0; i < len; i++) {       
        if (isFirstDigitOfDozens(i, len)) {
            [i, result] = calcDozens(strNum, i, result);
        }
        
        if (isFirstDigitOfHundreds(i, len)) {
            [i, result] = calcHundreds(strNum, i, result);
        }
    }

    return result;        
}


const fixedThousandsMsg = (txt, hundreds) => {
    if (txt) {
        const complement = hundreds ? ' e ' : '';
        return (
            (txt == 'um')
            ? '' 
            : `${txt} `
        ) + 'mil' + complement;
    }
    return '';
}


const fixedHundredsMsg = (txt, num) => {
    if (num.length > 3 && txt == 'zero') {
        return '';
    }
    return txt;
}


function numToText(_num) {
    if (_num == 1000000) return 'um milhão';
    const num = _num.toString();
    const hundreds = fixedHundredsMsg(_numToText(num.slice(-3)), num);
    const thousands = fixedThousandsMsg(_numToText(num.slice(0, -3)), hundreds);
    return thousands + hundreds;
}


module.exports = {
    numToText,
};
  