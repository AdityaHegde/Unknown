define([
  "ember",
  "ember-utils-core",
  "../../actions/main",
  "../../disableMixin",
], function(Ember, Utils, Actions, DisableMixin) {

var Event = Ember.Object.extend(DisableMixin, {
  init : function() {
    this._super();
    this.set("disabled", this.get("disabled") || []);
    this.set("lastDisabled", this.get("disabled.length") > 0 ? 1 : 0);
  },

  id : "",
  running  : false,
  done     : false,

  disableCallback : function() {
    this.get("eventHandler.eventsToRun").addObject(this);
  },

  eventHandler : null,

  canHappen : function() {
    var
    running = this.get("running"),
    done = this.get("done"),
    disabled = this.get("disabled");
    return !running && !done && disabled.get("length") === 0;
  }.property("running", "done", "disabled.@each"),

  lastDisabled : 0,

  enableActions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),
  eventEnabled : function(game) {
    var enableActions = this.get("enableActions");
    if(enableActions) {
      enableActions.forEach(function(action) {
        action.run(game);
      });
    }
  },

  disableActions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),
  eventDisabled : function(game) {
    var disableActions = this.get("disableActions");
    if(disableActions) {
      disableActions.forEach(function(action) {
        action.run(game);
      });
    }
    this.get("eventHandler.eventsToRun").removeObject(this);
  },

  eventMain : function(game) {
  },

  fire : function(game) {
    var
    lastDisabled = this.get("lastDisabled"),
    disabled = this.get("disabled.length");
    if(lastDisabled === 0 && disabled > 0) {
      this.eventDisabled(game);
    }
    else if(lastDisabled > 0 && disabled === 0) {
      this.eventEnabled(game);
    }
    this.set("lastDisabled", disabled);

    if(disabled === 0) {
      this.eventMain(game);
    }
  },
});

return {
  base : Event,
}

});
