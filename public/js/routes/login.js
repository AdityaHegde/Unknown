define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var LoginRoute = Ember.Route.extend({
  model : function(params, transtion) {
    return CrudAdapter.createRecordWrapper(this.store, "profile", {});
  },
});
Unknown.LoginRoute = LoginRoute;

return LoginRoute;

});
