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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Full screen photo display
 *
 */
var Gallery = function Gallery(props) {
    var children = props.children,
        className = props.className,
        show = props.show,
        src = props.src,
        others = _objectWithoutProperties(props, ['children', 'className', 'show', 'src']);

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-gallery': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        _extends({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
        _react2.default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }),
        _react2.default.createElement(
            'div',
            { className: 'weui-gallery__opr' },
            children
        )
    );
};

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: _react2.default.PropTypes.bool,
    /**
     * image source url or base64 encode
     *
     */
    src: _react2.default.PropTypes.string
};

Gallery.defaultProps = {
    show: undefined,
    src: ''
};

exports.default = Gallery;
module.exports = exports['default'];