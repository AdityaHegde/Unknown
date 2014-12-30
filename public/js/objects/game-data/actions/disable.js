define([
  "ember",
  "./action",
  "../events/eventRegistry",
  "../operations/operationRegistry",
], function(Ember, Action, EventRegistry, OperationRegistry) {

var 
DisableTypes = {
  "event"     : EventRegistry,
  "operation" : OperationRegistry.OperationRegistry,
},
MAX_ENABLE = (1 << 17) - 1;
Disable = Action.base.extend({
  run : function(game) {
    var
    obj = DisableTypes[this.get("disableType")][this.get("disableId")],
    disabled = obj.get("disabled"),
    disableTag = this.get("disableTag"), disable = this.get("disable");
    obj.disableTag(disableTag, disable);
    return true;
  },

  disableType : "event",
  disableId   : 0,
  disableTag  : "self",
  disable     : true,
});

return {
  "disable" : Disable,
};

});
