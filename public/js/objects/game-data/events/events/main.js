define([
  "./event",
  "./periodicEvent",
], function() {
  var EventTypes = {};
  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      EventTypes[k] = arguments[i][k];
    }
  }

  return EventTypes;
});
