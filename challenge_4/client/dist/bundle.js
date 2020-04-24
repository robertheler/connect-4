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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar App = function App() {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Board, null));\n};\n\nvar Board = /*#__PURE__*/function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  var _super = _createSuper(Board);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _super.call(this, props); // red player = 1, yellow player = 2, 0 = empty\n    //let row = new Array(7).fill(0);\n    //let board = new Array(6).fill(row);\n\n    var board = [];\n\n    for (var i = 0; i < 6; i++) {\n      board[i] = [];\n\n      for (var j = 0; j < 7; j++) {\n        board[i][j] = 0;\n      }\n    } //board[5][3] = 1;\n\n\n    _this.state = {\n      board: board,\n      player: 1,\n      score: {\n        first: 0,\n        second: 0\n      }\n    };\n\n    _this.reset();\n\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));\n    document.getElementById('button').addEventListener('click', function (event) {\n      _this.reset();\n    });\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"handleClick\",\n    value: function handleClick(row, column) {\n      var actualRow = this.placePiece(column); //console.log(actualRow);\n\n      if (actualRow >= 0) {\n        this.checkVictory(actualRow, column);\n      }\n\n      this.togglePlayer();\n    } // return indeces of winning columns\n    // false otherwise\n\n  }, {\n    key: \"checkRow\",\n    value: function checkRow(row, column) {\n      var board = this.state.board;\n      var player = this.state.player;\n      if (board[row][column - 3] * board[row][column - 2] * board[row][column - 1] * board[row][column] === Math.pow(player, 4)) return [[row, column - 3], [row, column - 2], [row, column - 1], [row, column]];\n      if (board[row][column - 2] * board[row][column - 1] * board[row][column] * board[row][column + 1] === Math.pow(player, 4)) return [[row, column - 2], [row, column - 1], [row, column], [row, column + 1]];\n      if (board[row][column - 1] * board[row][column] * board[row][column + 1] * board[row][column + 2] === Math.pow(player, 4)) return [[row, column - 1], [row, column], [row, column + 1], [row, column + 2]];\n      if (board[row][column] * board[row][column + 1] * board[row][column + 2] * board[row][column + 3] === Math.pow(player, 4)) return [[row, column], [row, column + 1], [row, column + 2], [row, column + 3]];\n      return false;\n    }\n  }, {\n    key: \"checkColumn\",\n    value: function checkColumn(row, column) {\n      var board = this.state.board;\n      var player = this.state.player;\n      if (board[row - 3] && board[row] && board[row - 3][column] * board[row - 2][column] * board[row - 1][column] * board[row][column] === Math.pow(player, 4)) return [[row - 3, column], [row - 2, column], [row - 1, column], [row, column]];\n      if (board[row - 2] && board[row + 1] && board[row - 2][column] * board[row - 1][column] * board[row][column] * board[row + 1][column] === Math.pow(player, 4)) return [[row - 2, column], [row - 1, column], [row, column], [row + 1, column]];\n      if (board[row - 1] && board[row + 2] && board[row - 1][column] * board[row][column] * board[row + 1][column] * board[row + 2][column] === Math.pow(player, 4)) return [[row - 1, column], [row, column], [row + 1, column], [row + 2, column]];\n      if (board[row] && board[row + 3] && board[row][column] * board[row + 1][column] * board[row + 2][column] * board[row + 3][column] === Math.pow(player, 4)) return [[row, column], [row + 1, column], [row + 2, column], [row + 3, column]];\n      return false;\n    }\n  }, {\n    key: \"checkMajorDiagonal\",\n    value: function checkMajorDiagonal(row, column) {\n      var board = this.state.board;\n      var player = this.state.player; //console.log(board);\n      //major diagonal\n\n      if (board[row - 3] && board[row] && board[row - 3][column - 3] * board[row - 2][column - 2] * board[row - 1][column - 1] * board[row][column] === Math.pow(player, 4)) return [[row - 3, column - 3], [row - 2, column - 2], [row - 1, column - 1], [row, column]];\n      if (board[row - 2] && board[row + 1] && board[row - 2][column - 2] * board[row - 1][column - 1] * board[row][column] * board[row + 1][column + 1] === Math.pow(player, 4)) return [[row - 2, column - 2], [row - 1, column - 1], [row, column], [row + 1, column + 1]];\n      if (board[row - 1] && board[row + 2] && board[row - 1][column - 1] * board[row][column] * board[row + 1][column + 1] * board[row + 2][column + 2] === Math.pow(player, 4)) return [[row - 1, column - 1], [row, column], [row + 1, column + 1], [row + 2, column + 2]];\n      if (board[row] && board[row + 3] && board[row][column] * board[row + 1][column + 1] * board[row + 2][column + 2] * board[row + 3][column + 3] === Math.pow(player, 4)) return [[row, column], [row + 1, column + 1], [row + 2, column + 2], [row + 3, column + 3]];\n      return false;\n    }\n  }, {\n    key: \"checkMinorDiagonal\",\n    value: function checkMinorDiagonal(row, column) {\n      var board = this.state.board;\n      var player = this.state.player;\n      if (board[row - 3] && board[row] && board[row - 3][column + 3] * board[row - 2][column + 2] * board[row - 1][column + 1] * board[row][column] === Math.pow(player, 4)) return [[row - 3, column + 3], [row - 2, column + 2], [row - 1, column + 1], [row, column]];\n      if (board[row - 2] && board[row + 1] && board[row - 2][column + 2] * board[row - 1][column + 1] * board[row][column] * board[row + 1][column - 1] === Math.pow(player, 4)) return [[row - 2, column + 2], [row - 1, column + 1], [row, column], [row + 1, column - 1]];\n      if (board[row - 1] && board[row + 2] && board[row - 1][column + 1] * board[row][column] * board[row + 1][column - 1] * board[row + 2][column - 2] === Math.pow(player, 4)) return [[row - 1, column + 1], [row, column], [row + 1, column - 1], [row + 2, column - 2]];\n      if (board[row] && board[row + 3] && board[row][column] * board[row + 1][column - 1] * board[row + 2][column - 2] * board[row + 3][column - 3] === Math.pow(player, 4)) return [[row, column], [row + 1, column - 1], [row + 2, column - 2], [row + 3, column - 3]];\n      return false;\n    }\n  }, {\n    key: \"checkVictory\",\n    value: function checkVictory(row, column) {\n      if (this.checkRow(row, Number(column))) {\n        this.declareVictory(this.checkRow(row, Number(column)));\n      }\n\n      if (this.checkColumn(row, Number(column))) {\n        this.declareVictory(this.checkColumn(row, Number(column)));\n      }\n\n      if (this.checkMajorDiagonal(row, Number(column))) {\n        this.declareVictory(this.checkMajorDiagonal(row, Number(column)));\n      }\n\n      if (this.checkMinorDiagonal(row, Number(column))) {\n        this.declareVictory(this.checkMinorDiagonal(row, Number(column)));\n      }\n    } //coordinates of the winning peices in [row, col] tuples\n\n  }, {\n    key: \"declareVictory\",\n    value: function declareVictory(coordinates) {\n      //console.log(coordinates);\n      //alert('victtry!');\n      var shadow;\n      var player = this.state.player;\n\n      if (player === 1) {\n        this.state.score.first++;\n        shadow = \"inset 10px 10px 10px #831f0c,\\n                    inset -10px -10px 10px #b92b10,\\n                    5px 5px 10px #831f0c,\\n                    -5px -5px 10px #b92b10\";\n      } else {\n        this.state.score.second++;\n        shadow = \"inset 10px 10px 10px  #b39700,\\n                inset -10px -10px 10px #fdd500,\\n                5px 5px 10px #b39700,\\n                -5px -5px 10px #fdd500\";\n      }\n\n      var _iterator = _createForOfIteratorHelper(coordinates),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var coordinate = _step.value;\n          var location = '' + coordinate[0] + coordinate[1];\n          console.log(location);\n          var piece = document.querySelector(\"[location=\\\"\".concat(location, \"\\\"]\")); //piece.style.boxShadow = shadow;\n          //piece.style.border = '2px solid black';\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      document.getElementById('first').innerHTML = \"Player 1: \".concat(this.state.score.first);\n      document.getElementById('second').innerHTML = \"Player 2: \".concat(this.state.score.second);\n      document.getElementById('turn').innerHTML = \"Player \".concat(player, \" won! Play again!\"); //alert(`Player ${player} won! Click okay to play again! `);\n      //console.log('this.state.score', this.state.score);\n\n      document.getElementById('button').style.opacity = 1;\n      document.getElementById('app').style.pointerEvents = 'none';\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      var newBoard = [];\n\n      for (var i = 0; i < 6; i++) {\n        newBoard[i] = [];\n\n        for (var j = 0; j < 7; j++) {\n          newBoard[i][j] = 0;\n        }\n      }\n\n      this.setState({\n        board: newBoard\n      });\n      this.setState({\n        player: 1\n      });\n      document.getElementById('button').style.opacity = 0;\n      document.getElementById('turn').innerHTML = \"Player 1 you're up!\";\n      document.getElementById('app').style.pointerEvents = 'auto';\n    } //returns row where piece placed\n\n  }, {\n    key: \"placePiece\",\n    value: function placePiece(column) {\n      for (var row = 5; row >= 0; row--) {\n        if (this.state.board[row][column] === 0) {\n          this.state.board[row][column] = this.state.player;\n          return row;\n        }\n      }\n\n      return false;\n    }\n  }, {\n    key: \"togglePlayer\",\n    value: function togglePlayer() {\n      if (this.state.player === 1) {\n        this.setState({\n          player: 2\n        });\n        document.getElementById('turn').innerHTML = \"Player 2 you're up!\"; //this.state.player = 2;\n      } else {\n        this.setState({\n          player: 1\n        });\n        document.getElementById('turn').innerHTML = \"Player 1 you're up!\";\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var circles = [];\n\n      for (var i = 0; i < 6; i++) {\n        for (var j = 0; j < 7; j++) {\n          circles.push( /*#__PURE__*/React.createElement(Circle, {\n            row: i,\n            column: j,\n            occupancy: this.state.board[i][j],\n            onClick: this.handleClick\n          }));\n        }\n      }\n\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"board\"\n      }, circles);\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\nvar Circle = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Circle, _React$Component2);\n\n  var _super2 = _createSuper(Circle);\n\n  function Circle(props) {\n    var _this2;\n\n    _classCallCheck(this, Circle);\n\n    _this2 = _super2.call(this, props);\n    _this2.state = {\n      hover: false\n    };\n    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));\n    _this2.handleHover = _this2.handleHover.bind(_assertThisInitialized(_this2));\n    _this2.handleUnHover = _this2.handleUnHover.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(Circle, [{\n    key: \"handleUnHover\",\n    value: function handleUnHover(event) {\n      var column = event.currentTarget.getAttribute('column');\n      var wholeColumn = document.querySelectorAll(\"[column=\\\"\".concat(column, \"\\\"]\"));\n      wholeColumn.forEach(function (circle) {\n        return circle.style.border = \"\";\n      });\n    }\n  }, {\n    key: \"handleHover\",\n    value: function handleHover(event) {\n      var column = event.currentTarget.getAttribute('column');\n      var wholeColumn = document.querySelectorAll(\"[column=\\\"\".concat(column, \"\\\"]\"));\n      wholeColumn.forEach(function (circle) {\n        return circle.style.border = \"1px solid gray\";\n      });\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      var row = event.currentTarget.getAttribute('row');\n      var column = event.currentTarget.getAttribute('column');\n      this.props.onClick(row, column);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        id: \"color\".concat(this.props.occupancy),\n        onClick: this.handleClick //onMouseEnter={this.handleHover}\n        //onMouseLeave={this.handleUnHover}\n        ,\n        row: this.props.row,\n        column: this.props.column,\n        location: \"\".concat(this.props.row).concat(this.props.column)\n      });\n    }\n  }]);\n\n  return Circle;\n}(React.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+ICg8ZGl2PjxCb2FyZCAvPjwvZGl2Pik7XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVkIHBsYXllciA9IDEsIHllbGxvdyBwbGF5ZXIgPSAyLCAwID0gZW1wdHlcbiAgICAvL2xldCByb3cgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgICAvL2xldCBib2FyZCA9IG5ldyBBcnJheSg2KS5maWxsKHJvdyk7XG4gICAgdmFyIGJvYXJkID0gW107XG4gICAgZm9yKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MDsgajw3OyBqKyspIHtcbiAgICAgICAgICBib2FyZFtpXVtqXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC8vYm9hcmRbNV1bM10gPSAxO1xuICAgIHRoaXMuc3RhdGUgPSB7Ym9hcmQ6IGJvYXJkLCBwbGF5ZXI6IDEsIHNjb3JlOiB7Zmlyc3Q6IDAsIHNlY29uZDogMH19O1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgaGFuZGxlQ2xpY2socm93LCBjb2x1bW4pIHtcbiAgICBsZXQgYWN0dWFsUm93ID0gdGhpcy5wbGFjZVBpZWNlKGNvbHVtbik7XG4gICAgLy9jb25zb2xlLmxvZyhhY3R1YWxSb3cpO1xuICAgIGlmIChhY3R1YWxSb3cgPj0gMCkge1xuICAgICAgdGhpcy5jaGVja1ZpY3RvcnkoYWN0dWFsUm93LCBjb2x1bW4pO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVBsYXllcigpO1xuICB9XG5cblxuICAvLyByZXR1cm4gaW5kZWNlcyBvZiB3aW5uaW5nIGNvbHVtbnNcbiAgLy8gZmFsc2Ugb3RoZXJ3aXNlXG4gIGNoZWNrUm93KHJvdywgY29sdW1uKSB7XG4gICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZDtcbiAgICBsZXQgcGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXI7XG5cbiAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW4tM10gKiBib2FyZFtyb3ddW2NvbHVtbi0yXSAqIGJvYXJkW3Jvd11bY29sdW1uLTFdICogYm9hcmRbcm93XVtjb2x1bW5dID09PSBwbGF5ZXIqKjQpXG4gICAgICByZXR1cm4gW1tyb3csIGNvbHVtbi0zXSwgW3JvdywgY29sdW1uLTJdLCBbcm93LCBjb2x1bW4tMV0sIFtyb3csIGNvbHVtbl1dO1xuXG4gICAgaWYgKGJvYXJkW3Jvd11bY29sdW1uLTJdICogYm9hcmRbcm93XVtjb2x1bW4tMV0gKiBib2FyZFtyb3ddW2NvbHVtbl0gKiBib2FyZFtyb3ddW2NvbHVtbisxXSA9PT0gcGxheWVyKio0KVxuICAgICAgcmV0dXJuIFtbcm93LCBjb2x1bW4tMl0sIFtyb3csIGNvbHVtbi0xXSwgW3JvdywgY29sdW1uXSwgW3JvdywgY29sdW1uKzFdXTtcblxuICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbi0xXSAqIGJvYXJkW3Jvd11bY29sdW1uXSAqIGJvYXJkW3Jvd11bY29sdW1uKzFdICogYm9hcmRbcm93XVtjb2x1bW4rMl0gPT09IHBsYXllcioqNClcbiAgICAgIHJldHVybiBbW3JvdywgY29sdW1uLTFdLCBbcm93LCBjb2x1bW5dLCBbcm93LCBjb2x1bW4rMV0sIFtyb3csIGNvbHVtbisyXV07XG5cbiAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW5dICogYm9hcmRbcm93XVtjb2x1bW4rMV0gKiBib2FyZFtyb3ddW2NvbHVtbisyXSAqIGJvYXJkW3Jvd11bY29sdW1uKzNdID09PSBwbGF5ZXIqKjQpXG4gICAgICByZXR1cm4gW1tyb3csIGNvbHVtbl0sIFtyb3csIGNvbHVtbisxXSwgW3JvdywgY29sdW1uKzJdLCBbcm93LCBjb2x1bW4rM11dO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tDb2x1bW4ocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGxldCBwbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllcjtcblxuICAgIGlmICgoYm9hcmRbcm93LTNdKSAmJiAoYm9hcmRbcm93XSkgJiYgKGJvYXJkW3Jvdy0zXVtjb2x1bW5dICogYm9hcmRbcm93LTJdW2NvbHVtbl0gKiBib2FyZFtyb3ctMV1bY29sdW1uXSAqIGJvYXJkW3Jvd11bY29sdW1uXSA9PT0gcGxheWVyKio0KSlcbiAgICAgIHJldHVybiBbW3Jvdy0zLCBjb2x1bW5dLCBbcm93LTIsIGNvbHVtbl0sIFtyb3ctMSwgY29sdW1uXSwgW3JvdywgY29sdW1uXV07XG5cbiAgICBpZiAoKGJvYXJkW3Jvdy0yXSkgJiYgKGJvYXJkW3JvdysxXSkgJiYgKGJvYXJkW3Jvdy0yXVtjb2x1bW5dICogYm9hcmRbcm93LTFdW2NvbHVtbl0gKiBib2FyZFtyb3ddW2NvbHVtbl0gKiBib2FyZFtyb3crMV1bY29sdW1uXSA9PT0gcGxheWVyKio0KSlcbiAgICAgIHJldHVybiBbW3Jvdy0yLCBjb2x1bW5dLCBbcm93LTEsIGNvbHVtbl0sIFtyb3csIGNvbHVtbl0sIFtyb3crMSwgY29sdW1uXV07XG5cbiAgICBpZiAoKGJvYXJkW3Jvdy0xXSkgJiYgKGJvYXJkW3JvdysyXSkgJiYgKGJvYXJkW3Jvdy0xXVtjb2x1bW5dICogYm9hcmRbcm93XVtjb2x1bW5dICogYm9hcmRbcm93KzFdW2NvbHVtbl0gKiBib2FyZFtyb3crMl1bY29sdW1uXSA9PT0gcGxheWVyKio0KSlcbiAgICAgIHJldHVybiBbW3Jvdy0xLCBjb2x1bW5dLCBbcm93LCBjb2x1bW5dLCBbcm93KzEsIGNvbHVtbl0sIFtyb3crMiwgY29sdW1uXV07XG5cbiAgICBpZiAoKGJvYXJkW3Jvd10pICYmIChib2FyZFtyb3crM10pJiYgKGJvYXJkW3Jvd11bY29sdW1uXSAqIGJvYXJkW3JvdysxXVtjb2x1bW5dICogYm9hcmRbcm93KzJdW2NvbHVtbl0gKiBib2FyZFtyb3crM11bY29sdW1uXSA9PT0gcGxheWVyKio0KSlcbiAgICAgIHJldHVybiBbW3JvdywgY29sdW1uXSwgW3JvdysxLCBjb2x1bW5dLCBbcm93KzIsIGNvbHVtbl0sIFtyb3crMywgY29sdW1uXV07XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjaGVja01ham9yRGlhZ29uYWwocm93LCBjb2x1bW4pIHtcbiAgICBsZXQgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGxldCBwbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllcjtcbiAgICAvL2NvbnNvbGUubG9nKGJvYXJkKTtcbiAgICAvL21ham9yIGRpYWdvbmFsXG4gICAgaWYgKChib2FyZFtyb3ctM10pICYmIChib2FyZFtyb3ddKSAmJiAoYm9hcmRbcm93LTNdW2NvbHVtbi0zXSAqIGJvYXJkW3Jvdy0yXVtjb2x1bW4tMl0gKiBib2FyZFtyb3ctMV1bY29sdW1uLTFdICogYm9hcmRbcm93XVtjb2x1bW5dID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTMsIGNvbHVtbi0zXSwgW3Jvdy0yLCBjb2x1bW4tMl0sIFtyb3ctMSwgY29sdW1uLTFdLCBbcm93LCBjb2x1bW5dXTtcblxuICAgIGlmICgoYm9hcmRbcm93LTJdKSAmJiAoYm9hcmRbcm93KzFdKSAmJiAoYm9hcmRbcm93LTJdW2NvbHVtbi0yXSAqIGJvYXJkW3Jvdy0xXVtjb2x1bW4tMV0gKiBib2FyZFtyb3ddW2NvbHVtbl0gKiBib2FyZFtyb3crMV1bY29sdW1uKzFdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTIsIGNvbHVtbi0yXSwgW3Jvdy0xLCBjb2x1bW4tMV0sIFtyb3csIGNvbHVtbl0sIFtyb3crMSwgY29sdW1uKzFdXTtcblxuICAgIGlmICgoYm9hcmRbcm93LTFdKSAmJiAoYm9hcmRbcm93KzJdKSAmJiAoYm9hcmRbcm93LTFdW2NvbHVtbi0xXSAqIGJvYXJkW3Jvd11bY29sdW1uXSAqIGJvYXJkW3JvdysxXVtjb2x1bW4rMV0gKiBib2FyZFtyb3crMl1bY29sdW1uKzJdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTEsIGNvbHVtbi0xXSwgW3JvdywgY29sdW1uXSwgW3JvdysxLCBjb2x1bW4rMV0sIFtyb3crMiwgY29sdW1uKzJdXTtcblxuICAgIGlmICgoYm9hcmRbcm93XSkgJiYgKGJvYXJkW3JvdyszXSkmJiAoYm9hcmRbcm93XVtjb2x1bW5dICogYm9hcmRbcm93KzFdW2NvbHVtbisxXSAqIGJvYXJkW3JvdysyXVtjb2x1bW4rMl0gKiBib2FyZFtyb3crM11bY29sdW1uKzNdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LCBjb2x1bW5dLCBbcm93KzEsIGNvbHVtbisxXSwgW3JvdysyLCBjb2x1bW4rMl0sIFtyb3crMywgY29sdW1uKzNdXTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrTWlub3JEaWFnb25hbChyb3csIGNvbHVtbikge1xuICAgIGxldCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgbGV0IHBsYXllciA9IHRoaXMuc3RhdGUucGxheWVyO1xuXG4gICAgaWYgKChib2FyZFtyb3ctM10pICYmIChib2FyZFtyb3ddKSAmJiAoYm9hcmRbcm93LTNdW2NvbHVtbiszXSAqIGJvYXJkW3Jvdy0yXVtjb2x1bW4rMl0gKiBib2FyZFtyb3ctMV1bY29sdW1uKzFdICogYm9hcmRbcm93XVtjb2x1bW5dID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTMsIGNvbHVtbiszXSwgW3Jvdy0yLCBjb2x1bW4rMl0sIFtyb3ctMSwgY29sdW1uKzFdLCBbcm93LCBjb2x1bW5dXTtcblxuICAgIGlmICgoYm9hcmRbcm93LTJdKSAmJiAoYm9hcmRbcm93KzFdKSAmJiAoYm9hcmRbcm93LTJdW2NvbHVtbisyXSAqIGJvYXJkW3Jvdy0xXVtjb2x1bW4rMV0gKiBib2FyZFtyb3ddW2NvbHVtbl0gKiBib2FyZFtyb3crMV1bY29sdW1uLTFdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTIsIGNvbHVtbisyXSwgW3Jvdy0xLCBjb2x1bW4rMV0sIFtyb3csIGNvbHVtbl0sIFtyb3crMSwgY29sdW1uLTFdXTtcblxuICAgIGlmICgoYm9hcmRbcm93LTFdKSAmJiAoYm9hcmRbcm93KzJdKSAmJiAoYm9hcmRbcm93LTFdW2NvbHVtbisxXSAqIGJvYXJkW3Jvd11bY29sdW1uXSAqIGJvYXJkW3JvdysxXVtjb2x1bW4tMV0gKiBib2FyZFtyb3crMl1bY29sdW1uLTJdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LTEsIGNvbHVtbisxXSwgW3JvdywgY29sdW1uXSwgW3JvdysxLCBjb2x1bW4tMV0sIFtyb3crMiwgY29sdW1uLTJdXTtcblxuICAgIGlmICgoYm9hcmRbcm93XSkgJiYgKGJvYXJkW3JvdyszXSkmJiAoYm9hcmRbcm93XVtjb2x1bW5dICogYm9hcmRbcm93KzFdW2NvbHVtbi0xXSAqIGJvYXJkW3JvdysyXVtjb2x1bW4tMl0gKiBib2FyZFtyb3crM11bY29sdW1uLTNdID09PSBwbGF5ZXIqKjQpKVxuICAgICAgcmV0dXJuIFtbcm93LCBjb2x1bW5dLCBbcm93KzEsIGNvbHVtbi0xXSwgW3JvdysyLCBjb2x1bW4tMl0sIFtyb3crMywgY29sdW1uLTNdXTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrVmljdG9yeShyb3csIGNvbHVtbikge1xuICAgIGlmKHRoaXMuY2hlY2tSb3cocm93LCBOdW1iZXIoY29sdW1uKSkpIHtcbiAgICAgIHRoaXMuZGVjbGFyZVZpY3RvcnkodGhpcy5jaGVja1Jvdyhyb3csIE51bWJlcihjb2x1bW4pKSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja0NvbHVtbihyb3csIE51bWJlcihjb2x1bW4pKSkge1xuICAgICAgdGhpcy5kZWNsYXJlVmljdG9yeSh0aGlzLmNoZWNrQ29sdW1uKHJvdywgTnVtYmVyKGNvbHVtbikpKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNoZWNrTWFqb3JEaWFnb25hbChyb3csIE51bWJlcihjb2x1bW4pKSkge1xuICAgICAgdGhpcy5kZWNsYXJlVmljdG9yeSh0aGlzLmNoZWNrTWFqb3JEaWFnb25hbChyb3csIE51bWJlcihjb2x1bW4pKSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja01pbm9yRGlhZ29uYWwocm93LCBOdW1iZXIoY29sdW1uKSkpIHtcbiAgICAgIHRoaXMuZGVjbGFyZVZpY3RvcnkodGhpcy5jaGVja01pbm9yRGlhZ29uYWwocm93LCBOdW1iZXIoY29sdW1uKSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy9jb29yZGluYXRlcyBvZiB0aGUgd2lubmluZyBwZWljZXMgaW4gW3JvdywgY29sXSB0dXBsZXNcbiAgZGVjbGFyZVZpY3RvcnkoY29vcmRpbmF0ZXMpIHtcbiAgICAvL2NvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAvL2FsZXJ0KCd2aWN0dHJ5IScpO1xuICAgIGxldCBzaGFkb3c7XG4gICAgbGV0IHBsYXllciA9IHRoaXMuc3RhdGUucGxheWVyO1xuXG4gICAgaWYgKHBsYXllciA9PT0gMSkge1xuICAgICAgdGhpcy5zdGF0ZS5zY29yZS5maXJzdCsrO1xuICAgICAgICAgIHNoYWRvdyA9IGBpbnNldCAxMHB4IDEwcHggMTBweCAjODMxZjBjLFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAtMTBweCAtMTBweCAxMHB4ICNiOTJiMTAsXG4gICAgICAgICAgICAgICAgICAgIDVweCA1cHggMTBweCAjODMxZjBjLFxuICAgICAgICAgICAgICAgICAgICAtNXB4IC01cHggMTBweCAjYjkyYjEwYFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNjb3JlLnNlY29uZCsrO1xuICAgICAgc2hhZG93ID0gYGluc2V0IDEwcHggMTBweCAxMHB4ICAjYjM5NzAwLFxuICAgICAgICAgICAgICAgIGluc2V0IC0xMHB4IC0xMHB4IDEwcHggI2ZkZDUwMCxcbiAgICAgICAgICAgICAgICA1cHggNXB4IDEwcHggI2IzOTcwMCxcbiAgICAgICAgICAgICAgICAtNXB4IC01cHggMTBweCAjZmRkNTAwYFxuICAgIH1cbiAgICBmb3IgKGxldCBjb29yZGluYXRlIG9mIGNvb3JkaW5hdGVzKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSAnJyArIGNvb3JkaW5hdGVbMF0gKyBjb29yZGluYXRlWzFdO1xuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgICAgbGV0IHBpZWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2xvY2F0aW9uPVwiJHtsb2NhdGlvbn1cIl1gKTtcblxuICAgICAgLy9waWVjZS5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3c7XG4gICAgICAvL3BpZWNlLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgYmxhY2snO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QnKS5pbm5lckhUTUwgPSBgUGxheWVyIDE6ICR7dGhpcy5zdGF0ZS5zY29yZS5maXJzdH1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmQnKS5pbm5lckhUTUwgPSBgUGxheWVyIDI6ICR7dGhpcy5zdGF0ZS5zY29yZS5zZWNvbmR9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybicpLmlubmVySFRNTCA9IGBQbGF5ZXIgJHtwbGF5ZXJ9IHdvbiEgUGxheSBhZ2FpbiFgO1xuICAgIC8vYWxlcnQoYFBsYXllciAke3BsYXllcn0gd29uISBDbGljayBva2F5IHRvIHBsYXkgYWdhaW4hIGApO1xuICAgIC8vY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuc2NvcmUnLCB0aGlzLnN0YXRlLnNjb3JlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cblxuXG5cbiAgcmVzZXQoKSB7XG4gICAgdmFyIG5ld0JvYXJkID0gW107XG4gICAgZm9yKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICBuZXdCb2FyZFtpXSA9IFtdO1xuICAgICAgZm9yKHZhciBqPTA7IGo8NzsgaisrKSB7XG4gICAgICAgIG5ld0JvYXJkW2ldW2pdID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IG5ld0JvYXJkfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyOiAxfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuJykuaW5uZXJIVE1MID0gYFBsYXllciAxIHlvdSdyZSB1cCFgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICB9XG4gIC8vcmV0dXJucyByb3cgd2hlcmUgcGllY2UgcGxhY2VkXG4gIHBsYWNlUGllY2UoY29sdW1uKSB7XG4gICAgZm9yIChsZXQgcm93ID0gNTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICBpZih0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9PT0gMCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sdW1uXSA9IHRoaXMuc3RhdGUucGxheWVyO1xuICAgICAgICByZXR1cm4gcm93O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZVBsYXllcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wbGF5ZXIgPT09IDEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BsYXllcjogMn0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4nKS5pbm5lckhUTUwgPSBgUGxheWVyIDIgeW91J3JlIHVwIWA7XG4gICAgICAvL3RoaXMuc3RhdGUucGxheWVyID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyOiAxfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybicpLmlubmVySFRNTCA9IGBQbGF5ZXIgMSB5b3UncmUgdXAhYDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNpcmNsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqICsrKSB7XG4gICAgICAgIGNpcmNsZXMucHVzaCg8Q2lyY2xlXG4gICAgICAgICAgcm93PXtpfVxuICAgICAgICAgIGNvbHVtbj17an1cbiAgICAgICAgICBvY2N1cGFuY3k9e3RoaXMuc3RhdGUuYm9hcmRbaV1bal19XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30vPik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+e2NpcmNsZXN9PC9kaXY+KVxuICB9XG59XG5cbmNsYXNzIENpcmNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7aG92ZXI6IGZhbHNlfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSG92ZXIgPSB0aGlzLmhhbmRsZUhvdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVVbkhvdmVyID0gdGhpcy5oYW5kbGVVbkhvdmVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVVbkhvdmVyKGV2ZW50KXtcbiAgICBsZXQgY29sdW1uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NvbHVtbicpO1xuICAgIGxldCB3aG9sZUNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb2x1bW49XCIke2NvbHVtbn1cIl1gKTtcbiAgICB3aG9sZUNvbHVtbi5mb3JFYWNoKGNpcmNsZSA9PiBjaXJjbGUuc3R5bGUuYm9yZGVyID1cIlwiKTtcbiAgfVxuXG4gIGhhbmRsZUhvdmVyKGV2ZW50KXtcbiAgICBsZXQgY29sdW1uID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NvbHVtbicpO1xuICAgIGxldCB3aG9sZUNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb2x1bW49XCIke2NvbHVtbn1cIl1gKTtcbiAgICB3aG9sZUNvbHVtbi5mb3JFYWNoKGNpcmNsZSA9PiBjaXJjbGUuc3R5bGUuYm9yZGVyID1cIjFweCBzb2xpZCBncmF5XCIpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBsZXQgcm93ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvdycpO1xuICAgIGxldCBjb2x1bW4gPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29sdW1uJyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHJvdywgY29sdW1uKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdlxuICAgICAgaWQ9e2Bjb2xvciR7dGhpcy5wcm9wcy5vY2N1cGFuY3l9YH1cbiAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAvL29uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVIb3Zlcn1cbiAgICAgIC8vb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVVuSG92ZXJ9XG4gICAgICByb3c9e3RoaXMucHJvcHMucm93fVxuICAgICAgY29sdW1uPXt0aGlzLnByb3BzLmNvbHVtbn1cbiAgICAgIGxvY2F0aW9uPXtgJHt0aGlzLnByb3BzLnJvd30ke3RoaXMucHJvcHMuY29sdW1ufWB9PjwvZGl2Pik7XG5cbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUdBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQW5CQTtBQUFBO0FBQ0E7QUFEQTtBQW1CQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBOU5BO0FBQ0E7QUFnT0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7Ozs7QUFyQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render( /*#__PURE__*/React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"App\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwLmpzeFwiXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });