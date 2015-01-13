define([
  "ember",
  "./action",
], function(Ember, Action) {

var AddEntityInstance = Action.base.extend({
  id : 0,
  entityId  : 0,
  entityQty : 1,
  addToSrc  : true,
  childEntityId : null,
  run : function(game, entitySrc, entityTar) {
    var
    entityId = this.get("entityId"),
    entityQty = this.get("entityQty"),
    addToEntity = this.get("addToSrc") ? entitySrc : entityTar,
    entitiesMeta = addToEntity.get("entitiesMeta"),
    childEntityId = this.get("childEntityId"),
    instance = Entities.createEntityInstance(game, Entities.EntityRegistry[entityId]);
    instance.set("qty", entityQty);
    addToEntity = childEntityId ? entitiesMeta.entitiesById[childEntityId][0] : addToEntity;
    addToEntity.addEntityInstance(instance);
    return true;
  },
});

return {
  "addEntityInstance" : AddEntityInstance,
};

});
