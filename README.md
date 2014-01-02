mimosa-coco
===========

## Overview

This is a Coco compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.  This replicates the functionality of the Coco compiler that was built into Mimosa before `2.0`.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'coco'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile Coco files during `mimosa watch` and `mimosa build`.

Coco, by default, wraps compiled JavaScript in a safety wrapper to protect scope. This module turns this wrapping off by compiling `bare` by default. It does this because it assumes code is already being wrapped in AMD or CommonJS/AMD functions `define` or `require`.

All Coco configuration options can be provided in the `options` object. `bare` is the only one provided values by this module.

## Default Config

```coffeescript
coco:
  lib: undefined
  extensions: ["co", "coco"]
  options:
    bare:true
```

* `lib`: You may want to use this module but may not be ready to use the latest version of Coco. Using the `lib` property you can provide a specific version of Coco if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require('coco')`.
* `extensions`: an array of strings, the extensions of your Coco files.
* `options`: an object, the Coco compiler configuration. This object is passed straight to the Coco compiler. New properties can be added here to tweak Coco compilation.
* `options.bare`: a Coco compiler option to turn on/off the safety wrapper.
