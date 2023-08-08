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
  Addressmain_box: {
    padding: width * 0.04
  },
  boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9'
  },
  Delivery_address: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fiveHundred, {
    fontSize: 13
  }),
  address_box: {
    backgroundColor: _theme.COLORS.white,
    marginTop: height * 0.02,
    elevation: 1,
    borderWidth: 1,
    padding: width * 0.03,
    borderRadius: 9,
    borderColor: '#CCCCCC',
    flexDirection: 'row',
    alignItems: 'center'
  },
  plus_Box: {
    borderWidth: 1,
    borderColor: '#3735B0',
    borderRadius: 10,
    width: width * 0.04,
    height: height * 0.02,
    marginLeft: width * 0.2,
    marginRight: width * 0.02
  },
  plus: {
    width: width * 0.02,
    height: height * 0.012,
    margin: width * 0.006
  },
  new_address: _objectSpread({
    width: width * 0.9,
    color: '#3735B0'
  }, _theme.FONTS.fiveHundred, {
    fontSize: 11
  })
});

exports["default"] = _default;