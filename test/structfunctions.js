const should = require('should');
const { struct } = require('../lib/struct');
const shallowequal = require('shallowequal');
const Struct = require('../lib/StructFunctions').default;

// Example data
const structTypes = { a: 'number', b: 'string' };
const structData = { a: 7, b: 'foo'};
const myStruct = struct(structTypes);
const t = myStruct(structData);
const otherStruct = struct({ foo: 'bar' });

describe('struct functions', () => {
  it('should determine whether something is a struct or not', (done) => {
    Struct.isStruct(t).should.equal(true);
    Struct.isStruct().should.equal(false);
    Struct.isStruct(7).should.equal(false);

    Struct.isStruct(t, myStruct).should.equal(true);
    Struct.isStruct(t, otherStruct).should.equal(false);

    done();
  });

  it('should update a struct', (done) => {
    const updated = Struct.update(t, { b: 'bar' });
    shallowequal(updated.obj, { a: 7, b: 'bar' }).should.equal(true);
    shallowequal(t.obj, { a: 7, b: 'foo' }).should.equal(true);

    done();
  });

  it('should clone a struct', (done) => {
    const cloned = Struct.clone(t);
    shallowequal(cloned.obj, structData).should.equal(true);

    done();
  });

  it('should convert a struct to an object', (done) => {
    shallowequal(Struct.toObj(t), structData).should.equal(true);

    done();
  });
});
