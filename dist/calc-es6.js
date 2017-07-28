"use strict";

var _mathEs = require("./math-es6");

var _mathEs2 = _interopRequireDefault(_mathEs);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _mathEs2.default)(10, 20));
console.log(_mathEs2.default.sub(10, 20));

var html = _react2.default.createElement(
  "h1",
  null,
  " Hello "
);