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

var _mobile_detect = require('../../utils/mobile_detect');

require('./actionsheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
var ActionSheet = function (_Component) {
    _inherits(ActionSheet, _Component);

    function ActionSheet(props) {
        _classCallCheck(this, ActionSheet);

        var _this = _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call(this, props));

        _this.state = {
            isAndroid: _mobile_detect.isAndroid
        };

        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    _createClass(ActionSheet, [{
        key: 'renderMenuItem',
        value: function renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    className = menu.className,
                    others = _objectWithoutProperties(menu, ['label', 'className']);

                var cls = (0, _classnames2.default)(_defineProperty({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    _extends({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    className = action.className,
                    others = _objectWithoutProperties(action, ['label', 'className']);

                var cls = (0, _classnames2.default)(_defineProperty({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    _extends({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick(e) {
            if (this.props.onRequestClose) this.props.onRequestClose(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                autoDectect = _props.autoDectect,
                type = _props.type,
                onRequestClose = _props.onRequestClose,
                menus = _props.menus,
                actions = _props.actions,
                others = _objectWithoutProperties(_props, ['show', 'autoDectect', 'type', 'onRequestClose', 'menus', 'actions']);

            var cls = (0, _classnames2.default)({
                'weui-actionsheet': true,
                'weui-actionsheet_toggle': show
            });

            var styleType = type ? type : 'ios';

            if (!type && autoDectect) {
                if (this.state.isAndroid) styleType = 'android';
            }

            return _react2.default.createElement(
                'div',
                {
                    className: styleType == 'android' ? 'weui-skin_android' : ''
                },
                _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, others),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__menu' },
                        this.renderMenuItem()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__action' },
                        this.renderActions()
                    )
                )
            );
        }
    }]);

    return ActionSheet;
}(_react.Component);

ActionSheet.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: _react.PropTypes.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: _react.PropTypes.array,
    /**
     * To display ActionSheet
     *
     */
    show: _react.PropTypes.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: _react.PropTypes.func,
    /**
     * Allow component to autodetect device and display corresponding style
     */
    autoDectect: _react.PropTypes.bool,
    /**
     * style: ios/android
     */
    type: _react.PropTypes.string
};
ActionSheet.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false,
    autoDectect: true
};
;

exports.default = ActionSheet;
module.exports = exports['default'];
