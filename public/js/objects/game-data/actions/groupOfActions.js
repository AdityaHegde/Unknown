define([
  "ember",
  "ember-utils-core",
  "./action",
  "./actionRegistry",
], function(Ember, Utils, Action, ActionRegistry) {

var GroupOfActions = Action.base.extend({
  childActions : Utils.hasMany("ActionList", "type", "base", ActionRegistry.ActionRegistry, "id"),
  id : 0,

  run : function(game) {
    var
    childActions = this.get("childActions"),
    args = arguments;
    childActions.forEach(function(action) {
      action.run.apply(action, args);
    });
    return true;
  },
});

return {
  "groupOfActions" : GroupOfActions,
};

});
