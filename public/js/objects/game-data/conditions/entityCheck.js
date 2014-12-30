define([
  "ember",
  "ember-utils-core",
  "./condition",
], function(Ember, Utils, Condition) {

var
Check = Ember.Object.extend({
  id  : "",
  qty : 1,
}),
EntityCheck = Condition.base.extend({
  entitiesCheck  : Utils.hasMany(Check),
  checkSrcEntity : true,

  searchEntity : function(entity, searchMeta, entitiesCheck) {
    var
    childEntities = entity.get("childEntities"),
    entitiesMeta = entity.get("entitiesMeta");
    for(var i = 0; i < entitiesCheck.length; i++) {
      var
      id = entitiesCheck[i].get("id"),
      metaArr = entitiesMeta.entitiesById[id],
      metaArrSum;
      if((!searchMeta.idMap[id] || searchMeta.idMap[id].count > 0) && metaArr) {
        metaArrSum = metaArr.reduce(function(s, e, i, a) {
          return s + e.get("qty");
        }, 0);
        searchMeta.idMap[id] = searchMeta.idMap[id] || {
          map   : {},
          count : entitiesCheck[i].get("qty"),
        };
        searchMeta.idMap[id].count -= metaArrSum;
        if(searchMeta.idMap[id].count <= 0) {
          searchMeta.count++;
          if(searchMeta.count === entitiesCheck.length) {
            return;
          }
        }
      }
    }
  },

  check : function(game, entitySrc, entityTar) {
    var
    searchMeta = {
      idMap : {},
      count : 0,
    },
    entitiesCheck = this.get("entitiesCheck");
    this.searchEntity(this.get("checkSrcEntity") ? entitySrc : entityTar, searchMeta, entitiesCheck);
    if(searchMeta.count === entitiesCheck.length) {
      return null;
    }
    return this.get("failureMessage");
  },
});

return {
  entityCheck : EntityCheck,
};

});
