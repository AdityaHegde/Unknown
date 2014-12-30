define([
  "ember",
  "ember-utils-core",
  "./operation",
  "../periodicMixin",
  "ember-utils",
], function(Ember, Utils, Operation, PeriodicMixin) {

var 
operations = {},
operationsCount = 0,
timerCallback = function() {
  for(var k in operations) {
    operations[k][0].runPeriodic(operations[k][1], operations[k][2], operations[k][3]);
  }
},
timerObj = Timer.TimerObj.create({
  timerCallback : timerCallback,
}),
addToOperations = function(operation) {
  if(operationsCount === 0) {
    timerObj = Timer.TimerObj.create({
      timerCallback : timerCallback,
    });
  }
  var id = operation[0].get("id") + "__" + operation[2].get("id") + "__" + operation[3].get("id");
  operations[id] = operation;
  operationsCount++;
},
removeFromOperations = function(operation) {
  var id = operation[0].get("id") + "__" + operation[2].get("id") + "__" + operation[3].get("id");
  delete operations[id];
  operationsCount--;
  if(operationsCount === 0) {
    timerObj.stopTimer();
  }
};

var PeriodicOperation = Operation.base.extend(PeriodicMixin, {
  run : function(game, entityInstanceSrc, entityInstanceTar) {
    this.periodBeg(game, entityInstanceSrc, entityInstanceTar);
    addToOperations([this, game, entityInstanceSrc, entityInstanceTar]);
    this.disableTag("self", true);
  },

  runPeriodic : function(game, entityInstanceSrc, entityInstanceTar) {
    this.periodEach(game, entityInstanceSrc, entityInstanceTar);
  },

  periodicCallback : function(game, entityInstanceSrc, entityInstanceTar) {
    this.runCore(game, entityInstanceSrc, entityInstanceTar);
  },

  periodicEndCallback : function(game, entityInstanceSrc, entityInstanceTar) {
    removeFromOperations([this, game, entityInstanceSrc, entityInstanceTar]);
    this.disableTag("self", false);
  },

  stopOperation : function(game, entityInstanceSrc, entityInstanceTar) {
    this.periodicEndCallback(game, entityInstanceSrc, entityInstanceTar);
  },
});

return {
  periodic : PeriodicOperation,
};

});
