define([
  "ember",
  "../app",
  "ember-utils",
], function(Ember, Unknown) {

var LoginController = BaseController.BaseController.extend({
  columnDataGroupName : "login",

  profile_id : "",
  pwd : "",

  actions : {
    login : function() {
      var profile = this.get("model"), that = this;
      Unknown.Profile.customApiMap.create = "/login";
      CrudAdapter.saveRecord(profile).then(function(profile) {
        CrudAdapter.GlobalData.set("profile", profile);
        that.transitionToRoute("index");
      }, function(message) {
        console.log(message);
      });
    },
  },
});
Unknown.LoginController = LoginController;

return LoginController;

});
