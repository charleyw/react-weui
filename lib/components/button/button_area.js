'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonArea = function (_Component) {
    _inherits(ButtonArea, _Component);

    function ButtonArea() {
        _classCallCheck(this, ButtonArea);

        return _possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
    }

    _createClass(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = (0, _classnames2.default)(_defineProperty({
                'weui-btn-area': true,
                'weui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);

    return ButtonArea;
}(_react.Component);

ButtonArea.propTypes = {
    /**
     * Direction of Button Layout inside, Options: veritical, horizontal
     *
     */
    direction: _react2.default.PropTypes.string
};
ButtonArea.defaultProps = {
    direction: 'vertical'
};
;

exports.default = ButtonArea;
module.exports = exports['default'];