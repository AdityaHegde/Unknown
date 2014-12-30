module.exports = {
  id : "A0",
  name : "Beach",
  type : "baseArea",

  behaviors : [{
    id : "BEACH_B_0",
    operations : [{
      id : "BEACH_BO_0",
      label : "Explore Beach",
      type : "periodic",
      period : 1000,
      noOfPeriods : 1,
      actions : [{
        id : "BEACH_AO_0",
        type : "pushMessage",
        message : "Beach!",
      }, {
        id : "BEACH_AO_1",
        type : "addEntityInstance",
        entityQty : 1,
        entityId : "ITEM_STONE",
        childEntityId  : "INV_PLAYER",
      }, {
        id : "BEACH_AO_2",
        type : "addEntityInstance",
        entityQty : 1,
        entityId : "ITEM_GRASS",
        childEntityId  : "INV_PLAYER",
      }],
      removed : ["ex"],
    }],
  }],
};
