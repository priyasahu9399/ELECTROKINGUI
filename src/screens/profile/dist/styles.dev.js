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
  profile_container: {
    padding: width * 0.06
  },
  profile_img: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 80
  },
  profile_img_container: {
    alignSelf: 'center'
  },
  profile_img_box: {
    width: width * 0.3,
    height: height * 0.153,
    borderRadius: 80,
    elevation: 6,
    backgroundColor: '#96B2FE' // borderWidth:1,

  },
  profile_text: _objectSpread({
    padding: width * 0.02,
    color: _theme.COLORS.black,
    fontSize: 12
  }, _theme.FONTS.sixHundred),
  pro_icon_location: {
    width: width * 0.047,
    height: height * 0.03,
    marginLeft: width * 0.05
  },
  pro_icon_heart: {
    width: width * 0.06,
    height: height * 0.027,
    marginLeft: width * 0.05,
    tintColor: '#444444'
  },
  pro_icon: {
    width: width * 0.06,
    height: height * 0.03,
    marginLeft: width * 0.05
  }
});

exports["default"] = _default;