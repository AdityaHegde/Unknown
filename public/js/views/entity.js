define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var EntityView = Ember.View.extend({
  entity : null,
  template : Ember.Handlebars.compile('' +
    '<h4>{{view.entity.entity.name}}</h4>' +
    '<div>' +
      '{{#with view.entity as entity}}' +
        '{{#each entity.operations}}' +
          '{{#if isAdded}}' +
            '<button class="btn btn-default" {{bind-attr disabled="disabledAttr"}} {{action "interaction" this entity}}>' +
              '{{label}}{{#if completed}} - {{completed}}%{{/if}}' +
            '</button>' +
          '{{/if}}' +
        '{{/each}}' +
      '{{/with}}' +
    '</div>' +
  ''),
});
Unknown.EntityView = EntityView;

return EntityView;

});
