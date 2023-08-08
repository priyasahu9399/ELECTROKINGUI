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
    padding: width * 0.06
  },
  rowflex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxorder: {
    padding: height * 0.01,
    elevation: 2,
    backgroundColor: 'white',
    borderColor: '#D9D9D9' // paddingBottom: height * -0.01

  },
  Delivery_address: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fiveHundred, {
    fontSize: 14
  }),
  editBox: {
    elevation: 4,
    borderRadius: 5,
    width: width * 0.18,
    height: height * 0.035,
    backgroundColor: _theme.COLORS.white
  },
  edit: _objectSpread({}, _theme.FONTS.fiveHundred, {
    fontSize: 9,
    color: '#4463B1',
    alignSelf: 'center',
    padding: width * 0.01
  }),
  Textaddress_box: {
    width: width * 0.56,
    marginLeft: width * 0.1
  },
  select_addressbox: {
    borderWidth: 1,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    padding: width * 0.04,
    marginTop: height * 0.03,
    backgroundColor: _theme.COLORS.white
  },
  address_1: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fourHundred, {
    fontSize: 13,
    marginBottom: height * 0.017
  }),
  address_2: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fourHundred, {
    fontSize: 11,
    lineHeight: 18
  }),
  row: {
    flexDirection: 'row'
  },
  radio_box: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#4463B1',
    width: width * 0.05,
    height: height * 0.025
  },
  innerradio_box: {
    borderRadius: 10,
    width: width * 0.032,
    height: height * 0.017,
    alignSelf: 'center',
    margin: width * 0.004,
    backgroundColor: '#4463B1'
  },
  order_box2: {
    borderWidth: 1,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    backgroundColor: _theme.COLORS.white,
    padding: width * 0.04,
    marginTop: height * 0.04,
    paddingTop: height * 0.03
  },
  order_img: {
    width: width * 0.33,
    height: height * 0.15,
    marginLeft: width * -0.02
  },
  order_text1: _objectSpread({
    color: _theme.COLORS.black
  }, _theme.FONTS.fourHundred, {
    width: width * 0.45,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: width * 0.01
  }),
  order_Qty: {
    width: width * 0.08,
    fontSize: 13
  },
  plusminus_box: {
    marginLeft: width * -0.03,
    marginTop: height * -0.001
  },
  order_plusminus: {
    color: '#FF6745',
    marginTop: width * -0.01,
    fontSize: 10,
    fontWeight: 'bold'
  },
  rupeebox: {
    marginLeft: width * 0.18
  },
  order_rupee_text1: _objectSpread({}, _theme.FONTS.fourHundred, {
    fontSize: 11,
    color: '#9C9C9C'
  }),
  order_rupee_text2: _objectSpread({}, _theme.FONTS.fourHundred, {
    fontSize: 11,
    color: _theme.COLORS.black,
    marginLeft: width * 0.03
  }),
  order_rupee_text3: _objectSpread({}, _theme.FONTS.sixHundred, {
    color: '#13D33E',
    fontSize: 10,
    marginLeft: width * 0.03
  }),
  bottom_box: {
    alignSelf: 'center'
  },
  order_rupee_bottomtext: _objectSpread({}, _theme.FONTS.fourHundred, {
    color: _theme.COLORS.black,
    fontSize: 11
  }),
  free: {
    color: '#13D33E'
  },
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
  secure_box: {
    width: width * 0.6,
    alignItems: 'center',
    margin: width * 0.05,
    marginBottom: height * -0.03
  },
  secure_img: {
    width: width * 0.08,
    height: height * 0.043,
    margin: width * 0.03
  },
  securepyment: _objectSpread({
    color: '#8A8A8A',
    fontSize: 10
  }, _theme.FONTS.fourHundred),
  price_bottom: {
    borderColor: '#CCCCCC',
    backgroundColor: _theme.COLORS.white,
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    // marginTop: height * 0.03,
    justifyContent: 'space-between'
  },
  price_bottom_text1: _objectSpread({}, _theme.FONTS.sixHundred, {
    color: _theme.COLORS.black,
    fontSize: 18,
    marginBottom: height * -0.01,
    letterSpacing: 3
  }),
  price_bottom_text2: {
    color: '#3845B7',
    fontSize: 8,
    marginBottom: height * -0.02
  },
  marginLeft: {
    marginLeft: width * 0.08
  }
});

exports["default"] = _default;