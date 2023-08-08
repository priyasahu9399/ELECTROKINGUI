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
  pyment_box: {
    padding: width * 0.03,
    paddingTop: height * -0.01
  },
  pymentrowflex: {
    flexDirection: 'row'
  },
  deliverybox: {
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    backgroundColor: _theme.COLORS.white,
    marginVertical: height * 0.02,
    padding: width * 0.04,
    paddingHorizontal: width * 0.02
  },
  delivery: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 12
  }),
  delivery2: _objectSpread({
    color: '#8B8B8B',
    fontSize: 10
  }, _theme.FONTS.fourHundred),
  editBox: {
    elevation: 7,
    borderRadius: 5,
    width: width * 0.18,
    height: height * 0.035,
    backgroundColor: _theme.COLORS.white,
    marginTop: height * 0.01
  },
  edit: _objectSpread({}, _theme.FONTS.fiveHundred, {
    fontSize: 8,
    color: '#4463B1',
    alignSelf: 'center',
    padding: width * 0.015
  }),
  box1: {
    marginTop: height * 0.018,
    elevation: 1,
    backgroundColor: 'white',
    borderColor: '#D9D9D9'
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
  saveorder: {
    color: '#222D8E',
    padding: width * 0.03,
    paddingLeft: width * 0.05
  },
  Price_history: _objectSpread({
    color: '#909090',
    fontSize: 11
  }, _theme.FONTS.fourHundred, {
    padding: width * 0.05
  }),
  Price_history1: _objectSpread({
    fontSize: 11
  }, _theme.FONTS.fourHundred, {
    padding: width * 0.05,
    width: width * 0.74
  }),
  price_history2: {
    color: _theme.COLORS.black,
    paddingBottom: width * 0.01
  },
  price_bottom: {
    elevation: 4,
    backgroundColor: _theme.COLORS.white,
    padding: width * 0.01
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
  },
  category: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 16,
    marginLeft: width * 0.02,
    margin: height * 0.02
  }),
  itemmiss: {
    backgroundColor: _theme.COLORS.White,
    elevation: 2,
    padding: width * 0.04,
    paddingTop: height * 0.01,
    marginTop: height * 0.015
  }
});

exports["default"] = _default;