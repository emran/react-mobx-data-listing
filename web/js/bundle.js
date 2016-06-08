(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _main = require('./components/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_main2.default, null), document.getElementById('poll-list'));

},{"./components/main":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
    _inherits(Filter, _React$Component);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Filter).apply(this, arguments));
    }

    _createClass(Filter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "form",
                    { action: "#" },
                    _react2.default.createElement(
                        "div",
                        { className: "right-sidebar" },
                        _react2.default.createElement(
                            "div",
                            { className: "widget" },
                            _react2.default.createElement(
                                "div",
                                { className: "widget-content" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "search-area sidebar-search" },
                                    _react2.default.createElement("input", { className: "input-search", type: "text", placeholder: "Search" }),
                                    _react2.default.createElement(
                                        "button",
                                        null,
                                        _react2.default.createElement("i", { className: "gg-search" })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "widget" },
                            _react2.default.createElement(
                                "h3",
                                { className: "widget-title" },
                                "PopularKeywords"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "widget-content" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tag-list" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "terrorism", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "terrorism" },
                                            "Terrorism"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "eco-tourism", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "eco-tourism" },
                                            "Eco Tourism"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "hillary-clinton", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "hillary-clinton" },
                                            "Hillary Clinton"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "artificial", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "artificial" },
                                            "Artificial Intelligence"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "donald", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "donald" },
                                            "Donald Trump"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "cricket", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "cricket" },
                                            "Cricket"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "middle", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "middle" },
                                            "Middle East"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "usa", name: "keyword" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "usa" },
                                            "USA Election"
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "widget" },
                            _react2.default.createElement(
                                "h1",
                                { className: "widget-title" },
                                "DaysLeft"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "widget-content" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tag-list days-left" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "lessthenone", name: "days-left" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "lessthenone" },
                                            " 1"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "onetotwo", name: "days-left" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "onetotwo" },
                                            "1 - 2"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "onetofive", name: "days-left" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "onetofive" },
                                            "2 - 5"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "morethan5", name: "days-left" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "morethan5" },
                                            "5+"
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "widget" },
                            _react2.default.createElement(
                                "h1",
                                { className: "widget-title" },
                                "PrizeType"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "widget-content prize-type-filter" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tag-list" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", "data-prize-type": "money", id: "prize-type-money",
                                            name: "prize-type" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "prize-type-money" },
                                            "Money"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", "data-prize-type": "item", id: "prize-type-item",
                                            name: "prize-type" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "prize-type-item" },
                                            "Item"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", "data-prize-type": "no-prize", id: "prize-type-no-prize",
                                            name: "prize-type" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "prize-type-no-prize" },
                                            "NoPrize"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "prize-type-min-max d-table" },
                                    _react2.default.createElement("input", { type: "text", className: "form-control" }),
                                    _react2.default.createElement(
                                        "label",
                                        { "for": "" },
                                        "To"
                                    ),
                                    _react2.default.createElement("input", { type: "text", className: "form-control" })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "widget" },
                            _react2.default.createElement(
                                "h1",
                                { className: "widget-title" },
                                "Status"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "widget-content" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tag-list" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "ongoing", name: "status" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "ongoing" },
                                            "ongoing"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "completed", name: "status" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "completed" },
                                            "Completed"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "btn-as-radio" },
                                        _react2.default.createElement("input", { type: "radio", className: "btn-as-radio-input", id: "upcoming", name: "status" }),
                                        _react2.default.createElement(
                                            "label",
                                            { "for": "upcoming" },
                                            "Upcoming"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react2.default.Component);

Filter.propTypes = {};
Filter.defaultProps = {};

exports.default = Filter;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _pollList = require('./pollList');

var _pollList2 = _interopRequireDefault(_pollList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(_pollList2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-4' },
                    _react2.default.createElement(_filter2.default, null)
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

Main.propTypes = {};
Main.defaultProps = {};

exports.default = Main;

},{"./filter":2,"./pollList":5,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Poll = function (_Component) {
    _inherits(Poll, _Component);

    function Poll() {
        _classCallCheck(this, Poll);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Poll).apply(this, arguments));
    }

    _createClass(Poll, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "post ev-poll" },
                _react2.default.createElement(
                    "div",
                    { className: "post-inner" },
                    _react2.default.createElement(
                        "div",
                        { className: "post-media" },
                        _react2.default.createElement(
                            "div",
                            { className: "media-wrapper" },
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                _react2.default.createElement("img", { src: "assets/images/attachment.jpg", alt: "Image" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "post-content" },
                        _react2.default.createElement(
                            "div",
                            { className: "details" },
                            _react2.default.createElement(
                                "div",
                                { className: "icon" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "gg-poll2" })
                                )
                            ),
                            _react2.default.createElement(
                                "h2",
                                { className: "title" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    this.props.poll.title
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "meta" },
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        { className: "tag" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            this.props.poll.category[0].name
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "author" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            "Matt Hacket"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "dtime" },
                                        "Mar 21, 20 min ago"
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "post-footer" },
                        _react2.default.createElement(
                            "div",
                            { className: "d-table" },
                            _react2.default.createElement(
                                "div",
                                { className: "tool-left" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tool-list" },
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement("i", { className: "gg-power" }),
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "320"
                                        ),
                                        " ",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "grid-hide" },
                                            "Votes"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { "data-toggle": "tooltip", title: "Mar 26, 10:00AM" },
                                        _react2.default.createElement("i", { className: "gg-clock" }),
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "5 days"
                                        ),
                                        " ",
                                        _react2.default.createElement(
                                            "span",
                                            { className: "grid-hide" },
                                            "left"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement("i", { className: "gg-rating" }),
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "20"
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "tool-right" },
                                _react2.default.createElement(
                                    "ul",
                                    { className: "tool-list post-interaction-list" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "like" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("i", { className: "gg-like-line" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "100"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "dislike" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#" },
                                            _react2.default.createElement("i", { className: "gg-dislike" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "10"
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        { className: "dropdown dot-h-dropdown" },
                                        _react2.default.createElement(
                                            "a",
                                            { href: "#", "data-toggle": "dropdown" },
                                            _react2.default.createElement("i", { className: "gg-ellipsis-v" })
                                        ),
                                        _react2.default.createElement(
                                            "ul",
                                            { className: "dropdown-menu dropdown-menu-right" },
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Bookmark"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Flag"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "li",
                                                null,
                                                _react2.default.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "DisableNotification"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Poll;
}(_react.Component);

Poll.propTypes = {};
Poll.defaultProps = {};

exports.default = Poll;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _poll = require('./poll');

var _poll2 = _interopRequireDefault(_poll);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import store from '../store/index';

var PollList = function (_Component) {
    _inherits(PollList, _Component);

    function PollList(props) {
        _classCallCheck(this, PollList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PollList).call(this, props));

        _this.state = {
            pollLists: [],
            loadPolls: function loadPolls() {
                $.ajax({
                    url: GGLogicEndpoints.pollPublicListAPI,
                    dataType: 'json',
                    type: 'GET',
                    cache: false,
                    success: function (poll) {
                        console.log(poll);
                        this.setState({ pollLists: poll.data.poll });
                    }.bind(_this),
                    error: function (xhr, status, err) {
                        console.log(err);
                    }.bind(_this)
                });
            }
        };
        _this.state.loadPolls();
        return _this;
    }

    _createClass(PollList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'event-post-wrapper' },
                this.state.pollLists.map(function (poll, index) {
                    return _react2.default.createElement(_poll2.default, { poll: poll, key: index });
                })
            );
        }
    }]);

    return PollList;
}(_react.Component);

PollList.propTypes = {};
PollList.defaultProps = {};

exports.default = PollList;

},{"./poll":4,"mobx-react":6,"react":"react"}],6:[function(require,module,exports){
(function() {
    function mrFactory(mobx, React, ReactDOM) {
        if (!mobx)
            throw new Error("mobx-react requires the MobX package")
        if (!React)
            throw new Error("mobx-react requires React to be available");

        var isDevtoolsEnabled = false;

        // WeakMap<Node, Object>;
        var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
        var renderReporter = new EventEmitter();
        function findDOMNode(component) {
            if (ReactDOM)
                return ReactDOM.findDOMNode(component);
            return null;
        }

        function reportRendering(component) {
            var node = findDOMNode(component);
            if (node)
                componentByNodeRegistery.set(node, component);

            renderReporter.emit({
                event: 'render',
                renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
                totalTime: Date.now() - component.__$mobRenderStart,
                component: component,
                node: node
            });
        }

        var reactiveMixin = {
            componentWillMount: function() {
                // Generate friendly name for debugging
                var name = [
                    this.displayName || this.name || (this.constructor && (this.constructor.displayName || this.constructor.name)) || "<component>",
                    "#", this._reactInternalInstance && this._reactInternalInstance._rootNodeID,
                    ".render()"
                ].join("");

                var baseRender = this.render.bind(this);
                var self = this;
                var reaction = null;
                var isRenderingPending = false;
                function initialRender() {
                    reaction = new mobx.Reaction(name, function() {
                        if (!isRenderingPending) {
                            isRenderingPending = true;
                            if (typeof self.componentWillReact === "function")
                                self.componentWillReact();
                            React.Component.prototype.forceUpdate.call(self)
                        }
                    });
                    reactiveRender.$mobx = reaction;
                    self.render = reactiveRender;
                    return reactiveRender();
                }

                function reactiveRender() {
                    isRenderingPending = false;
                    var rendering;
                    reaction.track(function() {
                        if (isDevtoolsEnabled)
                            self.__$mobRenderStart = Date.now();
                        rendering = mobx.extras.allowStateChanges(false, baseRender);
                        if (isDevtoolsEnabled)
                            self.__$mobRenderEnd = Date.now();
                    });
                    return rendering;
                }

                this.render = initialRender;
            },

            componentWillUnmount: function() {
                this.render.$mobx && this.render.$mobx.dispose();
                if (isDevtoolsEnabled) {
                    var node = findDOMNode(this);
                    if (node) {
                        componentByNodeRegistery.delete(node);
                    }
                    renderReporter.emit({
                        event: 'destroy',
                        component: this,
                        node: node
                    });
                }
            },

            componentDidMount: function() {
                if (isDevtoolsEnabled)
                    reportRendering(this);
            },

            componentDidUpdate: function() {
                if (isDevtoolsEnabled)
                    reportRendering(this);
            },

            shouldComponentUpdate: function(nextProps, nextState) {
                // TODO: if context changed, return true.., see #18
                
                // if props or state did change, but a render was scheduled already, no additional render needs to be scheduled
                if (this.render.$mobx && this.render.$mobx.isScheduled() === true)
                    return false;
                
                // update on any state changes (as is the default)
                if (this.state !== nextState)
                    return true;
                // update if props are shallowly not equal, inspired by PureRenderMixin
                var keys = Object.keys(this.props);
                var key;
                if (keys.length !== Object.keys(nextProps).length)
                    return true;
                for(var i = keys.length -1; i >= 0, key = keys[i]; i--) {
                    var newValue = nextProps[key];
                    if (newValue !== this.props[key]) {
                        return true;
                    } else if (newValue && typeof newValue === "object" && !mobx.isObservable(newValue)) {
                        /**
                         * If the newValue is still the same object, but that object is not observable,
                         * fallback to the default React behavior: update, because the object *might* have changed.
                         * If you need the non default behavior, just use the React pure render mixin, as that one
                         * will work fine with mobx as well, instead of the default implementation of
                         * observer.
                         */
                        return true;
                    }
                }
                return false;
            }
        }

        function patch(target, funcName) {
            var base = target[funcName];
            var mixinFunc = reactiveMixin[funcName];
            if (!base) {
                target[funcName] = mixinFunc;
            } else {
                target[funcName] = function() {
                    base.apply(this, arguments);
                    mixinFunc.apply(this, arguments);
                }
            }
        }

        function observer(componentClass) {
            // If it is function but doesn't seem to be a react class constructor,
            // wrap it to a react class automatically
            if (typeof componentClass === "function" && !componentClass.prototype.render && !componentClass.isReactClass && !React.Component.isPrototypeOf(componentClass)) {
                return observer(React.createClass({
                    displayName:     componentClass.displayName || componentClass.name,
                    propTypes:       componentClass.propTypes,
                    contextTypes:    componentClass.contextTypes,
                    getDefaultProps: function() { return componentClass.defaultProps; },
                    render:          function() { return componentClass.call(this, this.props, this.context); }
                }));
            }

            if (!componentClass)
                throw new Error("Please pass a valid component to 'observer'");
            var target = componentClass.prototype || componentClass;

            [
                "componentWillMount",
                "componentWillUnmount",
                "componentDidMount",
                "componentDidUpdate"
            ].forEach(function(funcName) {
                patch(target, funcName)
            });

            if (!target.shouldComponentUpdate)
                target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
            componentClass.isMobXReactObserver = true;
            return componentClass;
        }

        function trackComponents() {
            if (typeof WeakMap === "undefined")
                throw new Error("[mobx-react] tracking components is not supported in this browser.");
            if (!isDevtoolsEnabled)
                isDevtoolsEnabled = true;
        }

        function EventEmitter() {
            this.listeners = [];
        };
        EventEmitter.prototype.on = function (cb) {
            this.listeners.push(cb);
            var self = this;
            return function() {
                var idx = self.listeners.indexOf(cb);
                if (idx !== -1)
                    self.listeners.splice(idx, 1);
            };
        };
        EventEmitter.prototype.emit = function(data) {
            this.listeners.forEach(function (fn) {
                fn(data);
            });
        };

        return ({
            observer: observer,
            reactiveComponent: function() {
                console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1.");
                return observer.apply(null, arguments);
            },
            renderReporter: renderReporter,
            componentByNodeRegistery: componentByNodeRegistery,
            trackComponents: trackComponents
        });
    }

    // UMD
    if (typeof exports === 'object') {
        module.exports = mrFactory(require('mobx'), require('react'), require('react-dom'));
    } else if (typeof define === 'function' && define.amd) {
        define('mobx-react', ['mobx', 'react', 'react-dom'], mrFactory);
    } else {
        this.mobxReact = mrFactory(this['mobx'], this['React'], this['ReactDOM']);
    }
})();

},{"mobx":7,"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
registerGlobals();
exports.extras = {
    allowStateChanges: allowStateChanges,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getObserverTree: getObserverTree,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    resetGlobalState: resetGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    trackTransitions: trackTransitions
};
exports._ = {
    getAdministration: getAdministration,
    quickDiff: quickDiff,
    resetGlobalState: resetGlobalState
};
function autorun(view, scope) {
    assertUnwrapped(view, "autorun methods cannot have modifiers");
    invariant(typeof view === "function", "autorun expects a function");
    invariant(view.length === 0, "autorun expects a function without arguments");
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(view.name || ("Autorun@" + getNextId()), function () {
        this.track(view);
    });
    reaction.schedule();
    return reaction.getDisposer();
}
exports.autorun = autorun;
function when(predicate, effect, scope) {
    var disposeImmediately = false;
    var disposer = autorun(function () {
        if (predicate.call(scope)) {
            if (disposer)
                disposer();
            else
                disposeImmediately = true;
            untracked(function () { return effect.call(scope); });
        }
    });
    if (disposeImmediately)
        disposer();
    return disposer;
}
exports.when = when;
function autorunUntil(predicate, effect, scope) {
    deprecated("`autorunUntil` is deprecated, please use `when`.");
    return when.apply(null, arguments);
}
exports.autorunUntil = autorunUntil;
function autorunAsync(func, delay, scope) {
    if (delay === void 0) { delay = 1; }
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(func.name || ("AutorunAsync@" + getNextId()), function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(func);
            }, delay);
        }
    });
    r.schedule();
    return r.getDisposer();
}
exports.autorunAsync = autorunAsync;
function reaction(expression, effect, fireImmediately, delay, scope) {
    if (fireImmediately === void 0) { fireImmediately = false; }
    if (delay === void 0) { delay = 0; }
    var name = expression.name || effect.name || ("Reaction@" + getNextId());
    if (scope) {
        expression = expression.bind(scope);
        effect = action(name, effect.bind(scope));
    }
    var firstTime = true;
    var isScheduled = false;
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var nextValue;
        r.track(function () { return nextValue = expression(); });
        if (!firstTime || fireImmediately)
            effect(nextValue);
        if (firstTime)
            firstTime = false;
    }
    var r = new Reaction(name, function () {
        if (delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, delay);
        }
    });
    r.schedule();
    return r.getDisposer();
}
exports.reaction = reaction;
function computed(targetOrExpr, keyOrScope, baseDescriptor, options) {
    if (arguments.length < 3 && typeof targetOrExpr === "function")
        return computedExpr(targetOrExpr, keyOrScope);
    return computedDecorator.apply(null, arguments);
}
exports.computed = computed;
function computedExpr(expr, scope) {
    var _a = getValueModeFromValue(expr, ValueMode.Recursive), mode = _a[0], value = _a[1];
    return new ComputedValue(value, scope, mode === ValueMode.Structure, value.name);
}
function computedDecorator(target, key, baseDescriptor, options) {
    if (arguments.length === 1) {
        var options_1 = target;
        return function (target, key, baseDescriptor) { return computedDecorator.call(null, target, key, baseDescriptor, options_1); };
    }
    invariant(baseDescriptor && baseDescriptor.hasOwnProperty("get"), "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'");
    assertPropertyConfigurable(target, key);
    var descriptor = {};
    var getter = baseDescriptor.get;
    invariant(typeof target === "object", "The @observable decorator can only be used on objects", key);
    invariant(typeof getter === "function", "@observable expects a getter function if used on a property.", key);
    invariant(!baseDescriptor.set, "@observable properties cannot have a setter.", key);
    invariant(getter.length === 0, "@observable getter functions should not take arguments.", key);
    descriptor.configurable = true;
    descriptor.enumerable = false;
    descriptor.get = function () {
        setObservableObjectProperty(asObservableObject(this, undefined, ValueMode.Recursive), key, options && options.asStructure === true ? asStructure(getter) : getter);
        return this[key];
    };
    descriptor.set = throwingComputedValueSetter;
    if (!baseDescriptor) {
        Object.defineProperty(target, key, descriptor);
    }
    else {
        return descriptor;
    }
}
function throwingComputedValueSetter() {
    throw new Error("[ComputedValue] It is not allowed to assign new values to computed properties.");
}
function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length === 1, "createTransformer expects a function that accepts one argument");
    var objectCache = {};
    var resetId = globalState.resetId;
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            _super.call(this, function () { return transformer(sourceObject); }, null, false, "Transformer-" + transformer.name + "-" + sourceIdentifier);
            this.sourceIdentifier = sourceIdentifier;
            this.sourceObject = sourceObject;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
exports.createTransformer = createTransformer;
function getMemoizationId(object) {
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        Object.defineProperty(object, "$transformId", {
            configurable: true,
            writable: true,
            enumerable: false,
            value: tid
        });
    }
    return tid;
}
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn("[mobx.expr] 'expr' should only be used inside other reactive functions.");
    return computed(expr, scope).get();
}
exports.expr = expr;
function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    invariant(arguments.length >= 2, "extendObservable expected 2 or more arguments");
    invariant(typeof target === "object", "extendObservable expects an object as first argument");
    invariant(!(target instanceof ObservableMap), "extendObservable should not be used on maps, use map.merge instead");
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", "all arguments of extendObservable should be objects");
        extendObservableHelper(target, propSet, ValueMode.Recursive, null);
    });
    return target;
}
exports.extendObservable = extendObservable;
function extendObservableHelper(target, properties, mode, name) {
    var adm = asObservableObject(target, name, mode);
    for (var key in properties)
        if (properties.hasOwnProperty(key)) {
            if (target === properties && !isPropertyConfigurable(target, key))
                continue;
            setObservableObjectProperty(adm, key, properties[key]);
        }
    return target;
}
function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (node.observers && node.observers.length)
        result.observers = unique(node.observers).map(nodeToObserverTree);
    return result;
}
function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
exports.intercept = intercept;
function interceptInterceptable(thing, handler) {
    if (isPlainObject(thing) && !isObservableObject(thing)) {
        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
        return getAdministration(observable(thing)).intercept(handler);
    }
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    if (isPlainObject(thing) && !isObservableObject(thing)) {
        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
        extendObservable(thing, {
            property: thing[property]
        });
        return interceptProperty(thing, property, handler);
    }
    return getAdministration(thing, property).intercept(handler);
}
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (value instanceof ObservableMap || value instanceof ObservableArray)
            throw new Error("[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    return !!value.$mobx || value instanceof Atom || value instanceof Reaction || value instanceof ComputedValue;
}
exports.isObservable = isObservable;
function observableDecorator(target, key, baseDescriptor) {
    invariant(arguments.length >= 2 && arguments.length <= 3, "Illegal decorator config", key);
    assertPropertyConfigurable(target, key);
    if (baseDescriptor && baseDescriptor.hasOwnProperty("get")) {
        deprecated("Using @observable on computed values is deprecated. Use @computed instead.");
        return computed.apply(null, arguments);
    }
    var descriptor = {};
    invariant(typeof target === "object", "The @observable decorator can only be used on objects", key);
    descriptor.configurable = true;
    descriptor.enumerable = true;
    descriptor.get = function () {
        var _this = this;
        var baseValue = undefined;
        if (baseDescriptor && baseDescriptor.initializer) {
            baseValue = baseDescriptor.initializer();
            if (typeof baseValue === "function")
                baseValue = asReference(baseValue);
        }
        allowStateChanges(true, function () {
            setObservableObjectProperty(asObservableObject(_this, undefined, ValueMode.Recursive), key, baseValue);
        });
        return this[key];
    };
    descriptor.set = function (value) {
        setObservableObjectProperty(asObservableObject(this, undefined, ValueMode.Recursive), key, typeof value === "function" ? asReference(value) : value);
    };
    if (!baseDescriptor) {
        Object.defineProperty(target, key, descriptor);
    }
    else {
        return descriptor;
    }
}
function observable(v, keyOrScope) {
    if (v === void 0) { v = undefined; }
    if (typeof arguments[1] === "string")
        return observableDecorator.apply(null, arguments);
    invariant(arguments.length < 3, "observable expects zero, one or two arguments");
    if (isObservable(v))
        return v;
    var _a = getValueModeFromValue(v, ValueMode.Recursive), mode = _a[0], value = _a[1];
    var sourceType = mode === ValueMode.Reference ? ValueType.Reference : getTypeOfValue(value);
    switch (sourceType) {
        case ValueType.Array:
        case ValueType.PlainObject:
            return makeChildObservable(value, mode);
        case ValueType.Reference:
        case ValueType.ComplexObject:
            return new ObservableValue(value, mode);
        case ValueType.ComplexFunction:
            throw new Error("[mobx.observable] To be able to make a function reactive it should not have arguments. If you need an observable reference to a function, use `observable(asReference(f))`");
        case ValueType.ViewFunction:
            deprecated("Use `computed(expr)` instead of `observable(expr)`");
            return computed(v, keyOrScope);
    }
    invariant(false, "Illegal State");
}
exports.observable = observable;
var ValueType;
(function (ValueType) {
    ValueType[ValueType["Reference"] = 0] = "Reference";
    ValueType[ValueType["PlainObject"] = 1] = "PlainObject";
    ValueType[ValueType["ComplexObject"] = 2] = "ComplexObject";
    ValueType[ValueType["Array"] = 3] = "Array";
    ValueType[ValueType["ViewFunction"] = 4] = "ViewFunction";
    ValueType[ValueType["ComplexFunction"] = 5] = "ComplexFunction";
})(ValueType || (ValueType = {}));
function getTypeOfValue(value) {
    if (value === null || value === undefined)
        return ValueType.Reference;
    if (typeof value === "function")
        return value.length ? ValueType.ComplexFunction : ValueType.ViewFunction;
    if (Array.isArray(value) || value instanceof ObservableArray)
        return ValueType.Array;
    if (typeof value === "object")
        return isPlainObject(value) ? ValueType.PlainObject : ValueType.ComplexObject;
    return ValueType.Reference;
}
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
exports.observe = observe;
function observeObservable(thing, listener, fireImmediately) {
    if (isPlainObject(thing) && !isObservableObject(thing)) {
        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
        return getAdministration(observable(thing)).observe(listener, fireImmediately);
    }
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    if (isPlainObject(thing) && !isObservableObject(thing)) {
        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
        extendObservable(thing, {
            property: thing[property]
        });
        return observeObservableProperty(thing, property, listener, fireImmediately);
    }
    return getAdministration(thing, property).observe(listener, fireImmediately);
}
function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = null; }
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (detectCycles && __alreadySeen === null)
        __alreadySeen = [];
    if (detectCycles && source !== null && typeof source === "object") {
        for (var i = 0, l = __alreadySeen.length; i < l; i++)
            if (__alreadySeen[i][0] === source)
                return __alreadySeen[i][1];
    }
    if (!source)
        return source;
    if (Array.isArray(source) || source instanceof ObservableArray) {
        var res = cache([]);
        var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
        res.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res[i] = toAdd[i];
        return res;
    }
    if (source instanceof ObservableMap) {
        var res_1 = cache({});
        source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
        return res_1;
    }
    if (typeof source === "object" && isPlainObject(source)) {
        var res = cache({});
        for (var key in source)
            if (source.hasOwnProperty(key))
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
        return res;
    }
    if (isObservable(source) && source.$mobx instanceof ObservableValue)
        return toJS(source(), detectCycles, __alreadySeen);
    return source;
}
exports.toJS = toJS;
function toJSON(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = null; }
    deprecated("toJSON is deprecated. Use toJS instead");
    return toJS.apply(null, arguments);
}
exports.toJSON = toJSON;
function action(arg1, arg2, arg3, arg4) {
    switch (arguments.length) {
        case 1:
            if (typeof arg1 === "function")
                return actionImplementation(arg1.name || "<unnamed action>", arg1);
            else
                return function (target, key, descriptor) { return actionDecorator(arg1, target, key, descriptor); };
        case 2:
            if (typeof arg2 === "function")
                return actionImplementation(arg1, arg2);
            else
                return actionDecorator(arg2, arg1, arg2, undefined);
        case 3:
            return actionDecorator(arg2, arg1, arg2, arg3);
        default:
            invariant(false, "Invalid arguments for (@)action, please provide a function, name and function or use it as decorator on a class instance method");
    }
}
exports.action = action;
function actionDecorator(name, target, key, descriptor) {
    if (descriptor === undefined) {
        typescriptActionValueDecorator(name, target, key);
        return;
    }
    if (descriptor.value === undefined && typeof descriptor.initializer === "function") {
        return babelActionValueDecorator(name, target, key, descriptor);
    }
    var base = descriptor.value;
    descriptor.value = actionImplementation(name, base);
}
function babelActionValueDecorator(name, target, prop, descriptor) {
    return {
        configurable: true,
        enumerable: false,
        get: function () {
            var v = descriptor.initializer.call(this);
            invariant(typeof v === "function", "Babel @action decorator expects the field '" + prop + " to be initialized with a function");
            var implementation = action(name, v);
            addBoundAction(this, prop, implementation);
            return implementation;
        },
        set: function () {
            invariant(false, "Babel @action decorator: field '" + prop + "' not initialized");
        }
    };
}
function typescriptActionValueDecorator(name, target, prop) {
    Object.defineProperty(target, prop, {
        configurable: true,
        enumerable: false,
        get: function () {
            invariant(false, "TypeScript @action decorator: field '" + prop + "' not initialized");
        },
        set: function (v) {
            invariant(typeof v === "function", "TypeScript @action decorator expects the field '" + prop + " to be initialized with a function");
            addBoundAction(this, prop, action(name, v));
        }
    });
}
function addBoundAction(target, prop, implementation) {
    Object.defineProperty(target, prop, {
        enumerable: false,
        writable: false,
        value: implementation
    });
}
function actionImplementation(actionName, fn) {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return function () {
        return executeWrapped(actionName, fn, this, arguments);
    };
}
function executeWrapped(actionName, fn, scope, args) {
    var ds = globalState.derivationStack;
    invariant(!(ds[ds.length - 1] instanceof ComputedValue), "Computed values or transformers should not invoke actions or trigger other side effects");
    var notifySpy = isSpyEnabled();
    var startTime;
    if (notifySpy) {
        startTime = Date.now();
        var flattendArgs = [];
        for (var i = 0, l = args.length; i < l; i++)
            flattendArgs.push(args[i]);
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            target: scope,
            arguments: flattendArgs
        });
    }
    var res = untracked(function () { return transaction(function () { return allowStateChanges(true, function () { return fn.apply(scope, args); }); }, undefined, false); });
    if (notifySpy)
        spyReportEnd({ time: Date.now() - startTime });
    return res;
}
function useStrict(strict) {
    invariant(globalState.derivationStack.length === 0, "It is not allowed to set `useStrict` when a derivation is running");
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
exports.useStrict = useStrict;
function allowStateChanges(allowStateChanges, func) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    var res = func();
    globalState.allowStateChanges = prev;
    return res;
}
function propagateAtomReady(atom) {
    invariant(atom.isDirty, "atom not dirty");
    atom.isDirty = false;
    propagateReadiness(atom, true);
}
var Atom = (function () {
    function Atom(name, onBecomeObserved, onBecomeUnobserved) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObserved === void 0) { onBecomeObserved = noop; }
        if (onBecomeUnobserved === void 0) { onBecomeUnobserved = noop; }
        this.name = name;
        this.onBecomeObserved = onBecomeObserved;
        this.onBecomeUnobserved = onBecomeUnobserved;
        this.isDirty = false;
        this.staleObservers = [];
        this.observers = [];
    }
    Atom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    Atom.prototype.reportChanged = function () {
        if (!this.isDirty) {
            this.reportStale();
            this.reportReady();
        }
    };
    Atom.prototype.reportStale = function () {
        if (!this.isDirty) {
            this.isDirty = true;
            propagateStaleness(this);
        }
    };
    Atom.prototype.reportReady = function () {
        invariant(this.isDirty, "atom not dirty");
        if (globalState.inTransaction > 0)
            globalState.changedAtoms.push(this);
        else {
            propagateAtomReady(this);
            runReactions();
        }
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
exports.Atom = Atom;
var ComputedValue = (function () {
    function ComputedValue(derivation, scope, compareStructural, name) {
        this.derivation = derivation;
        this.scope = scope;
        this.compareStructural = compareStructural;
        this.isLazy = true;
        this.isComputing = false;
        this.staleObservers = [];
        this.observers = [];
        this.observing = [];
        this.dependencyChangeCount = 0;
        this.dependencyStaleCount = 0;
        this.value = undefined;
        this.name = name || "ComputedValue@" + getNextId();
    }
    ComputedValue.prototype.peek = function () {
        this.isComputing = true;
        var prevAllowStateChanges = globalState.allowStateChanges;
        globalState.allowStateChanges = false;
        var res = this.derivation.call(this.scope);
        globalState.allowStateChanges = prevAllowStateChanges;
        this.isComputing = false;
        return res;
    };
    ;
    ComputedValue.prototype.onBecomeObserved = function () {
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        for (var i = 0, l = this.observing.length; i < l; i++)
            removeObserver(this.observing[i], this);
        this.observing = [];
        this.isLazy = true;
        this.value = undefined;
    };
    ComputedValue.prototype.onDependenciesReady = function () {
        var changed = this.trackAndCompute();
        return changed;
    };
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected", this.derivation);
        reportObserved(this);
        if (this.dependencyStaleCount > 0) {
            return this.peek();
        }
        if (this.isLazy) {
            if (isComputingDerivation()) {
                this.isLazy = false;
                this.trackAndCompute();
            }
            else {
                return this.peek();
            }
        }
        return this.value;
    };
    ComputedValue.prototype.set = function (_) {
        throw new Error("[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this,
                type: "compute",
                fn: this.derivation,
                target: this.scope
            });
        }
        var oldValue = this.value;
        var newValue = this.value = trackDerivedFunction(this, this.peek);
        return valueDidChange(this.compareStructural, newValue, oldValue);
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                untracked(function () {
                    listener(newValue, prevValue);
                });
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    return ComputedValue;
}());
function isComputingDerivation() {
    return globalState.derivationStack.length > 0;
}
function checkIfStateModificationsAreAllowed() {
    if (!globalState.allowStateChanges) {
        invariant(false, globalState.strictMode
            ? "It is not allowed to create or change state outside an `action` when MobX is in strict mode. Wrap the current method in `action` if this state change is intended"
            : "It is not allowed to change the state when a computed value or transformer is being evaluated. Use 'autorun' to create reactive functions with side-effects.");
    }
}
function notifyDependencyStale(derivation) {
    if (++derivation.dependencyStaleCount === 1) {
        propagateStaleness(derivation);
    }
}
function notifyDependencyReady(derivation, dependencyDidChange) {
    invariant(derivation.dependencyStaleCount > 0, "unexpected ready notification");
    if (dependencyDidChange)
        derivation.dependencyChangeCount += 1;
    if (--derivation.dependencyStaleCount === 0) {
        if (derivation.dependencyChangeCount > 0) {
            derivation.dependencyChangeCount = 0;
            var changed = derivation.onDependenciesReady();
            propagateReadiness(derivation, changed);
        }
        else {
            propagateReadiness(derivation, false);
        }
    }
}
function trackDerivedFunction(derivation, f) {
    var hasException = true;
    var prevObserving = derivation.observing;
    derivation.observing = [];
    globalState.derivationStack.push(derivation);
    var prevTracking = globalState.isTracking;
    globalState.isTracking = true;
    try {
        var result = f.call(derivation);
        hasException = false;
        bindDependencies(derivation, prevObserving);
        globalState.isTracking = prevTracking;
        return result;
    }
    finally {
        if (hasException) {
            var message = ("[mobx] An uncaught exception occurred while calculating your computed value, autorun or transformer. Or inside the render() method of an observer based React component. " +
                "These methods should never throw exceptions as MobX will usually not be able to recover from them. " +
                ("Please enable 'Pause on (caught) exceptions' in your debugger to find the root cause. In: '" + derivation.name + "'"));
            if (isSpyEnabled()) {
                spyReport({
                    type: "error",
                    object: this,
                    message: message
                });
            }
            console.error(message);
            resetGlobalState();
        }
    }
}
function bindDependencies(derivation, prevObserving) {
    globalState.derivationStack.length -= 1;
    var _a = quickDiff(derivation.observing, prevObserving), added = _a[0], removed = _a[1];
    for (var i = 0, l = added.length; i < l; i++) {
        var dependency = added[i];
        invariant(!findCycle(derivation, dependency), "Cycle detected", derivation);
        addObserver(added[i], derivation);
    }
    for (var i = 0, l = removed.length; i < l; i++)
        removeObserver(removed[i], derivation);
}
function findCycle(needle, node) {
    if (needle === node)
        return true;
    var obs = node.observing;
    if (obs === undefined)
        return false;
    for (var l = obs.length, i = 0; i < l; i++)
        if (findCycle(needle, obs[i]))
            return true;
    return false;
}
function untracked(action) {
    var prevTracking = globalState.isTracking;
    globalState.isTracking = false;
    var res = action();
    globalState.isTracking = prevTracking;
    return res;
}
exports.untracked = untracked;
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        this.version = 2;
        this.derivationStack = [];
        this.mobxGuid = 0;
        this.inTransaction = 0;
        this.isTracking = false;
        this.isRunningReactions = false;
        this.changedAtoms = [];
        this.pendingReactions = [];
        this.allowStateChanges = true;
        this.strictMode = false;
        this.resetId = 0;
        this.spyListeners = [];
    }
    return MobXGlobals;
}());
var globalState = (function () {
    var res = new MobXGlobals();
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== res.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        return global.__mobxGlobal;
    return global.__mobxGlobal = res;
})();
function registerGlobals() {
}
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}
function addObserver(observable, node) {
    var obs = observable.observers, l = obs.length;
    obs[l] = node;
    if (l === 0)
        observable.onBecomeObserved();
}
function removeObserver(observable, node) {
    var obs = observable.observers, idx = obs.indexOf(node);
    if (idx !== -1)
        obs.splice(idx, 1);
    if (obs.length === 0)
        observable.onBecomeUnobserved();
}
function reportObserved(observable) {
    if (globalState.isTracking === false)
        return;
    var derivationStack = globalState.derivationStack;
    var deps = derivationStack[derivationStack.length - 1].observing;
    var depslength = deps.length;
    if (deps[depslength - 1] !== observable && deps[depslength - 2] !== observable)
        deps[depslength] = observable;
}
function propagateStaleness(observable) {
    var os = observable.observers.slice();
    os.forEach(notifyDependencyStale);
    observable.staleObservers = observable.staleObservers.concat(os);
}
function propagateReadiness(observable, valueDidActuallyChange) {
    observable.staleObservers.splice(0).forEach(function (o) { return notifyDependencyReady(o, valueDidActuallyChange); });
}
var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.staleObservers = EMPTY_ARRAY;
        this.observers = EMPTY_ARRAY;
        this.observing = [];
        this.dependencyChangeCount = 0;
        this.dependencyStaleCount = 0;
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
    }
    Reaction.prototype.onBecomeObserved = function () {
    };
    Reaction.prototype.onBecomeUnobserved = function () {
    };
    Reaction.prototype.onDependenciesReady = function () {
        this.schedule();
        return false;
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this.dependencyStaleCount > 0 || this._isScheduled;
    };
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            this._isScheduled = false;
            this._isTrackPending = true;
            this.onInvalidate();
            if (this._isTrackPending && isSpyEnabled()) {
                spyReport({
                    object: this,
                    type: "scheduled-reaction"
                });
            }
        }
    };
    Reaction.prototype.track = function (fn) {
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        trackDerivedFunction(this, fn);
        this._isTrackPending = false;
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var deps = this.observing.splice(0);
            for (var i = 0, l = deps.length; i < l; i++)
                removeObserver(deps[i], this);
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    return Reaction;
}());
exports.Reaction = Reaction;
var MAX_REACTION_ITERATIONS = 100;
function runReactions() {
    if (globalState.isRunningReactions === true || globalState.inTransaction > 0)
        return;
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS)
            throw new Error("Reaction doesn't converge to a stable state. Probably there is a cycle in the reactive function: " + allReactions[0].toString());
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var spyEnabled = false;
function isSpyEnabled() {
    return spyEnabled;
}
function spyReport(event) {
    if (!spyEnabled)
        return false;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    spyEnabled = globalState.spyListeners.length > 0;
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
        spyEnabled = globalState.spyListeners.length > 0;
    });
}
exports.spy = spy;
function trackTransitions(onReport) {
    deprecated("trackTransitions is deprecated. Use mobx.spy instead");
    if (typeof onReport === "boolean") {
        deprecated("trackTransitions only takes a single callback function. If you are using the mobx-react-devtools, please update them first");
        onReport = arguments[1];
    }
    if (!onReport) {
        deprecated("trackTransitions without callback has been deprecated and is a no-op now. If you are using the mobx-react-devtools, please update them first");
        return function () { };
    }
    return spy(onReport);
}
function transaction(action, thisArg, report) {
    if (thisArg === void 0) { thisArg = undefined; }
    if (report === void 0) { report = true; }
    globalState.inTransaction += 1;
    if (report && isSpyEnabled()) {
        spyReportStart({
            type: "transaction",
            target: thisArg,
            name: (action.name) || "anonymous transaction"
        });
    }
    var res = action.call(thisArg);
    if (--globalState.inTransaction === 0) {
        var values = globalState.changedAtoms.splice(0);
        for (var i = 0, l = values.length; i < l; i++)
            propagateAtomReady(values[i]);
        runReactions();
    }
    if (report && isSpyEnabled())
        spyReportEnd();
    return res;
}
exports.transaction = transaction;
function hasInterceptors(interceptable) {
    return (interceptable.interceptors && interceptable.interceptors.length > 0);
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    return untracked(function () {
        var interceptors = interceptable.interceptors;
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                return null;
        }
        return change;
    });
}
function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    untracked(function () {
        var listeners = listenable.changeListeners;
        if (!listeners)
            return;
        listeners = listeners.slice();
        if (Array.isArray(change)) {
            for (var i = 0, l = listeners.length; i < l; i++)
                listeners[i].apply(null, change);
        }
        else {
            for (var i = 0, l = listeners.length; i < l; i++)
                listeners[i](change);
        }
    });
}
var ValueMode;
(function (ValueMode) {
    ValueMode[ValueMode["Recursive"] = 0] = "Recursive";
    ValueMode[ValueMode["Reference"] = 1] = "Reference";
    ValueMode[ValueMode["Structure"] = 2] = "Structure";
    ValueMode[ValueMode["Flat"] = 3] = "Flat";
})(ValueMode || (ValueMode = {}));
function asReference(value) {
    return new AsReference(value);
}
exports.asReference = asReference;
function asStructure(value) {
    return new AsStructure(value);
}
exports.asStructure = asStructure;
function asFlat(value) {
    return new AsFlat(value);
}
exports.asFlat = asFlat;
var AsReference = (function () {
    function AsReference(value) {
        this.value = value;
        assertUnwrapped(value, "Modifiers are not allowed to be nested");
    }
    return AsReference;
}());
var AsStructure = (function () {
    function AsStructure(value) {
        this.value = value;
        assertUnwrapped(value, "Modifiers are not allowed to be nested");
    }
    return AsStructure;
}());
var AsFlat = (function () {
    function AsFlat(value) {
        this.value = value;
        assertUnwrapped(value, "Modifiers are not allowed to be nested");
    }
    return AsFlat;
}());
function asMap(data, modifierFunc) {
    return map(data, modifierFunc);
}
exports.asMap = asMap;
function getValueModeFromValue(value, defaultMode) {
    if (value instanceof AsReference)
        return [ValueMode.Reference, value.value];
    if (value instanceof AsStructure)
        return [ValueMode.Structure, value.value];
    if (value instanceof AsFlat)
        return [ValueMode.Flat, value.value];
    return [defaultMode, value];
}
function getValueModeFromModifierFunc(func) {
    if (func === asReference)
        return ValueMode.Reference;
    else if (func === asStructure)
        return ValueMode.Structure;
    else if (func === asFlat)
        return ValueMode.Flat;
    invariant(func === undefined, "Cannot determine value mode from function. Please pass in one of these: mobx.asReference, mobx.asStructure or mobx.asFlat, got: " + func);
    return ValueMode.Recursive;
}
function makeChildObservable(value, parentMode, name) {
    var childMode;
    if (isObservable(value))
        return value;
    switch (parentMode) {
        case ValueMode.Reference:
            return value;
        case ValueMode.Flat:
            assertUnwrapped(value, "Items inside 'asFlat' cannot have modifiers");
            childMode = ValueMode.Reference;
            break;
        case ValueMode.Structure:
            assertUnwrapped(value, "Items inside 'asStructure' cannot have modifiers");
            childMode = ValueMode.Structure;
            break;
        case ValueMode.Recursive:
            _a = getValueModeFromValue(value, ValueMode.Recursive), childMode = _a[0], value = _a[1];
            break;
        default:
            invariant(false, "Illegal State");
    }
    if (Array.isArray(value))
        return createObservableArray(value, childMode, name);
    if (isPlainObject(value) && Object.isExtensible(value))
        return extendObservableHelper(value, value, childMode, name);
    return value;
    var _a;
}
function assertUnwrapped(value, message) {
    if (value instanceof AsReference || value instanceof AsStructure || value instanceof AsFlat)
        throw new Error("[mobx] asStructure / asReference / asFlat cannot be used here. " + message);
}
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
StubArray.prototype = [];
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, mode, array, owned) {
        this.mode = mode;
        this.array = array;
        this.owned = owned;
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new Atom(name || ("ObservableArray@" + getNextId()));
    }
    ObservableArrayAdministration.prototype.makeReactiveArrayItem = function (value) {
        assertUnwrapped(value, "Array values cannot have modifiers");
        if (this.mode === ValueMode.Flat || this.mode === ValueMode.Reference)
            return value;
        return makeChildObservable(value, this.mode, this.atom.name + "[..]");
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength)
            this.spliceWithArray(currentLength, 0, new Array(newLength - currentLength));
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        checkIfStateModificationsAreAllowed();
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(this.makeReactiveArrayItem, this);
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta);
        var res = (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return res;
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "update",
            index: index, newValue: newValue, oldValue: oldValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "splice",
            index: index, removed: removed, added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, mode, name, owned) {
        if (owned === void 0) { owned = false; }
        _super.call(this);
        var adm = new ObservableArrayAdministration(name, mode, this, owned);
        Object.defineProperty(this, "$mobx", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: adm
        });
        if (initialValues && initialValues.length) {
            adm.updateArrayLength(0, initialValues.length);
            adm.values = initialValues.map(adm.makeReactiveArrayItem, adm);
            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
        }
        else {
            adm.values = [];
        }
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        return this.$mobx.values;
    };
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        this.$mobx.atom.reportObserved();
        var items = this.$mobx.values, l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return items[i];
        return null;
    };
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        this.$mobx.atom.reportObserved();
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        this.$mobx.atom.reportObserved();
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.values.indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.toString = function () {
        return "[mobx.array] " + Array.prototype.toString.apply(this.$mobx.values, arguments);
    };
    ObservableArray.prototype.toLocaleString = function () {
        return "[mobx.array] " + Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
    };
    return ObservableArray;
}(StubArray));
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "observe",
    "clear",
    "replace",
    "toJSON",
    "peek",
    "find",
    "splice",
    "push",
    "pop",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "toString",
    "toLocaleString"
]);
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    Object.defineProperty(ObservableArray.prototype, funcName, {
        configurable: false,
        writable: true,
        enumerable: false,
        value: function () {
            this.$mobx.atom.reportObserved();
            return baseFunc.apply(this.$mobx.values, arguments);
        }
    });
});
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, {
        enumerable: false,
        configurable: false,
        set: createArraySetter(index),
        get: createArrayGetter(index)
    });
}
function createArraySetter(index) {
    return function (newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        assertUnwrapped(newValue, "Modifiers cannot be used on array values. For non-reactive array values use makeReactive(asFlat(array)).");
        if (index < values.length) {
            checkIfStateModificationsAreAllowed();
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.array,
                    index: index, newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.makeReactiveArrayItem(newValue);
            var changed = (adm.mode === ValueMode.Structure) ? !deepEquals(oldValue, newValue) : oldValue !== newValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    };
}
function createArrayGetter(index) {
    return function () {
        var impl = this.$mobx;
        if (impl && index < impl.values.length) {
            impl.atom.reportObserved();
            return impl.values[index];
        }
        return undefined;
    };
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
function createObservableArray(initialValues, mode, name) {
    return new ObservableArray(initialValues, mode, name);
}
function fastArray(initialValues) {
    deprecated("fastArray is deprecated. Please use `observable(asFlat([]))`");
    return createObservableArray(initialValues, ValueMode.Flat, null);
}
exports.fastArray = fastArray;
function isObservableArray(thing) {
    return thing instanceof ObservableArray;
}
exports.isObservableArray = isObservableArray;
var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, valueModeFunc) {
        var _this = this;
        this.$mobx = ObservableMapMarker;
        this._data = {};
        this._hasMap = {};
        this.name = "ObservableMap@" + getNextId();
        this._keys = new ObservableArray(null, ValueMode.Reference, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this._valueMode = getValueModeFromModifierFunc(valueModeFunc);
        if (this._valueMode === ValueMode.Flat)
            this._valueMode = ValueMode.Reference;
        allowStateChanges(true, function () {
            if (isPlainObject(initialData))
                _this.merge(initialData);
            else if (Array.isArray(initialData))
                initialData.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
        });
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        var hasKey = this._has(key);
        assertUnwrapped(value, "[mobx.map.set] Expected unwrapped value to be inserted to key '" + key + "'. If you need to use modifiers pass them as second argument to the constructor");
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: this._data[key].value,
                name: key
            } : null;
            if (notifySpy)
                spyReportStart(change);
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable = _this._data[key];
                observable.setNewValue(undefined);
                _this._data[key] = undefined;
            }, undefined, false);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, ValueMode.Reference, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable = this._data[name];
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "update",
                object: this,
                oldValue: observable.value,
                name: name, newValue: newValue
            } : null;
            if (notifySpy)
                spyReportStart(change);
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        transaction(function () {
            var observable = _this._data[name] = new ObservableValue(newValue, _this._valueMode, _this.name + "." + name, false);
            newValue = observable.value;
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        }, undefined, false);
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            type: "add",
            object: this,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this._data[key].get();
        return undefined;
    };
    ObservableMap.prototype.keys = function () {
        return this._keys.slice();
    };
    ObservableMap.prototype.values = function () {
        return this.keys().map(this.get, this);
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return this.keys().map(function (key) { return [key, _this.get(key)]; });
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key); });
    };
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        transaction(function () {
            if (other instanceof ObservableMap)
                other.keys().forEach(function (key) { return _this.set(key, other.get(key)); });
            else
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
        }, undefined, false);
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        }, undefined, false);
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
        return res;
    };
    ObservableMap.prototype.toJs = function () {
        deprecated("toJs is deprecated, use toJS instead");
        return this.toJS();
    };
    ObservableMap.prototype.toJSON = function () {
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key !== "string" && typeof key !== "number")
            return false;
        return true;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "'");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return this.name + "[{ " + this.keys().map(function (key) { return (key + ": " + ("" + _this.get(key))); }).join(", ") + " }]";
    };
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
exports.ObservableMap = ObservableMap;
function map(initialValues, valueModifier) {
    return new ObservableMap(initialValues, valueModifier);
}
exports.map = map;
function isObservableMap(thing) {
    return thing instanceof ObservableMap;
}
exports.isObservableMap = isObservableMap;
var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name, mode) {
        this.target = target;
        this.name = name;
        this.mode = mode;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, mode) {
    if (mode === void 0) { mode = ValueMode.Recursive; }
    if (isObservableObject(target))
        return target.$mobx;
    if (!isPlainObject(target))
        name = target.constructor.name + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name, mode);
    Object.defineProperty(target, "$mobx", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: adm
    });
    return adm;
}
function setObservableObjectProperty(adm, propName, value) {
    if (adm.values[propName])
        adm.target[propName] = value;
    else
        defineObservableProperty(adm, propName, value);
}
function defineObservableProperty(adm, propName, newValue) {
    assertPropertyConfigurable(adm.target, propName);
    var observable;
    var name = adm.name + "." + propName;
    var isComputed = true;
    if (typeof newValue === "function" && newValue.length === 0)
        observable = new ComputedValue(newValue, adm.target, false, name);
    else if (newValue instanceof AsStructure && typeof newValue.value === "function" && newValue.value.length === 0)
        observable = new ComputedValue(newValue.value, adm.target, true, name);
    else {
        isComputed = false;
        if (hasInterceptors(adm)) {
            var change = interceptChange(adm, {
                object: adm.target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        observable = new ObservableValue(newValue, adm.mode, name, false);
        newValue = observable.value;
    }
    adm.values[propName] = observable;
    Object.defineProperty(adm.target, propName, {
        configurable: true,
        enumerable: !isComputed,
        get: function () {
            return observable.get();
        },
        set: isComputed
            ? throwingComputedValueSetter
            : createSetter(adm, observable, propName)
    });
    if (!isComputed)
        notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function createSetter(adm, observable, name) {
    return function (newValue) {
        if (hasInterceptors(adm)) {
            var change = interceptChange(adm, {
                type: "update",
                object: this,
                name: name, newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notify = hasListeners(adm);
            var notifySpy = isSpyEnabled();
            var change = notifyListeners || hasListeners ? {
                type: "update",
                object: this,
                oldValue: observable.value,
                name: name, newValue: newValue
            } : null;
            if (notifySpy)
                spyReportStart(change);
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(adm, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
        type: "add",
        object: object, name: name, newValue: newValue
    } : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
function isObservableObject(thing) {
    return thing && thing.$mobx instanceof ObservableObjectAdministration;
}
exports.isObservableObject = isObservableObject;
var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, mode, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        _super.call(this, name);
        this.mode = mode;
        this.hasUnreportedChange = false;
        this.value = undefined;
        var _a = getValueModeFromValue(value, ValueMode.Recursive), childmode = _a[0], unwrappedValue = _a[1];
        if (this.mode === ValueMode.Recursive)
            this.mode = childmode;
        this.value = makeChildObservable(unwrappedValue, this.mode, this.name);
        if (notifySpy && isSpyEnabled()) {
            spyReport({ type: "create", object: this, newValue: this.value });
        }
    }
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue, oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        assertUnwrapped(newValue, "Modifiers cannot be used on non-initial values.");
        checkIfStateModificationsAreAllowed();
        if (hasInterceptors(this)) {
            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        var changed = valueDidChange(this.mode === ValueMode.Structure, this.value, newValue);
        if (changed)
            return makeChildObservable(newValue, this.mode, this.name);
        return UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this))
            notifyListeners(this, [newValue, oldValue]);
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.value;
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener(this.value, undefined);
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    return ObservableValue;
}(Atom));
function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, "It is not possible to get index atoms from arrays");
            return thing.$mobx.atom;
        }
        else if (isObservableMap(thing)) {
            if (property === undefined)
                return getAtom(thing._keys);
            var observable_1 = thing._data[property] || thing._hasMap[property];
            invariant(!!observable_1, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable_1;
        }
        else if (isObservableObject(thing)) {
            invariant(!!property, "please specify a property");
            var observable_2 = thing.$mobx.values[property];
            invariant(!!observable_2, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable_2;
        }
        else if (thing instanceof Atom || thing instanceof ComputedValue || thing instanceof Reaction) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (thing.$mobx instanceof Reaction) {
            return thing.$mobx;
        }
    }
    invariant(false, "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expection some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (thing instanceof Atom || thing instanceof ComputedValue || thing instanceof Reaction)
        return thing;
    if (isObservableMap(thing))
        return thing;
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing);
    return named.name;
}
var SimpleEventEmitter = (function () {
    function SimpleEventEmitter() {
        this.listeners = [];
        deprecated("extras.SimpleEventEmitter is deprecated and will be removed in the next major release");
    }
    SimpleEventEmitter.prototype.emit = function () {
        var listeners = this.listeners.slice();
        for (var i = 0, l = listeners.length; i < l; i++)
            listeners[i].apply(null, arguments);
    };
    SimpleEventEmitter.prototype.on = function (listener) {
        var _this = this;
        this.listeners.push(listener);
        return once(function () {
            var idx = _this.listeners.indexOf(listener);
            if (idx !== -1)
                _this.listeners.splice(idx, 1);
        });
    };
    SimpleEventEmitter.prototype.once = function (listener) {
        var subscription = this.on(function () {
            subscription();
            listener.apply(this, arguments);
        });
        return subscription;
    };
    return SimpleEventEmitter;
}());
exports.SimpleEventEmitter = SimpleEventEmitter;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getNextId() {
    return ++globalState.mobxGuid;
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
}
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isPlainObject(value) {
    return value !== null && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (source.hasOwnProperty(key)) {
                res[key] = source[key];
            }
    }
    return res;
}
function valueDidChange(compareStructural, oldValue, newValue) {
    return compareStructural
        ? !deepEquals(oldValue, newValue)
        : oldValue !== newValue;
}
function makeNonEnumerable(object, props) {
    for (var i = 0; i < props.length; i++) {
        Object.defineProperty(object, props[i], {
            configurable: true,
            writable: true,
            enumerable: false,
            value: object[props[i]]
        });
    }
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function deepEquals(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    var aIsArray = Array.isArray(a) || isObservableArray(a);
    if (aIsArray !== (Array.isArray(b) || isObservableArray(b))) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length; i >= 0; i--)
            if (!deepEquals(a[i], b[i]))
                return false;
        return true;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (Object.keys(a).length !== Object.keys(b).length)
            return false;
        for (var prop in a) {
            if (!b.hasOwnProperty(prop))
                return false;
            if (!deepEquals(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return a === b;
}
function quickDiff(current, base) {
    if (!base || !base.length)
        return [current, []];
    if (!current || !current.length)
        return [[], base];
    var added = [];
    var removed = [];
    var currentIndex = 0, currentSearch = 0, currentLength = current.length, currentExhausted = false, baseIndex = 0, baseSearch = 0, baseLength = base.length, isSearching = false, baseExhausted = false;
    while (!baseExhausted && !currentExhausted) {
        if (!isSearching) {
            if (currentIndex < currentLength && baseIndex < baseLength && current[currentIndex] === base[baseIndex]) {
                currentIndex++;
                baseIndex++;
                if (currentIndex === currentLength && baseIndex === baseLength)
                    return [added, removed];
                continue;
            }
            currentSearch = currentIndex;
            baseSearch = baseIndex;
            isSearching = true;
        }
        baseSearch += 1;
        currentSearch += 1;
        if (baseSearch >= baseLength)
            baseExhausted = true;
        if (currentSearch >= currentLength)
            currentExhausted = true;
        if (!currentExhausted && current[currentSearch] === base[baseIndex]) {
            added = added.concat(current.slice(currentIndex, currentSearch));
            currentIndex = currentSearch + 1;
            baseIndex++;
            isSearching = false;
        }
        else if (!baseExhausted && base[baseSearch] === current[currentIndex]) {
            removed = removed.concat(base.slice(baseIndex, baseSearch));
            baseIndex = baseSearch + 1;
            currentIndex++;
            isSearching = false;
        }
    }
    return [
        added.concat(current.slice(currentIndex)),
        removed.concat(base.slice(baseIndex))
    ];
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvZmlsdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsImFwcC9jb21wb25lbnRzL3BvbGwuanMiLCJhcHAvY29tcG9uZW50cy9wb2xsTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9tb2J4LXJlYWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21vYngvbGliL21vYnguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsbUJBQVMsTUFBVCxDQUFpQixtREFBakIsRUFBMEIsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQTFCOzs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7SUFFTSxNOzs7Ozs7Ozs7OztpQ0FDSztBQUNQLG1CQUNFO0FBQUE7Z0JBQUE7Z0JBQ0k7QUFBQTtvQkFBQSxFQUFNLFFBQU8sR0FBYjtvQkFDSTtBQUFBO3dCQUFBLEVBQUssV0FBVSxlQUFmO3dCQUNJO0FBQUE7NEJBQUEsRUFBSyxXQUFVLFFBQWY7NEJBQ0k7QUFBQTtnQ0FBQSxFQUFLLFdBQVUsZ0JBQWY7Z0NBRUk7QUFBQTtvQ0FBQSxFQUFLLFdBQVUsNEJBQWY7b0NBQ0kseUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLGFBQVksUUFBeEQsR0FESjtvQ0FFUTtBQUFBO3dDQUFBO3dDQUFRLHFDQUFHLFdBQVUsV0FBYjtBQUFSO0FBRlI7QUFGSjtBQURKLHlCQURKO3dCQVlJO0FBQUE7NEJBQUEsRUFBSyxXQUFVLFFBQWY7NEJBQ0k7QUFBQTtnQ0FBQSxFQUFJLFdBQVUsY0FBZDtnQ0FBQTtBQUFBLDZCQURKOzRCQUdJO0FBQUE7Z0NBQUEsRUFBSyxXQUFVLGdCQUFmO2dDQUNJO0FBQUE7b0NBQUEsRUFBSSxXQUFVLFVBQWQ7b0NBQ0k7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxXQUF0RCxFQUFrRSxNQUFLLFNBQXZFLEdBREo7d0NBRVE7QUFBQTs0Q0FBQSxFQUFPLE9BQUksV0FBWDs0Q0FBQTtBQUFBO0FBRlIscUNBREo7b0NBS0k7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxhQUF0RCxFQUFvRSxNQUFLLFNBQXpFLEdBREo7d0NBRVE7QUFBQTs0Q0FBQSxFQUFPLE9BQUksYUFBWDs0Q0FBQTtBQUFBO0FBRlIscUNBTEo7b0NBU0k7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxpQkFBdEQsRUFBd0UsTUFBSyxTQUE3RSxHQURKO3dDQUVRO0FBQUE7NENBQUEsRUFBTyxPQUFJLGlCQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FUSjtvQ0FhSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxJQUFHLFlBQXRELEVBQW1FLE1BQUssU0FBeEUsR0FESjt3Q0FFUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxZQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FiSjtvQ0FpQkk7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxRQUF0RCxFQUErRCxNQUFLLFNBQXBFLEdBREo7d0NBRVE7QUFBQTs0Q0FBQSxFQUFPLE9BQUksUUFBWDs0Q0FBQTtBQUFBO0FBRlIscUNBakJKO29DQXFCSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxJQUFHLFNBQXRELEVBQWdFLE1BQUssU0FBckUsR0FESjt3Q0FFUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxTQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FyQko7b0NBeUJJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLGNBQWQ7d0NBQ0kseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsb0JBQTlCLEVBQW1ELElBQUcsUUFBdEQsRUFBK0QsTUFBSyxTQUFwRSxHQURKO3dDQUVRO0FBQUE7NENBQUEsRUFBTyxPQUFJLFFBQVg7NENBQUE7QUFBQTtBQUZSLHFDQXpCSjtvQ0E2Qkk7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxLQUF0RCxFQUE0RCxNQUFLLFNBQWpFLEdBREo7d0NBRVE7QUFBQTs0Q0FBQSxFQUFPLE9BQUksS0FBWDs0Q0FBQTtBQUFBO0FBRlI7QUE3Qko7QUFESjtBQUhKLHlCQVpKO3dCQXFESTtBQUFBOzRCQUFBLEVBQUssV0FBVSxRQUFmOzRCQUNJO0FBQUE7Z0NBQUEsRUFBSSxXQUFVLGNBQWQ7Z0NBQUE7QUFBQSw2QkFESjs0QkFHSTtBQUFBO2dDQUFBLEVBQUssV0FBVSxnQkFBZjtnQ0FDSTtBQUFBO29DQUFBLEVBQUksV0FBVSxvQkFBZDtvQ0FDSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxJQUFHLGFBQXRELEVBQW9FLE1BQUssV0FBekUsR0FESjt3Q0FFUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxhQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FESjtvQ0FLSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxJQUFHLFVBQXRELEVBQWlFLE1BQUssV0FBdEUsR0FESjt3Q0FFUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxVQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FMSjtvQ0FVSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxJQUFHLFdBQXRELEVBQWtFLE1BQUssV0FBdkUsR0FESjt3Q0FFUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxXQUFYOzRDQUFBO0FBQUE7QUFGUixxQ0FWSjtvQ0FnQkk7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsSUFBRyxXQUF0RCxFQUFrRSxNQUFLLFdBQXZFLEdBREo7d0NBRVE7QUFBQTs0Q0FBQSxFQUFPLE9BQUksV0FBWDs0Q0FBQTtBQUFBO0FBRlI7QUFoQko7QUFESjtBQUhKLHlCQXJESjt3QkFpRkk7QUFBQTs0QkFBQSxFQUFLLFdBQVUsUUFBZjs0QkFDSTtBQUFBO2dDQUFBLEVBQUksV0FBVSxjQUFkO2dDQUFBO0FBQUEsNkJBREo7NEJBR0k7QUFBQTtnQ0FBQSxFQUFLLFdBQVUsa0NBQWY7Z0NBQ0k7QUFBQTtvQ0FBQSxFQUFJLFdBQVUsVUFBZDtvQ0FDSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxjQUFkO3dDQUNJLHlDQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLG9CQUE5QixFQUFtRCxtQkFBZ0IsT0FBbkUsRUFBMkUsSUFBRyxrQkFBOUU7QUFDTyxrREFBSyxZQURaLEdBREo7d0NBR1E7QUFBQTs0Q0FBQSxFQUFPLE9BQUksa0JBQVg7NENBQUE7QUFBQTtBQUhSLHFDQURKO29DQU1JO0FBQUE7d0NBQUEsRUFBSSxXQUFVLGNBQWQ7d0NBQ0kseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsb0JBQTlCLEVBQW1ELG1CQUFnQixNQUFuRSxFQUEwRSxJQUFHLGlCQUE3RTtBQUNPLGtEQUFLLFlBRFosR0FESjt3Q0FHUTtBQUFBOzRDQUFBLEVBQU8sT0FBSSxpQkFBWDs0Q0FBQTtBQUFBO0FBSFIscUNBTko7b0NBWUk7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsY0FBZDt3Q0FDSSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVSxvQkFBOUIsRUFBbUQsbUJBQWdCLFVBQW5FLEVBQThFLElBQUcscUJBQWpGO0FBQ08sa0RBQUssWUFEWixHQURKO3dDQUdRO0FBQUE7NENBQUEsRUFBTyxPQUFJLHFCQUFYOzRDQUFBO0FBQUE7QUFIUjtBQVpKLGlDQURKO2dDQXFCSTtBQUFBO29DQUFBLEVBQUssV0FBVSw0QkFBZjtvQ0FDSSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QixHQURKO29DQUVRO0FBQUE7d0NBQUEsRUFBTyxPQUFJLEVBQVg7d0NBQUE7QUFBQSxxQ0FGUjtvQ0FHUSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QjtBQUhSO0FBckJKO0FBSEoseUJBakZKO3dCQWtISTtBQUFBOzRCQUFBLEVBQUssV0FBVSxRQUFmOzRCQUNJO0FBQUE7Z0NBQUEsRUFBSSxXQUFVLGNBQWQ7Z0NBQUE7QUFBQSw2QkFESjs0QkFHSTtBQUFBO2dDQUFBLEVBQUssV0FBVSxnQkFBZjtnQ0FDSTtBQUFBO29DQUFBLEVBQUksV0FBVSxVQUFkO29DQUNJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLGNBQWQ7d0NBQ0kseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsb0JBQTlCLEVBQW1ELElBQUcsU0FBdEQsRUFBZ0UsTUFBSyxRQUFyRSxHQURKO3dDQUVRO0FBQUE7NENBQUEsRUFBTyxPQUFJLFNBQVg7NENBQUE7QUFBQTtBQUZSLHFDQURKO29DQUtJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLGNBQWQ7d0NBQ0kseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsb0JBQTlCLEVBQW1ELElBQUcsV0FBdEQsRUFBa0UsTUFBSyxRQUF2RSxHQURKO3dDQUVRO0FBQUE7NENBQUEsRUFBTyxPQUFJLFdBQVg7NENBQUE7QUFBQTtBQUZSLHFDQUxKO29DQVVJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLGNBQWQ7d0NBQ0kseUNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVUsb0JBQTlCLEVBQW1ELElBQUcsVUFBdEQsRUFBaUUsTUFBSyxRQUF0RSxHQURKO3dDQUVRO0FBQUE7NENBQUEsRUFBTyxPQUFJLFVBQVg7NENBQUE7QUFBQTtBQUZSO0FBVko7QUFESjtBQUhKO0FBbEhKO0FBREo7QUFESixhQURGO0FBbUpEOzs7O0VBckprQixnQkFBTSxTOztBQXdKM0IsT0FBTyxTQUFQLEdBQW1CLEVBQW5CO0FBQ0EsT0FBTyxZQUFQLEdBQXNCLEVBQXRCOztrQkFFZSxNOzs7Ozs7Ozs7OztBQzdKZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLEk7Ozs7Ozs7Ozs7O2lDQUVLO0FBQ1AsbUJBQ0k7QUFBQTtnQkFBQSxFQUFLLFdBQVUsS0FBZjtnQkFDSTtBQUFBO29CQUFBLEVBQUssV0FBVSxVQUFmO29CQUNJO0FBREosaUJBREo7Z0JBSUk7QUFBQTtvQkFBQSxFQUFLLFdBQVUsVUFBZjtvQkFDSTtBQURKO0FBSkosYUFESjtBQVVEOzs7O0VBYmdCLGdCQUFNLFM7O0FBZ0J6QixLQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxLQUFLLFlBQUwsR0FBb0IsRUFBcEI7O2tCQUVlLEk7Ozs7Ozs7Ozs7O0FDdkJmOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7Ozs7Ozs7OztpQ0FDSztBQUNQLG1CQUVJO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLGNBQWY7Z0JBQ0k7QUFBQTtvQkFBQSxFQUFLLFdBQVUsWUFBZjtvQkFDSTtBQUFBO3dCQUFBLEVBQUssV0FBVSxZQUFmO3dCQUNJO0FBQUE7NEJBQUEsRUFBSyxXQUFVLGVBQWY7NEJBQ0k7QUFBQTtnQ0FBQSxFQUFHLE1BQUssR0FBUjtnQ0FBWSx1Q0FBSyxLQUFJLDhCQUFULEVBQXdDLEtBQUksT0FBNUM7QUFBWjtBQURKO0FBREoscUJBREo7b0JBTUk7QUFBQTt3QkFBQSxFQUFLLFdBQVUsY0FBZjt3QkFDSTtBQUFBOzRCQUFBLEVBQUssV0FBVSxTQUFmOzRCQUNJO0FBQUE7Z0NBQUEsRUFBSyxXQUFVLE1BQWY7Z0NBQ0k7QUFBQTtvQ0FBQSxFQUFHLE1BQUssR0FBUjtvQ0FBWSxxQ0FBRyxXQUFVLFVBQWI7QUFBWjtBQURKLDZCQURKOzRCQUlJO0FBQUE7Z0NBQUEsRUFBSSxXQUFVLE9BQWQ7Z0NBQXNCO0FBQUE7b0NBQUEsRUFBRyxNQUFLLEdBQVI7b0NBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQUE3QjtBQUF0Qiw2QkFKSjs0QkFLSTtBQUFBO2dDQUFBLEVBQUssV0FBVSxNQUFmO2dDQUNJO0FBQUE7b0NBQUE7b0NBQ0k7QUFBQTt3Q0FBQSxFQUFJLFdBQVUsS0FBZDt3Q0FBb0I7QUFBQTs0Q0FBQSxFQUFHLE1BQUssR0FBUjs0Q0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCO0FBQXpDO0FBQXBCLHFDQURKO29DQUVJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLFFBQWQ7d0NBQXVCO0FBQUE7NENBQUEsRUFBRyxNQUFLLEdBQVI7NENBQUE7QUFBQTtBQUF2QixxQ0FGSjtvQ0FHSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxPQUFkO3dDQUFBO0FBQUE7QUFISjtBQURKO0FBTEo7QUFESixxQkFOSjtvQkFxQkk7QUFBQTt3QkFBQSxFQUFLLFdBQVUsYUFBZjt3QkFDSTtBQUFBOzRCQUFBLEVBQUssV0FBVSxTQUFmOzRCQUNJO0FBQUE7Z0NBQUEsRUFBSyxXQUFVLFdBQWY7Z0NBQ0k7QUFBQTtvQ0FBQSxFQUFJLFdBQVUsV0FBZDtvQ0FDSTtBQUFBO3dDQUFBO3dDQUFJLHFDQUFHLFdBQVUsVUFBYixHQUFKO3dDQUFnQztBQUFBOzRDQUFBOzRDQUFBO0FBQUEseUNBQWhDO3dDQUFBO3dDQUFpRDtBQUFBOzRDQUFBLEVBQU0sV0FBVSxXQUFoQjs0Q0FBQTtBQUFBO0FBQWpELHFDQURKO29DQUVJO0FBQUE7d0NBQUEsRUFBSSxlQUFZLFNBQWhCLEVBQTBCLE9BQU0saUJBQWhDO3dDQUFrRCxxQ0FBRyxXQUFVLFVBQWIsR0FBbEQ7d0NBQThFO0FBQUE7NENBQUE7NENBQUE7QUFBQSx5Q0FBOUU7d0NBQUE7d0NBQWtHO0FBQUE7NENBQUEsRUFBTSxXQUFVLFdBQWhCOzRDQUFBO0FBQUE7QUFBbEcscUNBRko7b0NBR0k7QUFBQTt3Q0FBQTt3Q0FBSSxxQ0FBRyxXQUFVLFdBQWIsR0FBSjt3Q0FBaUM7QUFBQTs0Q0FBQTs0Q0FBQTtBQUFBO0FBQWpDO0FBSEo7QUFESiw2QkFESjs0QkFRSTtBQUFBO2dDQUFBLEVBQUssV0FBVSxZQUFmO2dDQUNJO0FBQUE7b0NBQUEsRUFBSSxXQUFVLGlDQUFkO29DQUNJO0FBQUE7d0NBQUEsRUFBSSxXQUFVLE1BQWQ7d0NBQXFCO0FBQUE7NENBQUEsRUFBRyxNQUFLLEdBQVI7NENBQVkscUNBQUcsV0FBVSxjQUFiLEdBQVo7NENBQTRDO0FBQUE7Z0RBQUE7Z0RBQUE7QUFBQTtBQUE1QztBQUFyQixxQ0FESjtvQ0FFSTtBQUFBO3dDQUFBLEVBQUksV0FBVSxTQUFkO3dDQUF3QjtBQUFBOzRDQUFBLEVBQUcsTUFBSyxHQUFSOzRDQUFZLHFDQUFHLFdBQVUsWUFBYixHQUFaOzRDQUEwQztBQUFBO2dEQUFBO2dEQUFBO0FBQUE7QUFBMUM7QUFBeEIscUNBRko7b0NBR0k7QUFBQTt3Q0FBQSxFQUFJLFdBQVUseUJBQWQ7d0NBQXdDO0FBQUE7NENBQUEsRUFBRyxNQUFLLEdBQVIsRUFBWSxlQUFZLFVBQXhCOzRDQUFtQyxxQ0FBRyxXQUFVLGVBQWI7QUFBbkMseUNBQXhDO3dDQUNJO0FBQUE7NENBQUEsRUFBSSxXQUFVLG1DQUFkOzRDQUNJO0FBQUE7Z0RBQUE7Z0RBQUk7QUFBQTtvREFBQSxFQUFHLE1BQUssR0FBUjtvREFBQTtBQUFBO0FBQUosNkNBREo7NENBRUk7QUFBQTtnREFBQTtnREFBSTtBQUFBO29EQUFBLEVBQUcsTUFBSyxHQUFSO29EQUFBO0FBQUE7QUFBSiw2Q0FGSjs0Q0FHSTtBQUFBO2dEQUFBO2dEQUFJO0FBQUE7b0RBQUEsRUFBRyxNQUFLLEdBQVI7b0RBQUE7QUFBQTtBQUFKO0FBSEo7QUFESjtBQUhKO0FBREo7QUFSSjtBQURKO0FBckJKO0FBREosYUFGSjtBQXNERDs7Ozs7O0FBR0gsS0FBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsS0FBSyxZQUFMLEdBQW9CLEVBQXBCOztrQkFFZSxJOzs7Ozs7Ozs7OztBQ2hFZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNLFE7OztBQUVKLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnR0FDWCxLQURXOztBQUVmLGNBQUssS0FBTCxHQUFhO0FBQ1QsdUJBQVUsRUFERDtBQUVULHVCQUFXLHFCQUFNO0FBQ2Isa0JBQUUsSUFBRixDQUFPO0FBQ0gseUJBQUssaUJBQWlCLGlCQURuQjtBQUVILDhCQUFVLE1BRlA7QUFHSCwwQkFBSyxLQUhGO0FBSUgsMkJBQU8sS0FKSjtBQUtILDZCQUFTLFVBQVMsSUFBVCxFQUFlO0FBQ3BCLGdDQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsNkJBQUssUUFBTCxDQUFjLEVBQUMsV0FBVSxLQUFLLElBQUwsQ0FBVSxJQUFyQixFQUFkO0FBQ0gscUJBSFEsQ0FHUCxJQUhPLE9BTE47QUFTSCwyQkFBTyxVQUFTLEdBQVQsRUFBYyxNQUFkLEVBQXNCLEdBQXRCLEVBQTJCO0FBQzlCLGdDQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0gscUJBRk0sQ0FFTCxJQUZLO0FBVEosaUJBQVA7QUFhSDtBQWhCUSxTQUFiO0FBa0JBLGNBQUssS0FBTCxDQUFXLFNBQVg7QUFwQmU7QUFxQmxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0U7QUFBQTtnQkFBQSxFQUFLLFdBQVUsb0JBQWY7Z0JBQ0ssS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXFCO0FBQzNDLDJCQUFPLGdEQUFNLE1BQU0sSUFBWixFQUFrQixLQUFLLEtBQXZCLEdBQVA7QUFDSCxpQkFGQTtBQURMLGFBREY7QUFRSDs7Ozs7O0FBR0gsU0FBUyxTQUFULEdBQXFCLEVBQXJCO0FBQ0EsU0FBUyxZQUFULEdBQXdCLEVBQXhCOztrQkFFZSxROzs7QUM3Q2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL21haW4nO1xuXG5SZWFjdERPTS5yZW5kZXIoIDxNYWluLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2xsLWxpc3QnKSApOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYXJlYSBzaWRlYmFyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3NOYW1lPVwiZ2ctc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlBvcHVsYXJLZXl3b3JkczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cInRlcnJvcmlzbVwiIG5hbWU9XCJrZXl3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlcnJvcmlzbVwiPlRlcnJvcmlzbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cImVjby10b3VyaXNtXCIgbmFtZT1cImtleXdvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWNvLXRvdXJpc21cIj5FY28gVG91cmlzbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cImhpbGxhcnktY2xpbnRvblwiIG5hbWU9XCJrZXl3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpbGxhcnktY2xpbnRvblwiPkhpbGxhcnkgQ2xpbnRvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cImFydGlmaWNpYWxcIiBuYW1lPVwia2V5d29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhcnRpZmljaWFsXCI+QXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvLWlucHV0XCIgaWQ9XCJkb25hbGRcIiBuYW1lPVwia2V5d29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkb25hbGRcIj5Eb25hbGQgVHJ1bXA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvLWlucHV0XCIgaWQ9XCJjcmlja2V0XCIgbmFtZT1cImtleXdvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3JpY2tldFwiPkNyaWNrZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvLWlucHV0XCIgaWQ9XCJtaWRkbGVcIiBuYW1lPVwia2V5d29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaWRkbGVcIj5NaWRkbGUgRWFzdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cInVzYVwiIG5hbWU9XCJrZXl3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzYVwiPlVTQSBFbGVjdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPkRheXNMZWZ0PC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhZy1saXN0IGRheXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cImxlc3N0aGVub25lXCIgbmFtZT1cImRheXMtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsZXNzdGhlbm9uZVwiPiAxPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpby1pbnB1dFwiIGlkPVwib25ldG90d29cIiBuYW1lPVwiZGF5cy1sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9uZXRvdHdvXCI+MSAtIDI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBpZD1cIm9uZXRvZml2ZVwiIG5hbWU9XCJkYXlzLWxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwib25ldG9maXZlXCI+MiAtIDU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpby1pbnB1dFwiIGlkPVwibW9yZXRoYW41XCIgbmFtZT1cImRheXMtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb3JldGhhbjVcIj41KzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZVwiPlByaXplVHlwZTwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHByaXplLXR5cGUtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBkYXRhLXByaXplLXR5cGU9XCJtb25leVwiIGlkPVwicHJpemUtdHlwZS1tb25leVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml6ZS10eXBlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaXplLXR5cGUtbW9uZXlcIj5Nb25leTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW8taW5wdXRcIiBkYXRhLXByaXplLXR5cGU9XCJpdGVtXCIgaWQ9XCJwcml6ZS10eXBlLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpemUtdHlwZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml6ZS10eXBlLWl0ZW1cIj5JdGVtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvLWlucHV0XCIgZGF0YS1wcml6ZS10eXBlPVwibm8tcHJpemVcIiBpZD1cInByaXplLXR5cGUtbm8tcHJpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpemUtdHlwZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml6ZS10eXBlLW5vLXByaXplXCI+Tm9Qcml6ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcml6ZS10eXBlLW1pbi1tYXggZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+VG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlXCI+U3RhdHVzPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpby1pbnB1dFwiIGlkPVwib25nb2luZ1wiIG5hbWU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwib25nb2luZ1wiPm9uZ29pbmc8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidG4tYXMtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvLWlucHV0XCIgaWQ9XCJjb21wbGV0ZWRcIiBuYW1lPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbXBsZXRlZFwiPkNvbXBsZXRlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnRuLWFzLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImJ0bi1hcy1yYWRpby1pbnB1dFwiIGlkPVwidXBjb21pbmdcIiBuYW1lPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVwY29taW5nXCI+VXBjb21pbmc8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXIucHJvcFR5cGVzID0ge307XG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJ1xuaW1wb3J0IFBvbGxMaXN0IGZyb20gJy4vcG9sbExpc3QnXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtOFwiPlxuICAgICAgICAgICAgICAgIDxQb2xsTGlzdCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00XCI+XG4gICAgICAgICAgICAgICAgPEZpbHRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWFpbi5wcm9wVHlwZXMgPSB7fTtcbk1haW4uZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QgZXYtcG9sbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvYXR0YWNobWVudC5qcGdcIiBhbHQ9XCJJbWFnZVwiLz48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJnZy1wb2xsMlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxhIGhyZWY9XCIjXCI+e3RoaXMucHJvcHMucG9sbC50aXRsZX08L2E+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhZ1wiPjxhIGhyZWY9XCIjXCI+e3RoaXMucHJvcHMucG9sbC5jYXRlZ29yeVswXS5uYW1lfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PGEgaHJlZj1cIiNcIj5NYXR0IEhhY2tldDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHRpbWVcIj5NYXIgMjEsIDIwIG1pbiBhZ288L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvb2wtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZ2ctcG93ZXJcIj48L2k+PHNwYW4+MzIwPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJncmlkLWhpZGVcIj5Wb3Rlczwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJNYXIgMjYsIDEwOjAwQU1cIj48aSBjbGFzc05hbWU9XCJnZy1jbG9ja1wiPjwvaT48c3Bhbj41IGRheXM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImdyaWQtaGlkZVwiPmxlZnQ8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImdnLXJhdGluZ1wiPjwvaT48c3Bhbj4yMDwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b29sLWxpc3QgcG9zdC1pbnRlcmFjdGlvbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaWtlXCI+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJnZy1saWtlLWxpbmVcIj48L2k+PHNwYW4+MTAwPC9zcGFuPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzbGlrZVwiPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZ2ctZGlzbGlrZVwiPjwvaT48c3Bhbj4xMDwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRvdC1oLWRyb3Bkb3duXCI+PGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PGkgY2xhc3NOYW1lPVwiZ2ctZWxsaXBzaXMtdlwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Qm9va21hcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GbGFnPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RGlzYWJsZU5vdGlmaWNhdGlvbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICk7XG4gIH1cbn1cblxuUG9sbC5wcm9wVHlwZXMgPSB7fTtcblBvbGwuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFBvbGw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvbGwgZnJvbSAgJy4vcG9sbCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XG4vL2ltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbmNsYXNzIFBvbGxMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgcG9sbExpc3RzOltdLFxuICAgICAgICAgIGxvYWRQb2xsczogKCkgPT4ge1xuICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgdXJsOiBHR0xvZ2ljRW5kcG9pbnRzLnBvbGxQdWJsaWNMaXN0QVBJLFxuICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6J0dFVCcsXG4gICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihwb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9sbCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9sbExpc3RzOnBvbGwuZGF0YS5wb2xsfSlcbiAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5zdGF0ZS5sb2FkUG9sbHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9zdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb2xsTGlzdHMubWFwKGZ1bmN0aW9uKHBvbGwsIGluZGV4KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFBvbGwgcG9sbD17cG9sbH0ga2V5PXtpbmRleH0gLz47XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cblxuUG9sbExpc3QucHJvcFR5cGVzID0ge307XG5Qb2xsTGlzdC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgUG9sbExpc3Q7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gbXJGYWN0b3J5KG1vYngsIFJlYWN0LCBSZWFjdERPTSkge1xuICAgICAgICBpZiAoIW1vYngpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIHRoZSBNb2JYIHBhY2thZ2VcIilcbiAgICAgICAgaWYgKCFSZWFjdClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgUmVhY3QgdG8gYmUgYXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIHZhciBpc0RldnRvb2xzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFdlYWtNYXA8Tm9kZSwgT2JqZWN0PjtcbiAgICAgICAgdmFyIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeSA9IHR5cGVvZiBXZWFrTWFwICE9PSBcInVuZGVmaW5lZFwiID8gbmV3IFdlYWtNYXAoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHJlbmRlclJlcG9ydGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBmdW5jdGlvbiBmaW5kRE9NTm9kZShjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmIChSZWFjdERPTSlcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVwb3J0UmVuZGVyaW5nKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKG5vZGUpXG4gICAgICAgICAgICAgICAgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5LnNldChub2RlLCBjb21wb25lbnQpO1xuXG4gICAgICAgICAgICByZW5kZXJSZXBvcnRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBldmVudDogJ3JlbmRlcicsXG4gICAgICAgICAgICAgICAgcmVuZGVyVGltZTogY29tcG9uZW50Ll9fJG1vYlJlbmRlckVuZCAtIGNvbXBvbmVudC5fXyRtb2JSZW5kZXJTdGFydCxcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IERhdGUubm93KCkgLSBjb21wb25lbnQuX18kbW9iUmVuZGVyU3RhcnQsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVhY3RpdmVNaXhpbiA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgZnJpZW5kbHkgbmFtZSBmb3IgZGVidWdnaW5nXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hbWUgfHwgdGhpcy5uYW1lIHx8ICh0aGlzLmNvbnN0cnVjdG9yICYmICh0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHx8IFwiPGNvbXBvbmVudD5cIixcbiAgICAgICAgICAgICAgICAgICAgXCIjXCIsIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSAmJiB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX3Jvb3ROb2RlSUQsXG4gICAgICAgICAgICAgICAgICAgIFwiLnJlbmRlcigpXCJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgYmFzZVJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciByZWFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxSZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uID0gbmV3IG1vYnguUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVuZGVyaW5nUGVuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbXBvbmVudFdpbGxSZWFjdCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudFdpbGxSZWFjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUuY2FsbChzZWxmKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmVSZW5kZXIuJG1vYnggPSByZWFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXIgPSByZWFjdGl2ZVJlbmRlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0aXZlUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVhY3RpdmVSZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyaW5nO1xuICAgICAgICAgICAgICAgICAgICByZWFjdGlvbi50cmFjayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9fJG1vYlJlbmRlclN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmluZyA9IG1vYnguZXh0cmFzLmFsbG93U3RhdGVDaGFuZ2VzKGZhbHNlLCBiYXNlUmVuZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9fJG1vYlJlbmRlckVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyID0gaW5pdGlhbFJlbmRlcjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlci4kbW9ieCAmJiB0aGlzLnJlbmRlci4kbW9ieC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGV2dG9vbHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRCeU5vZGVSZWdpc3RlcnkuZGVsZXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclJlcG9ydGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICdkZXN0cm95JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0UmVuZGVyaW5nKHRoaXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEZXZ0b29sc0VuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFJlbmRlcmluZyh0aGlzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZiBjb250ZXh0IGNoYW5nZWQsIHJldHVybiB0cnVlLi4sIHNlZSAjMThcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiBwcm9wcyBvciBzdGF0ZSBkaWQgY2hhbmdlLCBidXQgYSByZW5kZXIgd2FzIHNjaGVkdWxlZCBhbHJlYWR5LCBubyBhZGRpdGlvbmFsIHJlbmRlciBuZWVkcyB0byBiZSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXIuJG1vYnggJiYgdGhpcy5yZW5kZXIuJG1vYnguaXNTY2hlZHVsZWQoKSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBvbiBhbnkgc3RhdGUgY2hhbmdlcyAoYXMgaXMgdGhlIGRlZmF1bHQpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IG5leHRTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbm90IGVxdWFsLCBpbnNwaXJlZCBieSBQdXJlUmVuZGVyTWl4aW5cbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhuZXh0UHJvcHMpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0ga2V5cy5sZW5ndGggLTE7IGkgPj0gMCwga2V5ID0ga2V5c1tpXTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG5leHRQcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgJiYgdHlwZW9mIG5ld1ZhbHVlID09PSBcIm9iamVjdFwiICYmICFtb2J4LmlzT2JzZXJ2YWJsZShuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgdGhlIG5ld1ZhbHVlIGlzIHN0aWxsIHRoZSBzYW1lIG9iamVjdCwgYnV0IHRoYXQgb2JqZWN0IGlzIG5vdCBvYnNlcnZhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICogZmFsbGJhY2sgdG8gdGhlIGRlZmF1bHQgUmVhY3QgYmVoYXZpb3I6IHVwZGF0ZSwgYmVjYXVzZSB0aGUgb2JqZWN0ICptaWdodCogaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgeW91IG5lZWQgdGhlIG5vbiBkZWZhdWx0IGJlaGF2aW9yLCBqdXN0IHVzZSB0aGUgUmVhY3QgcHVyZSByZW5kZXIgbWl4aW4sIGFzIHRoYXQgb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB3aWxsIHdvcmsgZmluZSB3aXRoIG1vYnggYXMgd2VsbCwgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgICogb2JzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhdGNoKHRhcmdldCwgZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGFyZ2V0W2Z1bmNOYW1lXTtcbiAgICAgICAgICAgIHZhciBtaXhpbkZ1bmMgPSByZWFjdGl2ZU1peGluW2Z1bmNOYW1lXTtcbiAgICAgICAgICAgIGlmICghYmFzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtmdW5jTmFtZV0gPSBtaXhpbkZ1bmM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtmdW5jTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBtaXhpbkZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlcihjb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgLy8gSWYgaXQgaXMgZnVuY3Rpb24gYnV0IGRvZXNuJ3Qgc2VlbSB0byBiZSBhIHJlYWN0IGNsYXNzIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgLy8gd3JhcCBpdCB0byBhIHJlYWN0IGNsYXNzIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgPT09IFwiZnVuY3Rpb25cIiAmJiAhY29tcG9uZW50Q2xhc3MucHJvdG90eXBlLnJlbmRlciAmJiAhY29tcG9uZW50Q2xhc3MuaXNSZWFjdENsYXNzICYmICFSZWFjdC5Db21wb25lbnQuaXNQcm90b3R5cGVPZihjb21wb25lbnRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIoUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogICAgIGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BUeXBlczogICAgICAgY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0VHlwZXM6ICAgIGNvbXBvbmVudENsYXNzLmNvbnRleHRUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudENsYXNzLmRlZmF1bHRQcm9wczsgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbXBvbmVudENsYXNzLmNhbGwodGhpcywgdGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTsgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnRDbGFzcylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcGFzcyBhIHZhbGlkIGNvbXBvbmVudCB0byAnb2JzZXJ2ZXInXCIpO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNvbXBvbmVudENsYXNzLnByb3RvdHlwZSB8fCBjb21wb25lbnRDbGFzcztcblxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50V2lsbE1vdW50XCIsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudERpZFVwZGF0ZVwiXG4gICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24oZnVuY05hbWUpIHtcbiAgICAgICAgICAgICAgICBwYXRjaCh0YXJnZXQsIGZ1bmNOYW1lKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0LnNob3VsZENvbXBvbmVudFVwZGF0ZSlcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gcmVhY3RpdmVNaXhpbi5zaG91bGRDb21wb25lbnRVcGRhdGU7XG4gICAgICAgICAgICBjb21wb25lbnRDbGFzcy5pc01vYlhSZWFjdE9ic2VydmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNrQ29tcG9uZW50cygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgV2Vha01hcCA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC1yZWFjdF0gdHJhY2tpbmcgY29tcG9uZW50cyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgICBpZiAoIWlzRGV2dG9vbHNFbmFibGVkKVxuICAgICAgICAgICAgICAgIGlzRGV2dG9vbHNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIH07XG4gICAgICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2IpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSBzZWxmLmxpc3RlbmVycy5pbmRleE9mKGNiKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBvYnNlcnZlcjogb2JzZXJ2ZXIsXG4gICAgICAgICAgICByZWFjdGl2ZUNvbXBvbmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYngtcmVhY3RdIGByZWFjdGl2ZUNvbXBvbmVudGAgaGFzIGJlZW4gcmVuYW1lZCB0byBgb2JzZXJ2ZXJgIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMS4xLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXJSZXBvcnRlcjogcmVuZGVyUmVwb3J0ZXIsXG4gICAgICAgICAgICBjb21wb25lbnRCeU5vZGVSZWdpc3Rlcnk6IGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeSxcbiAgICAgICAgICAgIHRyYWNrQ29tcG9uZW50czogdHJhY2tDb21wb25lbnRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFVNRFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtckZhY3RvcnkocmVxdWlyZSgnbW9ieCcpLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdyZWFjdC1kb20nKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKCdtb2J4LXJlYWN0JywgWydtb2J4JywgJ3JlYWN0JywgJ3JlYWN0LWRvbSddLCBtckZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9ieFJlYWN0ID0gbXJGYWN0b3J5KHRoaXNbJ21vYngnXSwgdGhpc1snUmVhY3QnXSwgdGhpc1snUmVhY3RET00nXSk7XG4gICAgfVxufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG5yZWdpc3Rlckdsb2JhbHMoKTtcbmV4cG9ydHMuZXh0cmFzID0ge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzOiBhbGxvd1N0YXRlQ2hhbmdlcyxcbiAgICBnZXRBdG9tOiBnZXRBdG9tLFxuICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lLFxuICAgIGdldERlcGVuZGVuY3lUcmVlOiBnZXREZXBlbmRlbmN5VHJlZSxcbiAgICBnZXRPYnNlcnZlclRyZWU6IGdldE9ic2VydmVyVHJlZSxcbiAgICBpc0NvbXB1dGluZ0Rlcml2YXRpb246IGlzQ29tcHV0aW5nRGVyaXZhdGlvbixcbiAgICBpc1NweUVuYWJsZWQ6IGlzU3B5RW5hYmxlZCxcbiAgICByZXNldEdsb2JhbFN0YXRlOiByZXNldEdsb2JhbFN0YXRlLFxuICAgIHNweVJlcG9ydDogc3B5UmVwb3J0LFxuICAgIHNweVJlcG9ydEVuZDogc3B5UmVwb3J0RW5kLFxuICAgIHNweVJlcG9ydFN0YXJ0OiBzcHlSZXBvcnRTdGFydCxcbiAgICB0cmFja1RyYW5zaXRpb25zOiB0cmFja1RyYW5zaXRpb25zXG59O1xuZXhwb3J0cy5fID0ge1xuICAgIGdldEFkbWluaXN0cmF0aW9uOiBnZXRBZG1pbmlzdHJhdGlvbixcbiAgICBxdWlja0RpZmY6IHF1aWNrRGlmZixcbiAgICByZXNldEdsb2JhbFN0YXRlOiByZXNldEdsb2JhbFN0YXRlXG59O1xuZnVuY3Rpb24gYXV0b3J1bih2aWV3LCBzY29wZSkge1xuICAgIGFzc2VydFVud3JhcHBlZCh2aWV3LCBcImF1dG9ydW4gbWV0aG9kcyBjYW5ub3QgaGF2ZSBtb2RpZmllcnNcIik7XG4gICAgaW52YXJpYW50KHR5cGVvZiB2aWV3ID09PSBcImZ1bmN0aW9uXCIsIFwiYXV0b3J1biBleHBlY3RzIGEgZnVuY3Rpb25cIik7XG4gICAgaW52YXJpYW50KHZpZXcubGVuZ3RoID09PSAwLCBcImF1dG9ydW4gZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIpO1xuICAgIGlmIChzY29wZSlcbiAgICAgICAgdmlldyA9IHZpZXcuYmluZChzY29wZSk7XG4gICAgdmFyIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKHZpZXcubmFtZSB8fCAoXCJBdXRvcnVuQFwiICsgZ2V0TmV4dElkKCkpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhY2sodmlldyk7XG4gICAgfSk7XG4gICAgcmVhY3Rpb24uc2NoZWR1bGUoKTtcbiAgICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXIoKTtcbn1cbmV4cG9ydHMuYXV0b3J1biA9IGF1dG9ydW47XG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgZWZmZWN0LCBzY29wZSkge1xuICAgIHZhciBkaXNwb3NlSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHNjb3BlKSkge1xuICAgICAgICAgICAgaWYgKGRpc3Bvc2VyKVxuICAgICAgICAgICAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGlzcG9zZUltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7IHJldHVybiBlZmZlY3QuY2FsbChzY29wZSk7IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGRpc3Bvc2VJbW1lZGlhdGVseSlcbiAgICAgICAgZGlzcG9zZXIoKTtcbiAgICByZXR1cm4gZGlzcG9zZXI7XG59XG5leHBvcnRzLndoZW4gPSB3aGVuO1xuZnVuY3Rpb24gYXV0b3J1blVudGlsKHByZWRpY2F0ZSwgZWZmZWN0LCBzY29wZSkge1xuICAgIGRlcHJlY2F0ZWQoXCJgYXV0b3J1blVudGlsYCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB3aGVuYC5cIik7XG4gICAgcmV0dXJuIHdoZW4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydHMuYXV0b3J1blVudGlsID0gYXV0b3J1blVudGlsO1xuZnVuY3Rpb24gYXV0b3J1bkFzeW5jKGZ1bmMsIGRlbGF5LCBzY29wZSkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMTsgfVxuICAgIGlmIChzY29wZSlcbiAgICAgICAgZnVuYyA9IGZ1bmMuYmluZChzY29wZSk7XG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIHIgPSBuZXcgUmVhY3Rpb24oZnVuYy5uYW1lIHx8IChcIkF1dG9ydW5Bc3luY0BcIiArIGdldE5leHRJZCgpKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghci5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgICAgICAgICByLnRyYWNrKGZ1bmMpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgci5zY2hlZHVsZSgpO1xuICAgIHJldHVybiByLmdldERpc3Bvc2VyKCk7XG59XG5leHBvcnRzLmF1dG9ydW5Bc3luYyA9IGF1dG9ydW5Bc3luYztcbmZ1bmN0aW9uIHJlYWN0aW9uKGV4cHJlc3Npb24sIGVmZmVjdCwgZmlyZUltbWVkaWF0ZWx5LCBkZWxheSwgc2NvcGUpIHtcbiAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHsgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7IH1cbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICB2YXIgbmFtZSA9IGV4cHJlc3Npb24ubmFtZSB8fCBlZmZlY3QubmFtZSB8fCAoXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpKTtcbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uYmluZChzY29wZSk7XG4gICAgICAgIGVmZmVjdCA9IGFjdGlvbihuYW1lLCBlZmZlY3QuYmluZChzY29wZSkpO1xuICAgIH1cbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICAgICAgaWYgKHIuaXNEaXNwb3NlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG5leHRWYWx1ZTtcbiAgICAgICAgci50cmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiBuZXh0VmFsdWUgPSBleHByZXNzaW9uKCk7IH0pO1xuICAgICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBlZmZlY3QobmV4dFZhbHVlKTtcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgciA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkZWxheSA8IDEpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHIuZ2V0RGlzcG9zZXIoKTtcbn1cbmV4cG9ydHMucmVhY3Rpb24gPSByZWFjdGlvbjtcbmZ1bmN0aW9uIGNvbXB1dGVkKHRhcmdldE9yRXhwciwga2V5T3JTY29wZSwgYmFzZURlc2NyaXB0b3IsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMgJiYgdHlwZW9mIHRhcmdldE9yRXhwciA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gY29tcHV0ZWRFeHByKHRhcmdldE9yRXhwciwga2V5T3JTY29wZSk7XG4gICAgcmV0dXJuIGNvbXB1dGVkRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5leHBvcnRzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG5mdW5jdGlvbiBjb21wdXRlZEV4cHIoZXhwciwgc2NvcGUpIHtcbiAgICB2YXIgX2EgPSBnZXRWYWx1ZU1vZGVGcm9tVmFsdWUoZXhwciwgVmFsdWVNb2RlLlJlY3Vyc2l2ZSksIG1vZGUgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICByZXR1cm4gbmV3IENvbXB1dGVkVmFsdWUodmFsdWUsIHNjb3BlLCBtb2RlID09PSBWYWx1ZU1vZGUuU3RydWN0dXJlLCB2YWx1ZS5uYW1lKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVkRGVjb3JhdG9yKHRhcmdldCwga2V5LCBiYXNlRGVzY3JpcHRvciwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBvcHRpb25zXzEgPSB0YXJnZXQ7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGJhc2VEZXNjcmlwdG9yKSB7IHJldHVybiBjb21wdXRlZERlY29yYXRvci5jYWxsKG51bGwsIHRhcmdldCwga2V5LCBiYXNlRGVzY3JpcHRvciwgb3B0aW9uc18xKTsgfTtcbiAgICB9XG4gICAgaW52YXJpYW50KGJhc2VEZXNjcmlwdG9yICYmIGJhc2VEZXNjcmlwdG9yLmhhc093blByb3BlcnR5KFwiZ2V0XCIpLCBcIkBjb21wdXRlZCBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlciBmdW5jdGlvbnMsIGxpa2U6ICdAY29tcHV0ZWQgZ2V0IG15UHJvcHMoKSB7IHJldHVybiAuLi47IH0nXCIpO1xuICAgIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKHRhcmdldCwga2V5KTtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuICAgIHZhciBnZXR0ZXIgPSBiYXNlRGVzY3JpcHRvci5nZXQ7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIsIFwiVGhlIEBvYnNlcnZhYmxlIGRlY29yYXRvciBjYW4gb25seSBiZSB1c2VkIG9uIG9iamVjdHNcIiwga2V5KTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGdldHRlciA9PT0gXCJmdW5jdGlvblwiLCBcIkBvYnNlcnZhYmxlIGV4cGVjdHMgYSBnZXR0ZXIgZnVuY3Rpb24gaWYgdXNlZCBvbiBhIHByb3BlcnR5LlwiLCBrZXkpO1xuICAgIGludmFyaWFudCghYmFzZURlc2NyaXB0b3Iuc2V0LCBcIkBvYnNlcnZhYmxlIHByb3BlcnRpZXMgY2Fubm90IGhhdmUgYSBzZXR0ZXIuXCIsIGtleSk7XG4gICAgaW52YXJpYW50KGdldHRlci5sZW5ndGggPT09IDAsIFwiQG9ic2VydmFibGUgZ2V0dGVyIGZ1bmN0aW9ucyBzaG91bGQgbm90IHRha2UgYXJndW1lbnRzLlwiLCBrZXkpO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0T2JzZXJ2YWJsZU9iamVjdFByb3BlcnR5KGFzT2JzZXJ2YWJsZU9iamVjdCh0aGlzLCB1bmRlZmluZWQsIFZhbHVlTW9kZS5SZWN1cnNpdmUpLCBrZXksIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cnVjdHVyZSA9PT0gdHJ1ZSA/IGFzU3RydWN0dXJlKGdldHRlcikgOiBnZXR0ZXIpO1xuICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgIH07XG4gICAgZGVzY3JpcHRvci5zZXQgPSB0aHJvd2luZ0NvbXB1dGVkVmFsdWVTZXR0ZXI7XG4gICAgaWYgKCFiYXNlRGVzY3JpcHRvcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuZnVuY3Rpb24gdGhyb3dpbmdDb21wdXRlZFZhbHVlU2V0dGVyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltDb21wdXRlZFZhbHVlXSBJdCBpcyBub3QgYWxsb3dlZCB0byBhc3NpZ24gbmV3IHZhbHVlcyB0byBjb21wdXRlZCBwcm9wZXJ0aWVzLlwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyLCBvbkNsZWFudXApIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHRyYW5zZm9ybWVyID09PSBcImZ1bmN0aW9uXCIgJiYgdHJhbnNmb3JtZXIubGVuZ3RoID09PSAxLCBcImNyZWF0ZVRyYW5zZm9ybWVyIGV4cGVjdHMgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIGFyZ3VtZW50XCIpO1xuICAgIHZhciBvYmplY3RDYWNoZSA9IHt9O1xuICAgIHZhciByZXNldElkID0gZ2xvYmFsU3RhdGUucmVzZXRJZDtcbiAgICB2YXIgVHJhbnNmb3JtZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVHJhbnNmb3JtZXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRyYW5zZm9ybWVyKHNvdXJjZUlkZW50aWZpZXIsIHNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJhbnNmb3JtZXIoc291cmNlT2JqZWN0KTsgfSwgbnVsbCwgZmFsc2UsIFwiVHJhbnNmb3JtZXItXCIgKyB0cmFuc2Zvcm1lci5uYW1lICsgXCItXCIgKyBzb3VyY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlSWRlbnRpZmllciA9IHNvdXJjZUlkZW50aWZpZXI7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZU9iamVjdCA9IHNvdXJjZU9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBUcmFuc2Zvcm1lci5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgZGVsZXRlIG9iamVjdENhY2hlW3RoaXMuc291cmNlSWRlbnRpZmllcl07XG4gICAgICAgICAgICBpZiAob25DbGVhbnVwKVxuICAgICAgICAgICAgICAgIG9uQ2xlYW51cChsYXN0VmFsdWUsIHRoaXMuc291cmNlT2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybWVyO1xuICAgIH0oQ29tcHV0ZWRWYWx1ZSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNldElkICE9PSBnbG9iYWxTdGF0ZS5yZXNldElkKSB7XG4gICAgICAgICAgICBvYmplY3RDYWNoZSA9IHt9O1xuICAgICAgICAgICAgcmVzZXRJZCA9IGdsb2JhbFN0YXRlLnJlc2V0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBnZXRNZW1vaXphdGlvbklkKG9iamVjdCk7XG4gICAgICAgIHZhciByZWFjdGl2ZVRyYW5zZm9ybWVyID0gb2JqZWN0Q2FjaGVbaWRlbnRpZmllcl07XG4gICAgICAgIGlmIChyZWFjdGl2ZVRyYW5zZm9ybWVyKVxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0aXZlVHJhbnNmb3JtZXIuZ2V0KCk7XG4gICAgICAgIHJlYWN0aXZlVHJhbnNmb3JtZXIgPSBvYmplY3RDYWNoZVtpZGVudGlmaWVyXSA9IG5ldyBUcmFuc2Zvcm1lcihpZGVudGlmaWVyLCBvYmplY3QpO1xuICAgICAgICByZXR1cm4gcmVhY3RpdmVUcmFuc2Zvcm1lci5nZXQoKTtcbiAgICB9O1xufVxuZXhwb3J0cy5jcmVhdGVUcmFuc2Zvcm1lciA9IGNyZWF0ZVRyYW5zZm9ybWVyO1xuZnVuY3Rpb24gZ2V0TWVtb2l6YXRpb25JZChvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSB0cmFuc2Zvcm0gZXhwZWN0ZWQgc29tZSBraW5kIG9mIG9iamVjdCwgZ290OiBcIiArIG9iamVjdCk7XG4gICAgdmFyIHRpZCA9IG9iamVjdC4kdHJhbnNmb3JtSWQ7XG4gICAgaWYgKHRpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRpZCA9IGdldE5leHRJZCgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBcIiR0cmFuc2Zvcm1JZFwiLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHRpZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRpZDtcbn1cbmZ1bmN0aW9uIGV4cHIoZXhwciwgc2NvcGUpIHtcbiAgICBpZiAoIWlzQ29tcHV0aW5nRGVyaXZhdGlvbigpKVxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieC5leHByXSAnZXhwcicgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnNpZGUgb3RoZXIgcmVhY3RpdmUgZnVuY3Rpb25zLlwiKTtcbiAgICByZXR1cm4gY29tcHV0ZWQoZXhwciwgc2NvcGUpLmdldCgpO1xufVxuZXhwb3J0cy5leHByID0gZXhwcjtcbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0KSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwcm9wZXJ0aWVzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA+PSAyLCBcImV4dGVuZE9ic2VydmFibGUgZXhwZWN0ZWQgMiBvciBtb3JlIGFyZ3VtZW50c1wiKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiwgXCJleHRlbmRPYnNlcnZhYmxlIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xuICAgIGludmFyaWFudCghKHRhcmdldCBpbnN0YW5jZW9mIE9ic2VydmFibGVNYXApLCBcImV4dGVuZE9ic2VydmFibGUgc2hvdWxkIG5vdCBiZSB1c2VkIG9uIG1hcHMsIHVzZSBtYXAubWVyZ2UgaW5zdGVhZFwiKTtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BTZXQpIHtcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBwcm9wU2V0ID09PSBcIm9iamVjdFwiLCBcImFsbCBhcmd1bWVudHMgb2YgZXh0ZW5kT2JzZXJ2YWJsZSBzaG91bGQgYmUgb2JqZWN0c1wiKTtcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcih0YXJnZXQsIHByb3BTZXQsIFZhbHVlTW9kZS5SZWN1cnNpdmUsIG51bGwpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnRzLmV4dGVuZE9ic2VydmFibGUgPSBleHRlbmRPYnNlcnZhYmxlO1xuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcih0YXJnZXQsIHByb3BlcnRpZXMsIG1vZGUsIG5hbWUpIHtcbiAgICB2YXIgYWRtID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSwgbW9kZSk7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHByb3BlcnRpZXMgJiYgIWlzUHJvcGVydHlDb25maWd1cmFibGUodGFyZ2V0LCBrZXkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgc2V0T2JzZXJ2YWJsZU9iamVjdFByb3BlcnR5KGFkbSwga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBub2RlVG9EZXBlbmRlbmN5VHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvRGVwZW5kZW5jeVRyZWUobm9kZSkge1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZVxuICAgIH07XG4gICAgaWYgKG5vZGUub2JzZXJ2aW5nICYmIG5vZGUub2JzZXJ2aW5nLmxlbmd0aClcbiAgICAgICAgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZykubWFwKG5vZGVUb0RlcGVuZGVuY3lUcmVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBub2RlVG9PYnNlcnZlclRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb09ic2VydmVyVHJlZShub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lXG4gICAgfTtcbiAgICBpZiAobm9kZS5vYnNlcnZlcnMgJiYgbm9kZS5vYnNlcnZlcnMubGVuZ3RoKVxuICAgICAgICByZXN1bHQub2JzZXJ2ZXJzID0gdW5pcXVlKG5vZGUub2JzZXJ2ZXJzKS5tYXAobm9kZVRvT2JzZXJ2ZXJUcmVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5leHBvcnRzLmludGVyY2VwdCA9IGludGVyY2VwdDtcbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh0aGluZykgJiYgIWlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICAgICAgZGVwcmVjYXRlZChcIlBhc3NpbmcgcGxhaW4gb2JqZWN0cyB0byBpbnRlcmNlcHQgLyBvYnNlcnZlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAzLjBcIik7XG4gICAgICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbihvYnNlcnZhYmxlKHRoaW5nKSkuaW50ZXJjZXB0KGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcikge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHRoaW5nKSAmJiAhaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgICAgICBkZXByZWNhdGVkKFwiUGFzc2luZyBwbGFpbiBvYmplY3RzIHRvIGludGVyY2VwdCAvIG9ic2VydmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDMuMFwiKTtcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZSh0aGluZywge1xuICAgICAgICAgICAgcHJvcGVydHk6IHRoaW5nW3Byb3BlcnR5XVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9ic2VydmFibGVNYXAgfHwgdmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlQXJyYXkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5pc09ic2VydmFibGVdIGlzT2JzZXJ2YWJsZShvYmplY3QsIHByb3BlcnR5TmFtZSkgaXMgbm90IHN1cHBvcnRlZCBmb3IgYXJyYXlzIGFuZCBtYXBzLiBVc2UgbWFwLmhhcyBvciBhcnJheS5sZW5ndGggaW5zdGVhZC5cIik7XG4gICAgICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBvID0gdmFsdWUuJG1vYng7XG4gICAgICAgICAgICByZXR1cm4gby52YWx1ZXMgJiYgISFvLnZhbHVlc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISF2YWx1ZS4kbW9ieCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEF0b20gfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWFjdGlvbiB8fCB2YWx1ZSBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWU7XG59XG5leHBvcnRzLmlzT2JzZXJ2YWJsZSA9IGlzT2JzZXJ2YWJsZTtcbmZ1bmN0aW9uIG9ic2VydmFibGVEZWNvcmF0b3IodGFyZ2V0LCBrZXksIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgaW52YXJpYW50KGFyZ3VtZW50cy5sZW5ndGggPj0gMiAmJiBhcmd1bWVudHMubGVuZ3RoIDw9IDMsIFwiSWxsZWdhbCBkZWNvcmF0b3IgY29uZmlnXCIsIGtleSk7XG4gICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChiYXNlRGVzY3JpcHRvciAmJiBiYXNlRGVzY3JpcHRvci5oYXNPd25Qcm9wZXJ0eShcImdldFwiKSkge1xuICAgICAgICBkZXByZWNhdGVkKFwiVXNpbmcgQG9ic2VydmFibGUgb24gY29tcHV0ZWQgdmFsdWVzIGlzIGRlcHJlY2F0ZWQuIFVzZSBAY29tcHV0ZWQgaW5zdGVhZC5cIik7XG4gICAgICAgIHJldHVybiBjb21wdXRlZC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuICAgIGludmFyaWFudCh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiLCBcIlRoZSBAb2JzZXJ2YWJsZSBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYmplY3RzXCIsIGtleSk7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBiYXNlVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChiYXNlRGVzY3JpcHRvciAmJiBiYXNlRGVzY3JpcHRvci5pbml0aWFsaXplcikge1xuICAgICAgICAgICAgYmFzZVZhbHVlID0gYmFzZURlc2NyaXB0b3IuaW5pdGlhbGl6ZXIoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZVZhbHVlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgYmFzZVZhbHVlID0gYXNSZWZlcmVuY2UoYmFzZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlcyh0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRPYnNlcnZhYmxlT2JqZWN0UHJvcGVydHkoYXNPYnNlcnZhYmxlT2JqZWN0KF90aGlzLCB1bmRlZmluZWQsIFZhbHVlTW9kZS5SZWN1cnNpdmUpLCBrZXksIGJhc2VWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgIH07XG4gICAgZGVzY3JpcHRvci5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc2V0T2JzZXJ2YWJsZU9iamVjdFByb3BlcnR5KGFzT2JzZXJ2YWJsZU9iamVjdCh0aGlzLCB1bmRlZmluZWQsIFZhbHVlTW9kZS5SZWN1cnNpdmUpLCBrZXksIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gYXNSZWZlcmVuY2UodmFsdWUpIDogdmFsdWUpO1xuICAgIH07XG4gICAgaWYgKCFiYXNlRGVzY3JpcHRvcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgfVxufVxuZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBrZXlPclNjb3BlKSB7XG4gICAgaWYgKHYgPT09IHZvaWQgMCkgeyB2ID0gdW5kZWZpbmVkOyB9XG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaW52YXJpYW50KGFyZ3VtZW50cy5sZW5ndGggPCAzLCBcIm9ic2VydmFibGUgZXhwZWN0cyB6ZXJvLCBvbmUgb3IgdHdvIGFyZ3VtZW50c1wiKTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICB2YXIgX2EgPSBnZXRWYWx1ZU1vZGVGcm9tVmFsdWUodiwgVmFsdWVNb2RlLlJlY3Vyc2l2ZSksIG1vZGUgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICB2YXIgc291cmNlVHlwZSA9IG1vZGUgPT09IFZhbHVlTW9kZS5SZWZlcmVuY2UgPyBWYWx1ZVR5cGUuUmVmZXJlbmNlIDogZ2V0VHlwZU9mVmFsdWUodmFsdWUpO1xuICAgIHN3aXRjaCAoc291cmNlVHlwZSkge1xuICAgICAgICBjYXNlIFZhbHVlVHlwZS5BcnJheTpcbiAgICAgICAgY2FzZSBWYWx1ZVR5cGUuUGxhaW5PYmplY3Q6XG4gICAgICAgICAgICByZXR1cm4gbWFrZUNoaWxkT2JzZXJ2YWJsZSh2YWx1ZSwgbW9kZSk7XG4gICAgICAgIGNhc2UgVmFsdWVUeXBlLlJlZmVyZW5jZTpcbiAgICAgICAgY2FzZSBWYWx1ZVR5cGUuQ29tcGxleE9iamVjdDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBtb2RlKTtcbiAgICAgICAgY2FzZSBWYWx1ZVR5cGUuQ29tcGxleEZ1bmN0aW9uOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngub2JzZXJ2YWJsZV0gVG8gYmUgYWJsZSB0byBtYWtlIGEgZnVuY3Rpb24gcmVhY3RpdmUgaXQgc2hvdWxkIG5vdCBoYXZlIGFyZ3VtZW50cy4gSWYgeW91IG5lZWQgYW4gb2JzZXJ2YWJsZSByZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiwgdXNlIGBvYnNlcnZhYmxlKGFzUmVmZXJlbmNlKGYpKWBcIik7XG4gICAgICAgIGNhc2UgVmFsdWVUeXBlLlZpZXdGdW5jdGlvbjpcbiAgICAgICAgICAgIGRlcHJlY2F0ZWQoXCJVc2UgYGNvbXB1dGVkKGV4cHIpYCBpbnN0ZWFkIG9mIGBvYnNlcnZhYmxlKGV4cHIpYFwiKTtcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlZCh2LCBrZXlPclNjb3BlKTtcbiAgICB9XG4gICAgaW52YXJpYW50KGZhbHNlLCBcIklsbGVnYWwgU3RhdGVcIik7XG59XG5leHBvcnRzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xudmFyIFZhbHVlVHlwZTtcbihmdW5jdGlvbiAoVmFsdWVUeXBlKSB7XG4gICAgVmFsdWVUeXBlW1ZhbHVlVHlwZVtcIlJlZmVyZW5jZVwiXSA9IDBdID0gXCJSZWZlcmVuY2VcIjtcbiAgICBWYWx1ZVR5cGVbVmFsdWVUeXBlW1wiUGxhaW5PYmplY3RcIl0gPSAxXSA9IFwiUGxhaW5PYmplY3RcIjtcbiAgICBWYWx1ZVR5cGVbVmFsdWVUeXBlW1wiQ29tcGxleE9iamVjdFwiXSA9IDJdID0gXCJDb21wbGV4T2JqZWN0XCI7XG4gICAgVmFsdWVUeXBlW1ZhbHVlVHlwZVtcIkFycmF5XCJdID0gM10gPSBcIkFycmF5XCI7XG4gICAgVmFsdWVUeXBlW1ZhbHVlVHlwZVtcIlZpZXdGdW5jdGlvblwiXSA9IDRdID0gXCJWaWV3RnVuY3Rpb25cIjtcbiAgICBWYWx1ZVR5cGVbVmFsdWVUeXBlW1wiQ29tcGxleEZ1bmN0aW9uXCJdID0gNV0gPSBcIkNvbXBsZXhGdW5jdGlvblwiO1xufSkoVmFsdWVUeXBlIHx8IChWYWx1ZVR5cGUgPSB7fSkpO1xuZnVuY3Rpb24gZ2V0VHlwZU9mVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIFZhbHVlVHlwZS5SZWZlcmVuY2U7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gVmFsdWVUeXBlLkNvbXBsZXhGdW5jdGlvbiA6IFZhbHVlVHlwZS5WaWV3RnVuY3Rpb247XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZUFycmF5KVxuICAgICAgICByZXR1cm4gVmFsdWVUeXBlLkFycmF5O1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IFZhbHVlVHlwZS5QbGFpbk9iamVjdCA6IFZhbHVlVHlwZS5Db21wbGV4T2JqZWN0O1xuICAgIHJldHVybiBWYWx1ZVR5cGUuUmVmZXJlbmNlO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAodHlwZW9mIGNiT3JGaXJlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5leHBvcnRzLm9ic2VydmUgPSBvYnNlcnZlO1xuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh0aGluZykgJiYgIWlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICAgICAgZGVwcmVjYXRlZChcIlBhc3NpbmcgcGxhaW4gb2JqZWN0cyB0byBpbnRlcmNlcHQgLyBvYnNlcnZlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAzLjBcIik7XG4gICAgICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbihvYnNlcnZhYmxlKHRoaW5nKSkub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh0aGluZykgJiYgIWlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICAgICAgZGVwcmVjYXRlZChcIlBhc3NpbmcgcGxhaW4gb2JqZWN0cyB0byBpbnRlcmNlcHQgLyBvYnNlcnZlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAzLjBcIik7XG4gICAgICAgIGV4dGVuZE9ic2VydmFibGUodGhpbmcsIHtcbiAgICAgICAgICAgIHByb3BlcnR5OiB0aGluZ1twcm9wZXJ0eV1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgZGV0ZWN0Q3ljbGVzLCBfX2FscmVhZHlTZWVuKSB7XG4gICAgaWYgKGRldGVjdEN5Y2xlcyA9PT0gdm9pZCAwKSB7IGRldGVjdEN5Y2xlcyA9IHRydWU7IH1cbiAgICBpZiAoX19hbHJlYWR5U2VlbiA9PT0gdm9pZCAwKSB7IF9fYWxyZWFkeVNlZW4gPSBudWxsOyB9XG4gICAgZnVuY3Rpb24gY2FjaGUodmFsdWUpIHtcbiAgICAgICAgaWYgKGRldGVjdEN5Y2xlcylcbiAgICAgICAgICAgIF9fYWxyZWFkeVNlZW4ucHVzaChbc291cmNlLCB2YWx1ZV0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChkZXRlY3RDeWNsZXMgJiYgX19hbHJlYWR5U2VlbiA9PT0gbnVsbClcbiAgICAgICAgX19hbHJlYWR5U2VlbiA9IFtdO1xuICAgIGlmIChkZXRlY3RDeWNsZXMgJiYgc291cmNlICE9PSBudWxsICYmIHR5cGVvZiBzb3VyY2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBfX2FscmVhZHlTZWVuLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIGlmIChfX2FscmVhZHlTZWVuW2ldWzBdID09PSBzb3VyY2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYWxyZWFkeVNlZW5baV1bMV07XG4gICAgfVxuICAgIGlmICghc291cmNlKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkgfHwgc291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZUFycmF5KSB7XG4gICAgICAgIHZhciByZXMgPSBjYWNoZShbXSk7XG4gICAgICAgIHZhciB0b0FkZCA9IHNvdXJjZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0b0pTKHZhbHVlLCBkZXRlY3RDeWNsZXMsIF9fYWxyZWFkeVNlZW4pOyB9KTtcbiAgICAgICAgcmVzLmxlbmd0aCA9IHRvQWRkLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b0FkZC5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICByZXNbaV0gPSB0b0FkZFtpXTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGVNYXApIHtcbiAgICAgICAgdmFyIHJlc18xID0gY2FjaGUoe30pO1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gcmVzXzFba2V5XSA9IHRvSlModmFsdWUsIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbik7IH0pO1xuICAgICAgICByZXR1cm4gcmVzXzE7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgICB2YXIgcmVzID0gY2FjaGUoe30pO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKVxuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJlc1trZXldID0gdG9KUyhzb3VyY2Vba2V5XSwgZGV0ZWN0Q3ljbGVzLCBfX2FscmVhZHlTZWVuKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZShzb3VyY2UpICYmIHNvdXJjZS4kbW9ieCBpbnN0YW5jZW9mIE9ic2VydmFibGVWYWx1ZSlcbiAgICAgICAgcmV0dXJuIHRvSlMoc291cmNlKCksIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbik7XG4gICAgcmV0dXJuIHNvdXJjZTtcbn1cbmV4cG9ydHMudG9KUyA9IHRvSlM7XG5mdW5jdGlvbiB0b0pTT04oc291cmNlLCBkZXRlY3RDeWNsZXMsIF9fYWxyZWFkeVNlZW4pIHtcbiAgICBpZiAoZGV0ZWN0Q3ljbGVzID09PSB2b2lkIDApIHsgZGV0ZWN0Q3ljbGVzID0gdHJ1ZTsgfVxuICAgIGlmIChfX2FscmVhZHlTZWVuID09PSB2b2lkIDApIHsgX19hbHJlYWR5U2VlbiA9IG51bGw7IH1cbiAgICBkZXByZWNhdGVkKFwidG9KU09OIGlzIGRlcHJlY2F0ZWQuIFVzZSB0b0pTIGluc3RlYWRcIik7XG4gICAgcmV0dXJuIHRvSlMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydHMudG9KU09OID0gdG9KU09OO1xuZnVuY3Rpb24gYWN0aW9uKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkltcGxlbWVudGF0aW9uKGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIiwgYXJnMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikgeyByZXR1cm4gYWN0aW9uRGVjb3JhdG9yKGFyZzEsIHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTsgfTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkltcGxlbWVudGF0aW9uKGFyZzEsIGFyZzIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25EZWNvcmF0b3IoYXJnMiwgYXJnMSwgYXJnMiwgdW5kZWZpbmVkKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkRlY29yYXRvcihhcmcyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgXCJJbnZhbGlkIGFyZ3VtZW50cyBmb3IgKEApYWN0aW9uLCBwbGVhc2UgcHJvdmlkZSBhIGZ1bmN0aW9uLCBuYW1lIGFuZCBmdW5jdGlvbiBvciB1c2UgaXQgYXMgZGVjb3JhdG9yIG9uIGEgY2xhc3MgaW5zdGFuY2UgbWV0aG9kXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuYWN0aW9uID0gYWN0aW9uO1xuZnVuY3Rpb24gYWN0aW9uRGVjb3JhdG9yKG5hbWUsIHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0eXBlc2NyaXB0QWN0aW9uVmFsdWVEZWNvcmF0b3IobmFtZSwgdGFyZ2V0LCBrZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYmFiZWxBY3Rpb25WYWx1ZURlY29yYXRvcihuYW1lLCB0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHZhciBiYXNlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gYWN0aW9uSW1wbGVtZW50YXRpb24obmFtZSwgYmFzZSk7XG59XG5mdW5jdGlvbiBiYWJlbEFjdGlvblZhbHVlRGVjb3JhdG9yKG5hbWUsIHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHYgPSBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIiwgXCJCYWJlbCBAYWN0aW9uIGRlY29yYXRvciBleHBlY3RzIHRoZSBmaWVsZCAnXCIgKyBwcm9wICsgXCIgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgdmFyIGltcGxlbWVudGF0aW9uID0gYWN0aW9uKG5hbWUsIHYpO1xuICAgICAgICAgICAgYWRkQm91bmRBY3Rpb24odGhpcywgcHJvcCwgaW1wbGVtZW50YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIGltcGxlbWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgXCJCYWJlbCBAYWN0aW9uIGRlY29yYXRvcjogZmllbGQgJ1wiICsgcHJvcCArIFwiJyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gdHlwZXNjcmlwdEFjdGlvblZhbHVlRGVjb3JhdG9yKG5hbWUsIHRhcmdldCwgcHJvcCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVHlwZVNjcmlwdCBAYWN0aW9uIGRlY29yYXRvcjogZmllbGQgJ1wiICsgcHJvcCArIFwiJyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdiA9PT0gXCJmdW5jdGlvblwiLCBcIlR5cGVTY3JpcHQgQGFjdGlvbiBkZWNvcmF0b3IgZXhwZWN0cyB0aGUgZmllbGQgJ1wiICsgcHJvcCArIFwiIHRvIGJlIGluaXRpYWxpemVkIHdpdGggYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIGFkZEJvdW5kQWN0aW9uKHRoaXMsIHByb3AsIGFjdGlvbihuYW1lLCB2KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEJvdW5kQWN0aW9uKHRhcmdldCwgcHJvcCwgaW1wbGVtZW50YXRpb24pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBpbXBsZW1lbnRhdGlvblxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWN0aW9uSW1wbGVtZW50YXRpb24oYWN0aW9uTmFtZSwgZm4pIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIsIFwiYGFjdGlvbmAgY2FuIG9ubHkgYmUgaW52b2tlZCBvbiBmdW5jdGlvbnNcIik7XG4gICAgaW52YXJpYW50KHR5cGVvZiBhY3Rpb25OYW1lID09PSBcInN0cmluZ1wiICYmIGFjdGlvbk5hbWUubGVuZ3RoID4gMCwgXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVXcmFwcGVkKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5mdW5jdGlvbiBleGVjdXRlV3JhcHBlZChhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgZHMgPSBnbG9iYWxTdGF0ZS5kZXJpdmF0aW9uU3RhY2s7XG4gICAgaW52YXJpYW50KCEoZHNbZHMubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSwgXCJDb21wdXRlZCB2YWx1ZXMgb3IgdHJhbnNmb3JtZXJzIHNob3VsZCBub3QgaW52b2tlIGFjdGlvbnMgb3IgdHJpZ2dlciBvdGhlciBzaWRlIGVmZmVjdHNcIik7XG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBzdGFydFRpbWU7XG4gICAgaWYgKG5vdGlmeVNweSkge1xuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgZmxhdHRlbmRBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJncy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICBmbGF0dGVuZEFyZ3MucHVzaChhcmdzW2ldKTtcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBmbjogZm4sXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlLFxuICAgICAgICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZEFyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciByZXMgPSB1bnRyYWNrZWQoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxsb3dTdGF0ZUNoYW5nZXModHJ1ZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpOyB9KTsgfSwgdW5kZWZpbmVkLCBmYWxzZSk7IH0pO1xuICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWUgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIHVzZVN0cmljdChzdHJpY3QpIHtcbiAgICBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuZGVyaXZhdGlvblN0YWNrLmxlbmd0aCA9PT0gMCwgXCJJdCBpcyBub3QgYWxsb3dlZCB0byBzZXQgYHVzZVN0cmljdGAgd2hlbiBhIGRlcml2YXRpb24gaXMgcnVubmluZ1wiKTtcbiAgICBnbG9iYWxTdGF0ZS5zdHJpY3RNb2RlID0gc3RyaWN0O1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gIXN0cmljdDtcbn1cbmV4cG9ydHMudXNlU3RyaWN0ID0gdXNlU3RyaWN0O1xuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXMoYWxsb3dTdGF0ZUNoYW5nZXMsIGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzO1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXM7XG4gICAgdmFyIHJlcyA9IGZ1bmMoKTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIHByb3BhZ2F0ZUF0b21SZWFkeShhdG9tKSB7XG4gICAgaW52YXJpYW50KGF0b20uaXNEaXJ0eSwgXCJhdG9tIG5vdCBkaXJ0eVwiKTtcbiAgICBhdG9tLmlzRGlydHkgPSBmYWxzZTtcbiAgICBwcm9wYWdhdGVSZWFkaW5lc3MoYXRvbSwgdHJ1ZSk7XG59XG52YXIgQXRvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXRvbShuYW1lLCBvbkJlY29tZU9ic2VydmVkLCBvbkJlY29tZVVub2JzZXJ2ZWQpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWQgPT09IHZvaWQgMCkgeyBvbkJlY29tZU9ic2VydmVkID0gbm9vcDsgfVxuICAgICAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkID09PSB2b2lkIDApIHsgb25CZWNvbWVVbm9ic2VydmVkID0gbm9vcDsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWQgPSBvbkJlY29tZU9ic2VydmVkO1xuICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZCA9IG9uQmVjb21lVW5vYnNlcnZlZDtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhbGVPYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB9XG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgIH07XG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0U3RhbGUoKTtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0UmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0U3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0RpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgcHJvcGFnYXRlU3RhbGVuZXNzKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBdG9tLnByb3RvdHlwZS5yZXBvcnRSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW52YXJpYW50KHRoaXMuaXNEaXJ0eSwgXCJhdG9tIG5vdCBkaXJ0eVwiKTtcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmluVHJhbnNhY3Rpb24gPiAwKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuY2hhbmdlZEF0b21zLnB1c2godGhpcyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvcGFnYXRlQXRvbVJlYWR5KHRoaXMpO1xuICAgICAgICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEF0b20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEF0b207XG59KCkpO1xuZXhwb3J0cy5BdG9tID0gQXRvbTtcbnZhciBDb21wdXRlZFZhbHVlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21wdXRlZFZhbHVlKGRlcml2YXRpb24sIHNjb3BlLCBjb21wYXJlU3RydWN0dXJhbCwgbmFtZSkge1xuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY29tcGFyZVN0cnVjdHVyYWwgPSBjb21wYXJlU3RydWN0dXJhbDtcbiAgICAgICAgdGhpcy5pc0xhenkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhbGVPYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZpbmcgPSBbXTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5Q2hhbmdlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY3lTdGFsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIkNvbXB1dGVkVmFsdWVAXCIgKyBnZXROZXh0SWQoKTtcbiAgICB9XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IHRydWU7XG4gICAgICAgIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcztcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGUpO1xuICAgICAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXZBbGxvd1N0YXRlQ2hhbmdlcztcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgO1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5vYnNlcnZpbmcubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIodGhpcy5vYnNlcnZpbmdbaV0sIHRoaXMpO1xuICAgICAgICB0aGlzLm9ic2VydmluZyA9IFtdO1xuICAgICAgICB0aGlzLmlzTGF6eSA9IHRydWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkRlcGVuZGVuY2llc1JlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2hhbmdlZCA9IHRoaXMudHJhY2tBbmRDb21wdXRlKCk7XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnZhcmlhbnQoIXRoaXMuaXNDb21wdXRpbmcsIFwiQ3ljbGUgZGV0ZWN0ZWRcIiwgdGhpcy5kZXJpdmF0aW9uKTtcbiAgICAgICAgcmVwb3J0T2JzZXJ2ZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmRlcGVuZGVuY3lTdGFsZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVlaygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTGF6eSkge1xuICAgICAgICAgICAgaWYgKGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xhenkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrQW5kQ29tcHV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVlaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW0NvbXB1dGVkVmFsdWUgJ1wiICsgbmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXB1dGVcIixcbiAgICAgICAgICAgICAgICBmbjogdGhpcy5kZXJpdmF0aW9uLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5zY29wZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy52YWx1ZSA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIHRoaXMucGVlayk7XG4gICAgICAgIHJldHVybiB2YWx1ZURpZENoYW5nZSh0aGlzLmNvbXBhcmVTdHJ1Y3R1cmFsLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gYXV0b3J1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMuZGVyaXZhdGlvbi50b1N0cmluZygpICsgXCJdXCI7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcHV0ZWRWYWx1ZTtcbn0oKSk7XG5mdW5jdGlvbiBpc0NvbXB1dGluZ0Rlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLmRlcml2YXRpb25TdGFjay5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoKSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcykge1xuICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIGdsb2JhbFN0YXRlLnN0cmljdE1vZGVcbiAgICAgICAgICAgID8gXCJJdCBpcyBub3QgYWxsb3dlZCB0byBjcmVhdGUgb3IgY2hhbmdlIHN0YXRlIG91dHNpZGUgYW4gYGFjdGlvbmAgd2hlbiBNb2JYIGlzIGluIHN0cmljdCBtb2RlLiBXcmFwIHRoZSBjdXJyZW50IG1ldGhvZCBpbiBgYWN0aW9uYCBpZiB0aGlzIHN0YXRlIGNoYW5nZSBpcyBpbnRlbmRlZFwiXG4gICAgICAgICAgICA6IFwiSXQgaXMgbm90IGFsbG93ZWQgdG8gY2hhbmdlIHRoZSBzdGF0ZSB3aGVuIGEgY29tcHV0ZWQgdmFsdWUgb3IgdHJhbnNmb3JtZXIgaXMgYmVpbmcgZXZhbHVhdGVkLiBVc2UgJ2F1dG9ydW4nIHRvIGNyZWF0ZSByZWFjdGl2ZSBmdW5jdGlvbnMgd2l0aCBzaWRlLWVmZmVjdHMuXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vdGlmeURlcGVuZGVuY3lTdGFsZShkZXJpdmF0aW9uKSB7XG4gICAgaWYgKCsrZGVyaXZhdGlvbi5kZXBlbmRlbmN5U3RhbGVDb3VudCA9PT0gMSkge1xuICAgICAgICBwcm9wYWdhdGVTdGFsZW5lc3MoZGVyaXZhdGlvbik7XG4gICAgfVxufVxuZnVuY3Rpb24gbm90aWZ5RGVwZW5kZW5jeVJlYWR5KGRlcml2YXRpb24sIGRlcGVuZGVuY3lEaWRDaGFuZ2UpIHtcbiAgICBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmN5U3RhbGVDb3VudCA+IDAsIFwidW5leHBlY3RlZCByZWFkeSBub3RpZmljYXRpb25cIik7XG4gICAgaWYgKGRlcGVuZGVuY3lEaWRDaGFuZ2UpXG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jeUNoYW5nZUNvdW50ICs9IDE7XG4gICAgaWYgKC0tZGVyaXZhdGlvbi5kZXBlbmRlbmN5U3RhbGVDb3VudCA9PT0gMCkge1xuICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmN5Q2hhbmdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY3lDaGFuZ2VDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IGRlcml2YXRpb24ub25EZXBlbmRlbmNpZXNSZWFkeSgpO1xuICAgICAgICAgICAgcHJvcGFnYXRlUmVhZGluZXNzKGRlcml2YXRpb24sIGNoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvcGFnYXRlUmVhZGluZXNzKGRlcml2YXRpb24sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHRyYWNrRGVyaXZlZEZ1bmN0aW9uKGRlcml2YXRpb24sIGYpIHtcbiAgICB2YXIgaGFzRXhjZXB0aW9uID0gdHJ1ZTtcbiAgICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nO1xuICAgIGRlcml2YXRpb24ub2JzZXJ2aW5nID0gW107XG4gICAgZ2xvYmFsU3RhdGUuZGVyaXZhdGlvblN0YWNrLnB1c2goZGVyaXZhdGlvbik7XG4gICAgdmFyIHByZXZUcmFja2luZyA9IGdsb2JhbFN0YXRlLmlzVHJhY2tpbmc7XG4gICAgZ2xvYmFsU3RhdGUuaXNUcmFja2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGYuY2FsbChkZXJpdmF0aW9uKTtcbiAgICAgICAgaGFzRXhjZXB0aW9uID0gZmFsc2U7XG4gICAgICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbiwgcHJldk9ic2VydmluZyk7XG4gICAgICAgIGdsb2JhbFN0YXRlLmlzVHJhY2tpbmcgPSBwcmV2VHJhY2tpbmc7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBpZiAoaGFzRXhjZXB0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IChcIlttb2J4XSBBbiB1bmNhdWdodCBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsY3VsYXRpbmcgeW91ciBjb21wdXRlZCB2YWx1ZSwgYXV0b3J1biBvciB0cmFuc2Zvcm1lci4gT3IgaW5zaWRlIHRoZSByZW5kZXIoKSBtZXRob2Qgb2YgYW4gb2JzZXJ2ZXIgYmFzZWQgUmVhY3QgY29tcG9uZW50LiBcIiArXG4gICAgICAgICAgICAgICAgXCJUaGVzZSBtZXRob2RzIHNob3VsZCBuZXZlciB0aHJvdyBleGNlcHRpb25zIGFzIE1vYlggd2lsbCB1c3VhbGx5IG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgZnJvbSB0aGVtLiBcIiArXG4gICAgICAgICAgICAgICAgKFwiUGxlYXNlIGVuYWJsZSAnUGF1c2Ugb24gKGNhdWdodCkgZXhjZXB0aW9ucycgaW4geW91ciBkZWJ1Z2dlciB0byBmaW5kIHRoZSByb290IGNhdXNlLiBJbjogJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInXCIpKTtcbiAgICAgICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVzZXRHbG9iYWxTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uLCBwcmV2T2JzZXJ2aW5nKSB7XG4gICAgZ2xvYmFsU3RhdGUuZGVyaXZhdGlvblN0YWNrLmxlbmd0aCAtPSAxO1xuICAgIHZhciBfYSA9IHF1aWNrRGlmZihkZXJpdmF0aW9uLm9ic2VydmluZywgcHJldk9ic2VydmluZyksIGFkZGVkID0gX2FbMF0sIHJlbW92ZWQgPSBfYVsxXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFkZGVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgZGVwZW5kZW5jeSA9IGFkZGVkW2ldO1xuICAgICAgICBpbnZhcmlhbnQoIWZpbmRDeWNsZShkZXJpdmF0aW9uLCBkZXBlbmRlbmN5KSwgXCJDeWNsZSBkZXRlY3RlZFwiLCBkZXJpdmF0aW9uKTtcbiAgICAgICAgYWRkT2JzZXJ2ZXIoYWRkZWRbaV0sIGRlcml2YXRpb24pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbW92ZWQubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICByZW1vdmVPYnNlcnZlcihyZW1vdmVkW2ldLCBkZXJpdmF0aW9uKTtcbn1cbmZ1bmN0aW9uIGZpbmRDeWNsZShuZWVkbGUsIG5vZGUpIHtcbiAgICBpZiAobmVlZGxlID09PSBub2RlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgb2JzID0gbm9kZS5vYnNlcnZpbmc7XG4gICAgaWYgKG9icyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgbCA9IG9icy5sZW5ndGgsIGkgPSAwOyBpIDwgbDsgaSsrKVxuICAgICAgICBpZiAoZmluZEN5Y2xlKG5lZWRsZSwgb2JzW2ldKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZChhY3Rpb24pIHtcbiAgICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUuaXNUcmFja2luZztcbiAgICBnbG9iYWxTdGF0ZS5pc1RyYWNraW5nID0gZmFsc2U7XG4gICAgdmFyIHJlcyA9IGFjdGlvbigpO1xuICAgIGdsb2JhbFN0YXRlLmlzVHJhY2tpbmcgPSBwcmV2VHJhY2tpbmc7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMudW50cmFja2VkID0gdW50cmFja2VkO1xudmFyIHBlcnNpc3RlbnRLZXlzID0gW1wibW9ieEd1aWRcIiwgXCJyZXNldElkXCIsIFwic3B5TGlzdGVuZXJzXCIsIFwic3RyaWN0TW9kZVwiXTtcbnZhciBNb2JYR2xvYmFscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9iWEdsb2JhbHMoKSB7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDI7XG4gICAgICAgIHRoaXMuZGVyaXZhdGlvblN0YWNrID0gW107XG4gICAgICAgIHRoaXMubW9ieEd1aWQgPSAwO1xuICAgICAgICB0aGlzLmluVHJhbnNhY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmlzVHJhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkQXRvbXMgPSBbXTtcbiAgICAgICAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldElkID0gMDtcbiAgICAgICAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIE1vYlhHbG9iYWxzO1xufSgpKTtcbnZhciBnbG9iYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcyA9IG5ldyBNb2JYR2xvYmFscygpO1xuICAgIGlmIChnbG9iYWwuX19tb2JzZXJ2YWJsZVRyYWNraW5nU3RhY2sgfHwgZ2xvYmFsLl9fbW9ic2VydmFibGVWaWV3U3RhY2spXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBBbiBpbmNvbXBhdGlibGUgdmVyc2lvbiBvZiBtb2JzZXJ2YWJsZSBpcyBhbHJlYWR5IGxvYWRlZC5cIik7XG4gICAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWwgJiYgZ2xvYmFsLl9fbW9ieEdsb2JhbC52ZXJzaW9uICE9PSByZXMudmVyc2lvbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIEFuIGluY29tcGF0aWJsZSB2ZXJzaW9uIG9mIG1vYnggaXMgYWxyZWFkeSBsb2FkZWQuXCIpO1xuICAgIGlmIChnbG9iYWwuX19tb2J4R2xvYmFsKVxuICAgICAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbDtcbiAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbCA9IHJlcztcbn0pKCk7XG5mdW5jdGlvbiByZWdpc3Rlckdsb2JhbHMoKSB7XG59XG5mdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlKCkge1xuICAgIGdsb2JhbFN0YXRlLnJlc2V0SWQrKztcbiAgICB2YXIgZGVmYXVsdEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEdsb2JhbHMpXG4gICAgICAgIGlmIChwZXJzaXN0ZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IGRlZmF1bHRHbG9iYWxzW2tleV07XG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUuc3RyaWN0TW9kZTtcbn1cbmZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmFibGUsIG5vZGUpIHtcbiAgICB2YXIgb2JzID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnMsIGwgPSBvYnMubGVuZ3RoO1xuICAgIG9ic1tsXSA9IG5vZGU7XG4gICAgaWYgKGwgPT09IDApXG4gICAgICAgIG9ic2VydmFibGUub25CZWNvbWVPYnNlcnZlZCgpO1xufVxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAgIHZhciBvYnMgPSBvYnNlcnZhYmxlLm9ic2VydmVycywgaWR4ID0gb2JzLmluZGV4T2Yobm9kZSk7XG4gICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgIG9icy5zcGxpY2UoaWR4LCAxKTtcbiAgICBpZiAob2JzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgb2JzZXJ2YWJsZS5vbkJlY29tZVVub2JzZXJ2ZWQoKTtcbn1cbmZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkKG9ic2VydmFibGUpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUuaXNUcmFja2luZyA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgZGVyaXZhdGlvblN0YWNrID0gZ2xvYmFsU3RhdGUuZGVyaXZhdGlvblN0YWNrO1xuICAgIHZhciBkZXBzID0gZGVyaXZhdGlvblN0YWNrW2Rlcml2YXRpb25TdGFjay5sZW5ndGggLSAxXS5vYnNlcnZpbmc7XG4gICAgdmFyIGRlcHNsZW5ndGggPSBkZXBzLmxlbmd0aDtcbiAgICBpZiAoZGVwc1tkZXBzbGVuZ3RoIC0gMV0gIT09IG9ic2VydmFibGUgJiYgZGVwc1tkZXBzbGVuZ3RoIC0gMl0gIT09IG9ic2VydmFibGUpXG4gICAgICAgIGRlcHNbZGVwc2xlbmd0aF0gPSBvYnNlcnZhYmxlO1xufVxuZnVuY3Rpb24gcHJvcGFnYXRlU3RhbGVuZXNzKG9ic2VydmFibGUpIHtcbiAgICB2YXIgb3MgPSBvYnNlcnZhYmxlLm9ic2VydmVycy5zbGljZSgpO1xuICAgIG9zLmZvckVhY2gobm90aWZ5RGVwZW5kZW5jeVN0YWxlKTtcbiAgICBvYnNlcnZhYmxlLnN0YWxlT2JzZXJ2ZXJzID0gb2JzZXJ2YWJsZS5zdGFsZU9ic2VydmVycy5jb25jYXQob3MpO1xufVxuZnVuY3Rpb24gcHJvcGFnYXRlUmVhZGluZXNzKG9ic2VydmFibGUsIHZhbHVlRGlkQWN0dWFsbHlDaGFuZ2UpIHtcbiAgICBvYnNlcnZhYmxlLnN0YWxlT2JzZXJ2ZXJzLnNwbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7IHJldHVybiBub3RpZnlEZXBlbmRlbmN5UmVhZHkobywgdmFsdWVEaWRBY3R1YWxseUNoYW5nZSk7IH0pO1xufVxudmFyIFJlYWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lLCBvbkludmFsaWRhdGUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub25JbnZhbGlkYXRlID0gb25JbnZhbGlkYXRlO1xuICAgICAgICB0aGlzLnN0YWxlT2JzZXJ2ZXJzID0gRU1QVFlfQVJSQVk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gRU1QVFlfQVJSQVk7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeUNoYW5nZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5U3RhbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBSZWFjdGlvbi5wcm90b3R5cGUub25CZWNvbWVPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUub25EZXBlbmRlbmNpZXNSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHJ1blJlYWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lTdGFsZUNvdW50ID4gMCB8fCB0aGlzLl9pc1NjaGVkdWxlZDtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5ydW5SZWFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzVHJhY2tQZW5kaW5nICYmIGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNjaGVkdWxlZC1yZWFjdGlvblwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBzdGFydFRpbWU7XG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIixcbiAgICAgICAgICAgICAgICBmbjogZm5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuKTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGRlcHMgPSB0aGlzLm9ic2VydmluZy5zcGxpY2UoMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGRlcHMubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgICAgIHJlbW92ZU9ic2VydmVyKGRlcHNbaV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuZ2V0RGlzcG9zZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHIuJG1vYnggPSB0aGlzO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdGlvbjtcbn0oKSk7XG5leHBvcnRzLlJlYWN0aW9uID0gUmVhY3Rpb247XG52YXIgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgPSAxMDA7XG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9PT0gdHJ1ZSB8fCBnbG9iYWxTdGF0ZS5pblRyYW5zYWN0aW9uID4gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IHRydWU7XG4gICAgdmFyIGFsbFJlYWN0aW9ucyA9IGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnM7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoKytpdGVyYXRpb25zID09PSBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0aW9uIGRvZXNuJ3QgY29udmVyZ2UgdG8gYSBzdGFibGUgc3RhdGUuIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXS50b1N0cmluZygpKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbigpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cbnZhciBzcHlFbmFibGVkID0gZmFsc2U7XG5mdW5jdGlvbiBpc1NweUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHNweUVuYWJsZWQ7XG59XG5mdW5jdGlvbiBzcHlSZXBvcnQoZXZlbnQpIHtcbiAgICBpZiAoIXNweUVuYWJsZWQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcbn1cbmZ1bmN0aW9uIHNweVJlcG9ydFN0YXJ0KGV2ZW50KSB7XG4gICAgdmFyIGNoYW5nZSA9IG9iamVjdEFzc2lnbih7fSwgZXZlbnQsIHsgc3B5UmVwb3J0U3RhcnQ6IHRydWUgfSk7XG4gICAgc3B5UmVwb3J0KGNoYW5nZSk7XG59XG52YXIgRU5EX0VWRU5UID0geyBzcHlSZXBvcnRFbmQ6IHRydWUgfTtcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcbiAgICBpZiAoY2hhbmdlKVxuICAgICAgICBzcHlSZXBvcnQob2JqZWN0QXNzaWduKHt9LCBjaGFuZ2UsIEVORF9FVkVOVCkpO1xuICAgIGVsc2VcbiAgICAgICAgc3B5UmVwb3J0KEVORF9FVkVOVCk7XG59XG5mdW5jdGlvbiBzcHkobGlzdGVuZXIpIHtcbiAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgc3B5RW5hYmxlZCA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGggPiAwO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIHNweUVuYWJsZWQgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc3B5ID0gc3B5O1xuZnVuY3Rpb24gdHJhY2tUcmFuc2l0aW9ucyhvblJlcG9ydCkge1xuICAgIGRlcHJlY2F0ZWQoXCJ0cmFja1RyYW5zaXRpb25zIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb2J4LnNweSBpbnN0ZWFkXCIpO1xuICAgIGlmICh0eXBlb2Ygb25SZXBvcnQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGRlcHJlY2F0ZWQoXCJ0cmFja1RyYW5zaXRpb25zIG9ubHkgdGFrZXMgYSBzaW5nbGUgY2FsbGJhY2sgZnVuY3Rpb24uIElmIHlvdSBhcmUgdXNpbmcgdGhlIG1vYngtcmVhY3QtZGV2dG9vbHMsIHBsZWFzZSB1cGRhdGUgdGhlbSBmaXJzdFwiKTtcbiAgICAgICAgb25SZXBvcnQgPSBhcmd1bWVudHNbMV07XG4gICAgfVxuICAgIGlmICghb25SZXBvcnQpIHtcbiAgICAgICAgZGVwcmVjYXRlZChcInRyYWNrVHJhbnNpdGlvbnMgd2l0aG91dCBjYWxsYmFjayBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBpcyBhIG5vLW9wIG5vdy4gSWYgeW91IGFyZSB1c2luZyB0aGUgbW9ieC1yZWFjdC1kZXZ0b29scywgcGxlYXNlIHVwZGF0ZSB0aGVtIGZpcnN0XCIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICByZXR1cm4gc3B5KG9uUmVwb3J0KTtcbn1cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uKGFjdGlvbiwgdGhpc0FyZywgcmVwb3J0KSB7XG4gICAgaWYgKHRoaXNBcmcgPT09IHZvaWQgMCkgeyB0aGlzQXJnID0gdW5kZWZpbmVkOyB9XG4gICAgaWYgKHJlcG9ydCA9PT0gdm9pZCAwKSB7IHJlcG9ydCA9IHRydWU7IH1cbiAgICBnbG9iYWxTdGF0ZS5pblRyYW5zYWN0aW9uICs9IDE7XG4gICAgaWYgKHJlcG9ydCAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICB0eXBlOiBcInRyYW5zYWN0aW9uXCIsXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXNBcmcsXG4gICAgICAgICAgICBuYW1lOiAoYWN0aW9uLm5hbWUpIHx8IFwiYW5vbnltb3VzIHRyYW5zYWN0aW9uXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciByZXMgPSBhY3Rpb24uY2FsbCh0aGlzQXJnKTtcbiAgICBpZiAoLS1nbG9iYWxTdGF0ZS5pblRyYW5zYWN0aW9uID09PSAwKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBnbG9iYWxTdGF0ZS5jaGFuZ2VkQXRvbXMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICBwcm9wYWdhdGVBdG9tUmVhZHkodmFsdWVzW2ldKTtcbiAgICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgfVxuICAgIGlmIChyZXBvcnQgJiYgaXNTcHlFbmFibGVkKCkpXG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnRzLnRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb247XG5mdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMoaW50ZXJjZXB0YWJsZSkge1xuICAgIHJldHVybiAoaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMubGVuZ3RoID4gMCk7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xuICAgIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGludGVyY2VwdG9ycyA9IGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGludGVyY2VwdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgICAgICAgaW52YXJpYW50KCFjaGFuZ2UgfHwgY2hhbmdlLnR5cGUsIFwiSW50ZXJjZXB0IGhhbmRsZXJzIHNob3VsZCByZXR1cm4gbm90aGluZyBvciBhIGNoYW5nZSBvYmplY3RcIik7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFzTGlzdGVuZXJzKGxpc3RlbmFibGUpIHtcbiAgICByZXR1cm4gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgJiYgbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXIobGlzdGVuYWJsZSwgaGFuZGxlcikge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyB8fCAobGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgPSBbXSk7XG4gICAgbGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWR4ID0gbGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgICAgIGlmIChpZHggIT09IC0xKVxuICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKGxpc3RlbmFibGUsIGNoYW5nZSkge1xuICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGFuZ2UpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KG51bGwsIGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBWYWx1ZU1vZGU7XG4oZnVuY3Rpb24gKFZhbHVlTW9kZSkge1xuICAgIFZhbHVlTW9kZVtWYWx1ZU1vZGVbXCJSZWN1cnNpdmVcIl0gPSAwXSA9IFwiUmVjdXJzaXZlXCI7XG4gICAgVmFsdWVNb2RlW1ZhbHVlTW9kZVtcIlJlZmVyZW5jZVwiXSA9IDFdID0gXCJSZWZlcmVuY2VcIjtcbiAgICBWYWx1ZU1vZGVbVmFsdWVNb2RlW1wiU3RydWN0dXJlXCJdID0gMl0gPSBcIlN0cnVjdHVyZVwiO1xuICAgIFZhbHVlTW9kZVtWYWx1ZU1vZGVbXCJGbGF0XCJdID0gM10gPSBcIkZsYXRcIjtcbn0pKFZhbHVlTW9kZSB8fCAoVmFsdWVNb2RlID0ge30pKTtcbmZ1bmN0aW9uIGFzUmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBBc1JlZmVyZW5jZSh2YWx1ZSk7XG59XG5leHBvcnRzLmFzUmVmZXJlbmNlID0gYXNSZWZlcmVuY2U7XG5mdW5jdGlvbiBhc1N0cnVjdHVyZSh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgQXNTdHJ1Y3R1cmUodmFsdWUpO1xufVxuZXhwb3J0cy5hc1N0cnVjdHVyZSA9IGFzU3RydWN0dXJlO1xuZnVuY3Rpb24gYXNGbGF0KHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBBc0ZsYXQodmFsdWUpO1xufVxuZXhwb3J0cy5hc0ZsYXQgPSBhc0ZsYXQ7XG52YXIgQXNSZWZlcmVuY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzUmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgYXNzZXJ0VW53cmFwcGVkKHZhbHVlLCBcIk1vZGlmaWVycyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgbmVzdGVkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gQXNSZWZlcmVuY2U7XG59KCkpO1xudmFyIEFzU3RydWN0dXJlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBc1N0cnVjdHVyZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGFzc2VydFVud3JhcHBlZCh2YWx1ZSwgXCJNb2RpZmllcnMgYXJlIG5vdCBhbGxvd2VkIHRvIGJlIG5lc3RlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIEFzU3RydWN0dXJlO1xufSgpKTtcbnZhciBBc0ZsYXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzRmxhdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGFzc2VydFVud3JhcHBlZCh2YWx1ZSwgXCJNb2RpZmllcnMgYXJlIG5vdCBhbGxvd2VkIHRvIGJlIG5lc3RlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIEFzRmxhdDtcbn0oKSk7XG5mdW5jdGlvbiBhc01hcChkYXRhLCBtb2RpZmllckZ1bmMpIHtcbiAgICByZXR1cm4gbWFwKGRhdGEsIG1vZGlmaWVyRnVuYyk7XG59XG5leHBvcnRzLmFzTWFwID0gYXNNYXA7XG5mdW5jdGlvbiBnZXRWYWx1ZU1vZGVGcm9tVmFsdWUodmFsdWUsIGRlZmF1bHRNb2RlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXNSZWZlcmVuY2UpXG4gICAgICAgIHJldHVybiBbVmFsdWVNb2RlLlJlZmVyZW5jZSwgdmFsdWUudmFsdWVdO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFzU3RydWN0dXJlKVxuICAgICAgICByZXR1cm4gW1ZhbHVlTW9kZS5TdHJ1Y3R1cmUsIHZhbHVlLnZhbHVlXTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBc0ZsYXQpXG4gICAgICAgIHJldHVybiBbVmFsdWVNb2RlLkZsYXQsIHZhbHVlLnZhbHVlXTtcbiAgICByZXR1cm4gW2RlZmF1bHRNb2RlLCB2YWx1ZV07XG59XG5mdW5jdGlvbiBnZXRWYWx1ZU1vZGVGcm9tTW9kaWZpZXJGdW5jKGZ1bmMpIHtcbiAgICBpZiAoZnVuYyA9PT0gYXNSZWZlcmVuY2UpXG4gICAgICAgIHJldHVybiBWYWx1ZU1vZGUuUmVmZXJlbmNlO1xuICAgIGVsc2UgaWYgKGZ1bmMgPT09IGFzU3RydWN0dXJlKVxuICAgICAgICByZXR1cm4gVmFsdWVNb2RlLlN0cnVjdHVyZTtcbiAgICBlbHNlIGlmIChmdW5jID09PSBhc0ZsYXQpXG4gICAgICAgIHJldHVybiBWYWx1ZU1vZGUuRmxhdDtcbiAgICBpbnZhcmlhbnQoZnVuYyA9PT0gdW5kZWZpbmVkLCBcIkNhbm5vdCBkZXRlcm1pbmUgdmFsdWUgbW9kZSBmcm9tIGZ1bmN0aW9uLiBQbGVhc2UgcGFzcyBpbiBvbmUgb2YgdGhlc2U6IG1vYnguYXNSZWZlcmVuY2UsIG1vYnguYXNTdHJ1Y3R1cmUgb3IgbW9ieC5hc0ZsYXQsIGdvdDogXCIgKyBmdW5jKTtcbiAgICByZXR1cm4gVmFsdWVNb2RlLlJlY3Vyc2l2ZTtcbn1cbmZ1bmN0aW9uIG1ha2VDaGlsZE9ic2VydmFibGUodmFsdWUsIHBhcmVudE1vZGUsIG5hbWUpIHtcbiAgICB2YXIgY2hpbGRNb2RlO1xuICAgIGlmIChpc09ic2VydmFibGUodmFsdWUpKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgc3dpdGNoIChwYXJlbnRNb2RlKSB7XG4gICAgICAgIGNhc2UgVmFsdWVNb2RlLlJlZmVyZW5jZTpcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY2FzZSBWYWx1ZU1vZGUuRmxhdDpcbiAgICAgICAgICAgIGFzc2VydFVud3JhcHBlZCh2YWx1ZSwgXCJJdGVtcyBpbnNpZGUgJ2FzRmxhdCcgY2Fubm90IGhhdmUgbW9kaWZpZXJzXCIpO1xuICAgICAgICAgICAgY2hpbGRNb2RlID0gVmFsdWVNb2RlLlJlZmVyZW5jZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFZhbHVlTW9kZS5TdHJ1Y3R1cmU6XG4gICAgICAgICAgICBhc3NlcnRVbndyYXBwZWQodmFsdWUsIFwiSXRlbXMgaW5zaWRlICdhc1N0cnVjdHVyZScgY2Fubm90IGhhdmUgbW9kaWZpZXJzXCIpO1xuICAgICAgICAgICAgY2hpbGRNb2RlID0gVmFsdWVNb2RlLlN0cnVjdHVyZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFZhbHVlTW9kZS5SZWN1cnNpdmU6XG4gICAgICAgICAgICBfYSA9IGdldFZhbHVlTW9kZUZyb21WYWx1ZSh2YWx1ZSwgVmFsdWVNb2RlLlJlY3Vyc2l2ZSksIGNoaWxkTW9kZSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiSWxsZWdhbCBTdGF0ZVwiKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICByZXR1cm4gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KHZhbHVlLCBjaGlsZE1vZGUsIG5hbWUpO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIGV4dGVuZE9ic2VydmFibGVIZWxwZXIodmFsdWUsIHZhbHVlLCBjaGlsZE1vZGUsIG5hbWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgICB2YXIgX2E7XG59XG5mdW5jdGlvbiBhc3NlcnRVbndyYXBwZWQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBc1JlZmVyZW5jZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFzU3RydWN0dXJlIHx8IHZhbHVlIGluc3RhbmNlb2YgQXNGbGF0KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gYXNTdHJ1Y3R1cmUgLyBhc1JlZmVyZW5jZSAvIGFzRmxhdCBjYW5ub3QgYmUgdXNlZCBoZXJlLiBcIiArIG1lc3NhZ2UpO1xufVxudmFyIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSAwO1xudmFyIFN0dWJBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3R1YkFycmF5KCkge1xuICAgIH1cbiAgICByZXR1cm4gU3R1YkFycmF5O1xufSgpKTtcblN0dWJBcnJheS5wcm90b3R5cGUgPSBbXTtcbnZhciBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgbW9kZSwgYXJyYXksIG93bmVkKSB7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5vd25lZCA9IG93bmVkO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQXRvbShuYW1lIHx8IChcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKSk7XG4gICAgfVxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5tYWtlUmVhY3RpdmVBcnJheUl0ZW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgYXNzZXJ0VW53cmFwcGVkKHZhbHVlLCBcIkFycmF5IHZhbHVlcyBjYW5ub3QgaGF2ZSBtb2RpZmllcnNcIik7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFZhbHVlTW9kZS5GbGF0IHx8IHRoaXMubW9kZSA9PT0gVmFsdWVNb2RlLlJlZmVyZW5jZSlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG1ha2VDaGlsZE9ic2VydmFibGUodmFsdWUsIHRoaXMubW9kZSwgdGhpcy5hdG9tLm5hbWUgKyBcIlsuLl1cIik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShjdXJyZW50TGVuZ3RoLCAwLCBuZXcgQXJyYXkobmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aCkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcbiAgICAgICAgaWYgKG9sZExlbmd0aCAhPT0gdGhpcy5sYXN0S25vd25MZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9kaWZpY2F0aW9uIGV4Y2VwdGlvbjogdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiBhbiBvYnNlcnZhYmxlIGFycmF5IHdhcyBjaGFuZ2VkLiBEaWQgeW91IHVzZSBwZWVrKCkgdG8gY2hhbmdlIGl0P1wiKTtcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XG4gICAgICAgIGlmIChkZWx0YSA+IDAgJiYgb2xkTGVuZ3RoICsgZGVsdGEgPiBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFKVxuICAgICAgICAgICAgcmVzZXJ2ZUFycmF5QnVmZmVyKG9sZExlbmd0aCArIGRlbHRhKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zcGxpY2VXaXRoQXJyYXkgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCgpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPiBsZW5ndGgpXG4gICAgICAgICAgICBpbmRleCA9IGxlbmd0aDtcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1heCgwLCBsZW5ndGggKyBpbmRleCk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleDtcbiAgICAgICAgZWxzZSBpZiAoZGVsZXRlQ291bnQgPT09IHVuZGVmaW5lZCB8fCBkZWxldGVDb3VudCA9PT0gbnVsbClcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkZWxldGVDb3VudCwgbGVuZ3RoIC0gaW5kZXgpKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBuZXdJdGVtcyA9IFtdO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuYXJyYXksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiBkZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICBhZGRlZDogbmV3SXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVNUFRZX0FSUkFZO1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBjaGFuZ2UucmVtb3ZlZENvdW50O1xuICAgICAgICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3SXRlbXMgPSBuZXdJdGVtcy5tYXAodGhpcy5tYWtlUmVhY3RpdmVBcnJheUl0ZW0sIHRoaXMpO1xuICAgICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgICAgdGhpcy51cGRhdGVBcnJheUxlbmd0aChsZW5ndGgsIGxlbmd0aERlbHRhKTtcbiAgICAgICAgdmFyIHJlcyA9IChfYSA9IHRoaXMudmFsdWVzKS5zcGxpY2UuYXBwbHkoX2EsIFtpbmRleCwgZGVsZXRlQ291bnRdLmNvbmNhdChuZXdJdGVtcykpO1xuICAgICAgICBpZiAoZGVsZXRlQ291bnQgIT09IDAgfHwgbmV3SXRlbXMubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlBcnJheVNwbGljZShpbmRleCwgbmV3SXRlbXMsIHJlcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIHZhciBfYTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlID0gZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgICAgICAgIG9iamVjdDogdGhpcy5hcnJheSxcbiAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsIG5ld1ZhbHVlOiBuZXdWYWx1ZSwgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgIH0gOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgICAgdGhpcy5hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlTcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgICAgICBvYmplY3Q6IHRoaXMuYXJyYXksXG4gICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LCByZW1vdmVkOiByZW1vdmVkLCBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxuICAgICAgICAgICAgYWRkZWRDb3VudDogYWRkZWQubGVuZ3RoXG4gICAgICAgIH0gOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgICAgdGhpcy5hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XG59KCkpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic2VydmFibGVBcnJheSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgbW9kZSwgbmFtZSwgb3duZWQpIHtcbiAgICAgICAgaWYgKG93bmVkID09PSB2b2lkIDApIHsgb3duZWQgPSBmYWxzZTsgfVxuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBtb2RlLCB0aGlzLCBvd25lZCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIiRtb2J4XCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBhZG1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbml0aWFsVmFsdWVzICYmIGluaXRpYWxWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZG0udXBkYXRlQXJyYXlMZW5ndGgoMCwgaW5pdGlhbFZhbHVlcy5sZW5ndGgpO1xuICAgICAgICAgICAgYWRtLnZhbHVlcyA9IGluaXRpYWxWYWx1ZXMubWFwKGFkbS5tYWtlUmVhY3RpdmVBcnJheUl0ZW0sIGFkbSk7XG4gICAgICAgICAgICBhZG0ubm90aWZ5QXJyYXlTcGxpY2UoMCwgYWRtLnZhbHVlcy5zbGljZSgpLCBFTVBUWV9BUlJBWSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZG0udmFsdWVzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5pbnRlcmNlcHQoaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHsgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdJdGVtcykge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5zcGxpY2VXaXRoQXJyYXkoMCwgdGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnRvSlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC52YWx1ZXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aGlzQXJnLCBmcm9tSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdm9pZCAwKSB7IGZyb21JbmRleCA9IDA7IH1cbiAgICAgICAgdGhpcy4kbW9ieC5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuJG1vYngudmFsdWVzLCBsID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gZnJvbUluZGV4OyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIGl0ZW1zW2ldLCBpLCB0aGlzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbaV07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgIHZhciBuZXdJdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3SXRlbXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnNwbGljZVdpdGhBcnJheShpbmRleCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzLiRtb2J4O1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KGFkbS52YWx1ZXMubGVuZ3RoLCAwLCBpdGVtcyk7XG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoIC0gMSwgMCksIDEpWzBdO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIDEpWzBdO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pIC0gMF0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzLiRtb2J4O1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgdGhpcy4kbW9ieC5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGNsb25lLnNvcnQuYXBwbHkoY2xvbmUsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaWR4ID0gdGhpcy4kbW9ieC52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlttb2J4LmFycmF5XSBcIiArIEFycmF5LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh0aGlzLiRtb2J4LnZhbHVlcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlttb2J4LmFycmF5XSBcIiArIEFycmF5LnByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5hcHBseSh0aGlzLiRtb2J4LnZhbHVlcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXk7XG59KFN0dWJBcnJheSkpO1xubWFrZU5vbkVudW1lcmFibGUoT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgW1xuICAgIFwiY29uc3RydWN0b3JcIixcbiAgICBcIm9ic2VydmVcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJyZXBsYWNlXCIsXG4gICAgXCJ0b0pTT05cIixcbiAgICBcInBlZWtcIixcbiAgICBcImZpbmRcIixcbiAgICBcInNwbGljZVwiLFxuICAgIFwicHVzaFwiLFxuICAgIFwicG9wXCIsXG4gICAgXCJzaGlmdFwiLFxuICAgIFwidW5zaGlmdFwiLFxuICAgIFwicmV2ZXJzZVwiLFxuICAgIFwic29ydFwiLFxuICAgIFwicmVtb3ZlXCIsXG4gICAgXCJ0b1N0cmluZ1wiLFxuICAgIFwidG9Mb2NhbGVTdHJpbmdcIlxuXSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguZ2V0QXJyYXlMZW5ndGgoKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKG5ld0xlbmd0aCkge1xuICAgICAgICB0aGlzLiRtb2J4LnNldEFycmF5TGVuZ3RoKG5ld0xlbmd0aCk7XG4gICAgfVxufSk7XG5bXG4gICAgXCJjb25jYXRcIixcbiAgICBcImV2ZXJ5XCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZvckVhY2hcIixcbiAgICBcImluZGV4T2ZcIixcbiAgICBcImpvaW5cIixcbiAgICBcImxhc3RJbmRleE9mXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInJlZHVjZVwiLFxuICAgIFwicmVkdWNlUmlnaHRcIixcbiAgICBcInNsaWNlXCIsXG4gICAgXCJzb21lXCJcbl0uZm9yRWFjaChmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICB2YXIgYmFzZUZ1bmMgPSBBcnJheS5wcm90b3R5cGVbZnVuY05hbWVdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLCBmdW5jTmFtZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgIHJldHVybiBiYXNlRnVuYy5hcHBseSh0aGlzLiRtb2J4LnZhbHVlcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgXCJcIiArIGluZGV4LCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBzZXQ6IGNyZWF0ZUFycmF5U2V0dGVyKGluZGV4KSxcbiAgICAgICAgZ2V0OiBjcmVhdGVBcnJheUdldHRlcihpbmRleClcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5U2V0dGVyKGluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgYWRtID0gdGhpcy4kbW9ieDtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFkbS52YWx1ZXM7XG4gICAgICAgIGFzc2VydFVud3JhcHBlZChuZXdWYWx1ZSwgXCJNb2RpZmllcnMgY2Fubm90IGJlIHVzZWQgb24gYXJyYXkgdmFsdWVzLiBGb3Igbm9uLXJlYWN0aXZlIGFycmF5IHZhbHVlcyB1c2UgbWFrZVJlYWN0aXZlKGFzRmxhdChhcnJheSkpLlwiKTtcbiAgICAgICAgaWYgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoKTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGFkbS5hcnJheSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LCBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBhZG0ubWFrZVJlYWN0aXZlQXJyYXlJdGVtKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkID0gKGFkbS5tb2RlID09PSBWYWx1ZU1vZGUuU3RydWN0dXJlKSA/ICFkZWVwRXF1YWxzKG9sZFZhbHVlLCBuZXdWYWx1ZSkgOiBvbGRWYWx1ZSAhPT0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBhZG0ubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZShpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnguYXJyYXldIEluZGV4IG91dCBvZiBib3VuZHMsIFwiICsgaW5kZXggKyBcIiBpcyBsYXJnZXIgdGhhbiBcIiArIHZhbHVlcy5sZW5ndGgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVBcnJheUdldHRlcihpbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbXBsID0gdGhpcy4kbW9ieDtcbiAgICAgICAgaWYgKGltcGwgJiYgaW5kZXggPCBpbXBsLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGltcGwuYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGltcGwudmFsdWVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG59XG5mdW5jdGlvbiByZXNlcnZlQXJyYXlCdWZmZXIobWF4KSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFOyBpbmRleCA8IG1heDsgaW5kZXgrKylcbiAgICAgICAgY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KTtcbiAgICBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFID0gbWF4O1xufVxucmVzZXJ2ZUFycmF5QnVmZmVyKDEwMDApO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIG1vZGUsIG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBtb2RlLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIGZhc3RBcnJheShpbml0aWFsVmFsdWVzKSB7XG4gICAgZGVwcmVjYXRlZChcImZhc3RBcnJheSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBvYnNlcnZhYmxlKGFzRmxhdChbXSkpYFwiKTtcbiAgICByZXR1cm4gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIFZhbHVlTW9kZS5GbGF0LCBudWxsKTtcbn1cbmV4cG9ydHMuZmFzdEFycmF5ID0gZmFzdEFycmF5O1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiBPYnNlcnZhYmxlQXJyYXk7XG59XG5leHBvcnRzLmlzT2JzZXJ2YWJsZUFycmF5ID0gaXNPYnNlcnZhYmxlQXJyYXk7XG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xudmFyIE9ic2VydmFibGVNYXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVNYXAoaW5pdGlhbERhdGEsIHZhbHVlTW9kZUZ1bmMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy4kbW9ieCA9IE9ic2VydmFibGVNYXBNYXJrZXI7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5faGFzTWFwID0ge307XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT2JzZXJ2YWJsZU1hcEBcIiArIGdldE5leHRJZCgpO1xuICAgICAgICB0aGlzLl9rZXlzID0gbmV3IE9ic2VydmFibGVBcnJheShudWxsLCBWYWx1ZU1vZGUuUmVmZXJlbmNlLCB0aGlzLm5hbWUgKyBcIi5rZXlzKClcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZU1vZGUgPSBnZXRWYWx1ZU1vZGVGcm9tTW9kaWZpZXJGdW5jKHZhbHVlTW9kZUZ1bmMpO1xuICAgICAgICBpZiAodGhpcy5fdmFsdWVNb2RlID09PSBWYWx1ZU1vZGUuRmxhdClcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlTW9kZSA9IFZhbHVlTW9kZS5SZWZlcmVuY2U7XG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzKHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGluaXRpYWxEYXRhKSlcbiAgICAgICAgICAgICAgICBfdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGluaXRpYWxEYXRhKSlcbiAgICAgICAgICAgICAgICBpbml0aWFsRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5faGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRLZXkoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc01hcFtrZXldKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01hcFtrZXldLmdldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkoa2V5LCBmYWxzZSkuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmFzc2VydFZhbGlkS2V5KGtleSk7XG4gICAgICAgIHZhciBoYXNLZXkgPSB0aGlzLl9oYXMoa2V5KTtcbiAgICAgICAgYXNzZXJ0VW53cmFwcGVkKHZhbHVlLCBcIlttb2J4Lm1hcC5zZXRdIEV4cGVjdGVkIHVud3JhcHBlZCB2YWx1ZSB0byBiZSBpbnNlcnRlZCB0byBrZXkgJ1wiICsga2V5ICsgXCInLiBJZiB5b3UgbmVlZCB0byB1c2UgbW9kaWZpZXJzIHBhc3MgdGhlbSBhcyBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBoYXNLZXkgPyBcInVwZGF0ZVwiIDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHRoaXMuX2RhdGFba2V5XS52YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IF90aGlzLl9kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlSGFzTWFwRW50cnkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXBba2V5XTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICBlbnRyeS5zZXROZXdWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IHRoaXMuX2hhc01hcFtrZXldID0gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgVmFsdWVNb2RlLlJlZmVyZW5jZSwgdGhpcy5uYW1lICsgXCIuXCIgKyBrZXkgKyBcIj9cIiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGFbbmFtZV07XG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IFVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fYWRkVmFsdWUgPSBmdW5jdGlvbiAobmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpcy5fZGF0YVtuYW1lXSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIF90aGlzLl92YWx1ZU1vZGUsIF90aGlzLm5hbWUgKyBcIi5cIiArIG5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIF90aGlzLl9rZXlzLnB1c2gobmFtZSk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV0uZ2V0KCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5zbGljZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlzKCkubWFwKHRoaXMuZ2V0LCB0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXMoKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgX3RoaXMuZ2V0KGtleSldOyB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIF90aGlzLmdldChrZXkpLCBrZXkpOyB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIE9ic2VydmFibGVNYXApXG4gICAgICAgICAgICAgICAgb3RoZXIua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgb3RoZXIuZ2V0KGtleSkpOyB9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCBvdGhlcltrZXldKTsgfSk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmtleXMoKS5mb3JFYWNoKF90aGlzLmRlbGV0ZSwgX3RoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICB0aGlzLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHJlc1trZXldID0gX3RoaXMuZ2V0KGtleSk7IH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVwcmVjYXRlZChcInRvSnMgaXMgZGVwcmVjYXRlZCwgdXNlIHRvSlMgaW5zdGVhZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0pTKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmFzc2VydFZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEtleShrZXkpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngubWFwXSBJbnZhbGlkIGtleTogJ1wiICsga2V5ICsgXCInXCIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIlt7IFwiICsgdGhpcy5rZXlzKCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIChrZXkgKyBcIjogXCIgKyAoXCJcIiArIF90aGlzLmdldChrZXkpKSk7IH0pLmpvaW4oXCIsIFwiKSArIFwiIH1dXCI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG1hcHMuXCIpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlTWFwO1xufSgpKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZU1hcCA9IE9ic2VydmFibGVNYXA7XG5mdW5jdGlvbiBtYXAoaW5pdGlhbFZhbHVlcywgdmFsdWVNb2RpZmllcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZU1hcChpbml0aWFsVmFsdWVzLCB2YWx1ZU1vZGlmaWVyKTtcbn1cbmV4cG9ydHMubWFwID0gbWFwO1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgT2JzZXJ2YWJsZU1hcDtcbn1cbmV4cG9ydHMuaXNPYnNlcnZhYmxlTWFwID0gaXNPYnNlcnZhYmxlTWFwO1xudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgbmFtZSwgbW9kZSkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVyY2VwdG9ycyA9IG51bGw7XG4gICAgfVxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCkpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSwgbW9kZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFZhbHVlTW9kZS5SZWN1cnNpdmU7IH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkpXG4gICAgICAgIHJldHVybiB0YXJnZXQuJG1vYng7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXG4gICAgICAgIG5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3IubmFtZSArIFwiQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgICBuYW1lID0gXCJPYnNlcnZhYmxlT2JqZWN0QFwiICsgZ2V0TmV4dElkKCk7XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0LCBuYW1lLCBtb2RlKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBcIiRtb2J4XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGFkbVxuICAgIH0pO1xuICAgIHJldHVybiBhZG07XG59XG5mdW5jdGlvbiBzZXRPYnNlcnZhYmxlT2JqZWN0UHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYWRtLnZhbHVlc1twcm9wTmFtZV0pXG4gICAgICAgIGFkbS50YXJnZXRbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgZWxzZVxuICAgICAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5KGFkbSwgcHJvcE5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUoYWRtLnRhcmdldCwgcHJvcE5hbWUpO1xuICAgIHZhciBvYnNlcnZhYmxlO1xuICAgIHZhciBuYW1lID0gYWRtLm5hbWUgKyBcIi5cIiArIHByb3BOYW1lO1xuICAgIHZhciBpc0NvbXB1dGVkID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgbmV3VmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICBvYnNlcnZhYmxlID0gbmV3IENvbXB1dGVkVmFsdWUobmV3VmFsdWUsIGFkbS50YXJnZXQsIGZhbHNlLCBuYW1lKTtcbiAgICBlbHNlIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIEFzU3RydWN0dXJlICYmIHR5cGVvZiBuZXdWYWx1ZS52YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmIG5ld1ZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyBDb21wdXRlZFZhbHVlKG5ld1ZhbHVlLnZhbHVlLCBhZG0udGFyZ2V0LCB0cnVlLCBuYW1lKTtcbiAgICBlbHNlIHtcbiAgICAgICAgaXNDb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UoYWRtLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBhZG0udGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb3BOYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBhZG0ubW9kZSwgbmFtZSwgZmFsc2UpO1xuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7XG4gICAgfVxuICAgIGFkbS52YWx1ZXNbcHJvcE5hbWVdID0gb2JzZXJ2YWJsZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWRtLnRhcmdldCwgcHJvcE5hbWUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiAhaXNDb21wdXRlZCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5nZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBpc0NvbXB1dGVkXG4gICAgICAgICAgICA/IHRocm93aW5nQ29tcHV0ZWRWYWx1ZVNldHRlclxuICAgICAgICAgICAgOiBjcmVhdGVTZXR0ZXIoYWRtLCBvYnNlcnZhYmxlLCBwcm9wTmFtZSlcbiAgICB9KTtcbiAgICBpZiAoIWlzQ29tcHV0ZWQpXG4gICAgICAgIG5vdGlmeVByb3BlcnR5QWRkaXRpb24oYWRtLCBhZG0udGFyZ2V0LCBwcm9wTmFtZSwgbmV3VmFsdWUpO1xufVxuZnVuY3Rpb24gY3JlYXRlU2V0dGVyKGFkbSwgb2JzZXJ2YWJsZSwgbmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyhhZG0pKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMoYWRtKTtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnlMaXN0ZW5lcnMgfHwgaGFzTGlzdGVuZXJzID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKGFkbSwgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gbm90aWZ5UHJvcGVydHlBZGRpdGlvbihhZG0sIG9iamVjdCwgbmFtZSwgbmV3VmFsdWUpIHtcbiAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKGFkbSk7XG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICBvYmplY3Q6IG9iamVjdCwgbmFtZTogbmFtZSwgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgfSA6IG51bGw7XG4gICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICBpZiAobm90aWZ5KVxuICAgICAgICBub3RpZnlMaXN0ZW5lcnMoYWRtLCBjaGFuZ2UpO1xuICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nICYmIHRoaW5nLiRtb2J4IGluc3RhbmNlb2YgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uO1xufVxuZXhwb3J0cy5pc09ic2VydmFibGVPYmplY3QgPSBpc09ic2VydmFibGVPYmplY3Q7XG52YXIgVU5DSEFOR0VEID0ge307XG52YXIgT2JzZXJ2YWJsZVZhbHVlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2JzZXJ2YWJsZVZhbHVlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgbW9kZSwgbmFtZSwgbm90aWZ5U3B5KSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7IG5vdGlmeVNweSA9IHRydWU7IH1cbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuaGFzVW5yZXBvcnRlZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgX2EgPSBnZXRWYWx1ZU1vZGVGcm9tVmFsdWUodmFsdWUsIFZhbHVlTW9kZS5SZWN1cnNpdmUpLCBjaGlsZG1vZGUgPSBfYVswXSwgdW53cmFwcGVkVmFsdWUgPSBfYVsxXTtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmFsdWVNb2RlLlJlY3Vyc2l2ZSlcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IGNoaWxkbW9kZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG1ha2VDaGlsZE9ic2VydmFibGUodW53cmFwcGVkVmFsdWUsIHRoaXMubW9kZSwgdGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgc3B5UmVwb3J0KHsgdHlwZTogXCJjcmVhdGVcIiwgb2JqZWN0OiB0aGlzLCBuZXdWYWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpIHtcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLCBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5wcmVwYXJlTmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgYXNzZXJ0VW53cmFwcGVkKG5ld1ZhbHVlLCBcIk1vZGlmaWVycyBjYW5ub3QgYmUgdXNlZCBvbiBub24taW5pdGlhbCB2YWx1ZXMuXCIpO1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCgpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHsgb2JqZWN0OiB0aGlzLCB0eXBlOiBcInVwZGF0ZVwiLCBuZXdWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gVU5DSEFOR0VEO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoYW5nZWQgPSB2YWx1ZURpZENoYW5nZSh0aGlzLm1vZGUgPT09IFZhbHVlTW9kZS5TdHJ1Y3R1cmUsIHRoaXMudmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICByZXR1cm4gbWFrZUNoaWxkT2JzZXJ2YWJsZShuZXdWYWx1ZSwgdGhpcy5tb2RlLCB0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gVU5DSEFOR0VEO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5zZXROZXdWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICBpZiAoaGFzTGlzdGVuZXJzKHRoaXMpKVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIFtuZXdWYWx1ZSwgb2xkVmFsdWVdKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBsaXN0ZW5lcih0aGlzLnZhbHVlLCB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLnZhbHVlICsgXCJdXCI7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVZhbHVlO1xufShBdG9tKSk7XG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSkge1xuICAgICAgICAgICAgaW52YXJpYW50KHByb3BlcnR5ID09PSB1bmRlZmluZWQsIFwiSXQgaXMgbm90IHBvc3NpYmxlIHRvIGdldCBpbmRleCBhdG9tcyBmcm9tIGFycmF5c1wiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGluZy4kbW9ieC5hdG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKHRoaW5nLl9rZXlzKTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlXzEgPSB0aGluZy5fZGF0YVtwcm9wZXJ0eV0gfHwgdGhpbmcuX2hhc01hcFtwcm9wZXJ0eV07XG4gICAgICAgICAgICBpbnZhcmlhbnQoISFvYnNlcnZhYmxlXzEsIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVfMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoISFwcm9wZXJ0eSwgXCJwbGVhc2Ugc3BlY2lmeSBhIHByb3BlcnR5XCIpO1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVfMiA9IHRoaW5nLiRtb2J4LnZhbHVlc1twcm9wZXJ0eV07XG4gICAgICAgICAgICBpbnZhcmlhbnQoISFvYnNlcnZhYmxlXzIsIFwibm8gb2JzZXJ2YWJsZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgZ2V0RGVidWdOYW1lKHRoaW5nKSArIFwiJ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlXzI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpbmcgaW5zdGFuY2VvZiBBdG9tIHx8IHRoaW5nIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSB8fCB0aGluZyBpbnN0YW5jZW9mIFJlYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHRoaW5nLiRtb2J4IGluc3RhbmNlb2YgUmVhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGluZy4kbW9ieDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnZhcmlhbnQoZmFsc2UsIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpIHtcbiAgICBpbnZhcmlhbnQodGhpbmcsIFwiRXhwZWN0aW9uIHNvbWUgb2JqZWN0XCIpO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbiAgICBpZiAodGhpbmcgaW5zdGFuY2VvZiBBdG9tIHx8IHRoaW5nIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSB8fCB0aGluZyBpbnN0YW5jZW9mIFJlYWN0aW9uKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpXG4gICAgICAgIHJldHVybiB0aGluZztcbiAgICBpZiAodGhpbmcuJG1vYngpXG4gICAgICAgIHJldHVybiB0aGluZy4kbW9ieDtcbiAgICBpbnZhcmlhbnQoZmFsc2UsIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHZhciBuYW1lZDtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSk7XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAodGhpbmcpKVxuICAgICAgICBuYW1lZCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKTtcbiAgICBlbHNlXG4gICAgICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZyk7XG4gICAgcmV0dXJuIG5hbWVkLm5hbWU7XG59XG52YXIgU2ltcGxlRXZlbnRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIGRlcHJlY2F0ZWQoXCJleHRyYXMuU2ltcGxlRXZlbnRFbWl0dGVyIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXCIpO1xuICAgIH1cbiAgICBTaW1wbGVFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5zbGljZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIFNpbXBsZUV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBfdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2ltcGxlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLm9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gU2ltcGxlRXZlbnRFbWl0dGVyO1xufSgpKTtcbmV4cG9ydHMuU2ltcGxlRXZlbnRFbWl0dGVyID0gU2ltcGxlRXZlbnRFbWl0dGVyO1xudmFyIEVNUFRZX0FSUkFZID0gW107XG5PYmplY3QuZnJlZXplKEVNUFRZX0FSUkFZKTtcbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZS5tb2J4R3VpZDtcbn1cbmZ1bmN0aW9uIGludmFyaWFudChjaGVjaywgbWVzc2FnZSwgdGhpbmcpIHtcbiAgICBpZiAoIWNoZWNrKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gSW52YXJpYW50IGZhaWxlZDogXCIgKyBtZXNzYWdlICsgKHRoaW5nID8gXCIgaW4gJ1wiICsgdGhpbmcgKyBcIidcIiA6IFwiXCIpKTtcbn1cbnZhciBkZXByZWNhdGVkTWVzc2FnZXMgPSBbXTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobXNnKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRNZXNzYWdlcy5pbmRleE9mKG1zZykgIT09IC0xKVxuICAgICAgICByZXR1cm47XG4gICAgZGVwcmVjYXRlZE1lc3NhZ2VzLnB1c2gobXNnKTtcbiAgICBjb25zb2xlLmVycm9yKFwiW21vYnhdIERlcHJlY2F0ZWQ6IFwiICsgbXNnKTtcbn1cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICAgIHZhciBpbnZva2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGludm9rZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGludm9rZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbmZ1bmN0aW9uIHVuaXF1ZShsaXN0KSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAocmVzLmluZGV4T2YoaXRlbSkgPT09IC0xKVxuICAgICAgICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5mdW5jdGlvbiBvYmplY3RBc3NpZ24oKSB7XG4gICAgdmFyIHJlcyA9IGFyZ3VtZW50c1swXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSlcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJlc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB2YWx1ZURpZENoYW5nZShjb21wYXJlU3RydWN0dXJhbCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVTdHJ1Y3R1cmFsXG4gICAgICAgID8gIWRlZXBFcXVhbHMob2xkVmFsdWUsIG5ld1ZhbHVlKVxuICAgICAgICA6IG9sZFZhbHVlICE9PSBuZXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIG1ha2VOb25FbnVtZXJhYmxlKG9iamVjdCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IG9iamVjdFtwcm9wc1tpXV1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcbiAgICByZXR1cm4gIWRlc2NyaXB0b3IgfHwgKGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICE9PSBmYWxzZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlICE9PSBmYWxzZSk7XG59XG5mdW5jdGlvbiBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICBpbnZhcmlhbnQoaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApLCBcIkNhbm5vdCBtYWtlIHByb3BlcnR5ICdcIiArIHByb3AgKyBcIicgb2JzZXJ2YWJsZSwgaXQgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgd3JpdGFibGUgaW4gdGhlIHRhcmdldCBvYmplY3RcIik7XG59XG5mdW5jdGlvbiBkZWVwRXF1YWxzKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCAmJiBiID09PSBudWxsKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgdmFyIGFJc0FycmF5ID0gQXJyYXkuaXNBcnJheShhKSB8fCBpc09ic2VydmFibGVBcnJheShhKTtcbiAgICBpZiAoYUlzQXJyYXkgIT09IChBcnJheS5pc0FycmF5KGIpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KGIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFJc0FycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aDsgaSA+PSAwOyBpLS0pXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbHMoYVtpXSwgYltpXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIGEpIHtcbiAgICAgICAgICAgIGlmICghYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbHMoYVtwcm9wXSwgYltwcm9wXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cbmZ1bmN0aW9uIHF1aWNrRGlmZihjdXJyZW50LCBiYXNlKSB7XG4gICAgaWYgKCFiYXNlIHx8ICFiYXNlLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIFtjdXJyZW50LCBbXV07XG4gICAgaWYgKCFjdXJyZW50IHx8ICFjdXJyZW50Lmxlbmd0aClcbiAgICAgICAgcmV0dXJuIFtbXSwgYmFzZV07XG4gICAgdmFyIGFkZGVkID0gW107XG4gICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMCwgY3VycmVudFNlYXJjaCA9IDAsIGN1cnJlbnRMZW5ndGggPSBjdXJyZW50Lmxlbmd0aCwgY3VycmVudEV4aGF1c3RlZCA9IGZhbHNlLCBiYXNlSW5kZXggPSAwLCBiYXNlU2VhcmNoID0gMCwgYmFzZUxlbmd0aCA9IGJhc2UubGVuZ3RoLCBpc1NlYXJjaGluZyA9IGZhbHNlLCBiYXNlRXhoYXVzdGVkID0gZmFsc2U7XG4gICAgd2hpbGUgKCFiYXNlRXhoYXVzdGVkICYmICFjdXJyZW50RXhoYXVzdGVkKSB7XG4gICAgICAgIGlmICghaXNTZWFyY2hpbmcpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBjdXJyZW50TGVuZ3RoICYmIGJhc2VJbmRleCA8IGJhc2VMZW5ndGggJiYgY3VycmVudFtjdXJyZW50SW5kZXhdID09PSBiYXNlW2Jhc2VJbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgICAgICAgICBiYXNlSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSBjdXJyZW50TGVuZ3RoICYmIGJhc2VJbmRleCA9PT0gYmFzZUxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFthZGRlZCwgcmVtb3ZlZF07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50U2VhcmNoID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgYmFzZVNlYXJjaCA9IGJhc2VJbmRleDtcbiAgICAgICAgICAgIGlzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBiYXNlU2VhcmNoICs9IDE7XG4gICAgICAgIGN1cnJlbnRTZWFyY2ggKz0gMTtcbiAgICAgICAgaWYgKGJhc2VTZWFyY2ggPj0gYmFzZUxlbmd0aClcbiAgICAgICAgICAgIGJhc2VFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY3VycmVudFNlYXJjaCA+PSBjdXJyZW50TGVuZ3RoKVxuICAgICAgICAgICAgY3VycmVudEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgIGlmICghY3VycmVudEV4aGF1c3RlZCAmJiBjdXJyZW50W2N1cnJlbnRTZWFyY2hdID09PSBiYXNlW2Jhc2VJbmRleF0pIHtcbiAgICAgICAgICAgIGFkZGVkID0gYWRkZWQuY29uY2F0KGN1cnJlbnQuc2xpY2UoY3VycmVudEluZGV4LCBjdXJyZW50U2VhcmNoKSk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBjdXJyZW50U2VhcmNoICsgMTtcbiAgICAgICAgICAgIGJhc2VJbmRleCsrO1xuICAgICAgICAgICAgaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghYmFzZUV4aGF1c3RlZCAmJiBiYXNlW2Jhc2VTZWFyY2hdID09PSBjdXJyZW50W2N1cnJlbnRJbmRleF0pIHtcbiAgICAgICAgICAgIHJlbW92ZWQgPSByZW1vdmVkLmNvbmNhdChiYXNlLnNsaWNlKGJhc2VJbmRleCwgYmFzZVNlYXJjaCkpO1xuICAgICAgICAgICAgYmFzZUluZGV4ID0gYmFzZVNlYXJjaCArIDE7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgICAgIGlzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYWRkZWQuY29uY2F0KGN1cnJlbnQuc2xpY2UoY3VycmVudEluZGV4KSksXG4gICAgICAgIHJlbW92ZWQuY29uY2F0KGJhc2Uuc2xpY2UoYmFzZUluZGV4KSlcbiAgICBdO1xufVxuIl19
