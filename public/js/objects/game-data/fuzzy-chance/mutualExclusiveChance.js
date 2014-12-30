define([
  "ember",
  "./fuzzyChance",
], function(Ember, FuzzyChance) {

var MutualExclusiveChance = FuzzyChance.base.extend({
  mutexClass : "",

  getChances : function(game, meta) {
    var
    chanceMin = this.get("chanceMin"),
    chanceMax = this.get("chanceMax"),
    roll = meta.rolls[meta.level],
    hit = roll >= chanceMin && roll <= chanceMax,
    id = this.get("id"), occured = meta.hitMap[id] || false,
    mutexClass = this.get("mutexClass"),
    mutexOccured = meta.mutex[mutexClass] || false;
    if(hit) {
      if(this.get("onlyOnce")) {
        meta.hitMap[id] = true;
      }
      meta.mutex[mutexClass] = true;
    }
    return !occured && !mutexOccured && hit ? [id] : [];
  },
});

return {
  base : FuzzyChance,
};

});
