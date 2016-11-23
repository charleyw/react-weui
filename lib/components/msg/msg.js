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

var _index = require('../button/index');

var _footer = require('../footer');

var _index2 = require('../icon/index');

var _index3 = _interopRequireDefault(_index2);

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A full notification page to indicate results
 *
 */
var Msg = function (_Component) {
    _inherits(Msg, _Component);

    function Msg() {
        _classCallCheck(this, Msg);

        return _possibleConstructorReturn(this, (Msg.__proto__ || Object.getPrototypeOf(Msg)).apply(this, arguments));
    }

    _createClass(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type,
                    label = button.label,
                    others = _objectWithoutProperties(button, ['type', 'label']);

                return _react2.default.createElement(
                    _index.Button,
                    _extends({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                type = _props.type,
                title = _props.title,
                description = _props.description,
                extraHref = _props.extraHref,
                extraText = _props.extraText,
                footer = _props.footer,
                buttons = _props.buttons,
                others = _objectWithoutProperties(_props, ['className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

            var cls = (0, _classnames2.default)('weui-msg', _defineProperty({}, className, className));

            var elFooter = footer ? footer : function () {
                return false;
            };

            if (!elFooter() && (extraHref || extraText)) {
                (0, _deprecationWarning2.default)('Msg extraHref/extraText', 'Msg footer');

                elFooter = function elFooter() {
                    return _react2.default.createElement(
                        _footer.Footer,
                        null,
                        _react2.default.createElement(
                            _footer.FooterLinks,
                            null,
                            _react2.default.createElement(
                                _footer.FooterLink,
                                { href: extraHref },
                                extraText
                            )
                        )
                    );
                };
            }

            return _react2.default.createElement(
                'div',
                _extends({ className: cls }, others),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__icon-area' },
                    _react2.default.createElement(_index3.default, { value: type, size: 'large' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__text-area' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'weui-msg__title' },
                        title
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-msg__desc' },
                        description
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__opr-area' },
                    _react2.default.createElement(
                        _index.ButtonArea,
                        null,
                        this._renderButtons()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__extra-area' },
                    elFooter()
                )
            );
        }
    }]);

    return Msg;
}(_react.Component);

Msg.propTypes = {
    /**
     * Icon type
     *
     */
    type: _react.PropTypes.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: _react.PropTypes.array,
    /**
     * Page Title
     *
     */
    title: _react.PropTypes.string,
    /**
     * Page Description
     *
     */
    description: _react.PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: _react.PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: _react.PropTypes.string,
    /**
     * Footer Element of Page
     *
     */
    footer: _react.PropTypes.any
};
Msg.defaultProps = {
    type: 'success',
    buttons: []
};
exports.default = Msg;
module.exports = exports['default'];