define([
  "ember",
  "./action",
], function(Ember, Action) {

var RemoveEntityInstance = Action.base.extend({
  id : 0,
  entityId  : 0,
  entityQty : 1,
  removeFromSrc : true,
  childEntityId : null,
  run : function(game, entitySrc, entityTar) {
    var
    entityId = this.get("entityId"),
    entityQty = this.get("entityQty"),
    removeFromEntity = this.get("removeFromSrc") ? entitySrc : entityTar,
    childEntityId = this.get("childEntityId"),
    instance = Entities.createEntityInstance(game, Entities.EntityRegistry[entityId]);
    instance.set("qty", entityQty);
    removeFromEntity = childEntityId ? removeFromEntity.get("childEntities").findBy("entity.id", childEntityId) : removeFromEntity;
    removeFromEntity.removeEntityInstance(instance);
    return true;
  },
});

return {
  "removeEntityInstance" : RemoveEntityInstance,
};

});
