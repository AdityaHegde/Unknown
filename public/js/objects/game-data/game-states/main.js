define([
  "./gameState",
], function() {
  var GameStates = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      GameStates[k] = arguments[i][k];
    }
  }

  return GameStates;
});
