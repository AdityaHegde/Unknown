define([
  "ember",
  "ember-utils-core",
  "../../actions/main",
  "./event",
  "../../periodicMixin",
], function(Ember, Utils, Actions, Event, PeriodicMixin) {

var PeriodicEvent = Event.base.extend(PeriodicMixin, {
  periodicActions : Utils.hasMany(Actions.ActionList, "type", "base", Actions.ActionRegistry, "id"),

  eventEnabled : function(game) {
    this.periodBeg(game);
    this._super(game);
  },

  eventMain : function(game) {
    this.periodEach(game);
  },

  periodicCallback : function(game) {
    var periodicActions = this.get("periodicActions");
    periodicActions.forEach(function(action) {
      action.run(game);
    });
  },

  periodicEndCallback : function(game) {
    this.disableTag("self", true);
  },
});

return {
  periodic : PeriodicEvent,
};

});
