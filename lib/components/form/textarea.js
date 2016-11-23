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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * weui wrapper for textarea
 *
 */
var TextArea = function (_Component) {
    _inherits(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TextArea, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ textCounter: e.target.value.length });

            //forward event to props if any
            if (this.props.onChange) this.props.onChange(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                showCounter = _props.showCounter,
                maxlength = _props.maxlength,
                onChange = _props.onChange,
                others = _objectWithoutProperties(_props, ['className', 'children', 'showCounter', 'maxlength', 'onChange']);

            var cls = (0, _classnames2.default)(_defineProperty({
                'weui-textarea': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'textarea',
                    _extends({
                        className: cls,
                        maxLength: maxlength,
                        onChange: this.handleChange.bind(this)
                    }, others),
                    children
                ),
                showCounter ? _react2.default.createElement(
                    'div',
                    { className: 'weui-textarea-counter' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.textCounter
                    ),
                    maxlength ? '/' + maxlength : false
                ) : false
            );
        }
    }]);

    return TextArea;
}(_react.Component);

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: _react.PropTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: _react.PropTypes.number,
    defaultValue: _react.PropTypes.string
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};
exports.default = TextArea;
;
module.exports = exports['default'];