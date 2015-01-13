define([
  "ember",
  "./action",
], function(Ember, Action) {

var AddBehavior = Action.base.extend({
  id : 0,
  behaviorId : 0,
  addToSrc    : true,
  run : function(game, entitySrc, entityTar) {
    var
    addToEntity = this.get("addToSrc") ? entitySrc : entityTar,
    behaviors = addToEntity.get("behaviors"),
    behavior = Behaviors.BehaviorRegistry[this.get("behaviorId")];
    behaviors.pushObject(behavior);
    behavior.behaviorAdded(game, addToEntity);
    return true;
  },
});

return {
  "addBehavior" : AddBehavior,
};

});
