define([
  "ember",
], function(Ember) {

var
AttributeInstance = Ember.Object.extend({
  id : "",
  attribute : null,
}),
id = 0,
createAttributeInstance = function(game, attribute) {
  var attributeInstance = AttributeInstance.create({
    id : "AI"+(++id),
    attribute : attribute,
  });
  return attributeInstance;
};

return {
  AttributeInstance : AttributeInstance,
  createAttributeInstance : createAttributeInstance,
};

});
