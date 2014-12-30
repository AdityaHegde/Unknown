define([
  "./behavior",
], function() {
  var BehaviorList = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      BehaviorList[k] = arguments[i][k];
    }
  }

  return {
    BehaviorList : BehaviorList
  };
});
