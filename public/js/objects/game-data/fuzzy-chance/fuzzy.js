define([
  "ember",
  "ember-utils-core",
  "./fuzzyChanceList",
], function(Ember, Utils, FuzzyChances) {

var Fuzzy = Ember.Object.extend({
  id : "",
  init : function() {
    this._super();
    this.set("meta", {});
  },

  meta : null,

  chances : Utils.hasMany(FuzzyChances, "type", "base"),

  getChances : function(game) {
    var
    chancesRet = [],
    chances = this.get("chances"),
    meta = this.get("mata");
    this.resetMeta(meta);
    chances.forEach(function(chance) {
      chancesRet.pushObjects(chance.getChances(game, meta));
    });
    return chances;
  },

  resetMeta : function(meta) {
    meta.rolls = [];
    meta.level = 0;
    meta.rolls[0] = Math.floor(Math.random()*100);
    meta.mutex = {};
  },
});

return {
  Fuzzy : Fuzzy,
};

});
