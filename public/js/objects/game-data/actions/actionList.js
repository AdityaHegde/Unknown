define([
  "./action",
  "./changeGameState",
  "./disable",
  "./remove",
  "./pushMessage",
  "./addEntityInstance",
  "./removeEntityInstance",
  "./groupOfActions",
  "./changeAttributeValue",
  "./addBehavior",
  "./removeBehavior",
], function() {
  var ActionList = Ember.Namespace.create();
  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      ActionList[k] = arguments[i][k];
    }
  }
  window.ActionList = ActionList;

  return {
    ActionList : ActionList,
  };
});
