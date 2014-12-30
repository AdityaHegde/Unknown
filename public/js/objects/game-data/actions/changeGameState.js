define([
  "ember",
  "./action",
], function(Ember, Action) {

var ChangeGameState = Action.base.extend({
  run : function(game) {
    game.changeState(this.get("targetGameStateId"));
    return true;
  },

  targetGameStateId : 0,
});

return {
  "changeGameState" : ChangeGameState,
};

});
