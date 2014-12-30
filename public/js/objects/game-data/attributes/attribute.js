define([
  "ember",
], function(Ember) {

var Attribute = Ember.Object.extend({
  id : "",
  class : "base",
  value : "",
});

return {
  base : Attribute,
};

});
