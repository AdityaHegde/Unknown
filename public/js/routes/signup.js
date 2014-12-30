define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var SignupRoute = Ember.Route.extend({
  model : function(params, transtion) {
    return CrudAdapter.createRecordWrapper(this.store, "profile", {});
  },
});
Unknown.SignupRoute = SignupRoute;

return SignupRoute;

});
