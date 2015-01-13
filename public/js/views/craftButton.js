define([
  "ember",
  "../app",
  "ember-utils",
], function(Ember, Unknown) {

var CraftButtonView = Ember.View.extend({
  operation : null,
  template : Ember.Handlebars.compile('' +
    '<button class="btn btn-default" {{bind-attr disabled="view.operation.disabledAttr"}} {{action "input" view.operation}}>{{view.operation.label}}</button>' +
  ''),
});
Unknown.CraftButtonView = CraftButtonView;

return CraftButtonView;

});
