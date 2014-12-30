define([
  "ember",
  "ember-utils-core",
  "./entityList",
  "./entityRegistry",
  "./entityInstance",
], function(Ember, Utils, EntityList, EntityRegistry, EntityInstance) {

var Drop = Ember.Object.extend({
  dropId : "",
  qty : 1,

  getDrop : function(game) {
    var entities = [], entity = EntityRegistry.EntityRegistry[this.get("dropId")];
    for(var i = 0; i < this.get("qty"); i++) {
      entities.pushObject(EntityInstance.createEntityInstance(entity, game));
    }
    return entities;
  },
});

//TODO : make this available globaly
var Loot = Ember.Object.extend({
  drops : Utils.hasMany(Drop),

  getLoot : function(game) {
    var
    drops = this.get("drops"),
    entities = [];
    drops.forEach(function(drop) {
      entities.pushObjects(drop.getDrop(game));
    });
    return entities;
  },
});

return {
  Loot : Loot,
};

});
