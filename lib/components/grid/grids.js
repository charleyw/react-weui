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

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
var Grids = function (_Component) {
    _inherits(Grids, _Component);

    function Grids() {
        _classCallCheck(this, Grids);

        return _possibleConstructorReturn(this, (Grids.__proto__ || Object.getPrototypeOf(Grids)).apply(this, arguments));
    }

    _createClass(Grids, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(_grid2.default, _extends({
                    key: i,
                    icon: item.icon,
                    label: item.label
                }, item));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = _objectWithoutProperties(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grids': true
            }, className);

            return _react2.default.createElement(
                'div',
                _extends({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);

    return Grids;
}(_react.Component);

Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: _react2.default.PropTypes.array
};
Grids.defaultProps = {
    data: []
};
exports.default = Grids;
;
module.exports = exports['default'];