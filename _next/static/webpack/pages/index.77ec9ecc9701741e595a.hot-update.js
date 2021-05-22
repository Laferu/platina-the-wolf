webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ListItemLink.js":
/*!************************************!*\
  !*** ./components/ListItemLink.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Laferu_Documents_github_platina_the_wolf_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");



var _jsxFileName = "C:\\Users\\Laferu\\Documents\\github\\platina-the-wolf\\components\\ListItemLink.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Laferu_Documents_github_platina_the_wolf_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function ListItemLink(props) {
  _s();

  var _this = this;

  var icon = props.icon,
      primary = props.primary,
      href = props.href,
      _props$rel = props.rel,
      rel = _props$rel === void 0 ? null : _props$rel,
      _props$target = props.target,
      target = _props$target === void 0 ? null : _props$target;
  var CustomLink = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (linkProps, ref) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
        ref: ref,
        href: href
      }, linkProps), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          rel: rel,
          target: target,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
              primary: primary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this);
    });
  }, [href]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CustomLink, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(ListItemLink, "Eyw/YrAC6bJbhrNwMM2YxZ7ZQ+w=");

_c = ListItemLink;
/* harmony default export */ __webpack_exports__["default"] = (ListItemLink);

var _c;

$RefreshReg$(_c, "ListItemLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0SXRlbUxpbmsuanMiXSwibmFtZXMiOlsiTGlzdEl0ZW1MaW5rIiwicHJvcHMiLCJpY29uIiwicHJpbWFyeSIsImhyZWYiLCJyZWwiLCJ0YXJnZXQiLCJDdXN0b21MaW5rIiwidXNlTWVtbyIsImZvcndhcmRSZWYiLCJsaW5rUHJvcHMiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFDbkJDLElBRG1CLEdBQ2dDRCxLQURoQyxDQUNuQkMsSUFEbUI7QUFBQSxNQUNiQyxPQURhLEdBQ2dDRixLQURoQyxDQUNiRSxPQURhO0FBQUEsTUFDSkMsSUFESSxHQUNnQ0gsS0FEaEMsQ0FDSkcsSUFESTtBQUFBLG1CQUNnQ0gsS0FEaEMsQ0FDRUksR0FERjtBQUFBLE1BQ0VBLEdBREYsMkJBQ1EsSUFEUjtBQUFBLHNCQUNnQ0osS0FEaEMsQ0FDY0ssTUFEZDtBQUFBLE1BQ2NBLE1BRGQsOEJBQ3VCLElBRHZCO0FBRzNCLE1BQU1DLFVBQVUsR0FBR0MscURBQU8sQ0FDeEI7QUFBQSx3QkFDRUMsd0RBQVUsQ0FBQyxVQUFDQyxTQUFELEVBQVlDLEdBQVo7QUFBQSwwQkFDVCxxRUFBQyxnREFBRDtBQUFNLFdBQUcsRUFBRUEsR0FBWDtBQUFnQixZQUFJLEVBQUVQO0FBQXRCLFNBQWdDTSxTQUFoQztBQUFBLCtCQUNFO0FBQUcsYUFBRyxFQUFFTCxHQUFSO0FBQWEsZ0JBQU0sRUFBRUMsTUFBckI7QUFBQSxpQ0FDRSxxRUFBQyxrRUFBRDtBQUFVLGtCQUFNLE1BQWhCO0FBQUEsb0NBQ0UscUVBQUMsc0VBQUQ7QUFBQSx3QkFBZUo7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsc0VBQUQ7QUFBYyxxQkFBTyxFQUFFQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFELENBRFo7QUFBQSxHQUR3QixFQVl4QixDQUFDQyxJQUFELENBWndCLENBQTFCO0FBZUEsc0JBQ0UscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRDs7R0FyQlFKLFk7O0tBQUFBLFk7QUF1Qk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3ZWM5ZWNjOTcwMTc0MWU1OTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJ1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbidcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnXHJcblxyXG5mdW5jdGlvbiBMaXN0SXRlbUxpbmsocHJvcHMpIHtcclxuICBjb25zdCB7IGljb24sIHByaW1hcnksIGhyZWYsIHJlbCA9IG51bGwsIHRhcmdldCA9IG51bGwgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IEN1c3RvbUxpbmsgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgZm9yd2FyZFJlZigobGlua1Byb3BzLCByZWYpID0+IChcclxuICAgICAgICA8TGluayByZWY9e3JlZn0gaHJlZj17aHJlZn0gey4uLmxpbmtQcm9wc30+XHJcbiAgICAgICAgICA8YSByZWw9e3JlbH0gdGFyZ2V0PXt0YXJnZXR9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+e2ljb259PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcmltYXJ5fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSksXHJcbiAgICBbaHJlZl1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEN1c3RvbUxpbmsgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtTGlua1xyXG4iXSwic291cmNlUm9vdCI6IiJ9