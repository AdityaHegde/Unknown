define([
  "./fuzzyChance",
  "./mutualExclusiveChance",
], function() {

  var FuzzyChances = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      FuzzyChances[k] = arguments[i][k];
    }
  }

  return FuzzyChances;
});
