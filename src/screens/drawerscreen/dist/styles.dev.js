"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _theme = require("../../constants/theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var _default = _reactNative.StyleSheet.create({
  profile_box: {
    backgroundColor: "#00063F",
    padding: width * 0.08,
    paddingVertical: height * 0.06,
    flexDirection: "row",
    alignItems: "center"
  },
  profile_img_box: {
    width: width * 0.18,
    height: height * 0.09,
    backgroundColor: "#C6C6C6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  profile_img: {
    width: width * 0.11,
    height: height * 0.06
  },
  profile_text: _objectSpread({
    width: width * 0.4,
    marginLeft: width * 0.05,
    color: _theme.COLORS.white,
    fontSize: 12
  }, _theme.FONTS.sixHundred),
  draw_list: {
    backgroundColor: _theme.COLORS.white,
    height: height,
    padding: width * 0.07
  },
  draw_list_text: _objectSpread({
    fontSize: 12
  }, _theme.FONTS.fourHundred, {
    color: "#717171",
    width: width * 0.6,
    padding: height * 0.01
  }),
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col_arrow: {
    width: width * 0.035,
    height: height * 0.01,
    marginLeft: width * 0.00
  }
});

exports["default"] = _default;