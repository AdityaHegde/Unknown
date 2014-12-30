define([
  "ember",
  "../attributes/main",
  "../operations/main",
], function(Ember, Attributes, Operations) {

var Behavior = Ember.Object.extend({
  init : function() {
    this._super();
    this.set("attributes", this.get("attributes") || []);
    this.set("operations", this.get("operations") || []);
  },

  id : "",

  attributes : Utils.hasMany(Attributes.AttributeList, "type", "base", Attributes.AttributeRegistry, "id"),

  operations : Utils.hasMany(Operations.OperationList, "type", "base", Operations.OperationRegistry, "id"),

  behaviorAdded : function(game, entityInstance) {
    var
    thisAttributes = this.get("attributes"),
    instanceAttributes = entityInstance.get("attributes"),
    thisOperations = this.get("operations"),
    instanceOperations = entityInstance.get("operations");

    thisAttributes.forEach(function(attribute) {
      var found = instanceAttributes.findBy("attribute.id", attribute.get("id"));
      if(found) {
        instanceAttributes.removeObject(found);
      }
      instanceAttributes.pushObject(Attributes.createAttributeInstance(attribute));
    });

    thisOperations.forEach(function(operation) {
      if(!instanceOperations.contains(operation)) {
        instanceOperations.pushObject(operation);
      }
    });
  },

  behaviorRemoved : function(game, entityInstance) {
    var
    thisAttributes = this.get("attributes"),
    instanceAttributes = entityInstance.get("attributes"),
    thisOperations = this.get("operations"),
    instanceOperations = entityInstance.get("operations");

    thisAttributes.forEach(function(attribute) {
      var found = instanceAttributes.findBy("attribute.id", attribute.get("id"));
      if(found) {
        instanceAttributes.removeObject(found);
      }
    });

    thisOperations.forEach(function(operation) {
      if(instanceOperations.contains(operation)) {
        instanceOperations.removeObject(operation);
      }
    });
  },
});

return {
  base : Behavior,
};

});
