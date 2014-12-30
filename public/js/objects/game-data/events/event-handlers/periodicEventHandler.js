define([
  "ember",
  "./eventHandler",
], function(Ember, EventHandler) {

var PeriodicEventHandler = EventHandler.base.extend({
  eventType : "periodic",
});

return {
  periodic : PeriodicEventHandler,
}

});
