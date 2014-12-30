define([
  "ember",
], function(Ember) {

var EventHandler = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("eventsToRun", []);
  },

  id : "",

  eventType : "base",
  events : null,
  eventsToRun : null,

  start : function(game) {
  },

  handleEvents : function(game) {
    var events = this.get("eventsToRun");
    events.forEach(function(event) {
      event.fire(game);
    });
  },
});

return {
  base : EventHandler,
}

});
