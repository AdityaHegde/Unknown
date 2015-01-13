define([
  "./valueList",
  "./valueRegistry",
], function(ValueList, ValueRegistry) {

var createValue = function(value) {
  if(ValueRegistry.ValueRegistry[value.id]) {
    return ValueRegistry.ValueRegistry[value.id];
  }
  var valueInstance = ValueList.ValueList[value.type].create(value);
  ValueRegistry.ValueRegistry[value.id] = valueInstance;
  return valueInstance;
};

return {
  createValue : createValue,
};

});
