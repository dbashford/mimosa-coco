"use strict";

exports.defaults = function() {
  return {
    coco: {
      extensions: ["co", "coco"],
      options: {
        bare:true
      }
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n"+
         "  # coco:                    # config settings for the Coco compiler module\n" +
         "    # lib: undefined         # use this property to provide a specific version of Coco\n" +
         "    # extensions: [\"co\", \"coco\"]  # default extensions for Coco files\n" +
         "    # options:               # options for the Coco compiler\n" +
         "      # bare:true            # whether or not to use the default safety wrapper\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "coco config", config.coco ) ) {

    if ( !config.coco.lib ) {
      config.coco.lib = require( 'coco' );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "coco.extensions", config.coco.extensions ) ) {
      if (config.coco.extensions.length === 0) {
        errors.push( "coco.extensions cannot be an empty array");
      }
    }

  }

  return errors;
};
