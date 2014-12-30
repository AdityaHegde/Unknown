define([
  "./entity",
  "./items/main",
  "./units/main",
  "./buildings/main",
  "./areas/main",
  "./container",
], function() {
  var EntityList = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      EntityList[k] = arguments[i][k];
    }
  }

  return {
    EntityList : EntityList,
  };
});
