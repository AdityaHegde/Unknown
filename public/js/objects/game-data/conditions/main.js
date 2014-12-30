define([
  "./conditionList",
  "./conditionRegistry",
  "./createCondition",
], function() {
  var Conditions = Ember.Namespace.create();
  window.Conditions = Conditions;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Conditions[k] = arguments[i][k];
    }
  }

  return Conditions;
});
