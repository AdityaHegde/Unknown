define([
  "../app",
  "./signup",
  "./login",
], function(Unknown) {

  Unknown.ColumnData = [];

  for(var i = 1; i < arguments.length; i++) {
    Unknown.ColumnData.push(arguments[i]);
  }

});
