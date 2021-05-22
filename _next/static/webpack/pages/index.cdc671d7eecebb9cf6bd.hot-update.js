webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sidebar/index.js":
/*!*************************************!*\
  !*** ./components/Sidebar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _utils_Context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/Context */ "./utils/Context.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./components/Sidebar/styles.js");
/* harmony import */ var _ListItemLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ListItemLink */ "./components/ListItemLink.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/styles */ "./utils/styles.js");


var _jsxFileName = "C:\\Users\\Laferu\\Documents\\github\\platina-the-wolf\\components\\Sidebar\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



 // import Link from 'next/link'
// import { Collapse } from '@material-ui/core'







 // import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'
// import ExpandLess from '@material-ui/icons/ExpandLess'
// import ExpandMore from '@material-ui/icons/ExpandMore'







var Sidebar = function Sidebar() {
  _s();

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utils_Context__WEBPACK_IMPORTED_MODULE_12__["GlobalContext"]);
  var classes = Object(_styles__WEBPACK_IMPORTED_MODULE_13__["useStyles"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])(); // const [open, setOpen] = useState([])
  // const CustomLink = props => <Link to={to} {...props} />

  var onMouseOver = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    context.state.setSidebarToggle(true);
  }, []);
  var onMouseOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    context.state.setSidebarToggle(false);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_13__["StyledDrawer"], {
      variant: "permanent",
      className: context.state.sidebarToggle ? classes.drawerOpen : classes.drawerClose,
      classes: {
        paper: context.state.sidebarToggle ? classes.drawerOpen : classes.drawerClose
      },
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_utils_styles__WEBPACK_IMPORTED_MODULE_15__["CustomScrollbar"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.toolbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: function onClick() {
              return context.state.setSidebarToggle(false);
            },
            children: theme.direction === 'rtl' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 42
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["HomeOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 19
            }, _this),
            primary: "In\xEDcio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/games",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SportsEsportsOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this),
            primary: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "https://platinathewolf.wordpress.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ImportContactsOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this),
            primary: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/games",
            rel: "noopener noreferrer",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["PublicOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, _this),
            primary: "Gaia",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["EmojiPeopleOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Personagens"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SportsKabaddiOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Classes e Ra\xE7as"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["TrendingUpOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Poderes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FlareOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Cristais C\xF3smicos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ContactMailOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Mood"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Apoie o Projeto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(Sidebar, "SY45GmUfFYSVM0cbIVQiUbPD4b8=", false, function () {
  return [_styles__WEBPACK_IMPORTED_MODULE_13__["useStyles"], _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

$RefreshReg$(_c, "Sidebar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsIm9uTW91c2VPdmVyIiwidXNlQ2FsbGJhY2siLCJzdGF0ZSIsInNldFNpZGViYXJUb2dnbGUiLCJvbk1vdXNlT3V0Iiwic2lkZWJhclRvZ2dsZSIsImRyYXdlck9wZW4iLCJkcmF3ZXJDbG9zZSIsInBhcGVyIiwidG9vbGJhciIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBY0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLDZEQUFELENBQTFCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQywwREFBUyxFQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MseUVBQVEsRUFBdEIsQ0FIb0IsQ0FJcEI7QUFFQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLElBQS9CO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxNQUFNQyxVQUFVLEdBQUdILHlEQUFXLENBQUMsWUFBTTtBQUNuQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLEtBQS9CO0FBQ0QsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFJQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDJCQUNFLHFF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LGtCQUFNLE1BQWhCO0FBQUEsb0NBQ0UscUVBQUMsc0VBQUQ7QUFBQSxxQ0FBYyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLHVFQUFEO0FBQWMscUJBQU8sRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzR0QsQ0F0SEQ7O0dBQU1sQixPO1VBRVlLLGtELEVBQ0ZFLGlFOzs7S0FIVlAsTztBQXdIU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2RjNjcxZDdlZWNlYmI5Y2Y2YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIEZyYWdtZW50LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlTWVtbyxcclxuICB1c2VDYWxsYmFja1xyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCdcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcidcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnQnXHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSdcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nXHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0J1xyXG4vLyBpbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCdcclxuLy8gaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJ1xyXG4vLyBpbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcydcclxuLy8gaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcblxyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBTcG9ydHNFc3BvcnRzT3V0bGluZWQsXHJcbiAgSW1wb3J0Q29udGFjdHNPdXRsaW5lZCxcclxuICBQdWJsaWNPdXRsaW5lZCxcclxuICBFbW9qaVBlb3BsZU91dGxpbmVkLFxyXG4gIFNwb3J0c0thYmFkZGlPdXRsaW5lZCxcclxuICBUcmVuZGluZ1VwT3V0bGluZWQsXHJcbiAgRmxhcmVPdXRsaW5lZCxcclxuICBDb250YWN0TWFpbE91dGxpbmVkLFxyXG4gIE1vbmV0aXphdGlvbk9uT3V0bGluZWQsXHJcbiAgTW9vZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9Db250ZXh0J1xyXG5pbXBvcnQge1xyXG4gIHVzZVN0eWxlcyxcclxuICBTdHlsZWREcmF3ZXJcclxufSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IExpc3RJdGVtTGluayBmcm9tICcuLi9MaXN0SXRlbUxpbmsnXHJcbmltcG9ydCB7IEN1c3RvbVNjcm9sbGJhciB9IGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlcydcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgLy8gY29uc3QgQ3VzdG9tTGluayA9IHByb3BzID0+IDxMaW5rIHRvPXt0b30gey4uLnByb3BzfSAvPlxyXG5cclxuICBjb25zdCBvbk1vdXNlT3ZlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnRleHQuc3RhdGUuc2V0U2lkZWJhclRvZ2dsZSh0cnVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29udGV4dC5zdGF0ZS5zZXRTaWRlYmFyVG9nZ2xlKGZhbHNlKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8U3R5bGVkRHJhd2VyXHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGNvbnRleHQuc3RhdGUuc2lkZWJhclRvZ2dsZSA/IGNsYXNzZXMuZHJhd2VyT3BlbiA6IGNsYXNzZXMuZHJhd2VyQ2xvc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcGFwZXI6IGNvbnRleHQuc3RhdGUuc2lkZWJhclRvZ2dsZSA/IGNsYXNzZXMuZHJhd2VyT3BlbiA6IGNsYXNzZXMuZHJhd2VyQ2xvc2VcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn1cclxuICAgICAgICBvbk1vdXNlT3V0PXtvbk1vdXNlT3V0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEN1c3RvbVNjcm9sbGJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnRleHQuc3RhdGUuc2V0U2lkZWJhclRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxDaGV2cm9uUmlnaHRJY29uIC8+IDogPENoZXZyb25MZWZ0SWNvbiAvPn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgPExpc3RJdGVtTGlua1xyXG4gICAgICAgICAgICBocmVmPScvJ1xyXG4gICAgICAgICAgICBpY29uPXs8SG9tZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICBwcmltYXJ5PSdJbsOtY2lvJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0SXRlbUxpbmtcclxuICAgICAgICAgICAgaHJlZj0nL2dhbWVzJ1xyXG4gICAgICAgICAgICBpY29uPXs8U3BvcnRzRXNwb3J0c091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICBwcmltYXJ5PSdHYW1lcydcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcGxhdGluYXRoZXdvbGYud29yZHByZXNzLmNvbS8nXHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgIGljb249ezxJbXBvcnRDb250YWN0c091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICBwcmltYXJ5PSdCbG9nJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHsvKiA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxQdWJsaWNPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0dhaWEnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPiAqL31cclxuICAgICAgICAgIDxMaXN0SXRlbUxpbmtcclxuICAgICAgICAgICAgaHJlZj0nL2dhbWVzJ1xyXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICAgIGljb249ezxQdWJsaWNPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgcHJpbWFyeT0nR2FpYSdcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxFbW9qaVBlb3BsZU91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nUGVyc29uYWdlbnMnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48U3BvcnRzS2FiYWRkaU91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nQ2xhc3NlcyBlIFJhw6dhcycgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxUcmVuZGluZ1VwT3V0bGluZWQgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdQb2RlcmVzJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PEZsYXJlT3V0bGluZWQgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdDcmlzdGFpcyBDw7NzbWljb3MnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48Q29udGFjdE1haWxPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0NvbnRhdG8nIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48TW9vZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0Fwb2llIG8gUHJvamV0bycgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIHsvKiA8TGlzdD5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxJbmJveEljb24gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkluYm94XCIgLz5cclxuICAgICAgICAgICAge29wZW4gPyA8RXhwYW5kTGVzcyAvPiA6IDxFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48TWFpbEljb24gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlN0YXJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPC9MaXN0PiAqL31cclxuICAgICAgICA8L0N1c3RvbVNjcm9sbGJhcj5cclxuICAgICAgPC9TdHlsZWREcmF3ZXI+XHJcbiAgICAgIFxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==