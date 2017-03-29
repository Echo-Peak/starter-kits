webpackJsonp([0],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Component = React.Component;
//import {React} from 'react';
//import {Routes} from './routes';
var react_router_1 = __webpack_require__(9);
var home_1 = __webpack_require__(35);
var _404_1 = __webpack_require__(34);
var bb = 232;
var routes = (React.createElement("div", null,
    React.createElement(react_router_1.Route, { path: '/', component: home_1.default }),
    React.createElement(react_router_1.Route, { path: '*', component: _404_1.default })));
exports.default = routes;


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(12);
var react_1 = __webpack_require__(0);
var ReactRouter = __webpack_require__(9);
var Router = ReactRouter.Router, browserHistory = ReactRouter.browserHistory;
var router_1 = __webpack_require__(32);
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Router, { history: browserHistory }, router_1.default)));
    };
    return Application;
}(react_1.Component));
exports.Application = Application;
ReactDOM.render(React.createElement(Application, null), document.getElementById('app'));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Component = React.Component;
var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Not found")));
    };
    return NotFound;
}(Component));
exports.default = NotFound;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Component = React.Component;
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("h1", null, "Homepage");
    };
    return Home;
}(Component));
exports.default = Home;


/***/ })

},[33]);
//# sourceMappingURL=bundle.js.map