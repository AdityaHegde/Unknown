define([
  "ember",
  "./action",
], function(Ember, Action) {

var RemoveBehavior = Action.base.extend({
  id : 0,
  behaviorId : 0,
  addToSrc    : true,
  run : function(game, entitySrc, entityTar) {
    var
    removeFromEntity = this.get("removeFromSrc") ? entitySrc : entityTar,
    behaviors = removeFromEntity.get("behaviors"),
    behavior = behaviors.findBy("id", this.get("behaviorId"));
    behaviors.removeObject(behavior);
    behavior.behaviorRemoved(game, removeFromEntity);
    return true;
  },
});

return {
  "removeBehavior" : RemoveBehavior,
};

});
