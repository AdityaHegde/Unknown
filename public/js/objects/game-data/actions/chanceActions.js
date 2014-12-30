define([
  "ember",
  "ember-utils-core",
  "./action",
  "./actionRegistry",
], function(Ember, Utils, Action, ActionRegistry, Fuzzy) {

var ChanceActions = Action.base.extend({
  actions : Utils.hasMany("ActionList", "type", "base", ActionRegistry.ActionRegistry, "id"),
  chance : Utils.belongsTo(Fuzzy.Fuzzy, null, null, null, null, null, Fuzzy.Registry, "id"),

  run : function(game) {
    var
    actions = this.get("actions"),
    chance = this.get("chance"),
    ids = chance.getChances(game),
    args = arguments;
    actions.forEach(function(action) {
      if(ids.find(action.get("id"))) {
        action.run.apply(action, args);
      }
    });
    return true;
  },
});

return {
  "chanceActions" : ChanceActions,
};

});
