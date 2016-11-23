'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */
var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {
            value: _this.props.value ? _this.props.value : _this.props.defaultValue ? _this.props.defaultValue : 0,
            controlled: typeof _this.props.value !== 'undefined',
            totalWidth: 0,

            touching: false,
            ogX: 0,
            touchID: undefined,
            percent: _this.props.value ? parseInt(_this.props.value / (_this.props.max - _this.props.min) * 100) : _this.props.defaultValue ? parseInt(_this.props.defaultValue / (_this.props.max - _this.props.min) * 100) : 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateValue = _this.updateValue.bind(_this);
        return _this;
    }

    _createClass(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var barDOM = _reactDom2.default.findDOMNode(this.refs.bar);

            this.setState({
                totalWidth: barDOM.clientWidth
            }, function () {
                return _this2.updateValue();
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.controlled) {
                if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
                    var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
                    this.setState({ value: nextProps.value, percent: percent });
                }
            }
        }
    }, {
        key: 'updateValue',
        value: function updateValue() {
            var _this3 = this;

            var snap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var value = 0;
            var percent = this.state.percent,
                _props = this.props,
                min = _props.min,
                max = _props.max,
                step = _props.step,
                onChange = _props.onChange,
                steps = parseInt((max - min) / step),
                perPercent = parseInt(100 / steps);


            if (percent === 100) {
                value = max;
            } else if (percent === 0) {
                value = min;
            } else {
                for (var i = 0; i < steps; i++) {
                    //over 50 margin than next
                    if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
                        value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
                    }
                }
            }

            if (value !== this.state.value) {
                this.setState({ value: value });
                if (onChange) onChange(value);
            }

            if (snap) {
                this.setState({
                    percent: value === min ? 0 : value === max ? 100 : (value - min) / step * perPercent,
                    animating: true
                }, function () {
                    return _this3.setState({ animating: false });
                });
            }
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.disabled) return;

            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                ogX: e.targetTouches[0].pageX,
                ogPercent: this.state.percent
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            var _this4 = this;

            if (!this.state.touching || this.props.disabled) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageX = e.targetTouches[0].pageX;
            var diffX = pageX - this.state.ogX;

            var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
            percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

            this.setState({
                percent: percent
            }, function () {
                return _this4.updateValue();
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            if (!this.state.touching || this.props.disabled) return;

            if (this.props.snapToValue) {
                this.updateValue(true);
            }

            this.setState({
                touching: false,
                ogX: 0,
                touchId: undefined,
                ogPercent: 0
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                max = _props2.max,
                min = _props2.min,
                step = _props2.step,
                showValue = _props2.showValue,
                value = _props2.value,
                disabled = _props2.disabled,
                defaultValue = _props2.defaultValue,
                onChange = _props2.onChange,
                snapToValue = _props2.snapToValue,
                domProps = _objectWithoutProperties(_props2, ['className', 'max', 'min', 'step', 'showValue', 'value', 'disabled', 'defaultValue', 'onChange', 'snapToValue']);

            var cls = (0, _classnames2.default)('weui-slider-box', className);

            var trackStyles = {
                width: this.state.percent + '%'
            };

            var handlerStyles = {
                left: this.state.percent + '%',
                transition: this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    _extends({ className: 'weui-slider' }, domProps),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-slider__inner', ref: 'bar' },
                        _react2.default.createElement('div', {
                            style: trackStyles,
                            className: 'weui-slider__track' }),
                        _react2.default.createElement('div', {
                            style: handlerStyles,
                            onTouchStart: this.handleTouchStart,
                            onTouchMove: this.handleTouchMove,
                            onTouchEnd: this.handleTouchEnd,
                            className: 'weui-slider__handler' })
                    )
                ),
                showValue ? _react2.default.createElement(
                    'div',
                    { className: 'weui-slider-box__value' },
                    this.state.value
                ) : false
            );
        }
    }]);

    return Slider;
}(_react.Component);

Slider.propTypes = {
    /**
     * max value of the slider
     *
     */
    max: _react.PropTypes.number,
    /**
     * min value of the slider
     *
     */
    min: _react.PropTypes.number,
    /**
     * the offset between two number in the slider
     *
     */
    step: _react.PropTypes.number,
    /**
     * display the value indicator
     *
     */
    showValue: _react.PropTypes.bool,
    /**
     * whether input is disabled
     *
     */
    disabled: _react.PropTypes.bool,
    /**
     * slider value when use as controll element
     *
     */
    value: _react.PropTypes.number,
    /**
     * slider value when use as non-controll element, use with onChange
     *
     */
    defaultValue: _react.PropTypes.number,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    onChange: _react.PropTypes.func,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    snapToValue: _react.PropTypes.bool
};
Slider.defaultProps = {
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    disabled: false,
    defaultValue: 0,
    snapToValue: true
};
exports.default = Slider;
module.exports = exports['default'];