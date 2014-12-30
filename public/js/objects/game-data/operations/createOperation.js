define([
  "./operationList",
  "./operationRegistry",
], function(OperationList, OperationRegistry) {

var createOperation = function(operation) {
  if(OperationRegistry.OperationRegistry[operation.id]) {
    return OperationRegistry.OperationRegistry[operation.id];
  }
  var operationInstance = OperationList.OperationList[operation.type].create(operation);
  OperationRegistry.OperationRegistry[operation.id] = operationInstance;
  return operationInstance;
};

return {
  createOperation : createOperation,
};

});
