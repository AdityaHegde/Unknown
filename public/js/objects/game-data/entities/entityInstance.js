define([
  "ember",
  "../attributes/attributeInstance",
  "./entityRegistry",
], function(Ember, AttributeInstance, EntityRegistry) {

var
EntitiesById = Ember.Object.extend({
  ids : null,

  addToId : function(id, instance) {
    var ids = this.get("ids");
    if(!this[id]) {
      Ember.defineProperty(this, id, null, []);
      ids.pushObject(id);
    }
    this[id].pushObject(instance);
  },

  removeFromId : function(id, instance) {
    this[id].removeObject(instance);
  },
}),
EntityMeta = Ember.Object.extend({
  entitiesById : null,
}),
EntityInstance = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("childEntities", this.get("childEntities") || []);
    this.set("entitiesMeta", EntityMeta.create({
      entitiesById : EntitiesById.create({
        ids : [],
      }),
    }));
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
    entitiesMeta.entitiesById.addToId(id, instance);
    instance.set("parentEntity", this);
    if(parentEntity) {
      parentEntity.addToEntitiesMeta(instance);
    }
  },

  removeEntityInstance : function(instance) {
    var
    childEntities = this.get("childEntities"),
    entitiesMeta = this.get("entitiesMeta"),
    metaArr = entitiesMeta.entitiesById[instance.get("entity.id")];
    if(!metaArr || metaArr.length === 0) {
      return null;
    }
    for(var i = 0; i < metaArr.length; i++) {
      var
      _instance = metaArr[i],
      eqty = _instance && _instance.get("qty"),
      iqty = instance.get("qty"),
      neqty = iqty >= eqty ? 0 : eqty - iqty,
      niqty = iqty <= eqty ? 0 : iqty - eqty;
      if(neqty === 0) {
        childEntities.removeObject(_instance);
        this.removeFromEntitiesMeta(_instance);
      }
      else {
        _instance.set("qty", neqty);
      }
      instance.set("qty", niqty);
      if(niqty === 0) {
        break;
      }
    }
    return instance;
  },

  removeFromEntitiesMeta : function(instance) {
    var
    entitiesMeta = this.get("entitiesMeta"),
    id = instance.get("entity.id"),
    parentEntity = this.get("parentEntity");
    entitiesMeta.entitiesById.removeFromId(id, instance);
    if(parentEntity) {
      parentEntity.removeFromEntitiesMeta(instance);
    }
  },
}),

id = 0,
createEntityInstance = function(game, entity) {
  var
  attributeInstances = [],
  childEntityIds = entity.get("childEntityIds");
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

  childEntityIds.forEach(function(entityId) {
    entityInstance.addEntityInstance(createEntityInstance(game, EntityRegistry.EntityRegistry[entityId]));
  });

  return entityInstance;
};

return {
  EntityInstance : EntityInstance,
  createEntityInstance : createEntityInstance,
};

});
