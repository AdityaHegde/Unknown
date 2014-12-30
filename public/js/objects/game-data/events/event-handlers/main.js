define([
  "./eventHandler",
  "./periodicEventHandler",
], function() {
  var EventHandlers = {};
  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      EventHandlers[k] = arguments[i][k];
    }
  }

  return EventHandlers;
});
