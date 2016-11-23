'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = require('../../utils/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * weui style uploader
 *
 */
var Uploader = function (_Component) {
    _inherits(Uploader, _Component);

    function Uploader() {
        _classCallCheck(this, Uploader);

        return _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).apply(this, arguments));
    }

    _createClass(Uploader, [{
        key: 'detectVerticalSquash',


        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        value: function detectVerticalSquash(img) {
            var data = void 0;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            } catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
    }, {
        key: 'handleFile',
        value: function handleFile(file, cb) {
            var _this2 = this,
                _arguments = arguments;

            var reader = void 0;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            } else {
                if (window.FileReader) reader = new window.FileReader();
            }

            reader.onload = function (e) {
                var img = void 0;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                } else {
                    if (window.Image) img = new window.Image();
                }
                img.onload = function () {
                    var w = Math.min(_this2.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    //check canvas support, for test
                    if (ctx) {
                        (function () {
                            //patch subsampling bug
                            //http://jsfiddle.net/gWY2a/24/
                            var drawImage = ctx.drawImage;
                            ctx.drawImage = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
                                var vertSquashRatio = 1;
                                // Detect if img param is indeed image
                                if (!!img && img.nodeName == 'IMG') {
                                    vertSquashRatio = _this2.detectVerticalSquash(img);
                                    sw || (sw = img.naturalWidth);
                                    sh || (sh = img.naturalHeight);
                                }

                                // Execute several cases (Firefox does not handle undefined as no param)
                                // by call (apply is bad performance)
                                if (_arguments.length == 9) drawImage.call(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw != 'undefined') drawImage.call(ctx, img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, img, sx, sy);
                            };

                            canvas.width = w;
                            canvas.height = h;
                            ctx.drawImage(img, 0, 0, w, h);

                            var base64 = canvas.toDataURL('image/png');

                            cb({
                                nativeFile: file,
                                lastModified: file.lastModified,
                                lastModifiedDate: file.lastModifiedDate,
                                name: file.name,
                                size: file.size,
                                type: file.type,
                                data: base64
                            }, e);
                        })();
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _this3 = this;

            var langs = this.props.lang;
            var _files = e.target.files;

            if (_files.length === 0) return;

            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }

            for (var key in _files) {
                if (!_files.hasOwnProperty(key)) continue;
                var file = _files[key];

                this.handleFile(file, function (_file, e) {
                    if (_this3.props.onChange) _this3.props.onChange(_file, e);
                    _reactDom2.default.findDOMNode(_this3.refs.uploader).value = '';
                }, e);
            }
        }
    }, {
        key: 'renderFiles',
        value: function renderFiles() {
            var _this4 = this;

            return this.props.files.map(function (file, idx) {
                var url = file.url,
                    error = file.error,
                    status = file.status,
                    onClick = file.onClick,
                    others = _objectWithoutProperties(file, ['url', 'error', 'status', 'onClick']);

                var fileStyle = {
                    backgroundImage: 'url(' + url + ')'
                };
                var cls = (0, _classnames2.default)({
                    'weui-uploader__file': true,
                    'weui-uploader__file_status': error || status
                });

                if (onClick) {
                    (0, _deprecationWarning2.default)('File onClick', 'Uploader onFileClick');
                }

                var handleFileClick = onClick ? onClick : function (e) {
                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
                };

                return _react2.default.createElement(
                    'li',
                    _extends({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    error || status ? _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__file-content' },
                        error ? _react2.default.createElement(_icon2.default, { value: 'warn' }) : status
                    ) : false
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                maxCount = _props.maxCount,
                files = _props.files,
                onChange = _props.onChange,
                onFileClick = _props.onFileClick,
                others = _objectWithoutProperties(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

            var inputProps = Object.assign({}, others);
            delete inputProps.lang;
            delete inputProps.onError;
            delete inputProps.maxWidth;

            var cls = (0, _classnames2.default)(_defineProperty({
                'weui-uploader': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__hd' },
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-uploader__title' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__info' },
                        files.length,
                        '/',
                        maxCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__bd' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'weui-uploader__files' },
                        this.renderFiles()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__input-box' },
                        _react2.default.createElement('input', _extends({
                            ref: 'uploader' //let react to reset after onchange
                            , className: 'weui-uploader__input',
                            type: 'file',
                            accept: 'image/*',
                            onChange: this.handleChange.bind(this)
                        }, inputProps))
                    )
                )
            );
        }
    }]);

    return Uploader;
}(_react.Component);

Uploader.propTypes = {
    /**
     * title of uploader
     *
     */
    title: _react.PropTypes.string,
    /**
     * max amount of allow file
     *
     */
    maxCount: _react.PropTypes.number,
    /**
     * maxWidth of image for uploader to compress
     *
     */
    maxWidth: _react.PropTypes.number,
    /**
     * when file change, pass property `(event, file)`
     *
     */
    onChange: _react.PropTypes.func,
    /**
     * when there is error, pass property `msg`
     *
     */
    onError: _react.PropTypes.func,
    /**
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: _react.PropTypes.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: _react.PropTypes.object
};
Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: { maxError: function maxError(maxCount) {
            return '\u6700\u591A\u53EA\u80FD\u4E0A\u4F20' + maxCount + '\u5F20\u56FE\u7247';
        } }
};
exports.default = Uploader;
;
module.exports = exports['default'];