define([
  "ember",
  "../app",
  "ember-utils",
], function(Ember, Unknown) {

var GameView = Ember.View.extend({
  template : Ember.Handlebars.compile('' +
    '<div class="well well-sm">{{model.gameObject.gameState.message}}</div>' +
    '<div class="well">' +
      '<div class="col-md-9">' +
        '<div class="btn-group">' +
          '{{#each model.gameObject.gameState.availableOperations}}' +
            '<button class="btn btn-default" {{bind-attr disabled="disabledAttr"}} {{action "input" this}}>{{label}}</button>' +
          '{{/each}}' +
        '</div>' +
        '<div>' +
          '<div class="col-md-6">' +
            '{{#each model.gameObject.world.areas}}' +
              '{{view "entity" entity=this}}' +
            '{{/each}}' +
          '</div>' +
          '<div class="col-md-6">' +
            '{{#each model.gameObject.world.availableCraftOperations}}' +
              '<button class="btn btn-default" {{bind-attr disabled="disabledAttr"}} {{action "input" this}}>{{label}}</button>' +
            '{{/each}}' +
          '</div>' +
          '<div class="clearfix"></div>' +
        '</div>' +
      '</div>' +
      '<div class="col-md-3">' +
        '{{#each model.gameObject.world.player.childEntities}}' +
          '{{view "container" container=this owner=model.gameObject.world.player}}' +
        '{{/each}}' +
      '</div>' +
      '<div class="clearfix"></div>' +
    '</div>' +
    '<div class="well">' +
      '{{#each model.gameObject.messages}}' +
        '<p>{{message}}</p>' +
      '{{/each}}' +
    '</div>' +
  ''),
});
Unknown.GameView = GameView;

return GameView;

});
