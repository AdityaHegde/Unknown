define([
  "./attribute",
], function() {
  var AttributeList = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      AttributeList[k] = arguments[i][k];
    }
  }

  return {
    AttributeList : AttributeList
  };
});
