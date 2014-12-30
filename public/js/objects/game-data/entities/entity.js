define([
  "ember",
  "ember-utils-core",
  "../actions/main",
  "../operations/main",
  "../behaviors/main",
  "../attributes/main",
], function(Ember, Utils, Actions, Operations, Behaviors, Attributes) {

var Entity = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("operations", this.get("operations") || []);
    this.set("behaviors", this.get("behaviors") || []);
    this.set("attributes", this.get("attributes") || []);
    this.set("availableOperations", this.get("availableOperations") || []);
  },

  id : "",
  name : "",
  class : "base",
  subClass : "base",

  createdActions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),
  entityCreated : function(game, entityInstance) {
    var createdActions = this.get("createdActions");
    if(createdActions) {
      createdActions.forEach(function(event) {
        event.fire(game, entityInstance);
      });
    }

    var
    behaviors = this.get("behaviors");
    behaviors.forEach(function(behavior) {
      behavior.behaviorAdded(game, entityInstance);
    });
  },

  destroyedActions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),
  entityDestroyed : function(game, entityInstance) {
    var destroyedActions = this.get("destroyedActions");
    if(destroyedActions) {
      destroyedActions.forEach(function(event) {
        event.fire(game, entityInstance);
      });
    }
  },

  operations : Utils.hasMany(Operations.OperationList, "type", "base", Operations.OperationRegistry, "id"),

  behaviors : Utils.hasMany(Behaviors.BehaviorList, "type", "base", Behaviors.BehaviorRegistry, "id"),

  attributes : Utils.hasMany(Attributes.AttributeList, "type", "base", Attributes.AttributeRegistry, "id"),

  recipe : Utils.hasMany(),
});

return {
  base : Entity,
};

});
