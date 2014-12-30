define([
  "./condition",
  "./entityCheck",
], function() {
  var ConditionList = Ember.Namespace.create();
  window.ConditionList = ConditionList;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      ConditionList[k] = arguments[i][k];
    }
  }

  return {
    ConditionList : ConditionList
  };
});
