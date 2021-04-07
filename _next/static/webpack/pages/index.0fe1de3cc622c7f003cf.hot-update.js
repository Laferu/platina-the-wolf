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
            rel: "noopener noreferrer",
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ImportContactsOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
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
          lineNumber: 101,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["PublicOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Gaia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["EmojiPeopleOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Personagens"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["SportsKabaddiOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Classes e Ra\xE7as"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["TrendingUpOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Poderes"
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["FlareOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Cristais C\xF3smicos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["ContactMailOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            button: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Mood"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], {
              primary: "Apoie o Projeto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsIm9uTW91c2VPdmVyIiwidXNlQ2FsbGJhY2siLCJzdGF0ZSIsInNldFNpZGViYXJUb2dnbGUiLCJvbk1vdXNlT3V0Iiwic2lkZWJhclRvZ2dsZSIsImRyYXdlck9wZW4iLCJkcmF3ZXJDbG9zZSIsInBhcGVyIiwidG9vbGJhciIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBY0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLDZEQUFELENBQTFCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQywwREFBUyxFQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MseUVBQVEsRUFBdEIsQ0FIb0IsQ0FJcEI7QUFFQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLElBQS9CO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7QUFJQSxNQUFNQyxVQUFVLEdBQUdILHlEQUFXLENBQUMsWUFBTTtBQUNuQ1IsV0FBTyxDQUFDUyxLQUFSLENBQWNDLGdCQUFkLENBQStCLEtBQS9CO0FBQ0QsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFJQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDJCQUNFLHFF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QkFERixlQUtFLHFFQUFDLGtFQUFEO0FBQVUsa0JBQU0sTUFBaEI7QUFBQSxvQ0FDRSxxRUFBQyxzRUFBRDtBQUFBLHFDQUFjLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsdUVBQUQ7QUFBYyxxQkFBTyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThGRCxDQTlHRDs7R0FBTWxCLE87VUFFWUssa0QsRUFDRkUsaUU7OztLQUhWUCxPO0FBZ0hTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZmUxZGUzY2M2MjJjN2YwMDNjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgRnJhZ21lbnQsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VNZW1vLFxyXG4gIHVzZUNhbGxiYWNrXHJcbn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0J1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCdcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCdcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJ1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbidcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnXHJcbi8vIGltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94J1xyXG4vLyBpbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnXHJcbi8vIGltcG9ydCBFeHBhbmRMZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJ1xyXG4vLyBpbXBvcnQgRXhwYW5kTW9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSdcclxuXHJcbmltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFNwb3J0c0VzcG9ydHNPdXRsaW5lZCxcclxuICBJbXBvcnRDb250YWN0c091dGxpbmVkLFxyXG4gIFB1YmxpY091dGxpbmVkLFxyXG4gIEVtb2ppUGVvcGxlT3V0bGluZWQsXHJcbiAgU3BvcnRzS2FiYWRkaU91dGxpbmVkLFxyXG4gIFRyZW5kaW5nVXBPdXRsaW5lZCxcclxuICBGbGFyZU91dGxpbmVkLFxyXG4gIENvbnRhY3RNYWlsT3V0bGluZWQsXHJcbiAgTW9uZXRpemF0aW9uT25PdXRsaW5lZCxcclxuICBNb29kXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL0NvbnRleHQnXHJcbmltcG9ydCB7XHJcbiAgdXNlU3R5bGVzLFxyXG4gIFN0eWxlZERyYXdlclxyXG59IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgTGlzdEl0ZW1MaW5rIGZyb20gJy4uL0xpc3RJdGVtTGluaydcclxuaW1wb3J0IHsgQ3VzdG9tU2Nyb2xsYmFyIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVzJ1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIC8vIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAvLyBjb25zdCBDdXN0b21MaW5rID0gcHJvcHMgPT4gPExpbmsgdG89e3RvfSB7Li4ucHJvcHN9IC8+XHJcblxyXG4gIGNvbnN0IG9uTW91c2VPdmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29udGV4dC5zdGF0ZS5zZXRTaWRlYmFyVG9nZ2xlKHRydWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb250ZXh0LnN0YXRlLnNldFNpZGViYXJUb2dnbGUoZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxTdHlsZWREcmF3ZXJcclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgY29udGV4dC5zdGF0ZS5zaWRlYmFyVG9nZ2xlID8gY2xhc3Nlcy5kcmF3ZXJPcGVuIDogY2xhc3Nlcy5kcmF3ZXJDbG9zZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICBwYXBlcjogY29udGV4dC5zdGF0ZS5zaWRlYmFyVG9nZ2xlID8gY2xhc3Nlcy5kcmF3ZXJPcGVuIDogY2xhc3Nlcy5kcmF3ZXJDbG9zZVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVyfVxyXG4gICAgICAgIG9uTW91c2VPdXQ9e29uTW91c2VPdXR9XHJcbiAgICAgID5cclxuICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gY29udGV4dC5zdGF0ZS5zZXRTaWRlYmFyVG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPENoZXZyb25SaWdodEljb24gLz4gOiA8Q2hldnJvbkxlZnRJY29uIC8+fVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9Jy8nXHJcbiAgICAgICAgICAgIGljb249ezxIb21lT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgIHByaW1hcnk9J0luw61jaW8nXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtTGlua1xyXG4gICAgICAgICAgICBocmVmPScvZ2FtZXMnXHJcbiAgICAgICAgICAgIGljb249ezxTcG9ydHNFc3BvcnRzT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgIHByaW1hcnk9J0dhbWVzJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0SXRlbUxpbmtcclxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9wbGF0aW5hdGhld29sZi53b3JkcHJlc3MuY29tLydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICBpY29uPXs8SW1wb3J0Q29udGFjdHNPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgcHJpbWFyeT0nQmxvZydcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxQdWJsaWNPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0dhaWEnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48RW1vamlQZW9wbGVPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J1BlcnNvbmFnZW5zJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PFNwb3J0c0thYmFkZGlPdXRsaW5lZCAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0NsYXNzZXMgZSBSYcOnYXMnIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48VHJlbmRpbmdVcE91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nUG9kZXJlcycgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxGbGFyZU91dGxpbmVkIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nQ3Jpc3RhaXMgQ8Ozc21pY29zJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PENvbnRhY3RNYWlsT3V0bGluZWQgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdDb250YXRvJyAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PE1vb2QgLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdBcG9pZSBvIFByb2pldG8nIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICB7LyogPExpc3Q+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8SW5ib3hJY29uIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbmJveFwiIC8+XHJcbiAgICAgICAgICAgIHtvcGVuID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PE1haWxJY29uIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdGFycmVkXCIgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvTGlzdD4gKi99XHJcbiAgICAgICAgPC9DdXN0b21TY3JvbGxiYXI+XHJcbiAgICAgIDwvU3R5bGVkRHJhd2VyPlxyXG4gICAgICBcclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=