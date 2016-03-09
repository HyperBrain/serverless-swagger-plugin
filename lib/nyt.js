'use strict';
/**
 * Initialize an empty API.
 */

const Promise = require('bluebird')
    , path = require('path')
    , fs = require('fs');

module.exports = Promise.method(function (evt) {

  console.log("Not yet there :-)");
  //console.log(evt)          // Contains Action Specific data
  //console.log(this.S)       // Contains Project Specific data
  //console.log(this.S.state) // Contains tons of useful methods for you to use in your plugin.  It's the official API for plugin developers.

  return Promise.resolve(evt);
});