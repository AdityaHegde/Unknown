define([
  "./value",
  "./attributeValue",
  "./valueSet",
], function() {
  var ValueList = Ember.Namespace.create();
  window.ValueList = ValueList;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      ValueList[k] = arguments[i][k];
    }
  }

  return {
    ValueList : ValueList
  };
});
