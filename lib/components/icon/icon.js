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

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                value = _props.value,
                size = _props.size,
                className = _props.className,
                primary = _props.primary,
                others = _objectWithoutProperties(_props, ['value', 'size', 'className', 'primary']);

            if (Object.keys(deprecateValue).find(function (v) {
                return v == value;
            })) {
                (0, _deprecationWarning2.default)('Icon ' + value, 'Icon ' + deprecateValue[value]);
                value == deprecateValue[value];
            }

            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'weui-icon-' + value, value != 'loading'), _defineProperty(_classNames, 'weui-icon_msg', size === 'large' && !primary), _defineProperty(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), _defineProperty(_classNames, 'weui-loading', value == 'loading'), _defineProperty(_classNames, className, className), _classNames));

            return _react2.default.createElement('i', _extends({}, others, { className: cls }));
        }
    }]);

    return Icon;
}(_react2.default.Component);

Icon.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: _react2.default.PropTypes.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: _react2.default.PropTypes.string
};
Icon.defaultProps = {
    value: 'success',
    size: 'small'
};
exports.default = Icon;
module.exports = exports['default'];