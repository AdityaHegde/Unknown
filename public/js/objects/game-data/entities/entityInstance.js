define([
  "ember",
  "../attributes/attributeInstance",
], function(Ember, AttributeInstance) {

var
EntityInstance = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("childEntities", this.get("childEntities") || []);
    this.set("entitiesMeta", this.get("entitiesMeta") || {
      entitiesById : {},
    });
  },

  id : 0,
  entity : null,
  qty : 1,

  attributeInstances : null,
  operations : null,

  parentEntity  : null,
  childEntities : null,
  entitiesMeta  : null,

  entityCreated : function(game) {
    this.get("entity").entityCreated(game, this);
  },

  entityDestroyed : function(game) {
    this.get("entity").entityDestroyed(game, this);
  },

  addEntityInstance : function(instance) {
    var
    childEntities = this.get("childEntities"),
    existing = childEntities.findBy("entity.id", instance.get("entity.id"));
    if(existing) {
      existing.incrementProperty("qty", instance.get("qty"));
      return existing;
    }
    else {
      childEntities.pushObject(instance);
      this.addToEntitiesMeta(instance);
      return instance;
    }
  },

  addToEntitiesMeta : function(instance) {
    var
    entitiesMeta = this.get("entitiesMeta"),
    id = instance.get("entity.id"),
    parentEntity = this.get("parentEntity");
    entitiesMeta.entitiesById[id] = entitiesMeta.entitiesById[id] || [];
    entitiesMeta.entitiesById[id].pushObject(instance);
    instance.set("parentEntity", this);
    if(parentEntity) {
      parentEntity.addToEntitiesMeta(instance);
    }
  },

  removeEntityInstance : function(instance) {
    var
    childEntities = this.get("childEntities"),
    existing = childEntities.findBy("entity.id", instance.get("entity.id")),
    eqty = existing && existing.get("qty"),
    iqty = instance.get("qty"),
    neqty = iqty >= eqty ? 0 : eqty - iqty,
    niqty = iqty <= eqty ? 0 : iqty - eqty;
    if(!existing) {
      return null;
    }
    if(neqty === 0) {
      childEntities.removeObject(existing);
      this.removeFromEntitiesMeta(existing);
    }
    else {
      existing.set("qty", neqty);
    }
    instance.set("qty", niqty);
    return instance;
  },

  removeFromEntitiesMeta : function(instance) {
    var
    entitiesMeta = this.get("entitiesMeta"),
    id = instance.get("entity.id"),
    parentEntity = this.get("parentEntity"),
    metaArr = entitiesMeta.entitiesById[id];
    metaArr.removeObject(instance);
    if(parentEntity) {
      parentEntity.removeFromEntitiesMeta(instance);
    }
  },
}),

id = 0,
createEntityInstance = function(game, entity) {
  var attributeInstances = [];
  entity.get("attributes").forEach(function(attribute) {
    attributeInstances.pushObject(AttributeInstance.createAttributeInstance(attribute));
  });
  var entityInstance = EntityInstance.create({
    id : "EI"+(++id),
    entity : entity,
    attributeInstances : attributeInstances,
    operations : entity.get("operations"),
  });
  entityInstance.entityCreated(game);
  return entityInstance;
};

return {
  EntityInstance : EntityInstance,
  createEntityInstance : createEntityInstance,
};

});
