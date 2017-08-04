const { struct, objMatchesStruct } = require('./struct');
const cloneDeep = require('lodash/clonedeep');

const Struct = {
  isStruct: (obj, struct) =>
      struct ? objMatchesStruct(struct.struct, obj.obj) : !!(obj || {}).obj,

  update: (obj, updateObj) =>
      struct(obj.struct)(Struct.updateObj(obj, updateObj)),

  updateObj: (obj, updateObj) =>
      Object.assign(cloneDeep(obj.obj), updateObj),

  clone: (obj) =>
      struct(obj.struct)(cloneDeep(obj.obj)),

  toObj: (obj) => obj.obj
};

module.exports = Struct;
