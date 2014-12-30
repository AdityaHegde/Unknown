define([
  "ember",
  "ember-utils-core",
  "./events/main",
  "./event-handlers/main",
  "./eventRegistry",
  "ember-utils",
], function(Ember, Utils, EventTypes, EventHandlers, EventRegistry) {

Timer.TIMERTIMEOUT = 100;

var EventManager = Ember.Object.extend({
  events : Utils.hasMany(EventTypes, "type", "base", EventRegistry, "id"),
  //eventsAvailable : Ember.computed.filterBy("events", "canHappen", false),

  eventHandlers : null,

  game : null,
  timer : null,

  start : function(game) {
    var
    eventHandlers = {},
    events = this.get("events"),
    that = this,
    timer;

    this.set("game", game);

    for(var k in EventHandlers) {
      var handler = EventHandlers[k].create();
      handler.set("events", events.filterBy("type", handler.get("eventType")));
      handler.start(game);
      eventHandlers[k] = handler;

      var
      eventsInHandler = handler.get("events"),
      eventsToRun = handler.get("eventsToRun");
      eventsInHandler.forEach(function(event) {
        event.set("eventHandler", handler);
        if(event.get("canHappen")) {
          eventsToRun.pushObject(event);
        }
      });
    }
    this.set("eventHandlers", eventHandlers);

    timer = Timer.TimerObj.create({
      timerCallback : function() {
        that.timerCallback(game);
      },
    });
    this.set("timer", timer);
  },

  timerCallback : function(game) {
    var eventHandlers = this.get("eventHandlers");
    for(var k in eventHandlers) {
      if(eventHandlers[k] instanceof EventHandlers.base) {
        eventHandlers[k].handleEvents(game);
      }
    }
  },

  destroy : function() {
    timer.stop();
    this._super();
  },
});

return EventManager;

});
