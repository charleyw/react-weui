"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //1.0.0 components

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FlexItem Container
 *
 */
var Flex = function Flex(props) {
    return _react2.default.createElement(
        "div",
        _extends({ className: "weui-flex" }, props),
        props.children
    );
};

exports.default = Flex;
module.exports = exports["default"];