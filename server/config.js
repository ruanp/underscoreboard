/*jshint node:true*/
/*globals define: true*/
"use strict";

module.exports = {
  nodeRequire: require,
  paths: {
    app:       __dirname + '/app',
    sockets:   __dirname + '/sockets',
    roomModel: __dirname + '/models/roomModel',
    userModel: __dirname + '/models/userModel'
  }
};