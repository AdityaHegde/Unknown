define([
  "./actionList",
  "./actionRegistry",
], function(ActionList, ActionRegistry) {

var createAction = function(action) {
  if(ActionRegistry.ActionRegistry[action.id]) {
    return ActionRegistry.ActionRegistry[action.id];
  }
  var actionInstance = ActionList.ActionList[action.type].create(action);
  ActionRegistry.ActionRegistry[action.id] = actionInstance;
  return actionInstance;
};

return {
  createAction : createAction,
};

});
