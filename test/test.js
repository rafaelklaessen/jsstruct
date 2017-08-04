const should = require('should');
const { struct, objMatchesStruct, verifyFields, verifyTypes } = require('../src/struct');
const shallowequal = require('shallowequal');
const Struct = require('../src/StructFunctions');
const cloneDeep = require('lodash/clonedeep');

describe('addition', () => {
  it('should log the obj', (done) => {
    const myStruct = struct({ kees: 'number', jan: 'string' });
    const t = myStruct({ kees: 7, jan: 'henk' });
    shallowequal(t.obj, { kees: 7, jan: 'henk' }).should.equal(true);

    shallowequal(myStruct.struct, { kees: 'number', jan: 'string' }).should.equal(true);

    objMatchesStruct({ kees: 'number', jan: 'string' }, { kees: 7, jan: 'erik' }).should.equal(true);
    objMatchesStruct({ kees: 'string', jan: 'string' }, { kees: 'henk' }).should.equal(false);
    objMatchesStruct({ kees: 'string' }, { kees: 'henk', jan: 'henk' }).should.equal(false);
    objMatchesStruct({ kees: 'number', jan: 'string' }, { kees: 'henk', jan: 'henk' }).should.equal(false);

    done();
  });

  it('should have working functions', (done) => {
    const myStruct = struct({ kees: 'number', jan: 'string' });
    const t = myStruct({ kees: 7, jan: 'henk' });
    const otherStruct = struct({ henk: 'string' });

    Struct.isStruct(t).should.equal(true);
    Struct.isStruct(t, myStruct).should.equal(true);
    Struct.isStruct(t, otherStruct).should.equal(false);

    const updated = Struct.update(t, { jan: 'kees' });
    shallowequal(updated.obj, { kees: 7, jan: 'kees' }).should.equal(true);

    const cloned = Struct.clone(t);
    shallowequal(cloned.obj, { kees: 7, jan: 'henk' }).should.equal(true);

    done();
  });
});
