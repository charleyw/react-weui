'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Loadmore Indicators.
 *
 */
var LoadMore = function LoadMore(props) {
    var className = props.className,
        children = props.children,
        loading = props.loading,
        showLine = props.showLine,
        showDot = props.showDot,
        others = _objectWithoutProperties(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot
    }, className, className));

    return _react2.default.createElement(
        'div',
        _extends({ className: cls }, others),
        loading ? _react2.default.createElement(_icon2.default, { value: 'loading' }) : false,
        _react2.default.createElement(
            'span',
            { className: 'weui-loadmore__tips' },
            children
        )
    );
};

LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: _react.PropTypes.bool,
    /**
     * display side lines
     *
     */
    showLine: _react.PropTypes.bool,
    /**
     * display dot in the center
     *
     */
    showDot: _react.PropTypes.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

exports.default = LoadMore;
module.exports = exports['default'];