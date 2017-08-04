const cloneDeep = require('lodash/clonedeep');

const struct = (structObj) => {
  const structCloned = cloneDeep(structObj);

  const createStruct = function(obj) {
    const objCloned = cloneDeep(obj);
    if (!objMatchesStruct(structCloned, objCloned)) throw new Error('Invalid struct data!')

    const data = {
      obj: Object.freeze(objCloned),
      struct: Object.freeze(structCloned)
    };

    return data;
  }

  createStruct.struct = Object.freeze(structCloned);

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
