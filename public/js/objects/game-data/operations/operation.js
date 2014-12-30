define([
  "ember",
  "ember-utils-core",
  "../actions/main",
  "../conditions/main",
  "../disableMixin",
], function(Ember, Utils, Actions, Conditions, DisableMixin) {

var Operation = Ember.Object.extend(DisableMixin, {
  init : function() {
    this._super();
    this.set("conditions", this.get("conditions") || []);
  },

  label : "",
  desc  : "",
  actions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),

  entityClassMap    : null,
  entitySubClassMap : null,
  entityTypeMap     : null,

  conditions : Utils.hasMany(Conditions.ConditionList, "type", "base", Conditions.ConditionRegistry, "id"),

  run : function(game, entityInstanceSrc, entityInstanceTar) {
    this.runCore(game, entityInstanceSrc, entityInstanceTar);
  },

  runCore : function(game, entityInstanceSrc, entityInstanceTar) {
    var 
    actions = this.get("actions"),
    entityClassMap = this.get("entityClassMap"),
    entitySubClassMap = this.get("entitySubClassMap"),
    entityTypeMap = this.get("entityTypeMap"),
    conditions = this.get("conditions"),
    entity = entityInstanceSrc.get("entity");
    for(var i = 0; i < conditions.length; i++) {
      if(conditions[i].check(game, entityInstanceSrc, entityInstanceTar)) {
        return;
      }
    }
    if(((entityClassMap && entityClassMap[entity.get("class")]) || !entityClassMap) && 
       ((entitySubClassMap && entitySubClassMap[entity.get("subClass")]) || !entitySubClassMap) &&
       ((entityTypeMap && entityTypeMap[entity.get("type")]) || !entityTypeMap)) {
      actions.forEach(function(action) {
        action.run(game, entityInstanceSrc, entityInstanceTar);
      });
    }
  },

  stopOperation : function(game, entityInstanceSrc, entityInstanceTar) {
  },
});

return {
  "base" : Operation,
};

});
