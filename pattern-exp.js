/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint asi: true undef: true es5: true node: true browser: true devel: true
         forin: true latedef: false globalstrict: true*/

"use strict";

var stirgifier = Object.prototype.toString
var ESCAPE_PATTERN = /[\.\?\*\+\^\$\|\(\)\{\[\]\\]/g

function escape(pattern) {
  /**
  Returns the `pattern` with all regexp meta characters in it backslashed.
  **/
  return String(pattern).replace(ESCAPE_PATTERN, '\\$&')
}
escape.pattern = ESCAPE_PATTERN

function Pattern(pattern, flags) {
  /**
  Function takes `pattern` string or regexp & optional flags string,
  which is just regexp flags and returns instance of `RegExp` by actually
  calling it. If pattern fails to compile it will escaped given pattern and
  compile it to regexp after.

  ## examples
 
  RegExp("[")          // => SyntaxError("unterminated character class")
  RegExp(/:/, "y")     // => TypeError("can't supply flags when ...")
  Pattern("[")          // => /\[/
  Pattern(/:/, "y")     // => /:/
  **/
  if (!pattern.exec) {
    try {
      pattern = RegExp(pattern, flags)
    } catch (exception) {
      if (exception instanceof SyntaxError)
        pattern = RegExp(escape(pattern), flags)
      else
        throw exception
    }
  }
  return pattern
}
Pattern.escape = escape

module.exports = Pattern
