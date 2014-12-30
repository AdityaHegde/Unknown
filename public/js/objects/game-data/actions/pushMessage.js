define([
  "ember",
  "ember-utils-core",
  "./action",
], function(Ember, Utils, Action) {

var PushMessage = Action.base.extend({
  run : function(game) {
    game.pushMessage(this.get("message"));
    return true;
  },
  message : "",
});

return {
  pushMessage : PushMessage,
}

});
