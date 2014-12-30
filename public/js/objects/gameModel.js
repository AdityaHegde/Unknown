define([
  "ember",
  "../app",
  "./game-data/main",
], function(Ember, Unknown, Game) {

var GameModel = CrudAdapter.createModelWrapper({
  game_id    : attr(),
  gameDat    : null,
  gameObject : null,

  start : function() {
    var
    gameDat = this.get("gameDat"),
    that = this;
    gameDat.then(function(gameDat) {
      var game = Game.createGame(gameDat);
      game.start();
      that.set("gameObject", game);
    });
  },
}, {
  keys : ['game_id'],
  apiName : '',
  queryParams : ['game_id'],
  findParams : [],
});
Unknown.GameModel = GameModel;

return GameModel;

});
