const should = require('should');
const { struct, objMatchesStruct, verifyFields, verifyTypes } = require('../src/struct');
const shallowequal = require('shallowequal');

describe('addition', () => {
  it('should log the obj', (done) => {
    const myStruct = struct({ kees: 'number', jan: 'string' });
    const t = myStruct({ kees: 7, jan: 'henk' });
    shallowequal(t, { kees: 7, jan: 'henk' }).should.equal(true);

    objMatchesStruct({ kees: 'number', jan: 'string' }, { kees: 7, jan: 'erik' }).should.equal(true);
    objMatchesStruct({ kees: 'string', jan: 'string' }, { kees: 'henk' }).should.equal(false);
    objMatchesStruct({ kees: 'string' }, { kees: 'henk', jan: 'henk' }).should.equal(false);
    objMatchesStruct({ kees: 'number', jan: 'string' }, { kees: 'henk', jan: 'henk' }).should.equal(false);

    done();
  });
});
