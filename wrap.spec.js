const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('has a line break at the column number', () => {
    expect(wrap('Well hello there mister fancy pants'), 7).to.equal(
      'Well\nhello\nthere\nmister\nfancy\npants'
    );
  });
});
