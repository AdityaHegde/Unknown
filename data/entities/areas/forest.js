module.exports = {
  id : "A1",
  name : "Forest",
  type : "baseArea",

  behaviors : [{
    id : "FOREST_B_0",
    operations : [{
      id : "FOREST_BO_0",
      label : "Explore Forest",
      type : "periodic",
      period : 1000,
      noOfPeriods : 1,
      actions : [{
        id : "FOREST_BO_0",
        type : "pushMessage",
        message : "Forest!",
      }, {
        id : "FOREST_BO_1",
        type : "addEntityInstance",
        entityQty : 1,
        entityId : "ITEM_TWIG",
        childEntityId  : "INV_PLAYER",
      }, {
        id : "FOREST_BO_2",
        type : "addEntityInstance",
        entityQty : 1,
        entityId : "ITEM_GRASS",
        childEntityId  : "INV_PLAYER",
      }],
      removed : ["ex"],
    }],
  }],
};
