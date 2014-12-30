define([
  "ember",
  "../app",
  "ember-utils",
], function(Ember, Unknown) {

var GameController = BaseController.BaseController.extend({
  columnDataGroupName : "game",

  actions : {
    input : function(input) {
      var game = this.get("model.gameObject");
      input.run(game, game.get("world.player"));
    },

    interaction : function(operation, entity) {
      var game = this.get("model.gameObject");
      operation.run(game, game.get("world.player"), entity);
    },
  },
});
Unknown.GameController = GameController;

return GameController;

});
