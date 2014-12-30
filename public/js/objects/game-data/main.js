define([
  "./game",
], function() {

  var Game = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Game[k] = arguments[i][k];
    }
  }

  return Game;

});
