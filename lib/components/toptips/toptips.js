'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./toptips.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *  Drop down message from top
 *
 */
var Toptips = function Toptips(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        children = props.children,
        show = props.show,
        others = _objectWithoutProperties(props, ['className', 'type', 'children', 'show']);

    var cls = (0, _classnames2.default)((_classNames = {
        'weui-toptips': true
    }, _defineProperty(_classNames, 'weui-toptips_' + type, true), _defineProperty(_classNames, className, className), _classNames));

    return _react2.default.createElement(
        'div',
        _extends({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }),
        children
    );
};

Toptips.propTypes = {
    /**
     * display tips
     *
     */
    show: _react2.default.PropTypes.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: _react2.default.PropTypes.string
};

Toptips.defaultProps = {
    show: false,
    type: 'default'
};

exports.default = Toptips;
module.exports = exports['default'];