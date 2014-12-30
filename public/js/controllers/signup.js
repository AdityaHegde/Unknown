define([
  "ember",
  "../app",
  "ember-utils",
], function(Ember, Unknown) {

var SignupController = BaseController.BaseController.extend({
  columnDataGroupName : "signup",

  actions : {
    signup : function() {
      var profile = this.get("model"), that = this;
      Unknown.Profile.customApiMap.create = "/signup";
      CrudAdapter.saveRecord(profile).then(function(profile) {
        CrudAdapter.GlobalData.set("profile", profile);
        that.transitionToRoute("index");
      }, function(message) {
        console.log(message);
      });
    },
  },
});
Unknown.SignupController = SignupController;

return SignupController;

});
