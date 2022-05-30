webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\aange\\Desktop\\udemyCourse\\nextjs\\pages\\index.js",
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: 1,
  title: 'A first dummy meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/20100213_Zlatograd_Bulgaria_3.jpg',
  adress: 'Zlatograd',
  description: 'First meetup in Zlatograd'
}, {
  id: 2,
  title: 'A second dummy meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/20100213_Zlatograd_Bulgaria_3.jpg',
  adress: 'Zlatograd',
  description: 'Second meetup in Zlatograd'
}];

function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetup = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //send http request and fetch data
    setLoadedMeetup(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 12
  }, this);
}

_s(HomePage, "GYXrTzWUmjoYaStThO/WH8YE4cg=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXAiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLHNCQUZYO0FBR0lDLE9BQUssRUFBRSx1RkFIWDtBQUlJQyxRQUFNLEVBQUUsV0FKWjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEa0IsRUFTbEI7QUFDSUosSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLHVCQUZYO0FBR0lDLE9BQUssRUFBRSx1RkFIWDtBQUlJQyxRQUFNLEVBQUUsV0FKWjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FUa0IsQ0FBdEI7O0FBb0JBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDeUJDLHNEQUFRLENBQUMsRUFBRCxDQURqQztBQUFBLE1BQ1RDLGFBRFM7QUFBQSxNQUNNQyxlQUROOztBQUdoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFFQUQsbUJBQWUsQ0FBQ1QsYUFBRCxDQUFmO0FBRUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7R0FYUUYsUTs7S0FBQUEsUTtBQWFNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NmJiYjM2Y2YyZWZiMTc2MGZhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogJ0EgZmlyc3QgZHVtbXkgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMi8yZC8yMDEwMDIxM19abGF0b2dyYWRfQnVsZ2FyaWFfMy5qcGcnLFxyXG4gICAgICAgIGFkcmVzczogJ1psYXRvZ3JhZCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaXJzdCBtZWV0dXAgaW4gWmxhdG9ncmFkJ1xyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6ICdBIHNlY29uZCBkdW1teSBtZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8yLzJkLzIwMTAwMjEzX1psYXRvZ3JhZF9CdWxnYXJpYV8zLmpwZycsXHJcbiAgICAgICAgYWRyZXNzOiAnWmxhdG9ncmFkJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NlY29uZCBtZWV0dXAgaW4gWmxhdG9ncmFkJ1xyXG4gICAgfVxyXG5cclxuXTtcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zZW5kIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2ggZGF0YVxyXG5cclxuICAgICAgICBzZXRMb2FkZWRNZWV0dXAoRFVNTVlfTUVFVFVQUyk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==