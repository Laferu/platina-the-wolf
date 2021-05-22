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
              lineNumber: 78,
              columnNumber: 42
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 65
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["HomeOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, _this),
            primary: "In\xEDcio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/games",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SportsEsportsOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }, _this),
            primary: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "https://platinathewolf.wordpress.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ImportContactsOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this),
            primary: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItemLink__WEBPACK_IMPORTED_MODULE_14__["default"], {
            href: "/games",
            rel: "noopener noreferrer",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["PublicOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 19
            }, _this),
            primary: "Gaia",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["EmojiPeopleOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Personagens"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SportsKabaddiOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Classes e Ra\xE7as"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["TrendingUpOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Poderes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FlareOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Cristais C\xF3smicos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ContactMailOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Mood"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Apoie o Projeto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsIm9uTW91c2VPdmVyIiwidXNlQ2FsbGJhY2siLCJzdGF0ZSIsInNldFNpZGViYXJUb2dnbGUiLCJvbk1vdXNlT3V0Iiwic2lkZWJhclRvZ2dsZSIsImRyYXdlck9wZW4iLCJkcmF3ZXJDbG9zZSIsInBhcGVyIiwidG9vbGJhciIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBYUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLDZEQUFELENBQTFCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQywwREFBUyxFQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MseUVBQVEsRUFBdEIsQ0FIb0IsQ0FJcEI7QUFFQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLElBQS9CO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxNQUFNQyxVQUFVLEdBQUdILHlEQUFXLENBQUMsWUFBTTtBQUNuQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLEtBQS9CO0FBQ0QsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFJQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDJCQUNFLHFF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LGtCQUFNLE1BQWhCO0FBQUEsb0NBQ0UscUVBQUMsc0VBQUQ7QUFBQSxxQ0FBYyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLHVFQUFEO0FBQWMscUJBQU8sRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzR0QsQ0F0SEQ7O0dBQU1sQixPO1VBRVlLLGtELEVBQ0ZFLGlFOzs7S0FIVlAsTztBQXdIU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmU2MDJiNWJlMjMzYjY5YzdmMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIEZyYWdtZW50LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlTWVtbyxcclxuICB1c2VDYWxsYmFja1xyXG59IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCdcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcidcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnQnXHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSdcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nXHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0J1xyXG4vLyBpbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCdcclxuLy8gaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJ1xyXG4vLyBpbXBvcnQgRXhwYW5kTGVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcydcclxuLy8gaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcblxyXG5pbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBTcG9ydHNFc3BvcnRzT3V0bGluZWQsXHJcbiAgSW1wb3J0Q29udGFjdHNPdXRsaW5lZCxcclxuICBQdWJsaWNPdXRsaW5lZCxcclxuICBFbW9qaVBlb3BsZU91dGxpbmVkLFxyXG4gIFNwb3J0c0thYmFkZGlPdXRsaW5lZCxcclxuICBUcmVuZGluZ1VwT3V0bGluZWQsXHJcbiAgRmxhcmVPdXRsaW5lZCxcclxuICBDb250YWN0TWFpbE91dGxpbmVkLFxyXG4gIE1vb2RcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcblxyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvQ29udGV4dCdcclxuaW1wb3J0IHtcclxuICB1c2VTdHlsZXMsXHJcbiAgU3R5bGVkRHJhd2VyXHJcbn0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCBMaXN0SXRlbUxpbmsgZnJvbSAnLi4vTGlzdEl0ZW1MaW5rJ1xyXG5pbXBvcnQgeyBDdXN0b21TY3JvbGxiYXIgfSBmcm9tICcuLi8uLi91dGlscy9zdHlsZXMnXHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXHJcbiAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIGNvbnN0IEN1c3RvbUxpbmsgPSBwcm9wcyA9PiA8TGluayB0bz17dG99IHsuLi5wcm9wc30gLz5cclxuXHJcbiAgY29uc3Qgb25Nb3VzZU92ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb250ZXh0LnN0YXRlLnNldFNpZGViYXJUb2dnbGUodHJ1ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnRleHQuc3RhdGUuc2V0U2lkZWJhclRvZ2dsZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFN0eWxlZERyYXdlclxyXG4gICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBjb250ZXh0LnN0YXRlLnNpZGViYXJUb2dnbGUgPyBjbGFzc2VzLmRyYXdlck9wZW4gOiBjbGFzc2VzLmRyYXdlckNsb3NlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHBhcGVyOiBjb250ZXh0LnN0YXRlLnNpZGViYXJUb2dnbGUgPyBjbGFzc2VzLmRyYXdlck9wZW4gOiBjbGFzc2VzLmRyYXdlckNsb3NlXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlT3Zlcj17b25Nb3VzZU92ZXJ9XHJcbiAgICAgICAgb25Nb3VzZU91dD17b25Nb3VzZU91dH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDdXN0b21TY3JvbGxiYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb250ZXh0LnN0YXRlLnNldFNpZGViYXJUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8Q2hldnJvblJpZ2h0SWNvbiAvPiA6IDxDaGV2cm9uTGVmdEljb24gLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIDxMaXN0SXRlbUxpbmtcclxuICAgICAgICAgICAgaHJlZj0nLydcclxuICAgICAgICAgICAgaWNvbj17PEhvbWVPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgcHJpbWFyeT0nSW7DrWNpbydcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9Jy9nYW1lcydcclxuICAgICAgICAgICAgaWNvbj17PFNwb3J0c0VzcG9ydHNPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgcHJpbWFyeT0nR2FtZXMnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtTGlua1xyXG4gICAgICAgICAgICBocmVmPSdodHRwczovL3BsYXRpbmF0aGV3b2xmLndvcmRwcmVzcy5jb20vJ1xyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICBpY29uPXs8SW1wb3J0Q29udGFjdHNPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgcHJpbWFyeT0nQmxvZydcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7LyogPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48UHVibGljT3V0bGluZWQgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdHYWlhJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT4gKi99XHJcbiAgICAgICAgICA8TGlzdEl0ZW1MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9Jy9nYW1lcydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICBpY29uPXs8UHVibGljT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgIHByaW1hcnk9J0dhaWEnXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48RW1vamlQZW9wbGVPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J1BlcnNvbmFnZW5zJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PFNwb3J0c0thYmFkZGlPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0NsYXNzZXMgZSBSYcOnYXMnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48VHJlbmRpbmdVcE91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nUG9kZXJlcycgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxGbGFyZU91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nQ3Jpc3RhaXMgQ8Ozc21pY29zJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PENvbnRhY3RNYWlsT3V0bGluZWQgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdDb250YXRvJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PE1vb2QgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdBcG9pZSBvIFByb2pldG8nIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICB7LyogPExpc3Q+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8SW5ib3hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmJveFwiIC8+XHJcbiAgICAgICAgICAgIHtvcGVuID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PE1haWxJY29uIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdGFycmVkXCIgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9DdXN0b21TY3JvbGxiYXI+XHJcbiAgICAgIDwvU3R5bGVkRHJhd2VyPlxyXG4gICAgICBcclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=