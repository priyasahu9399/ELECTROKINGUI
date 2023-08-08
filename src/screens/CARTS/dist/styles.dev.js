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
  pymentrowflex: {
    flexDirection: 'row'
  },
  pymentorder_box2: {
    elevation: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#A9A9A9',
    backgroundColor: _theme.COLORS.white,
    margin: height * 0.02,
    marginBottom: height * 0.0,
    paddingVertical: height * 0.03
  },
  pymentorder_img: {
    width: width * 0.37,
    height: height * 0.1
  },
  pymentorder_text1: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fourHundred, {
    width: width * 0.45,
    fontSize: 11,
    lineHeight: 18,
    marginLeft: width * 0.05
  }),
  pymentorder_Qty: {
    width: width * 0.1,
    fontSize: 13,
    marginTop: height * 0.01
  },
  number1: {
    textDecorationLine: 'underline',
    marginLeft: width * 0.02
  },
  pymentplusminus_box: {
    marginLeft: width * -0.04,
    marginTop: height * 0.006
  },
  pymentorder_plusminus: {
    color: '#FF6745',
    fontSize: 10,
    fontWeight: 'bold' // margin:-1

  },
  subtract: {
    marginTop: height * -0.01
  },
  newCoupon: _objectSpread({
    color: _theme.COLORS.black,
    fontSize: 12
  }, _theme.FONTS.fiveHundred, {
    paddingLeft: width * 0.08,
    marginBottom: height * 0.015 // lineHeight:25,

  }),
  enter_code: _objectSpread({
    borderBottomWidth: 1,
    width: width * 0.4,
    padding: height * -0.1,
    borderColor: '#C1C1C1',
    fontSize: 12
  }, _theme.FONTS.fiveHundred, {
    textAlign: 'center'
  }),
  applybox_row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly' //  paddingBottom: height * 0.02,

  },
  applybox: {
    backgroundColor: '#FF7900',
    width: width * 0.22,
    borderRadius: 30,
    alignItems: 'center'
  },
  apply: _objectSpread({}, _theme.FONTS.sixHundred, {
    color: _theme.COLORS.white,
    fontSize: 12,
    paddingTop: height * 0.004
  }),
  price_text: _objectSpread({
    margin: width * 0.01,
    width: width * 0.6,
    color: _theme.COLORS.black
  }, _theme.FONTS.fourHundred, {
    fontSize: 12
  }),
  price_textcolor: {
    color: '#13D33E'
  },
  box_3: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02
  },
  bold: _objectSpread({}, _theme.FONTS.fiveHundred),
  Placeorder_box: {
    backgroundColor: '#FF7900',
    alignItems: 'center',
    margin: width * 0.05,
    borderRadius: 8
  },
  Placeorder: _objectSpread({
    color: _theme.COLORS.white,
    padding: width * 0.03,
    fontSize: 10
  }, _theme.FONTS.sixHundred)
});

exports["default"] = _default;