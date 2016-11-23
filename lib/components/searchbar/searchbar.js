'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  weui search component
 *
 */
var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            focus: false,
            clearing: false,
            text: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBar, [{
        key: 'changeHandle',
        value: function changeHandle(e) {
            var text = e.target.value;
            if (this.props.onChange) this.props.onChange(text, e);
            this.setState({ text: text });
        }
    }, {
        key: 'cancelHandle',
        value: function cancelHandle(e) {
            this.setState({
                focus: false,
                text: ''
            });
            if (this.props.onCancel) this.props.onCancel(e);
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'clearHandle',
        value: function clearHandle(e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({ text: '', clearing: true });
            if (this.props.onClear) this.props.onClear(e);
            _reactDom2.default.findDOMNode(this.refs.searchInput).focus();
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'blurHandle',
        value: function blurHandle(e) {
            if (this.state.text == '') {
                this.setState({ focus: false });
            }
        }
    }, {
        key: 'submitHandle',
        value: function submitHandle(e) {
            if (this.props.onSubmit) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onSubmit(this.state.text, e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                autocomplete = _props.autocomplete,
                placeholder = _props.placeholder,
                className = _props.className,
                searchName = _props.searchName;

            var clz = (0, _classnames2.default)({
                'weui-search-bar': true,
                'weui-search-bar_focusing': this.state.focus
            }, className);

            return _react2.default.createElement(
                'div',
                { className: clz },
                _react2.default.createElement(
                    'form',
                    { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-search-bar__box' },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement('input', {
                            ref: 'searchInput',
                            type: 'search',
                            name: searchName,
                            className: 'weui-search-bar__input',
                            placeholder: placeholder,
                            onFocus: function onFocus(e) {
                                return _this2.setState({ focus: true });
                            },
                            onBlur: this.blurHandle.bind(this),
                            onChange: this.changeHandle.bind(this),
                            value: this.state.text,
                            autoComplete: autocomplete
                        }),
                        _react2.default.createElement('a', {
                            className: 'weui-icon-clear',
                            onClick: this.clearHandle.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        'label',
                        {
                            className: 'weui-search-bar__label',
                            onClick: function onClick(e) {
                                return _reactDom2.default.findDOMNode(_this2.refs.searchInput).focus();
                            },
                            style: { display: this.state.text ? 'none' : null }
                        },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            placeholder
                        )
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) },
                    this.props.lang.cancel
                )
            );
        }
    }]);

    return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
    /**
     * default place holder text
     *
     */
    placeholder: _react2.default.PropTypes.string,
    /**
     * name of the input component
     *
     */
    searchName: _react2.default.PropTypes.string,
    /**
     * trigger when text change on input pass `text` property
     *
     */
    onChange: _react2.default.PropTypes.func,
    /**
     * trigger when user click clear icon
     *
     */
    onClear: _react2.default.PropTypes.func,
    /**
     * trigger when user click cancel button
     *
     */
    onCancel: _react2.default.PropTypes.func,
    /**
     * trigger when user submit (enter action)
     *
     */
    onSubmit: _react2.default.PropTypes.func,
    /**
     * language object consists of `cancel` property
     *
     */
    lang: _react2.default.PropTypes.object
};
SearchBar.defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
};
exports.default = SearchBar;
module.exports = exports['default'];