"use strict";

var _GameSavingLoader = _interopRequireDefault(require("./GameSavingLoader.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_GameSavingLoader["default"].load().then(function (saving) {
  console.log(saving);
}, function (error) {
  console.error(error);
});