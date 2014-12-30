define([
  "ember",
  "ember-utils",
], function(Ember) {

var Unknown = AppWrapper.AppWrapper.create({
  rootElement : "#unknown",
});
window.Unknown = Unknown;

Unknown.Router.map(function() {
  this.resource('index', { path : '' }, function() {
    this.resource('game',   { path : 'game' });
    this.resource('login',  { path : 'login'});
    this.resource('signup', { path : 'signup'});
  });
});

return Unknown;

});
