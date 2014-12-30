define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var GameRoute = Ember.Route.extend({
  model : function() {
    return CrudAdapter.createRecordWrapper(this.store, "game-model", {
      gameDat : CrudAdapter.findRecordWrapper(this.store, "game-dat", "1"),
    });
  },

  afterModel : function(model, transition) {
    model.start();
  },
});
Unknown.GameRoute = GameRoute;

return GameRoute;

});
