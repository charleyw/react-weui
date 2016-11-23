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

var _tab_body = require('./tab_body');

var _tab_body2 = _interopRequireDefault(_tab_body);

var _tab_body_item = require('./tab_body_item');

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = require('./navbar_item');

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = require('./tabbar_item');

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = require('./tabbar_icon');

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = require('./tabbar_label');

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            index: _this.props.defaultIndex
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseNavBar',
        value: function parseNavBar(children) {
            var navHeaders = [];
            var navContents = [];

            _react2.default.Children.map(children, function (child) {
                if (!child) return;

                var _child$props = child.props,
                    children = _child$props.children,
                    type = _child$props.type,
                    others = _objectWithoutProperties(_child$props, ['children', 'type']);

                if (child.type === _navbar_item2.default) {
                    navHeaders.push(child);
                    if (children) navContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
                } else if (child.type === _tab_body_item2.default) {
                    navContents.push(child);
                }
            });

            return { navHeaders: navHeaders, navContents: navContents };
        }
    }, {
        key: 'renderNavBar',
        value: function renderNavBar(headers, contents, cls) {
            var _this2 = this;

            var _headers = headers.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = contents.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    _navbar2.default,
                    null,
                    _headers
                ),
                _react2.default.createElement(
                    _tab_body2.default,
                    null,
                    _contents
                )
            );
        }
    }, {
        key: 'parseTabBar',
        value: function parseTabBar(children) {
            var tabHeaders = [];
            var tabContents = [];

            _react2.default.Children.map(children, function (child) {
                if (!child) return;

                var _child$props2 = child.props,
                    children = _child$props2.children,
                    type = _child$props2.type,
                    others = _objectWithoutProperties(_child$props2, ['children', 'type']);

                if (child.type === _tabbar_item2.default) {
                    tabHeaders.push(child);
                    if (children) tabContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
                } else if (child.type === _tab_body_item2.default) {
                    tabContents.push(child);
                }
            });

            return { tabHeaders: tabHeaders, tabContents: tabContents };
        }
    }, {
        key: 'renderTabBar',
        value: function renderTabBar(headers, contents, cls) {
            var _this3 = this;

            var _headers = headers.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this3.state.index === idx,
                    onClick: _this3.handleHeaderClick.bind(_this3, idx, item)
                });
            });

            var _contents = contents.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this3.state.index === idx,
                    tabIndex: idx
                });
            });

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    _tab_body2.default,
                    null,
                    _contents
                ),
                _react2.default.createElement(
                    _tabbar2.default,
                    null,
                    _headers
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                others = _objectWithoutProperties(_props, ['children', 'className', 'type']);

            var divProps = Object.assign({}, others);
            delete divProps.defaultIndex;

            var cls = (0, _classnames2.default)({
                'weui-tab': true
            }, className);

            switch (type) {
                case 'tabbar':
                    var _parseTabBar = this.parseTabBar(children),
                        tabHeaders = _parseTabBar.tabHeaders,
                        tabContents = _parseTabBar.tabContents;

                    return this.renderTabBar(tabHeaders, tabContents, cls);
                    break;
                case 'navbar':
                    var _parseNavBar = this.parseNavBar(children),
                        navHeaders = _parseNavBar.navHeaders,
                        navContents = _parseNavBar.navContents;

                    return this.renderNavBar(navHeaders, navContents, cls);
                    break;
                default:
                    return _react2.default.createElement(
                        'div',
                        _extends({ className: cls }, divProps),
                        children
                    );
                    break;
            }
        }
    }]);

    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: _react2.default.PropTypes.string,
    /**
     * default select index
     *
     */
    defaultIndex: _react2.default.PropTypes.number,
    onChange: _react2.default.PropTypes.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};
exports.default = Tab;
module.exports = exports['default'];