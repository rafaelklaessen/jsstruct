const struct = (structObj) => {
  const createStruct = function(obj) {
    if (!objMatchesStruct(structObj, obj)) throw new Error('Invalid struct data!')
    this.obj = obj;

    return this;
  }

  return createStruct;
};

module.exports.struct = struct;

const objMatchesStruct = (struct, obj) =>
    (verifyFields(struct, obj) && verifyFields(obj, struct))
    && verifyTypes(struct, obj);

const verifyFields = (a, b) =>
    Object.keys(a).reduce((previous, current) =>
        previous ? typeof b[current] != 'undefined' : previous, true);

const verifyTypes = (struct, obj) =>
    Object.keys(struct).reduce((previous, current) =>
        previous ? typeof obj[current] == struct[current] : previous, true);

module.exports.objMatchesStruct = objMatchesStruct;
module.exports.verifyFields = verifyFields;
module.exports.verifyTypes = verifyTypes;
