'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tabbar_icon = require('./tabbar_icon');

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = require('./tabbar_label');

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Tabbar item
 *
 */
var TabBarItem = function (_React$Component) {
    _inherits(TabBarItem, _React$Component);

    function TabBarItem() {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    _createClass(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                icon = _props.icon,
                label = _props.label,
                others = _objectWithoutProperties(_props, ['children', 'className', 'active', 'icon', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__item': true,
                'weui-bar__item_on': active
            }, className);

            if (icon || label) {
                return _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    icon ? _react2.default.createElement(
                        _tabbar_icon2.default,
                        null,
                        icon
                    ) : false,
                    label ? _react2.default.createElement(
                        _tabbar_label2.default,
                        null,
                        label
                    ) : false
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    children
                );
            }
        }
    }]);

    return TabBarItem;
}(_react2.default.Component);

TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: _react2.default.PropTypes.bool,
    /**
     * icon of item
     *
     */
    icon: _react2.default.PropTypes.any,
    /**
     * label of item
     *
     */
    label: _react2.default.PropTypes.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};
exports.default = TabBarItem;
module.exports = exports['default'];