const { getKudosForUser } = require('./kudos');

test('test getKudosForUser', () => {
    expect(getKudosForUser(30)).toEqual(['GOOD', 'NICE']);

    expect(getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
    
    expect(getKudosForUser(100)).toEqual(['SUPER']);
    
    expect(getKudosForUser(135)).toEqual(['SUPER', 'GOOD', 'NICE', 'OK']);
    
    expect(getKudosForUser(1000000)).toEqual(Array(10000).fill('SUPER'));
});
