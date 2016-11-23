'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _picker_group = require('./picker_group');

var _picker_group2 = _interopRequireDefault(_picker_group);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker(props) {
        _classCallCheck(this, Picker);

        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        _this.state = {
            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
            actions: _this.props.actions.length > 0 ? _this.props.actions : [{
                label: _this.props.lang.leftBtn,
                onClick: function onClick(e) {
                    return _this.handleClose(function () {
                        if (_this.props.onCancel) _this.props.onCancel(e);
                    });
                }
            }, {
                label: _this.props.lang.rightBtn,
                onClick: function onClick(e) {
                    return _this.handleChanges();
                }
            }],
            closing: false
        };

        _this.handleChanges = _this.handleChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    _createClass(Picker, [{
        key: 'handleChanges',
        value: function handleChanges() {
            var _this2 = this;

            this.handleClose(function () {
                if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(item, i, groupIndex) {
            var _this3 = this;

            var selected = this.state.selected;

            selected[groupIndex] = i;
            this.setState({ selected: selected }, function () {
                if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(cb) {
            var _this4 = this;

            this.setState({
                closing: true
            }, function () {
                return setTimeout(function () {
                    _this4.setState({ closing: false });
                    cb();
                }, 300);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            if (this.state.actions.length == 0) return false;

            var elActions = this.state.actions.map(function (action, i) {
                var label = action.label,
                    others = _objectWithoutProperties(action, ['label']);

                return _react2.default.createElement(
                    'a',
                    _extends({}, others, { key: i, className: 'weui-picker__action' }),
                    ' ',
                    label
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'weui-picker__hd' },
                elActions
            );
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            var _this5 = this;

            return this.props.groups.map(function (group, i) {
                return _react2.default.createElement(_picker_group2.default, _extends({ key: i }, group, { onChange: _this5.handleChange, groupIndex: i, defaultIndex: _this5.state.selected[i] }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                className = _props.className,
                show = _props.show,
                actions = _props.actions,
                groups = _props.groups,
                defaultSelect = _props.defaultSelect,
                onGroupChange = _props.onGroupChange,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                others = _objectWithoutProperties(_props, ['className', 'show', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange', 'onCancel']);

            var cls = (0, _classnames2.default)('weui-picker', {
                'weui-animate-slide-up': show && !this.state.closing,
                'weui-animate-slide-down': this.state.closing
            }, className);

            var maskCls = (0, _classnames2.default)({
                'weui-animate-fade-in': show && !this.state.closing,
                'weui-animate-fade-out': this.state.closing
            });

            return this.props.show ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mask2.default, { className: maskCls, onClick: function onClick(e) {
                        return _this6.handleClose(function () {
                            if (_this6.props.onCancel) _this6.props.onCancel(e);
                        });
                    } }),
                _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    this.renderActions(),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-picker__bd' },
                        this.renderGroups()
                    )
                )
            ) : false;
        }
    }]);

    return Picker;
}(_react.Component);

Picker.propTypes = {
    /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: _react.PropTypes.array,
    /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: _react.PropTypes.array,
    /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: _react.PropTypes.array,
    /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: _react.PropTypes.func,
    /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: _react.PropTypes.func,
    /**
     * excute when the popup about to close
     *
     */
    onCancel: _react.PropTypes.func,
    /**
     * display the component
     *
     */
    show: _react.PropTypes.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _react.PropTypes.object
};
Picker.defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
};
exports.default = Picker;
module.exports = exports['default'];