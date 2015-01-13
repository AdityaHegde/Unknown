define([
  "ember",
  "./value",
], function(Ember, Value) {

var AttributeValue = Value.base.extend({
  attributeId     : 0,
  valuePercentage : 1,
  fromSrc : true,

  getValue : function(game, entitySrc, entityTar, lastVal) {
    var
    entity = this.get("fromSrc") ? entitySrc : entityTar,
    attributeId = this.get("attributeId"),
    valuePercentage = this.get("valuePercentage"),
    attributeInstances = entity.get("attributeInstances").filterBy("attribute.id", attributeId),
    absVals = attributeInstances.filterBy("attribute.isPercentage", false),
    percentVals = attributeInstances.filterBy("attribute.isPercentage", true),
    val = lastVal;
    absVals.forEach(function(attributeInstance) {
      val += attributeInstance.get("value");
    });
    if(val === 0 && absVals.length === 0 && percentVals.length > 0) {
      val = 1;
    }
    percentVals.forEach(function(attributeInstance) {
      val *= attributeInstance.get("value");
    });
    return val;
  },
});

return {
  attributeValue : AttributeValue,
};

});
