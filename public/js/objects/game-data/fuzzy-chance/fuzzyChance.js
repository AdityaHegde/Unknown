define([
  "ember",
], function() {

var FuzzyChance = Ember.Object.extend({
  id : 0,

  chanceMin : 0,
  chanceMax : 50,

  onlyOnce : false,

  getChances : function(game, meta) {
    var
    chanceMin = this.get("chanceMin"),
    chanceMax = this.get("chanceMax"),
    roll = meta.rolls[meta.level],
    hit = roll >= chanceMin && roll <= chanceMax,
    id = this.get("id"), occured = meta.hitMap[id] || false;
    if(this.get("onlyOnce") && hit) {
      meta.hitMap[id] = true;
    }
    return !occured && hit ? [id] : [];
  },
});

return {
  base : FuzzyChance,
};

});
