webpackJsonp([0],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component;


var style = {};

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  Layout.init = function init() {
    if (typeof window !== "undefined") {

      this.prototype.window = true;
    }
  };

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {};
    return _this;
  }

  Layout.prototype.showGists = function showGists() {};

  Layout.prototype.componentDidMount = function componentDidMount() {};

  Layout.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'data-component': 'Layout' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        null,
        'Latest Gists'
      )
    );
  };

  return Layout;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = !Layout.init() && Layout;

/***/ })

},[190]);
//# sourceMappingURL=bundle.js.map