define([
  "ember",
], function(Ember) {

var Attribute = Ember.Object.extend({
  id : "",
  class : "base",
  baseValue : 0,
  maxValue  : 0,
  isPercentage : false,
});

return {
  base : Attribute,
};

});
