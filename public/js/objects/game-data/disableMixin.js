define([
  "ember",
], function(Ember) {

var DisableMixin = Ember.Mixin.create({
  init : function() {
    this._super();
    this.set("disabled", this.get("disabled") || []);
    this.set("removed", this.get("removed") || []);
  },

  disabled : null,
  disableTag : function(tag, disable) {
    var
    disabled = this.get("disabled"),
    len = disabled.get("length");
    if(disable) {
      if(!disabled.contains(tag)) {
        disabled.pushObject(tag);
      }
      if(len === 0) {
        this.disableCallback();
      }
    }
    else {
      disabled.removeObject(tag);
      if(len === 1) {
        this.enableCallback();
      }
    }
  },
  isEnabled : Ember.computed.equal("disabled.length", 0),
  disabledAttr : function() {
    var isEnabled = this.get("isEnabled");
    return isEnabled ? null : "disabled";
  }.property("isEnabled"),

  enableCallback : function() {
  },
  disableCallback : function() {
  },

  removed : null,
  removeTag : function(tag, remove) {
    var
    removed = this.get("removed"),
    len = removed.get("length");
    if(remove) {
      if(!removed.contains(tag)) {
        removed.pushObject(tag);
      }
      if(len === 0) {
        this.removeCallback();
      }
    }
    else {
      removed.removeObject(tag);
      if(len === 1) {
        this.addCallback();
      }
    }
  },
  isAdded : Ember.computed.equal("removed.length", 0),

  addCallback : function() {
  },
  removeCallback : function() {
  },
});

return DisableMixin;

});
