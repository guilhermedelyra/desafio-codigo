const { getKudosForUser } = require('./kudos');

describe('test getKudosForUser', () => {
  it('valid ones', () => {
      expect(getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  
      expect(getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
      
      expect(getKudosForUser(100)).toEqual(['SUPER']);
      
      expect(getKudosForUser(135)).toEqual(['SUPER', 'GOOD', 'NICE', 'OK']);
      
      expect(getKudosForUser(1000000)).toEqual(Array(10000).fill('SUPER'));
  });

  it('invalid ones', () => {
    expect(getKudosForUser(30)).not.toEqual(['NICE', 'NICE', 'NICE']);

    expect(getKudosForUser(40)).not.toEqual(['GOOD', 'NICE', 'NICE']);
    
    expect(getKudosForUser(100)).not.toEqual(['GREAT', 'GREAT']);
    
    expect(getKudosForUser(135)).not.toEqual(['SUPER', 'NICE', 'NICE', 'NICE', 'OK']);
    
    expect(getKudosForUser(1000000)).not.toEqual(Array(20000).fill('GREAT'));
  });
});

