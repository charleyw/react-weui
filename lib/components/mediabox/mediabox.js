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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
var MediaBox = function (_React$Component) {
    _inherits(MediaBox, _React$Component);

    function MediaBox() {
        _classCallCheck(this, MediaBox);

        return _possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
    }

    _createClass(MediaBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                others = _objectWithoutProperties(_props, ['children', 'type', 'className']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)({
                'weui-media-box': true,
                'weui-media-box_appmsg': type === 'appmsg',
                'weui-media-box_text': type === 'text',
                'weui-media-box_small-appmsg': type === 'small_appmsg'
            }, className);

            return _react2.default.createElement(
                Component,
                _extends({ className: cls }, others),
                children
            );
        }
    }]);

    return MediaBox;
}(_react2.default.Component);

MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: _react2.default.PropTypes.string
};
MediaBox.defaultProps = {
    type: 'text'
};
exports.default = MediaBox;
;
module.exports = exports['default'];