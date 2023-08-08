import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
// import {data} from '../../constants';
const {width, height} = Dimensions.get('window');

const Sliders = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const Sliderlist = [
    {
      id: 0,
      img: images.detail1,
    },
    {
      id: 1,
      img: images.detail1,
    },
    {
      id: 2,
      img: images.detail1,
    },
    {
      id: 3,
      img: images.detail1,
    },
  ];

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == Sliderlist.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 2000);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != Sliderlist.length) {
      const offset = nextSlideIndex * (width * 0.8);
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View>
      <FlatList
        data={Sliderlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.imgmainbox}>
              <Image source={item.img} style={styles.imagestyle} />
            </View>
          </TouchableOpacity>
        )}
      />

      <View>
        <View style={styles.dotbox}>
          {Sliderlist.map(item => (
            <View
              key={item.id}
              style={{
                ...styles.dotstyle,
                borderColor: currentSlideIndex == item.id ? 'black' : '',
                backgroundColor:
                  currentSlideIndex == item.id ? 'black' : 'white',
              }}></View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Sliders;
