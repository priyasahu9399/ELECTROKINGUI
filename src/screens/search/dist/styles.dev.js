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
  search_container: {
    padding: width * 0.04
  },
  row_input: {
    flexDirection: 'row'
  },
  search_input: {
    elevation: 8,
    backgroundColor: _theme.COLORS.white,
    borderRadius: 40,
    paddingHorizontal: width * 0.05 // paddingVertical: height * 0.01,

  },
  search_icon: {
    width: width * 0.04,
    height: height * 0.02,
    margin: height * 0.025,
    tintColor: '#A4A4A4'
  },
  search_text: _objectSpread({
    fontSize: 14
  }, _theme.FONTS.sixHundred, {
    width: width * 0.7
  }),
  recent_search: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.sixHundred, {
    fontSize: 13,
    paddingLeft: width * 0.03,
    marginTop: height * 0.04,
    marginBottom: height * 0.01
  }),
  row_input_flexwrap: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center'
  },
  recent_search_box: {
    borderColor: '#4A4A4A',
    borderWidth: 0.5,
    borderRadius: 14,
    elevation: 2,
    margin: width * 0.01
  },
  recent_search_text: _objectSpread({
    color: '#4A4A4A'
  }, _theme.FONTS.fourHundred, {
    fontSize: 11,
    borderRadius: 15,
    backgroundColor: _theme.COLORS.white,
    paddingHorizontal: width * 0.042,
    // marginBottom:height * -0.001,
    paddingVertical: width * 0.013
  })
});

exports["default"] = _default;