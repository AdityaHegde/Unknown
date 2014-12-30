define([
  "ember",
  "ember-utils-core",
  "./entity",
], function(Ember, Utils, Entity) {

var Container = Entity.base.extend({
  class : "container",

  addItem : function(item, instance) {
    var
    items = instance.get("childEntities"),
    existingItem = items.findBy("entity.id", item.get("entity.id"));
    if(existingItem) {
      existingItem.incrementProperty("qty");
    }
    else {
      items.pushObject(item);
    }
  },
});

return {
  container : Container,
};

});
