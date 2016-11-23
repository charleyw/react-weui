'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //1.0.0 components

/**
 * Evenly distribute flex items
 *
 */
var FlexItem = function FlexItem(props) {
    var component = props.component,
        children = props.children,
        others = _objectWithoutProperties(props, ['component', 'children']);

    return _react2.default.createElement(
        'component',
        _extends({ className: 'weui-flex__item' }, others),
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: _react2.default.PropTypes.node
};

FlexItem.defaultProps = {
    component: 'div'
};

exports.default = FlexItem;
module.exports = exports['default'];