const assert = require('assert');

describe('addition', () => {
  it('should add 1+1 correctly', (done) => {
    const onePlusOne = 1 + 1;
    assert.equal(2, onePlusOne);
    done();
  });
});
