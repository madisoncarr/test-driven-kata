const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('has a line break at the column number', () => {
    expect(
      wrap('Well hello there mister fancy pants', 7),
      'another parameter'
    ).to.equal('Well\nhello\nthere\nmister\nfancy\npants');
  });

  it('does not break in the middle of a word', () => {
    expect(wrap('Put on a spot of tea', 11).to.equal('Put on a\nspot of\ntea'));
  });

  it('returns unbreakable if there are no spaces in the string', () => {
    expect(
      wrap('supercalifragilisticiskbealidocious', 5).to.equal('unbreakable!')
    );
  });
});
