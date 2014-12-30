module.exports = [{
  id : "AE1",
  type : "periodic",
  noOfPeriods : 1,
  period : 2000,
  periodicActions : [{
    id : "E1",
    type : "pushMessage",
    message : "Beach",
  }, {
    id : "E3",
    type : "disable",
    disableType : "input",
    disableId   : "AI0",
    disableTag  : "ex",
    disable     : false,
  }, {
    id : "E4",
    type : "disable",
    disableType : "input",
    disableId   : "AI1",
    disableTag  : "ex",
    disable     : false,
  }],
  disabled : ["self"],
}, {
  id : "2",
  type : "periodic",
  noOfPeriods : 1,
  period : 2000,
  periodicActions : [{
    id : "E2",
    type : "pushMessage",
    message : "Forest",
  }, {
    id : "E3",
  }, {
    id : "E4",
  }],
  disabled : ["self"],
}];
