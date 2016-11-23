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

require('./touch_fix.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * form wrapper for `Cell`
 *
 */
var FormCell = function (_Component) {
    _inherits(FormCell, _Component);

    function FormCell() {
        _classCallCheck(this, FormCell);

        return _possibleConstructorReturn(this, (FormCell.__proto__ || Object.getPrototypeOf(FormCell)).apply(this, arguments));
    }

    _createClass(FormCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                radio = _props.radio,
                checkbox = _props.checkbox,
                vcode = _props.vcode,
                warn = _props.warn,
                select = _props.select,
                selectPos = _props.selectPos,
                others = _objectWithoutProperties(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

            var cellDomProps = Object.assign({}, others);
            delete cellDomProps.switch;
            var cls = (0, _classnames2.default)(_defineProperty({
                'weui-cell': true,
                'weui-cell_vcode': vcode,
                'weui-cell_warn': warn,
                'weui-cell_switch': this.props.switch,
                'weui-cell_select': select,
                'weui-cell_select-before': selectPos == 'before',
                'weui-cell_select-after': selectPos == 'after',
                'weui-check__label': radio || checkbox
            }, className, className));

            if (radio || checkbox) {
                return _react2.default.createElement(
                    'label',
                    _extends({ className: cls }, cellDomProps),
                    children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    _extends({ className: cls }, cellDomProps),
                    children
                );
            }
        }
    }]);

    return FormCell;
}(_react.Component);

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: _react.PropTypes.bool,
    /**
     * display warn style of cell
     *
     */
    warn: _react.PropTypes.bool,
    /**
     * if cell use for radio
     *
     */
    radio: _react.PropTypes.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: _react.PropTypes.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    switch: _react.PropTypes.bool,
    /**
     * if cell use for select
     *
     */
    select: _react.PropTypes.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: _react.PropTypes.string
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    switch: false,
    selectPos: undefined
};
exports.default = FormCell;
;
module.exports = exports['default'];