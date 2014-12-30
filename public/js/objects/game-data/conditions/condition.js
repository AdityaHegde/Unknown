define([
  "ember",
], function(Ember) {

var Condition = Ember.Object.extend({
  failureMessage : "Failed",
  check : function(game, entity) {
    return null;
  },
});

return {
  base : Condition,
};

});
