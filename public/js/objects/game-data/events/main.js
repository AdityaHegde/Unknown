define([
  "./eventManager",
  "./events/main",
  "./event-handlers/main",
  "./eventRegistry",
], function(EventManager, EventTypes, EventHandlers, EventRegistry) {
  var Events = {
    EventManager  : EventManager,
    EventTypes    : EventTypes,
    EventHandlers : EventHandlers,
    EventRegistry : EventRegistry,
  };

  return Events;
});
