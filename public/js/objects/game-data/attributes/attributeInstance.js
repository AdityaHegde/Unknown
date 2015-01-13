define([
  "ember",
], function(Ember) {

var
AttributeInstance = Ember.Object.extend({
  id : "",
  attribute : null,
  value : 0,
}),
id = 0,
createAttributeInstance = function(game, attribute) {
  var attributeInstance = AttributeInstance.create({
    id : "AI"+(++id),
    attribute : attribute,
    value : attribute.get("baseValue"),
  });
  return attributeInstance;
};

return {
  AttributeInstance : AttributeInstance,
  createAttributeInstance : createAttributeInstance,
};

});
