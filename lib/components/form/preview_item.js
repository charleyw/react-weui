'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //1.0.0 components

/**
 * Preview Item for all purpose usage
 *
 */
var PreviewItem = function PreviewItem(props) {
    var className = props.className,
        label = props.label,
        value = props.value,
        others = _objectWithoutProperties(props, ['className', 'label', 'value']);

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-form-preview__item': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        _extends({ className: cls }, others),
        _react2.default.createElement(
            'label',
            { className: 'weui-form-preview__label' },
            label
        ),
        _react2.default.createElement(
            'em',
            { className: 'weui-form-preview__value' },
            value
        )
    );
};

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: _react.PropTypes.string,
    /**
     * Value of the label
     *
     */
    value: _react.PropTypes.string

};

PreviewItem.defaultProps = {
    label: false,
    value: false
};

exports.default = PreviewItem;
module.exports = exports['default'];