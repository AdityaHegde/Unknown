define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var SignupView = Ember.View.extend({
  template : Ember.Handlebars.compile('' +
    '{{view "form/form" record=model columnDataGroup=columnDataGroup}}' +
    '<div class="btn-toolbar">' +
      '<button class="btn btn-primary" {{action "signup"}}>Signup</button>' +
      '<a class="btn btn-default" href="/auth/google">Google Login</a>' +
      '{{#link-to "login" class=":btn :btn-default"}}Login{{/link-to}}' +
    '</div>' +
  ''),
});
Unknown.SignupView = SignupView;

return SignupView;

});
