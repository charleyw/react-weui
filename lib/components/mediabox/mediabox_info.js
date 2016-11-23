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

var _mediabox_info_meta = require('./mediabox_info_meta');

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Info Items for MediaBox
 *
 */
var MediaBoxInfo = function (_React$Component) {
    _inherits(MediaBoxInfo, _React$Component);

    function MediaBoxInfo() {
        _classCallCheck(this, MediaBoxInfo);

        return _possibleConstructorReturn(this, (MediaBoxInfo.__proto__ || Object.getPrototypeOf(MediaBoxInfo)).apply(this, arguments));
    }

    _createClass(MediaBoxInfo, [{
        key: 'renderData',
        value: function renderData(metas) {
            return metas.map(function (meta, i) {
                return _react2.default.createElement(
                    _mediabox_info_meta2.default,
                    { key: i, extra: meta.extra },
                    meta.label
                );
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
                'weui-media-box__info': true
            }, className);

            return _react2.default.createElement(
                'ul',
                _extends({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);

    return MediaBoxInfo;
}(_react2.default.Component);

MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: _react2.default.PropTypes.array
};
MediaBoxInfo.defaultProps = {
    data: []
};
exports.default = MediaBoxInfo;
;
module.exports = exports['default'];