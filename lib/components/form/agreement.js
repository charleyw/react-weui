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
 * Agreement style checkbox
 *
 */
var Agreement = function Agreement(props) {
    var className = props.className,
        children = props.children,
        id = props.id,
        others = _objectWithoutProperties(props, ['className', 'children', 'id']);

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-agree': true
    }, className, className));

    return _react2.default.createElement(
        'label',
        { className: cls, htmlFor: id },
        _react2.default.createElement('input', _extends({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)),
        _react2.default.createElement(
            'span',
            { className: 'weui-agree__text' },
            children
        )
    );
};

exports.default = Agreement;
module.exports = exports['default'];