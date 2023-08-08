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
  main_img: {
    width: width,
    height: height * 0.25,
    resizeMode: 'stretch'
  },
  flex_row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  seeall: _objectSpread({
    fontSize: 12
  }, _theme.FONTS.sixHundred, {
    margin: height * 0.033,
    color: _theme.COLORS.black
  }),
  list_boxitems: {
    backgroundColor: _theme.COLORS.white,
    elevation: 3,
    width: width * 0.25,
    padding: width * 0.027,
    margin: width * 0.01,
    borderRadius: 16,
    alignItems: 'center'
  },
  list_text: _objectSpread({}, _theme.FONTS.fourHundred, {
    color: _theme.COLORS.black,
    fontSize: 10
  }),
  category: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    margin: height * 0.03
  }),
  brand_img: {
    width: width * 0.37,
    height: height * 0.12,
    alignSelf: 'center',
    borderWidth: 1
  },
  Video_box: {
    width: width * 0.92,
    // height: height * 0.41,
    backgroundColor: '#D9D9D9',
    padding: width * 0.04,
    borderRadius: 15,
    marginTop: height * 0.1
  },
  video_img: {
    width: width * 0.85,
    height: height * 0.2,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: height * 0.03,
    resizeMode: 'cover'
  }
});

exports["default"] = _default;