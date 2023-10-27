import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HomeStyles} from '../../style';
import {widthPercent, CarouselItemsFirst} from '../../Utiles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import axios from 'axios';
// import axios from 'axios';

const HomeCarouselSlider = props => {
  const {navigation, onPress} = props;
  const {Colors} = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  let _slider1Ref;
  const {t} = useTranslation();
  const [carouselItem, setCarouselItem] = useState([]);
  console.log('tui nè', carouselItem);
  // const fetchData = async () => {
  //     console.log(await axios.get('https://learnconnectapitest.azurewebsites.net/api/course'))
  //       // .then(res => {
  //         // cái đó là eslint thôi

  //       //   console.log('dddd', res.data);
  //       //   setCarouselItem(res?.data);
  //       // });
  //     // if (responseData?.data) {
  //     // }
  //   // } catch (error) {
  //   //   console.log('Không ra');
  //   // }

  //   // console.log('tui nè má', responseData?.data);
  // };

  // useEffect(() => {
  //   fetchData();
  //   setTimeout(() => {
  //     console.log('lâu zậy', carouselItem);
  //   }, 10000);
  // }, [carouselItem]);

  useEffect(() => {
    const abc = async () => {
      await axios
        .get('https://learnconnectapitest.azurewebsites.net/api/course')
        .then(res => {
          console.log('rés', res?.data);
          setCarouselItem(res?.data);
        })
        .catch(err => console.log('err', err));
    };
    abc();
  }, []);

  console.log('dâta', carouselItem);

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={HomeStyle.rounftextview}
          onPress={() => onPress()}>
          <Image
            style={HomeStyle.imagsetstyle}
            resizeMode="stretch"
            source={{
              uri: `${item.imageUrl}`,
            }}
          />
          <Text style={HomeStyle.textContainer}>{t(item.name)}</Text>
          <Text style={HomeStyle.textContainertwo}>{t(item.description)}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Carousel
      ref={c => (_slider1Ref = c)}
      data={carouselItem}
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
