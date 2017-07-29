"use strict";var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var assert = require("assert");
var meton = require("./meton.js");var

A = function () {
	function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "getA", value: function getA()
		{} }]);return A;}();var


B = function (_A) {(0, _inherits3.default)(B, _A);
	function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "getB", value: function getB()
		{} }]);return B;}(A);


assert.deepEqual(meton(B.prototype), ["getB"], "should be equal to [ 'getB' ]");

console.log("ok");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibWV0b24iLCJBIiwiQiIsImRlZXBFcXVhbCIsInByb3RvdHlwZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsWUFBVCxDQUFkLEM7O0FBRU1FLEM7QUFDTCxjQUFjLHdDQUFHLEM7QUFDVixHQUFHLEM7OztBQUdMQyxDO0FBQ0wsY0FBYyw0SkFBYSxDO0FBQ3BCLEdBQUcsQyxnQkFGS0QsQzs7O0FBS2hCSCxPQUFPSyxTQUFQLENBQWtCSCxNQUFPRSxFQUFFRSxTQUFULENBQWxCLEVBQXdDLENBQUUsTUFBRixDQUF4QyxFQUFvRCwrQkFBcEQ7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBYSxJQUFiIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcbmNvbnN0IG1ldG9uID0gcmVxdWlyZSggXCIuL21ldG9uLmpzXCIgKTtcclxuXHJcbmNsYXNzIEEge1xyXG5cdGNvbnN0cnVjdG9yKCApeyB9XHJcblx0Z2V0QSggKXsgfVxyXG59XHJcblxyXG5jbGFzcyBCIGV4dGVuZHMgQSB7XHJcblx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XHJcblx0Z2V0QiggKXsgfVxyXG59XHJcblxyXG5hc3NlcnQuZGVlcEVxdWFsKCBtZXRvbiggQi5wcm90b3R5cGUgKSwgWyBcImdldEJcIiBdLCBcInNob3VsZCBiZSBlcXVhbCB0byBbICdnZXRCJyBdXCIgKTtcclxuXHJcbmNvbnNvbGUubG9nKCBcIm9rXCIgKTtcclxuIl19
//# sourceMappingURL=test.support.js.map
