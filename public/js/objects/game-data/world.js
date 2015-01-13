define([
  "ember",
  "ember-utils-core",
  "./game-states/main",
  "./entities/main",
  "./operations/main",
  "./actions/main",
  "./conditions/main",
], function(Ember, Utils, GameStates, Entities, Operations, Actions, Conditions) {

var
craftActionId = 0,
craftConditionId = 0,
World = Ember.Object.extend({
  gameStates : Utils.hasMany(GameStates, "type", "base"),
  player : null,
  entities : Utils.hasMany(Entities.EntityList, "type", "base", Entities.EntityRegistry, "id"),
  craftOperations : null,
  availableCraftOperations : Ember.computed.filterBy("craftOperations", "isAdded", true),
  areas : null,

  start : function(game) {
    var
    entities = this.get("entities"),
    player = Entities.createEntityInstance(game, entities.findBy("id", "U0")),
    village = Entities.createEntityInstance(game, entities.findBy("id", "V0")),
    areas = [];

    this.set("player", player);

    entities.filterBy("class", "area").forEach(function(area) {
      areas.pushObject(Entities.createEntityInstance(game, area));
    });
    this.set("areas", areas);

    this.initCraftOperations(entities);
  },

  initCraftOperations : function(entities) {
    var operations = [];
    entities.filterBy("craftable", true).forEach(function(entity) {
      var
      eid = entity.get("id"),
      id = "CRAFT_OPRN_" + eid;
      if(!Operations.OperationRegistry[id]) {
        var
        actions = [], checks = [], condition,
        recipe = entity.get("recipe");
        actions.pushObject(Actions.createAction({
          id : "CAADD_" + eid,
          type : "addEntityInstance",
          entityId : eid,
          childEntityId : "INV_PLAYER",
        }));
        for(var i = 0; i < recipe.length; i++) {
          if(!recipe[i].notConsumed) {
            actions.pushObject(Actions.createAction({
              id : "CARM_" + recipe[i].get("id"),
              type : "removeEntityInstance",
              entityId : recipe[i].get("id"),
              entityQty : recipe[i].get("qty"),
              childEntityId : "INV_PLAYER",
            }));
          }
          checks.push({
            id : recipe[i].get("id"),
            qty : recipe[i].get("qty"),
          });
        }
        condition = Conditions.createCondition({
          id : "CC_" + eid,
          type : "entityCheck",
          entitiesCheck : checks,
        });
        var operation = Operations.createOperation({
          id : id,
          type : "base",
          label : "Craft " + entity.get("name"),
          actions : actions,
          conditions : [condition],
          removed : ["state"],
        });
        operations.pushObject(operation);
      }
    });
    this.set("craftOperations", operations);
  },
});

return World;

});
