define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var ContainerView = Ember.View.extend({
  container : null,
  owner : null,
  template : Ember.Handlebars.compile('' +
    '<h4>{{view.container.entity.name}}</h4>' +
    '<div>' +
      '{{#with view.container as container}}' +
        '{{#each container.childEntities}}' +
          '<div class="col-md-4">' +
            '{{entity.name}} x{{qty}}' +
          '</div>' +
        '{{/each}}' +
      '{{/with}}' +
    '</div>' +
  ''),
});
Unknown.ContainerView = ContainerView;

return ContainerView;

});
