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

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../icon/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  pop out indicator to inform users
 *
 */
var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast() {
        _classCallCheck(this, Toast);

        return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                show = _props.show,
                children = _props.children,
                iconSize = _props.iconSize,
                others = _objectWithoutProperties(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

            var cls = (0, _classnames2.default)('weui-toast', _defineProperty({}, className, className));
            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, { transparent: true }),
                _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    _react2.default.createElement(_index4.default, { value: icon, size: iconSize, className: 'weui-icon_toast' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-toast_content' },
                        children
                    )
                )
            );
        }
    }]);

    return Toast;
}(_react.Component);

Toast.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: _react.PropTypes.string,
    /**
     * Icon Size
     *
     */
    iconSize: _react.PropTypes.string,
    /**
     * display toast
     *
     */
    show: _react.PropTypes.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};
exports.default = Toast;
module.exports = exports['default'];