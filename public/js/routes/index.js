define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var IndexRoute = Ember.Route.extend({
  model : function() {
    return CrudAdapter.GlobalData;
  },
});
Unknown.IndexRoute = IndexRoute;

return IndexRoute;

});
