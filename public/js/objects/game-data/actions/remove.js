define([
  "ember",
  "./action",
  "../events/eventRegistry",
  "../operations/operationRegistry",
], function(Ember, Action, EventRegistry, OperationRegistry) {

var 
RemoveTypes = {
  "event"     : EventRegistry,
  "operation" : OperationRegistry.OperationRegistry,
},
MAX_ENABLE = (1 << 17) - 1;
Remove = Action.base.extend({
  run : function(game) {
    var
    obj = RemoveTypes[this.get("removeType")][this.get("removeId")],
    removed = obj.get("removed"),
    removeTag = this.get("removeTag"), remove = this.get("remove");
    obj.removeTag(removeTag, remove);
    return true;
  },

  removeType : "event",
  removeId   : 0,
  removeTag  : "self",
  remove     : true,
});

return {
  "remove" : Remove,
};

});
