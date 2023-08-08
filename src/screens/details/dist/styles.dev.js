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
  main_box: {
    padding: width * 0.04
  },
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  red_box: {
    backgroundColor: '#E83B3B',
    height: height * 0.06,
    width: width * 0.12,
    padding: width * 0.015,
    borderRadius: 50
  },
  redbox_text: _objectSpread({
    color: _theme.COLORS.white,
    fontSize: 8,
    alignSelf: 'center'
  }, _theme.FONTS.sevenHundred),
  shareicon_box: {
    height: height * 0.04,
    width: width * 0.08,
    padding: width * 0.013,
    borderWidth: 1,
    borderRadius: 20
  },
  icon_style: {
    height: height * 0.022,
    width: width * 0.04,
    alignSelf: 'center',
    tintColor: _theme.COLORS.black
  },
  slider_text1: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 12
  }),
  slider_text2: _objectSpread({}, _theme.FONTS.sevenHundred, {
    color: _theme.COLORS.black,
    fontSize: 15
  }),
  direction_row: {
    flexDirection: 'row'
  },
  touch_btn: {
    backgroundColor: _theme.COLORS.orange,
    width: width * 0.5,
    marginTop: height * -0.01
  },
  touch_btn2: {
    backgroundColor: _theme.COLORS.darkblue
  },
  touch_btn_text: _objectSpread({}, _theme.FONTS.sevenHundred, {
    color: _theme.COLORS.white,
    fontSize: 13,
    padding: width * 0.04,
    alignSelf: 'center'
  }),
  text_box: {
    padding: width * 0.08,
    marginTop: height * -0.06
  },
  heading: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 15,
    paddingBottom: height * 0.01,
    paddingTop: height * 0.02
  }),
  content: _objectSpread({}, _theme.FONTS.fourHundred, {
    color: _theme.COLORS.black,
    fontSize: 10,
    lineHeight: 18 // paddingTop: height * 0.01,

  }),
  Specification_box: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Specificationcontent: _objectSpread({}, _theme.FONTS.fourHundred, {
    color: _theme.COLORS.black,
    fontSize: 9,
    lineHeight: 22
  }),
  Specificationheading: _objectSpread({
    fontSize: 11,
    marginBottom: height * 0.04
  }, _theme.FONTS.sevenHundred),
  day15warenty: {
    fontSize: 12,
    paddingBottom: height * 0.01,
    paddingTop: height * 0.0
  },
  warrenty: _objectSpread({}, _theme.FONTS.fiveHundred, {
    fontSize: 11
  }),
  add_review_text: _objectSpread({
    fontSize: 12,
    color: _theme.COLORS.white,
    padding: width * 0.03
  }, _theme.FONTS.sixHundred, {
    alignSelf: 'center'
  }),
  add_review: {
    backgroundColor: _theme.COLORS.orange,
    alignSelf: 'center',
    borderRadius: 40,
    width: width * 0.4,
    margin: width * 0.1
  },
  myStarStyle: {
    color: '#ffc107',
    textShadowRadius: 2,
    margin: width * 0.015 //  marginLeft:0

  },
  myEmptyStarStyle: {
    color: '#A9A9A9'
  },
  viewall_rating: _objectSpread({}, _theme.FONTS.fiveHundred, {
    color: _theme.COLORS.black,
    fontSize: 13,
    paddingLeft: width * 0.02,
    marginBottom: height * 0.07,
    marginTop: height * 0.03
  }),
  fixed_bottom_btn: {
    position: 'absolute',
    bottom: 0
  }
});

exports["default"] = _default;