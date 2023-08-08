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
  pyment_container: {// padding:width*0.05
  },
  box1: {
    marginTop: height * 0.018,
    elevation: 7,
    backgroundColor: 'white',
    borderColor: '#D9D9D9'
  },
  boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9' // paddingBottom: height * -0.01

  },
  border: {
    borderWidth: 1,
    borderColor: '#D9D9D9'
  },
  text_offer: _objectSpread({
    color: '#00063F',
    fontSize: 10
  }, _theme.FONTS.fourHundred, {
    alignSelf: 'center',
    padding: width * 0.05
  }),
  flex_row: {
    flexDirection: 'row'
  },
  all_coupons: _objectSpread({}, _theme.FONTS.fourHundred, {
    color: _theme.COLORS.black,
    fontSize: 11,
    padding: width * 0.06 //   paddingLeft: width * 0.05,

  }),
  Price_history: _objectSpread({
    color: '#909090',
    fontSize: 11
  }, _theme.FONTS.fourHundred, {
    // alignSelf: 'center',
    padding: width * 0.05
  }),
  Price_history1: _objectSpread({
    fontSize: 11
  }, _theme.FONTS.fourHundred, {
    padding: width * 0.05,
    width: width * 0.7
  }),
  price_history2: {
    color: _theme.COLORS.black,
    paddingBottom: width * 0.02
  },
  payment_image: {
    width: width * 0.16,
    height: height * 0.026,
    margin: width * 0.04
  },
  box2: {
    elevation: 2,
    backgroundColor: 'white',
    padding: width * 0.02,
    marginVertical: height * 0.02
  },
  price_bottom: {
    elevation: 9,
    backgroundColor: _theme.COLORS.white // marginTop: height * 0.01,

  },
  price_bottom_rupeetext: _objectSpread({}, _theme.FONTS.sixHundred, {
    color: _theme.COLORS.black,
    fontSize: 18,
    marginBottom: height * -0.01,
    marginTop: height * 0.02,
    letterSpacing: 3
  }),
  price_bottom_text2: {
    color: '#3845B7',
    fontSize: 8
  },
  marginLeft: {
    marginLeft: width * 0.1,
    marginRight: width * 0.22
  }
});

exports["default"] = _default;