import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HomeStyles} from '../../style';
import {widthPercent, CarouselItemsFirst} from '../../Utiles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import axios from 'axios';
// import axios from 'axios';

// use for test
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const HomeCarouselSlider = props => {
  const {navigation, onPress} = props;
  const {Colors} = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  let _slider1Ref;
  const {t} = useTranslation();
  const [carouselItem, setCarouselItem] = useState([]);
  console.log('tui nè', carouselItem);

  // call API to get courses
  const fetchData = useCallback(async () => {
    console.log('zzzz');
    try {
      const {data: responseData = []} = await axios
        .get('https://learnconnectapitest.azurewebsites.net/api/course')
        .catch(error => {
          console.log('lỗi hả');
        });

      // use for test
      await sleep(1000);
      console.log('Use for test response', responseData);

      if (responseData.length) {
        setCarouselItem(responseData);
      }
    } catch (error) {
      console.log('Không ra');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // if state is empty => return null
  if (!carouselItem) {
    return;
  }

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={HomeStyle.rounftextview}
          onPress={() => onPress()}>
          <Image
            style={HomeStyle.imagsetstyle}
            resizeMode="stretch"
            source={item.imge}
          />
          <Text style={HomeStyle.textContainer}>{t(item.title)}</Text>
          <Text style={HomeStyle.textContainertwo}>
            {t(item.paregraphtitle)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Carousel
      ref={c => (_slider1Ref = c)}
      data={CarouselItemsFirst}
      renderItem={_renderItem}
      sliderWidth={widthPercent(100)}
      itemWidth={widthPercent(85)}
      hasParallaxImages={false}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.7}
      containerCustomStyle={HomeStyle.slider}
      loop={true}
      autoplay={true}
      enableSnap={true}
      bounces={false}
      lockScrollWhileSnapping={true}
    />
  );
};
export default HomeCarouselSlider;
