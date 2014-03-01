"use strict";

var config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.coco.extensions;
  };

var compile = function ( mimosaConfig, file, cb ) {
  var output
    , error
    , cocoConfig = mimosaConfig.coco;

  try {
    output = cocoConfig.lib.compile( file.inputFileText, cocoConfig.options );
  } catch ( err ) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "coco",
  compilerType: "javascript",
  compile: compile,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
