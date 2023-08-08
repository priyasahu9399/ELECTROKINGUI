"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = require("react-native-vector-icons/Icon");

var _constants = require("../constants");

var _index = _interopRequireDefault(require("./../screens/cartscreen/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var homelist = [{
  text: ' 3 D printer'
}, {
  text: 'Computers'
}, {
  text: 'Battery'
}, {
  text: 'Drone Parts'
}];
var carddata = [{
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}, {
  src: _constants.images.categorie,
  text1: 'Development',
  text2: 'Boards'
}]; // source,icon, title1, title2, title3, title4, title5

var RecommendedCartdata = [{
  id: 1,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU:945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 2,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 3,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 4,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 5,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 6,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 7,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}, {
  id: 8,
  source: _constants.images.kidtier,
  icon: _constants.icons.recom_icon,
  title1: 'Robot Kits and Parts',
  title2: ' M5STACK BALA-C ESP32 Development',
  title3: 'SKU: 945397',
  title4: '(874)',
  title5: '₹ 4500.00'
}];
var ServiceCartdata = [{
  src: _constants.images.service1,
  text: 'PCB Manufacturing Service'
}, {
  src: _constants.images.service2,
  text: 'Online FDM 3D Printing Service'
}, {
  src: _constants.images.service3,
  text: 'Custom Battery Pack'
}, {
  src: _constants.images.service4,
  text: 'Metal Laser Cutting Service'
}, {
  src: _constants.images.service5,
  text: 'Online SLA 3D Printing Service'
}];
var Blogcartdata = [{
  id: 0,
  blogtext: 'Self balance Robot using balance',
  images: _constants.images.balance
}];
var Videocartdata = [{
  id: 0,
  Videotext: 'Arduino-based CNC pen plotter with Detailed Configuration',
  video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}];
var AllBlogcartdata = [{
  id: 0,
  Blogcarttext: 'Self balance Robot using balance',
  Blogcartimages: _constants.images.balance
}, {
  id: 1,
  Blogcarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
  Blogcartimages: _constants.images.cnc
}, {
  id: 2,
  Blogcarttext: 'Self balance Robot using balance',
  Blogcartimages: _constants.images.balance
}, {
  id: 3,
  Blogcarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
  Blogcartimages: _constants.images.cnc
}];
var Trendingvideocartdata = [{
  id: 0,
  videocarttext: 'Self balance Robot using balance',
  Trendingvideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}, {
  id: 1,
  videocarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
  Trendingvideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}, {
  id: 2,
  videocarttext: 'Self balance Robot using balance',
  Trendingvideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}, {
  id: 3,
  videocarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
  Trendingvideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}];
var Brandlist = [{
  Brand: _constants.images.Brand1
}, {
  Brand: _constants.images.Brand2
}, {
  Brand: _constants.images.Brand3
}, {
  Brand: _constants.images.Brand4
}, {
  Brand: _constants.images.Brand5
}, {
  Brand: _constants.images.Brand6
}, {
  Brand: _constants.images.Brand7
}, {
  Brand: _constants.images.Brand8
}, {
  Brand: _constants.images.Brand9
}, {
  Brand: _constants.images.Brand10
}, {
  Brand: _constants.images.Brand11
}, {
  Brand: _constants.images.Brand12
}, {
  Brand: _constants.images.Brand13
}, {
  Brand: _constants.images.Brand14
}, {
  Brand: _constants.images.Brand15
}, {
  Brand: _constants.images.Brand16
}];
var Ratingboxdata = [{
  rat_text1: 'Working really well with Arduino nano V3/ATmega328P Nano V3 board.Thanks Robu team for fast shipping and great pricing.',
  rat_text2: 'Rajiv – March 13, 2023'
}, {
  rat_text1: 'very nice product. works as expected for arduino uno….price is also reasonable ',
  rat_text2: 'Pawan – March 13, 2023 '
}];
var SelectAddressdata = [{
  id: 1,
  address_text1: 'Pawan kumar',
  address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
  address_text3: '998XXXX679',
  address_text4: 'Edit'
}, {
  id: 2,
  address_text1: 'Pawan kumar',
  address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
  address_text3: '998XXXX679',
  address_text4: 'Edit'
}, {
  id: 3,
  address_text1: 'Pawan kumar',
  address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
  address_text3: '998XXXX679',
  address_text4: 'Edit'
}];
var Allothercouponsdata = [{
  id: 1,
  bank_text: 'UPI',
  banksrc: _constants.images.pytm
}, {
  id: 2,
  bank_text: 'Credit/ Debit / Atm Card ',
  bank_text2: 'Some content about this'
}, {
  id: 3,
  bank_text: 'Net Banking',
  bank_text2: 'Some content about this'
}, {
  id: 4,
  bank_text: 'Cash on Delivery'
}, {
  id: 5,
  bank_text: 'EMI'
}];
var paymentappdata = [{
  img: _constants.images.visa
}, {
  img: _constants.images.Rupay
}, {
  img: _constants.images.pytm
}, {
  img: _constants.images.phonepy
}];
var CartsCARTSdata = [{
  src: _constants.images.detail1,
  carttext1: 'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
  carttext2: '₹ 192',
  carttext3: '₹ 120',
  carttext4: '60% off'
}, {
  src: _constants.images.detail1,
  carttext1: 'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
  carttext2: '₹ 192',
  carttext3: '₹ 120',
  carttext4: '60% off'
}, {
  src: _constants.images.detail1,
  carttext1: 'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
  carttext2: '₹ 192',
  carttext3: '₹ 120',
  carttext4: '60% off'
}, {
  src: _constants.images.detail1,
  carttext1: 'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
  carttext2: '₹ 192',
  carttext3: '₹ 120',
  carttext4: '60% off'
}];
var Recentsearchdata = [{
  id: '1',
  value: '3 D Printer'
}, {
  id: '2',
  value: 'Sensors'
}, {
  id: '3',
  value: 'Raspberry PI'
}, {
  id: '4',
  value: 'Electronic Modules and Display'
}, {
  id: '5',
  value: 'Drone Part'
}, {
  id: '6',
  value: 'Electronic Component'
}];
var _default = {
  homelist: homelist,
  carddata: carddata,
  RecommendedCartdata: RecommendedCartdata,
  ServiceCartdata: ServiceCartdata,
  Blogcartdata: Blogcartdata,
  Videocartdata: Videocartdata,
  Brandlist: Brandlist,
  AllBlogcartdata: AllBlogcartdata,
  Trendingvideocartdata: Trendingvideocartdata,
  Ratingboxdata: Ratingboxdata,
  SelectAddressdata: SelectAddressdata,
  Allothercouponsdata: Allothercouponsdata,
  paymentappdata: paymentappdata,
  CartsCARTSdata: CartsCARTSdata,
  Recentsearchdata: Recentsearchdata
};
exports["default"] = _default;