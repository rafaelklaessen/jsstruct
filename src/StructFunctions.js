import { struct, objMatchesStruct } from './struct';
import cloneDeep from 'lodash/clonedeep';

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

export default Struct;
