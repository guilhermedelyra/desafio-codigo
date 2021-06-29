const spelledOutNumber = require('./spelledOutNumber');

test('test unidades', () => {
    expect(spelledOutNumber.numToText(0)).toEqual('zero');
    expect(spelledOutNumber.numToText(1)).toEqual('um');
    expect(spelledOutNumber.numToText(2)).toEqual('dois');
    expect(spelledOutNumber.numToText(3)).toEqual('tres');
    expect(spelledOutNumber.numToText(4)).toEqual('quatro');
    expect(spelledOutNumber.numToText(5)).toEqual('cinco');
    expect(spelledOutNumber.numToText(6)).toEqual('seis');
    expect(spelledOutNumber.numToText(7)).toEqual('sete');
    expect(spelledOutNumber.numToText(8)).toEqual('oito');
    expect(spelledOutNumber.numToText(9)).toEqual('nove');
    expect(spelledOutNumber.numToText(10)).toEqual('dez');
    expect(spelledOutNumber.numToText(11)).toEqual('onze');
    expect(spelledOutNumber.numToText(12)).toEqual('doze');
    expect(spelledOutNumber.numToText(13)).toEqual('treze');
    expect(spelledOutNumber.numToText(14)).toEqual('quatorze');
    expect(spelledOutNumber.numToText(15)).toEqual('quinze');
    expect(spelledOutNumber.numToText(16)).toEqual('dezesseis');
    expect(spelledOutNumber.numToText(17)).toEqual('dezessete');
    expect(spelledOutNumber.numToText(18)).toEqual('dezoito');
    expect(spelledOutNumber.numToText(19)).toEqual('dezenove');
});

test('test dezenas', () => {
    expect(spelledOutNumber.numToText(20)).toEqual('vinte');
    expect(spelledOutNumber.numToText(21)).toEqual('vinte e um');
    expect(spelledOutNumber.numToText(30)).toEqual('trinta');
    expect(spelledOutNumber.numToText(32)).toEqual('trinta e dois');
    expect(spelledOutNumber.numToText(40)).toEqual('quarenta');
    expect(spelledOutNumber.numToText(43)).toEqual('quarenta e tres');
    expect(spelledOutNumber.numToText(50)).toEqual('cinquenta');
    expect(spelledOutNumber.numToText(54)).toEqual('cinquenta e quatro');
    expect(spelledOutNumber.numToText(60)).toEqual('sessenta');
    expect(spelledOutNumber.numToText(65)).toEqual('sessenta e cinco');
    expect(spelledOutNumber.numToText(70)).toEqual('setenta');
    expect(spelledOutNumber.numToText(76)).toEqual('setenta e seis');
    expect(spelledOutNumber.numToText(80)).toEqual('oitenta');
    expect(spelledOutNumber.numToText(87)).toEqual('oitenta e sete');
    expect(spelledOutNumber.numToText(90)).toEqual('noventa');
    expect(spelledOutNumber.numToText(98)).toEqual('noventa e oito');
});


test('test centenas', () => {
    expect(spelledOutNumber.numToText(100)).toEqual('cem');
    expect(spelledOutNumber.numToText(101)).toEqual('cento e um');
    expect(spelledOutNumber.numToText(110)).toEqual('cento e dez');
    expect(spelledOutNumber.numToText(111)).toEqual('cento e onze');

    expect(spelledOutNumber.numToText(200)).toEqual('duzentos');
    expect(spelledOutNumber.numToText(202)).toEqual('duzentos e dois');
    expect(spelledOutNumber.numToText(220)).toEqual('duzentos e vinte');
    expect(spelledOutNumber.numToText(222)).toEqual('duzentos e vinte e dois');
    
    expect(spelledOutNumber.numToText(300)).toEqual('trezentos');
    expect(spelledOutNumber.numToText(303)).toEqual('trezentos e tres');
    expect(spelledOutNumber.numToText(330)).toEqual('trezentos e trinta');
    expect(spelledOutNumber.numToText(333)).toEqual('trezentos e trinta e tres');
    
    expect(spelledOutNumber.numToText(400)).toEqual('quatrocentos');
    expect(spelledOutNumber.numToText(404)).toEqual('quatrocentos e quatro');
    expect(spelledOutNumber.numToText(440)).toEqual('quatrocentos e quarenta');
    expect(spelledOutNumber.numToText(444)).toEqual('quatrocentos e quarenta e quatro');
    
    expect(spelledOutNumber.numToText(500)).toEqual('quinhentos');
    expect(spelledOutNumber.numToText(505)).toEqual('quinhentos e cinco');
    expect(spelledOutNumber.numToText(550)).toEqual('quinhentos e cinquenta');
    expect(spelledOutNumber.numToText(555)).toEqual('quinhentos e cinquenta e cinco');
    
    expect(spelledOutNumber.numToText(600)).toEqual('seissentos');
    expect(spelledOutNumber.numToText(606)).toEqual('seissentos e seis');
    expect(spelledOutNumber.numToText(660)).toEqual('seissentos e sessenta');
    expect(spelledOutNumber.numToText(666)).toEqual('seissentos e sessenta e seis');

    expect(spelledOutNumber.numToText(700)).toEqual('setecentos');
    expect(spelledOutNumber.numToText(707)).toEqual('setecentos e sete');
    expect(spelledOutNumber.numToText(770)).toEqual('setecentos e setenta');
    expect(spelledOutNumber.numToText(777)).toEqual('setecentos e setenta e sete');

    expect(spelledOutNumber.numToText(800)).toEqual('oitocentos');
    expect(spelledOutNumber.numToText(808)).toEqual('oitocentos e oito');
    expect(spelledOutNumber.numToText(880)).toEqual('oitocentos e oitenta');
    expect(spelledOutNumber.numToText(888)).toEqual('oitocentos e oitenta e oito');

    expect(spelledOutNumber.numToText(900)).toEqual('novecentos');
    expect(spelledOutNumber.numToText(909)).toEqual('novecentos e nove');
    expect(spelledOutNumber.numToText(990)).toEqual('novecentos e noventa');
    expect(spelledOutNumber.numToText(999)).toEqual('novecentos e noventa e nove');
});

test('test milhares', () => {
    expect(spelledOutNumber.numToText(1000)).toEqual('mil');
    expect(spelledOutNumber.numToText(1001)).toEqual('mil e um');
    expect(spelledOutNumber.numToText(1010)).toEqual('mil e dez');
    expect(spelledOutNumber.numToText(1011)).toEqual('mil e onze');
    expect(spelledOutNumber.numToText(1100)).toEqual('mil e cem');
    expect(spelledOutNumber.numToText(1110)).toEqual('mil e cento e dez');
    expect(spelledOutNumber.numToText(1111)).toEqual('mil e cento e onze');

    expect(spelledOutNumber.numToText(2000)).toEqual('dois mil');
    expect(spelledOutNumber.numToText(2002)).toEqual('dois mil e dois');
    expect(spelledOutNumber.numToText(2020)).toEqual('dois mil e vinte');
    expect(spelledOutNumber.numToText(2022)).toEqual('dois mil e vinte e dois');
    expect(spelledOutNumber.numToText(2200)).toEqual('dois mil e duzentos');
    expect(spelledOutNumber.numToText(2220)).toEqual('dois mil e duzentos e vinte');
    expect(spelledOutNumber.numToText(2222)).toEqual('dois mil e duzentos e vinte e dois');

    expect(spelledOutNumber.numToText(3000)).toEqual('tres mil');
    expect(spelledOutNumber.numToText(3003)).toEqual('tres mil e tres');
    expect(spelledOutNumber.numToText(3030)).toEqual('tres mil e trinta');
    expect(spelledOutNumber.numToText(3033)).toEqual('tres mil e trinta e tres');
    expect(spelledOutNumber.numToText(3300)).toEqual('tres mil e trezentos');
    expect(spelledOutNumber.numToText(3330)).toEqual('tres mil e trezentos e trinta');
    expect(spelledOutNumber.numToText(3333)).toEqual('tres mil e trezentos e trinta e tres');

    expect(spelledOutNumber.numToText(4000)).toEqual('quatro mil');
    expect(spelledOutNumber.numToText(4004)).toEqual('quatro mil e quatro');
    expect(spelledOutNumber.numToText(4040)).toEqual('quatro mil e quarenta');
    expect(spelledOutNumber.numToText(4044)).toEqual('quatro mil e quarenta e quatro');
    expect(spelledOutNumber.numToText(4400)).toEqual('quatro mil e quatrocentos');
    expect(spelledOutNumber.numToText(4440)).toEqual('quatro mil e quatrocentos e quarenta');
    expect(spelledOutNumber.numToText(4444)).toEqual('quatro mil e quatrocentos e quarenta e quatro');

    expect(spelledOutNumber.numToText(5000)).toEqual('cinco mil');
    expect(spelledOutNumber.numToText(5005)).toEqual('cinco mil e cinco');
    expect(spelledOutNumber.numToText(5050)).toEqual('cinco mil e cinquenta');
    expect(spelledOutNumber.numToText(5055)).toEqual('cinco mil e cinquenta e cinco');
    expect(spelledOutNumber.numToText(5500)).toEqual('cinco mil e quinhentos');
    expect(spelledOutNumber.numToText(5550)).toEqual('cinco mil e quinhentos e cinquenta');
    expect(spelledOutNumber.numToText(5555)).toEqual('cinco mil e quinhentos e cinquenta e cinco');

    expect(spelledOutNumber.numToText(6000)).toEqual('seis mil');
    expect(spelledOutNumber.numToText(6006)).toEqual('seis mil e seis');
    expect(spelledOutNumber.numToText(6060)).toEqual('seis mil e sessenta');
    expect(spelledOutNumber.numToText(6066)).toEqual('seis mil e sessenta e seis');
    expect(spelledOutNumber.numToText(6600)).toEqual('seis mil e seissentos');
    expect(spelledOutNumber.numToText(6660)).toEqual('seis mil e seissentos e sessenta');
    expect(spelledOutNumber.numToText(6666)).toEqual('seis mil e seissentos e sessenta e seis');

    expect(spelledOutNumber.numToText(7000)).toEqual('sete mil');
    expect(spelledOutNumber.numToText(7007)).toEqual('sete mil e sete');
    expect(spelledOutNumber.numToText(7070)).toEqual('sete mil e setenta');
    expect(spelledOutNumber.numToText(7077)).toEqual('sete mil e setenta e sete');
    expect(spelledOutNumber.numToText(7700)).toEqual('sete mil e setecentos');
    expect(spelledOutNumber.numToText(7770)).toEqual('sete mil e setecentos e setenta');
    expect(spelledOutNumber.numToText(7777)).toEqual('sete mil e setecentos e setenta e sete');

    expect(spelledOutNumber.numToText(8000)).toEqual('oito mil');
    expect(spelledOutNumber.numToText(8008)).toEqual('oito mil e oito');
    expect(spelledOutNumber.numToText(8080)).toEqual('oito mil e oitenta');
    expect(spelledOutNumber.numToText(8088)).toEqual('oito mil e oitenta e oito');
    expect(spelledOutNumber.numToText(8800)).toEqual('oito mil e oitocentos');
    expect(spelledOutNumber.numToText(8880)).toEqual('oito mil e oitocentos e oitenta');
    expect(spelledOutNumber.numToText(8888)).toEqual('oito mil e oitocentos e oitenta e oito');

    expect(spelledOutNumber.numToText(9000)).toEqual('nove mil');
    expect(spelledOutNumber.numToText(9009)).toEqual('nove mil e nove');
    expect(spelledOutNumber.numToText(9090)).toEqual('nove mil e noventa');
    expect(spelledOutNumber.numToText(9099)).toEqual('nove mil e noventa e nove');
    expect(spelledOutNumber.numToText(9900)).toEqual('nove mil e novecentos');
    expect(spelledOutNumber.numToText(9990)).toEqual('nove mil e novecentos e noventa');
    expect(spelledOutNumber.numToText(9999)).toEqual('nove mil e novecentos e noventa e nove');
});

test('test dezenas de milhares', () => {
    expect(spelledOutNumber.numToText(11000)).toEqual('onze mil');
    expect(spelledOutNumber.numToText(11001)).toEqual('onze mil e um');
    expect(spelledOutNumber.numToText(11010)).toEqual('onze mil e dez');
    expect(spelledOutNumber.numToText(11011)).toEqual('onze mil e onze');
    expect(spelledOutNumber.numToText(11100)).toEqual('onze mil e cem');
    expect(spelledOutNumber.numToText(11110)).toEqual('onze mil e cento e dez');
    expect(spelledOutNumber.numToText(11111)).toEqual('onze mil e cento e onze');

    expect(spelledOutNumber.numToText(22000)).toEqual('vinte e dois mil');
    expect(spelledOutNumber.numToText(22002)).toEqual('vinte e dois mil e dois');
    expect(spelledOutNumber.numToText(22020)).toEqual('vinte e dois mil e vinte');
    expect(spelledOutNumber.numToText(22022)).toEqual('vinte e dois mil e vinte e dois');
    expect(spelledOutNumber.numToText(22200)).toEqual('vinte e dois mil e duzentos');
    expect(spelledOutNumber.numToText(22220)).toEqual('vinte e dois mil e duzentos e vinte');
    expect(spelledOutNumber.numToText(22222)).toEqual('vinte e dois mil e duzentos e vinte e dois');

    expect(spelledOutNumber.numToText(33000)).toEqual('trinta e tres mil');
    expect(spelledOutNumber.numToText(33003)).toEqual('trinta e tres mil e tres');
    expect(spelledOutNumber.numToText(33030)).toEqual('trinta e tres mil e trinta');
    expect(spelledOutNumber.numToText(33033)).toEqual('trinta e tres mil e trinta e tres');
    expect(spelledOutNumber.numToText(33300)).toEqual('trinta e tres mil e trezentos');
    expect(spelledOutNumber.numToText(33330)).toEqual('trinta e tres mil e trezentos e trinta');
    expect(spelledOutNumber.numToText(33333)).toEqual('trinta e tres mil e trezentos e trinta e tres');

    expect(spelledOutNumber.numToText(44000)).toEqual('quarenta e quatro mil');
    expect(spelledOutNumber.numToText(44004)).toEqual('quarenta e quatro mil e quatro');
    expect(spelledOutNumber.numToText(44040)).toEqual('quarenta e quatro mil e quarenta');
    expect(spelledOutNumber.numToText(44044)).toEqual('quarenta e quatro mil e quarenta e quatro');
    expect(spelledOutNumber.numToText(44400)).toEqual('quarenta e quatro mil e quatrocentos');
    expect(spelledOutNumber.numToText(44440)).toEqual('quarenta e quatro mil e quatrocentos e quarenta');
    expect(spelledOutNumber.numToText(44444)).toEqual('quarenta e quatro mil e quatrocentos e quarenta e quatro');

    expect(spelledOutNumber.numToText(55000)).toEqual('cinquenta e cinco mil');
    expect(spelledOutNumber.numToText(55005)).toEqual('cinquenta e cinco mil e cinco');
    expect(spelledOutNumber.numToText(55050)).toEqual('cinquenta e cinco mil e cinquenta');
    expect(spelledOutNumber.numToText(55055)).toEqual('cinquenta e cinco mil e cinquenta e cinco');
    expect(spelledOutNumber.numToText(55500)).toEqual('cinquenta e cinco mil e quinhentos');
    expect(spelledOutNumber.numToText(55550)).toEqual('cinquenta e cinco mil e quinhentos e cinquenta');
    expect(spelledOutNumber.numToText(55555)).toEqual('cinquenta e cinco mil e quinhentos e cinquenta e cinco');

    expect(spelledOutNumber.numToText(66000)).toEqual('sessenta e seis mil');
    expect(spelledOutNumber.numToText(66006)).toEqual('sessenta e seis mil e seis');
    expect(spelledOutNumber.numToText(66060)).toEqual('sessenta e seis mil e sessenta');
    expect(spelledOutNumber.numToText(66066)).toEqual('sessenta e seis mil e sessenta e seis');
    expect(spelledOutNumber.numToText(66600)).toEqual('sessenta e seis mil e seissentos');
    expect(spelledOutNumber.numToText(66660)).toEqual('sessenta e seis mil e seissentos e sessenta');
    expect(spelledOutNumber.numToText(66666)).toEqual('sessenta e seis mil e seissentos e sessenta e seis');

    expect(spelledOutNumber.numToText(77000)).toEqual('setenta e sete mil');
    expect(spelledOutNumber.numToText(77007)).toEqual('setenta e sete mil e sete');
    expect(spelledOutNumber.numToText(77070)).toEqual('setenta e sete mil e setenta');
    expect(spelledOutNumber.numToText(77077)).toEqual('setenta e sete mil e setenta e sete');
    expect(spelledOutNumber.numToText(77700)).toEqual('setenta e sete mil e setecentos');
    expect(spelledOutNumber.numToText(77770)).toEqual('setenta e sete mil e setecentos e setenta');
    expect(spelledOutNumber.numToText(77777)).toEqual('setenta e sete mil e setecentos e setenta e sete');

    expect(spelledOutNumber.numToText(88000)).toEqual('oitenta e oito mil');
    expect(spelledOutNumber.numToText(88008)).toEqual('oitenta e oito mil e oito');
    expect(spelledOutNumber.numToText(88080)).toEqual('oitenta e oito mil e oitenta');
    expect(spelledOutNumber.numToText(88088)).toEqual('oitenta e oito mil e oitenta e oito');
    expect(spelledOutNumber.numToText(88800)).toEqual('oitenta e oito mil e oitocentos');
    expect(spelledOutNumber.numToText(88880)).toEqual('oitenta e oito mil e oitocentos e oitenta');
    expect(spelledOutNumber.numToText(88888)).toEqual('oitenta e oito mil e oitocentos e oitenta e oito');

    expect(spelledOutNumber.numToText(99000)).toEqual('noventa e nove mil');
    expect(spelledOutNumber.numToText(99009)).toEqual('noventa e nove mil e nove');
    expect(spelledOutNumber.numToText(99090)).toEqual('noventa e nove mil e noventa');
    expect(spelledOutNumber.numToText(99099)).toEqual('noventa e nove mil e noventa e nove');
    expect(spelledOutNumber.numToText(99900)).toEqual('noventa e nove mil e novecentos');
    expect(spelledOutNumber.numToText(99990)).toEqual('noventa e nove mil e novecentos e noventa');
    expect(spelledOutNumber.numToText(99999)).toEqual('noventa e nove mil e novecentos e noventa e nove');
});


test('test centenas de milhares', () => {
    expect(spelledOutNumber.numToText(100000)).toEqual('cem mil');
    expect(spelledOutNumber.numToText(111000)).toEqual('cento e onze mil');
    expect(spelledOutNumber.numToText(111001)).toEqual('cento e onze mil e um');
    expect(spelledOutNumber.numToText(111010)).toEqual('cento e onze mil e dez');
    expect(spelledOutNumber.numToText(111011)).toEqual('cento e onze mil e onze');
    expect(spelledOutNumber.numToText(111100)).toEqual('cento e onze mil e cem');
    expect(spelledOutNumber.numToText(111110)).toEqual('cento e onze mil e cento e dez');
    expect(spelledOutNumber.numToText(111111)).toEqual('cento e onze mil e cento e onze');

    expect(spelledOutNumber.numToText(222000)).toEqual('duzentos e vinte e dois mil');
    expect(spelledOutNumber.numToText(222002)).toEqual('duzentos e vinte e dois mil e dois');
    expect(spelledOutNumber.numToText(222020)).toEqual('duzentos e vinte e dois mil e vinte');
    expect(spelledOutNumber.numToText(222022)).toEqual('duzentos e vinte e dois mil e vinte e dois');
    expect(spelledOutNumber.numToText(222200)).toEqual('duzentos e vinte e dois mil e duzentos');
    expect(spelledOutNumber.numToText(222220)).toEqual('duzentos e vinte e dois mil e duzentos e vinte');
    expect(spelledOutNumber.numToText(222222)).toEqual('duzentos e vinte e dois mil e duzentos e vinte e dois');

    expect(spelledOutNumber.numToText(333000)).toEqual('trezentos e trinta e tres mil');
    expect(spelledOutNumber.numToText(333003)).toEqual('trezentos e trinta e tres mil e tres');
    expect(spelledOutNumber.numToText(333030)).toEqual('trezentos e trinta e tres mil e trinta');
    expect(spelledOutNumber.numToText(333033)).toEqual('trezentos e trinta e tres mil e trinta e tres');
    expect(spelledOutNumber.numToText(333300)).toEqual('trezentos e trinta e tres mil e trezentos');
    expect(spelledOutNumber.numToText(333330)).toEqual('trezentos e trinta e tres mil e trezentos e trinta');
    expect(spelledOutNumber.numToText(333333)).toEqual('trezentos e trinta e tres mil e trezentos e trinta e tres');

    expect(spelledOutNumber.numToText(444000)).toEqual('quatrocentos e quarenta e quatro mil');
    expect(spelledOutNumber.numToText(444004)).toEqual('quatrocentos e quarenta e quatro mil e quatro');
    expect(spelledOutNumber.numToText(444040)).toEqual('quatrocentos e quarenta e quatro mil e quarenta');
    expect(spelledOutNumber.numToText(444044)).toEqual('quatrocentos e quarenta e quatro mil e quarenta e quatro');
    expect(spelledOutNumber.numToText(444400)).toEqual('quatrocentos e quarenta e quatro mil e quatrocentos');
    expect(spelledOutNumber.numToText(444440)).toEqual('quatrocentos e quarenta e quatro mil e quatrocentos e quarenta');
    expect(spelledOutNumber.numToText(444444)).toEqual('quatrocentos e quarenta e quatro mil e quatrocentos e quarenta e quatro');

    expect(spelledOutNumber.numToText(555000)).toEqual('quinhentos e cinquenta e cinco mil');
    expect(spelledOutNumber.numToText(555005)).toEqual('quinhentos e cinquenta e cinco mil e cinco');
    expect(spelledOutNumber.numToText(555050)).toEqual('quinhentos e cinquenta e cinco mil e cinquenta');
    expect(spelledOutNumber.numToText(555055)).toEqual('quinhentos e cinquenta e cinco mil e cinquenta e cinco');
    expect(spelledOutNumber.numToText(555500)).toEqual('quinhentos e cinquenta e cinco mil e quinhentos');
    expect(spelledOutNumber.numToText(555550)).toEqual('quinhentos e cinquenta e cinco mil e quinhentos e cinquenta');
    expect(spelledOutNumber.numToText(555555)).toEqual('quinhentos e cinquenta e cinco mil e quinhentos e cinquenta e cinco');

    expect(spelledOutNumber.numToText(666000)).toEqual('seissentos e sessenta e seis mil');
    expect(spelledOutNumber.numToText(666006)).toEqual('seissentos e sessenta e seis mil e seis');
    expect(spelledOutNumber.numToText(666060)).toEqual('seissentos e sessenta e seis mil e sessenta');
    expect(spelledOutNumber.numToText(666066)).toEqual('seissentos e sessenta e seis mil e sessenta e seis');
    expect(spelledOutNumber.numToText(666600)).toEqual('seissentos e sessenta e seis mil e seissentos');
    expect(spelledOutNumber.numToText(666660)).toEqual('seissentos e sessenta e seis mil e seissentos e sessenta');
    expect(spelledOutNumber.numToText(666666)).toEqual('seissentos e sessenta e seis mil e seissentos e sessenta e seis');

    expect(spelledOutNumber.numToText(777000)).toEqual('setecentos e setenta e sete mil');
    expect(spelledOutNumber.numToText(777007)).toEqual('setecentos e setenta e sete mil e sete');
    expect(spelledOutNumber.numToText(777070)).toEqual('setecentos e setenta e sete mil e setenta');
    expect(spelledOutNumber.numToText(777077)).toEqual('setecentos e setenta e sete mil e setenta e sete');
    expect(spelledOutNumber.numToText(777700)).toEqual('setecentos e setenta e sete mil e setecentos');
    expect(spelledOutNumber.numToText(777770)).toEqual('setecentos e setenta e sete mil e setecentos e setenta');
    expect(spelledOutNumber.numToText(777777)).toEqual('setecentos e setenta e sete mil e setecentos e setenta e sete');

    expect(spelledOutNumber.numToText(888000)).toEqual('oitocentos e oitenta e oito mil');
    expect(spelledOutNumber.numToText(888008)).toEqual('oitocentos e oitenta e oito mil e oito');
    expect(spelledOutNumber.numToText(888080)).toEqual('oitocentos e oitenta e oito mil e oitenta');
    expect(spelledOutNumber.numToText(888088)).toEqual('oitocentos e oitenta e oito mil e oitenta e oito');
    expect(spelledOutNumber.numToText(888800)).toEqual('oitocentos e oitenta e oito mil e oitocentos');
    expect(spelledOutNumber.numToText(888880)).toEqual('oitocentos e oitenta e oito mil e oitocentos e oitenta');
    expect(spelledOutNumber.numToText(888888)).toEqual('oitocentos e oitenta e oito mil e oitocentos e oitenta e oito');

    expect(spelledOutNumber.numToText(999000)).toEqual('novecentos e noventa e nove mil');
    expect(spelledOutNumber.numToText(999009)).toEqual('novecentos e noventa e nove mil e nove');
    expect(spelledOutNumber.numToText(999090)).toEqual('novecentos e noventa e nove mil e noventa');
    expect(spelledOutNumber.numToText(999099)).toEqual('novecentos e noventa e nove mil e noventa e nove');
    expect(spelledOutNumber.numToText(999900)).toEqual('novecentos e noventa e nove mil e novecentos');
    expect(spelledOutNumber.numToText(999990)).toEqual('novecentos e noventa e nove mil e novecentos e noventa');
    expect(spelledOutNumber.numToText(999999)).toEqual('novecentos e noventa e nove mil e novecentos e noventa e nove');
});

test('test milhão', () => {
    expect(spelledOutNumber.numToText(1000000)).toEqual('um milhão');
});