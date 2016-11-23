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
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
var Cell = function Cell(props) {
    var className = props.className,
        children = props.children,
        access = props.access,
        href = props.href,
        link = props.link,
        component = props.component,
        htmlFor = props.htmlFor,
        others = _objectWithoutProperties(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    var cls = (0, _classnames2.default)(_defineProperty({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link
    }, className, className));

    return _react2.default.createElement(
        CellComponent,
        _extends({
            className: cls,
            href: href,
            htmlFor: htmlFor
        }, others),
        children
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: _react.PropTypes.bool,
    /**
     * if this cell body is link
     *
     */
    link: _react.PropTypes.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: _react.PropTypes.func
};

Cell.defaultProps = {
    access: false,
    link: false
};

exports.default = Cell;
module.exports = exports['default'];