const should = require('should');
const { struct, objMatchesStruct } = require('../lib/struct');
const shallowequal = require('shallowequal');

// Example data
const structTypes = { a: 'number', b: 'string' };
const structData = { a: 7, b: 'foo'};

describe('struct', () => {
  it('should create structs correctly', (done) => {
    const myStruct = struct(structTypes);
    const t = myStruct(structData);
    shallowequal(t.obj, structData).should.equal(true);

    shallowequal(myStruct.struct, structTypes).should.equal(true);

    done();
  });

  it('should verify structs correctly', (done) => {
    objMatchesStruct(structTypes, structData).should.equal(true);
    objMatchesStruct({ a: 'string', b: 'string' }, { a: 'foo' }).should.equal(false);
    objMatchesStruct({ a: 'string' }, { a: 'foo', b: 'bar' }).should.equal(false);
    objMatchesStruct(structTypes, { a: 'foo', b: 'bar' }).should.equal(false);

    done();
  });
});
