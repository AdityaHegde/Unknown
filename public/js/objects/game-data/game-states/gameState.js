define([
  "ember",
  "ember-utils-core",
  "../actions/main",
  "../operations/main",
], function(Ember, Utils, Actions, Operations) {

var GameState = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("enableCrafting", this.get("enableCrafting") || []);
  },

  message : "",
  actions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionTypes, "id"),
  availableOperations : Utils.hasMany(Operations.OperationList, "type", "base", Operations.OperationRegistry, "id"),
  enableCrafting : null,

  initCraftOperations : function(game) {
    var
    enableCrafting = this.get("enableCrafting");
    enableCrafting.forEach(function(entityId) {
      var oprn = Operations.OperationRegistry["CRAFT_OPRN_"+entityId];
      oprn.removeTag("state", false);
    });
  },

  onEnter : function(game) {
    this.initCraftOperations(game);
    var actions = this.get("actions");
    if(actions) {
      actions.forEach(function(action) {
        action.run(game);
      });
    }
  },

  onExit : function(game) {
  },
});

return {
  "base" : GameState,
};

});
