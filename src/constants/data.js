import {Icon} from 'react-native-vector-icons/Icon';
import {images, icons} from '../constants';
import Cart from './../screens/cartscreen/index';

const homelist = [
  {text: ' 3 D printer'},
  {text: 'Computers'},
  {text: 'Battery'},
  {text: 'Drone Parts'},
];

const carddata = [
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
  {
    src: images.categorie,
    text1: 'Development',
    text2: 'Boards',
  },
];

// source,icon, title1, title2, title3, title4, title5
const RecommendedCartdata = [
  {
    id: 1,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU:945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 2,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 3,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 4,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 5,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 6,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 7,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
  {
    id: 8,
    source: images.kidtier,
    icon: icons.recom_icon,
    title1: 'Robot Kits and Parts',
    title2: ' M5STACK BALA-C ESP32 Development',
    title3: 'SKU: 945397',
    title4: '(874)',
    title5: '₹ 4500.00',
  },
];

const ServiceCartdata = [
  {
    src: images.service1,
    text: 'PCB Manufacturing Service',
  },
  {
    src: images.service2,
    text: 'Online FDM 3D Printing Service',
  },
  {
    src: images.service3,
    text: 'Custom Battery Pack',
  },
  {
    src: images.service4,
    text: 'Metal Laser Cutting Service',
  },
  {
    src: images.service5,
    text: 'Online SLA 3D Printing Service',
  },
];

const Blogcartdata = [
  {id: 0, blogtext: 'Self balance Robot using balance', images: images.balance},
];

const Videocartdata = [
  {
    id: 0,
    Videotext: 'Arduino-based CNC pen plotter with Detailed Configuration',
    video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
];

const AllBlogcartdata = [
  {
    id: 0,
    Blogcarttext: 'Self balance Robot using balance',
    Blogcartimages: images.balance,
  },
  {
    id: 1,
    Blogcarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
    Blogcartimages: images.cnc,
  },
  {
    id: 2,
    Blogcarttext: 'Self balance Robot using balance',
    Blogcartimages: images.balance,
  },
  {
    id: 3,
    Blogcarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
    Blogcartimages: images.cnc,
  },
];

const Trendingvideocartdata = [
  {
    id: 0,
    videocarttext: 'Self balance Robot using balance',
    Trendingvideo:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 1,
    videocarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
    Trendingvideo:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 2,
    videocarttext: 'Self balance Robot using balance',
    Trendingvideo:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 3,
    videocarttext: 'Arduino-based CNC pen plotter with Detailed Configuration',
    Trendingvideo:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
];

const Brandlist = [
  {Brand: images.Brand1},
  {Brand: images.Brand2},
  {Brand: images.Brand3},
  {Brand: images.Brand4},
  {Brand: images.Brand5},
  {Brand: images.Brand6},
  {Brand: images.Brand7},
  {Brand: images.Brand8},
  {Brand: images.Brand9},
  {Brand: images.Brand10},
  {Brand: images.Brand11},
  {Brand: images.Brand12},
  {Brand: images.Brand13},
  {Brand: images.Brand14},
  {Brand: images.Brand15},
  {Brand: images.Brand16},
];

const Ratingboxdata = [
  {
    rat_text1:
      'Working really well with Arduino nano V3/ATmega328P Nano V3 board.Thanks Robu team for fast shipping and great pricing.',
    rat_text2: 'Rajiv – March 13, 2023',
  },
  {
    rat_text1:
      'very nice product. works as expected for arduino uno….price is also reasonable ',
    rat_text2: 'Pawan – March 13, 2023 ',
  },
];

const SelectAddressdata = [
  {
    id: 1,
    address_text1: 'Pawan kumar',
    address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
    address_text3: '998XXXX679',
    address_text4: 'Edit',
  },
  {
    id: 2,
    address_text1: 'Pawan kumar',
    address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
    address_text3: '998XXXX679',
    address_text4: 'Edit',
  },
  {
    id: 3,
    address_text1: 'Pawan kumar',
    address_text2: 'Prem nagar near vbu hazaribagh, Jharkhand 825301',
    address_text3: '998XXXX679',
    address_text4: 'Edit',
  },
];

const Allothercouponsdata = [
  {
    id: 1,
    bank_text: 'UPI',
    banksrc: images.pytm,
  },
  {
    id: 2,
    bank_text: 'Credit/ Debit / Atm Card ',
    bank_text2: 'Some content about this',
  },
  {
    id: 3,
    bank_text: 'Net Banking',
    bank_text2: 'Some content about this',
  },
  {
    id: 4,
    bank_text: 'Cash on Delivery',
  },
  {
    id: 5,
    bank_text: 'EMI',
  },
];

const paymentappdata = [
  {
    img: images.visa,
  },
  {
    img: images.Rupay,
  },
  {
    img: images.pytm,
  },
  {
    img: images.phonepy,
  },
];

const CartsCARTSdata = [
  {
    src: images.detail1,
    carttext1:
      'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
    carttext2: '₹ 192',
    carttext3: '₹ 120',
    carttext4: '60% off',
  },
  {
    src: images.detail1,

    carttext1:
      'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
    carttext2: '₹ 192',
    carttext3: '₹ 120',
    carttext4: '60% off',
  },
  {
    src: images.detail1,

    carttext1:
      'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
    carttext2: '₹ 192',
    carttext3: '₹ 120',
    carttext4: '60% off',
  },
  {
    src: images.detail1,

    carttext1:
      'XL6009 DC-DC Step-Up Converter Performance ultra LM2577 Booster Circuit Board',
    carttext2: '₹ 192',
    carttext3: '₹ 120',
    carttext4: '60% off',
  },
];

const Recentsearchdata = [
  {
    id: '1',
    value: '3 D Printer',
  },
  {
    id: '2',
    value: 'Sensors',
  },
  {
    id: '3',
    value: 'Raspberry PI',
  },
  {
    id: '4',
    value: 'Electronic Modules and Display',
  },
  {
    id: '5',
    value: 'Drone Part',
  },
  {
    id: '6',
    value: 'Electronic Component',
  },
];

export default {
  homelist,
  carddata,
  RecommendedCartdata,
  ServiceCartdata,
  Blogcartdata,
  Videocartdata,
  Brandlist,
  AllBlogcartdata,
  Trendingvideocartdata,
  Ratingboxdata,
  SelectAddressdata,
  Allothercouponsdata,
  paymentappdata,
  CartsCARTSdata,
  Recentsearchdata,
};
