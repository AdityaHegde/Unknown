define([
  "ember",
], function(Ember) {

var Action = Ember.Object.extend({
  id : 0,
  run : function(game) {
    return true;
  },
});

return {
  "base" : Action,
};

});
