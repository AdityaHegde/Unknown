var
modelMap = {},
RELOAD_TIME = 1000;

function refreshModel(modelName) {
  var
  model = modelMap[modelName];
  /*time = new Date(),
  fileName = model.fileName;
  console.log(time - model.time);
  if(time - model.time > RELOAD_TIME) {
    console.log("Reloaded");
    model = require(fileName);
    model.fileName = fileName;
    model.time = time;
    modelMap[modelName] = model;
  }*/
  return model;
}

exports.init = function(entities) {
  for(var k in entities) {
    if(typeof entities[k] === "string") {
      modelMap[k] = require(entities[k]);
      modelMap[k].fileName = entities[k];
    }
    else {
      modelMap[k] = entities[k];
    }
    modelMap[k].time = new Date();
  }
};

exports.get = function(modelName, param, callback) {
  var model = refreshModel(modelName);
  console.log(param);
  console.log(model.key);
  callback(null, model.data[param[model.key]]);
};

exports.getAll = function(modelName, param, callback) {
  var model = refreshModel(modelName);
  console.log(param);
  callback(null, model.data);
};
