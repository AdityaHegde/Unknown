define([
  "ember",
  "ember-utils-core",
  "./events/main",
  "./entities/main",
  "./world",
], function(Ember, Utils, Events, Entities, World) {

var Game = Ember.Object.extend({
  world : null,
  eventManager : null,
  gameState : null,

  start : function() {
    this.get("world").start(this);
    this.get("eventManager").start(this);
    this.set("messages", []);
    this.changeState("1");
  },

  changeState : function(targetGameStateId) {
    var
    world = this.get("world"), gameStates = world.get("gameStates"),
    player = this.get("player"), gameState = this.get("gameState");
    if(gameState) {
      gameState.onExit(this);
    }
    gameState = gameStates.findBy("id", targetGameStateId);
    if(gameState) {
      gameState.onEnter(this);
    }
    this.set("gameState", gameState);
  },

  messages : null,
  
  pushMessage : function(message) {
    this.get("messages").pushObject(Ember.Object.create({
      message : message,
    }));
  },
});

var createGame = function(gameData) {
  var
  world = World.create({
    gameStates : gameData.get("gameStates"),
    entities : gameData.get("entities"),
  }),
  eventManager = Events.EventManager.create({
    events : gameData.get("events"),
  });
  return Game.create({
    world : world,
    eventManager : eventManager,
  });
};

return {
  Game : Game,
  createGame : createGame,
};

});
