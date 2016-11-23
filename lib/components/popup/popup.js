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

require('./popup.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  An Popup modal from bottom
 *
 */
var Popup = function (_Component) {
    _inherits(Popup, _Component);

    function Popup() {
        _classCallCheck(this, Popup);

        return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
    }

    _createClass(Popup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                show = _props.show,
                onRequestClose = _props.onRequestClose,
                enableMask = _props.enableMask,
                others = _objectWithoutProperties(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

            var cls = (0, _classnames2.default)('weui-popup', {
                'weui-popup_toggle': show
            }, className);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    children
                )
            );
        }
    }]);

    return Popup;
}(_react.Component);

Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: _react.PropTypes.bool,
    /**
     * show mask
     *
     */
    enableMask: _react.PropTypes.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};
exports.default = Popup;
module.exports = exports['default'];