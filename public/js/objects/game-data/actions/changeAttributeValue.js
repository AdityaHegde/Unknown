define([
  "ember",
  "ember-utils-core",
  "./action",
  "../values/main",
], function(Ember, Utils, Action, Values) {

var ChangeAttributeValue = Action.base.extend({
  id : 0,
  attributeId    : 0,
  attributeValue : Utils.belongsTo(Values.ValueList, "type", "base", null, null, null, Values.ValueRegistry, "id"),
  fromSrc : true,
  run : function(game, entitySrc, entityTar) {
    var
    entity = this.get("fromSrc") ? entitySrc : entityTar,
    attributeId = this.get("attributeId"),
    attributeValue = this.get("attributeValue"),
    val = attributeValue.getValue(game, entitySrc, entityTar, 0),
    attributes = entity.get("attributeInstances").findBy("attribute.id", attributeId);
    attributes.forEach(function(attribute) {
      if(val !== 0) {
        var
        aval = attribute.get("value"),
        mval = attribute.get("attribute.maxValue"),
        dval = val - aval;
        if(dval < 0) {
          if(mval !== 0 && -dval >= mval) {
            attribute.set("value", mval);
            val -= mval;
          }
          else {
            attribute.set("value", -dval);
            val = 0;
          }
        }
        else {
          attribute.set("value", 0);
          val = dval;
        }
      }
    });
    return true;
  },
});

return {
  "changeAttributeValue" : ChangeAttributeValue,
};

});
