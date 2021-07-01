const { getKudosValueMessageForUser } = require('./buildMessage');

describe('test getKudosValueMessageForUser', () => {
    it('valid ones', () => {
        expect(getKudosValueMessageForUser(['GOOD', 'NICE']))
        .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
  
      expect(getKudosValueMessageForUser(['GOOD', 'GOOD']))
        .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!');
  
      expect(getKudosValueMessageForUser(['SUPER']))
        .toEqual('Você recebeu vinte e cinco reais em retorno aos kudos SUPER!');
  
      expect(getKudosValueMessageForUser(['SUPER', 'GOOD', 'NICE', 'OK']))
        .toEqual('Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!');
      
      const kudosArray = Array(40000).fill('SUPER')
      const kudosArrayMsg = kudosArray.join(', ');
      expect(getKudosValueMessageForUser(kudosArray))
        .toEqual(`Você recebeu um milhão de reais em retorno aos kudos ${kudosArrayMsg}!`); 
    });
  
    it('invalid ones', () => {
        expect(getKudosValueMessageForUser(['GOOD', 'NICE']))
        .not.toEqual('Você recebeu quinze reais em retorno aos kudos GOOD, NICE!');
  
      expect(getKudosValueMessageForUser(['GOOD', 'GOOD']))
        .not.toEqual('Você recebeu dezessete reais em retorno aos kudos GOOD, GOOD!');
  
      expect(getKudosValueMessageForUser(['SUPER']))
        .not.toEqual('Você recebeu cinquenta reais em retorno aos kudos SUPER!');
  
      expect(getKudosValueMessageForUser(['SUPER', 'GOOD', 'NICE', 'OK']))
        .not.toEqual('Você recebeu setenta e dois reais em retorno aos kudos SUPER, GOOD, NICE, OK!'); 
    });
});
  
