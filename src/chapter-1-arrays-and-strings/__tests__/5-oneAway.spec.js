const { oneAway } = require('../5-oneAway');

describe('One Away Algorithm', () => {
  it('should return false when the length diff is more than 2', () => {
    expect(oneAway('aaaaa', 'aa')).toBe(false);
    expect(oneAway('aa', 'aaaaaa')).toBe(false);
  });
  it('should return true when there is only one replacement', () => {
    expect(oneAway('aaaaa', 'aaaab')).toBe(true);
    expect(oneAway('baaaa', 'aaaaa')).toBe(true);
    expect(oneAway('aaaaa', 'aabaa')).toBe(true);
  });
  it('should return false when there is more than one replacement', () => {
    expect(oneAway('aaaaa', 'aaabb')).toBe(false);
    expect(oneAway('aaabb', 'aaaaa')).toBe(false);
    expect(oneAway('aaabb', 'aabaa')).toBe(false);
  });
  it('should return true when there is only one deletion', () => {
    expect(oneAway('aaaaa', 'aaaa')).toBe(true);
    expect(oneAway('baaaa', 'aaaa')).toBe(true);
    expect(oneAway('ababab', 'aabab')).toBe(true);
    expect(oneAway('ababab', 'abaab')).toBe(true);
    expect(oneAway('ababab', 'ababa')).toBe(true);
  });
  it('should return false when there is a deletion and more', () => {
    expect(oneAway('aaaaa', 'abaa')).toBe(false);
    expect(oneAway('aaaaa', 'aaba')).toBe(false);
    expect(oneAway('aabbb', 'abba')).toBe(false);
  });
});
