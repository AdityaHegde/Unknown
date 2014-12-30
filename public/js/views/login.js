define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var LoginView = Ember.View.extend({
  template : Ember.Handlebars.compile('' +
    '{{view "form/form" record=model columnDataGroup=columnDataGroup}}' +
    '<div class="btn-toolbar">' +
      '<button class="btn btn-primary" {{action "login"}}>Login</button>' +
      '<a class="btn btn-default" href="/auth/google">Google Login</a>' +
      '{{#link-to "signup" class=":btn :btn-default"}}Signup{{/link-to}}' +
    '</div>' +
  ''),
});
Unknown.LoginView = LoginView;

return LoginView;

});
