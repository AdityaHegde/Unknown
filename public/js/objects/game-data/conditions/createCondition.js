define([
  "./conditionList",
  "./conditionRegistry",
], function(ConditionList, ConditionRegistry) {

var createCondition = function(condition) {
  if(ConditionRegistry.ConditionRegistry[condition.id]) {
    return ConditionRegistry.ConditionRegistry[condition.id];
  }
  var conditionInstance = ConditionList.ConditionList[condition.type].create(condition);
  ConditionRegistry.ConditionRegistry[condition.id] = conditionInstance;
  return conditionInstance;
};

return {
  createCondition : createCondition,
};

});
