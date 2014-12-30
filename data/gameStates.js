module.exports = [{
  id : "1",
  message : "You open your eyes",
  availableOperations : [{
    id : "1",
    label : "Look around",
    actions : [{
      id : "I1",
      type : "changeGameState",
      targetGameStateId : "2",
    }, {
      id : "I2",
      type : "remove",
      removeType : "operation",
      removeId   : "BEACH_BO_0",
      removeTag  : "ex",
      remove     : false,
    }, {
      id : "I3",
      type : "remove",
      removeType : "operation",
      removeId   : "FOREST_BO_0",
      removeTag  : "ex",
      remove     : false,
    }],
  }],
}, {
  id : "2",
  message : "You are on the beach. A forest ahead of you. You cant remember how you got here.",
  enableCrafting : ["ITEM_HAMMER"],
  availableOperations : [],
}];
