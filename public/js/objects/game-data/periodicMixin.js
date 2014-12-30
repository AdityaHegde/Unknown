define([
  "ember",
], function(Ember) {

var PeriodicMixin = Ember.Mixin.create({
  period : 0,
  noOfPeriods : -1,
  noOfPeriodsOver : 0,
  lastAction : 0,

  completed : 0,

  periodBeg : function(game) {
    this.set("noOfPeriodsOver", 0);
    this.set("lastAction", new Date());
  },

  periodEach : function(game) {
    var 
    lastAction = this.get("lastAction"),
    cur = new Date(),
    period = this.get("period"),
    noOfPeriods = this.get("noOfPeriods"),
    noOfPeriodsOver = this.get("noOfPeriodsOver"),
    tick = (cur - lastAction) / period;
    if(tick > 1) {
      tick = 1;
    }
    this.set("completed", Math.floor(tick * 100));
    if(cur - lastAction > period) {
      this.set("lastAction", cur);
      this.periodicCallback.apply(this, arguments);
      if(noOfPeriods !== -1) {
        this.incrementProperty("noOfPeriodsOver");
        if(noOfPeriodsOver + 1 >= noOfPeriods) {
          this.periodicEndCallback.apply(this, arguments);
          this.set("completed", 0);
        }
      }
    }
  },
});

return PeriodicMixin;

});
