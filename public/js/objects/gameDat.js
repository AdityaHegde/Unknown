define([
  "ember",
  "../app",
], function(Ember, Unknown) {

var GameDat = CrudAdapter.createModelWrapper({
  data_id    : attr(),
  gameStates : attr(),
  events     : attr(),
  entities   : attr(),
  gameModel  : belongsTo("game-model", {async : true}),
}, {
  keys : ['data_id'],
  apiName : 'gamedata',
  queryParams : ['data_id'],
  findParams : [],
});
Unknown.GameDat = GameDat;

return GameDat;

});
