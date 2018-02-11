/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:27)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m from \u001b[32m'react'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mButton\u001b[39m \u001b[33m=\u001b[39m ({children\u001b[33m,\u001b[39m \u001b[33m...\u001b[39mrest}) \u001b[33m=>\u001b[39m {\n \u001b[90m   | \u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m\t\u001b[90m// console.log(React.Children.count(children), 'count');\u001b[39m\n \u001b[90m 5 | \u001b[39m\t\u001b[36mreturn\u001b[39m (\n \u001b[90m 6 | \u001b[39m\t\t\u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m {\u001b[33m...\u001b[39mrest}\u001b[33m>\u001b[39m{children}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _main = __webpack_require__(2);

var _main2 = _interopRequireDefault(_main);

var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index = __webpack_require__(10);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = (0, _store2.default)(_index.reducers);
console.log('Hello World');
(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: Store },
  _react2.default.createElement(_main2.default, null)
), document.getElementById('root'));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _eventList = __webpack_require__(3);

var _eventList2 = _interopRequireDefault(_eventList);

var _sortHelper = __webpack_require__(5);

var _header = __webpack_require__(6);

var _header2 = _interopRequireDefault(_header);

var _aside = __webpack_require__(7);

var _aside2 = _interopRequireDefault(_aside);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      selectedFilter: localStorage.getItem('/filter-' + props.location),
      selectedSorting: localStorage.getItem('/sort-' + props.location),
      sortedEvents: undefined
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var location = this.props.location;

      if (nextProps.location !== location) {
        this.setState({
          sortedEvents: undefined,
          selectedFilter: localStorage.getItem('/filter-' + nextProps.location),
          selectedSorting: localStorage.getItem('/sort-' + nextProps.location)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          events = _props.events,
          location = _props.location,
          updateState = _props.updateState,
          addToFavorites = _props.addToFavorites;
      var _state = this.state,
          sortedEvents = _state.sortedEvents,
          selectedFilter = _state.selectedFilter,
          selectedSorting = _state.selectedSorting;

      var eventsList = sortedEvents || events;
      if (selectedSorting) eventsList.sort((0, _sortHelper.sortPrice)(selectedSorting));
      if (selectedFilter) eventsList = eventsList.filter(function (event) {
        return event.type === selectedFilter;
      });
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'div',
          { className: 'reducer' },
          _react2.default.createElement(_header2.default, { updateState: updateState, location: location }),
          _react2.default.createElement(_aside2.default, {
            selectedSorting: selectedSorting,
            selectedFilter: selectedFilter,
            addFilter: function addFilter(_ref) {
              var data = _ref.data;

              _this2.setState({ selectedFilter: data });
              localStorage.setItem('/filter-' + location, data);
            },
            addSort: function addSort(_ref2) {
              var data = _ref2.data;

              _this2.setState({ selectedSorting: data });
              localStorage.setItem('/sort-' + location, data);
            },
            searchInfo: function searchInfo(_ref3) {
              var data = _ref3.data;
              return _this2.setState({
                sortedEvents: events.filter(function (event) {
                  return event.title.toLowerCase().includes(data.toLowerCase()) || event.description.toLowerCase().includes(data.toLowerCase());
                })
              });
            }
          }),
          _react2.default.createElement(_eventList2.default, {
            events: eventsList,
            addToFavorites: addToFavorites
          })
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

function mapStateToProps(state) {
  return {
    events: state.req.location === 'Events' ? state.req.events : state.req.events.filter(function (event, i) {
      return event.favorite === true;
    }),
    location: state.req.location
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateState: function updateState(data) {
      return dispatch({ type: 'UPDATE_STATE', data: data });
    },
    addToFavorites: function addToFavorites(data) {
      return dispatch({ type: 'ADD_TO_FAVORITES', data: data });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _eventCard = __webpack_require__(4);

var _eventCard2 = _interopRequireDefault(_eventCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventList = function EventList(_ref) {
  var events = _ref.events,
      updateState = _ref.updateState,
      isModalOpen = _ref.isModalOpen,
      addToFavorites = _ref.addToFavorites;

  var list = events.map(function (event, i) {
    return _react2.default.createElement(_eventCard2.default, { addToFavorites: addToFavorites, key: i, card: event });
  });
  return _react2.default.createElement(
    'div',
    { className: 'event-list' },
    list
  );
};

exports.default = EventList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(0);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventCard = function EventCard(_ref) {
  var card = _ref.card,
      updateState = _ref.updateState,
      isModalOpen = _ref.isModalOpen,
      addToFavorites = _ref.addToFavorites;

  return _react2.default.createElement(
    'div',
    { className: 'event-card' },
    _react2.default.createElement(
      'div',
      { className: 'event-card_content' },
      _react2.default.createElement(
        'h1',
        { className: 'event-name' },
        card.title
      ),
      _react2.default.createElement(
        'span',
        { className: 'event-price' },
        '\u20BD ',
        card.price
      ),
      _react2.default.createElement(
        _button2.default,
        {
          className: card.favorite ? 'favorites-button fav' : 'favorites-button',
          onClick: function onClick() {
            return addToFavorites(card);
          } },
        '\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'event-description' },
      card.description
    )
  );
};

exports.default = EventCard;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sortPrice = exports.sortPrice = function sortPrice() {
  var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'asc';

  return function compareAge(eventA, eventB) {
    var sorted = [];
    sorted = eventA.price - eventB.price;
    return order === 'asc' ? sorted * 1 : sorted * -1;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var updateState = _ref.updateState,
      location = _ref.location;

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'span',
      {
        className: location === 'Events' ? 'link header-link_active' : 'link header-link',
        onClick: function onClick() {
          localStorage.setItem('location', 'Events');
          updateState({ location: 'Events' });
        }
      },
      '\u0421\u043E\u0431\u044B\u0442\u0438\u044F'
    ),
    _react2.default.createElement(
      'span',
      {
        className: location === 'Favorites' ? 'link header-link_active' : 'link header-link',
        onClick: function onClick() {
          localStorage.setItem('location', 'Favorites');
          updateState({ location: 'Favorites' });
        }
      },
      '\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435'
    )
  );
};

exports.default = Header;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(0);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(8);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aside = function Aside(_ref) {
  var addFilter = _ref.addFilter,
      addSort = _ref.addSort,
      searchInfo = _ref.searchInfo,
      selectedSorting = _ref.selectedSorting,
      selectedFilter = _ref.selectedFilter;

  return _react2.default.createElement(
    'div',
    { className: 'aside' },
    _react2.default.createElement(
      'div',
      { className: 'aside_backgound' },
      _react2.default.createElement(
        'div',
        { className: 'aside_content' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            '\u0424\u0438\u043B\u044C\u0442\u0440'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              className: selectedFilter === 'exhibition' ? 'fav' : '',
              onClick: function onClick() {
                return addFilter({ data: 'exhibition' });
              }
            },
            '\u0412\u044B\u0441\u0442\u0430\u0432\u043A\u0438'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              className: selectedFilter === 'concert' ? 'fav' : '',
              onClick: function onClick() {
                return addFilter({ data: 'concert' });
              }
            },
            '\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u044B'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              className: !selectedFilter ? 'fav' : '',
              onClick: function onClick() {
                return addFilter({ data: '' });
              }
            },
            '\u0412\u0441\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0446\u0435\u043D\u0443'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              className: selectedSorting === 'asc' ? 'fav' : '',
              onClick: function onClick() {
                return addSort({ data: 'asc' });
              } },
            '\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E'
          ),
          _react2.default.createElement(
            _button2.default,
            {
              className: selectedSorting === 'desc' ? 'fav' : '',
              onClick: function onClick() {
                return addSort({ data: 'desc' });
              }
            },
            '\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            '\u041F\u043E\u0438\u0441\u043A'
          ),
          _react2.default.createElement(_input2.default, { onChange: function onChange(e) {
              return searchInfo({ data: e.target.value });
            } })
        )
      )
    )
  );
};

exports.default = Aside;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (3:24)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m from \u001b[32m'react'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 2 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mInput\u001b[39m \u001b[33m=\u001b[39m ({ value\u001b[33m,\u001b[39m \u001b[33m...\u001b[39mrest }) \u001b[33m=>\u001b[39m {\n \u001b[90m   | \u001b[39m                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 4 | \u001b[39m\t\u001b[36mreturn\u001b[39m (\n \u001b[90m 5 | \u001b[39m\t\t\u001b[33m<\u001b[39m\u001b[33minput\u001b[39m { \u001b[33m...\u001b[39mrest } value\u001b[33m=\u001b[39m{value} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 6 | \u001b[39m\t)\u001b[0m\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\n|   margin: 0;\n|   padding: 0;");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var reducers = (0, _redux.combineReducers)({
  req: __webpack_require__(11).reducer
}); // const initialState = {
//   user: 'Unknown User',
//   data: data
// };

// export default function udateState(state = initialState, { data }) {
// 	console.log(data, 'FUCKING DATA')
//   return { ...state, data }
// }

exports.reducers = reducers;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (92:12)\n\n\u001b[0m \u001b[90m 90 | \u001b[39m\n \u001b[90m 91 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m updateState \u001b[33m=\u001b[39m (state\u001b[33m,\u001b[39m { data }) \u001b[33m=>\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 92 | \u001b[39m  \t\u001b[36mreturn\u001b[39m { \u001b[33m...\u001b[39mstate\u001b[33m,\u001b[39m \u001b[33m...\u001b[39mdata }\n \u001b[90m    | \u001b[39m  \t         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 93 | \u001b[39m}\n \u001b[90m 94 | \u001b[39m\n \u001b[90m 95 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m addToFavorites \u001b[33m=\u001b[39m (state\u001b[33m,\u001b[39m { data }) \u001b[33m=>\u001b[39m {\u001b[0m\n");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"redux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

// import { reducers } from './reducers/index.js'

var configureStore = function configureStore(reducers) {
  var reduxStore = (0, _redux.createStore)(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return reduxStore;
};

exports.default = configureStore;

/***/ })
/******/ ]);