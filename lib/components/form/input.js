'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * WeUI Input wrapper for `input`
 *
 */
var Input = function Input(props) {
    var className = props.className,
        others = _objectWithoutProperties(props, ['className']);

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-input': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', _extends({ className: cls }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

Input.propTypes = {
    defaultValue: _react2.default.PropTypes.string
};

Input.defaultProps = {
    defaultValue: undefined
};

exports.default = Input;
module.exports = exports['default'];