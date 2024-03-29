/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint asi: true undef: true es5: true node: true browser: true devel: true
         forin: true latedef: false globalstrict: true*/

"use strict";

var pattern = require("../pattern-exp")

exports["test pattern"] = function(assert) {
  assert.deepEqual(pattern("["), /\[/, "pattern escapes brackets")
  assert.deepEqual(pattern(/:/, "y"), /\:/, "pattern escapes")
}

exports["test pattern flags"] = function(assert) {
  assert.deepEqual(pattern("[hello]", "g"), /\[hello\]/g, "flags work")
}

require("test").run(exports)
