define([
  "./operation",
  "./periodicOperation",
], function() {
  var OperationList = Ember.Namespace.create();
  window.OperationList = OperationList;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      OperationList[k] = arguments[i][k];
    }
  }

  return {
    OperationList : OperationList,
  };
});
