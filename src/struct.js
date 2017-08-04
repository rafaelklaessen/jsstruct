import cloneDeep from 'lodash/clonedeep';

export const struct = (structObj) => {
  const createStruct = (obj) => {
    if (!objMatchesStruct(structObj, obj)) throw new Error('Invalid struct data!')

    return {
      obj: Object.freeze(obj),
      struct: Object.freeze(structObj)
    };
  }

  createStruct.struct = Object.freeze(structObj);

  return createStruct;
};

export const objMatchesStruct = (struct, obj) =>
    (verifyFields(struct, obj) && verifyFields(obj, struct))
    && verifyTypes(struct, obj);

const verifyFields = (a, b) =>
    Object.keys(a).reduce((previous, current) =>
        previous ? typeof b[current] != 'undefined' : previous, true);

const verifyTypes = (struct, obj) =>
    Object.keys(struct).reduce((previous, current) =>
        previous ? typeof obj[current] == struct[current] : previous, true);
