import React, {useMemo} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {HomeStyles} from '../../style';
import {widthPercent} from '../../Utiles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

const HomeCarouselSlider = props => {
  const {courses, onPress} = props;
  const {Colors} = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  let _slider1Ref;
  const {t} = useTranslation();

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={HomeStyle.rounftextview}
          onPress={() => onPress(item.id)}>
          <Image
            style={HomeStyle.imagsetstyle}
            resizeMode="stretch"
            source={{
              uri: `${item.imageUrl}`,
            }}
          />
          <Text 
            style={[
              HomeStyle.textContainer, 
              {
                textShadowColor: 'rgb(40, 40, 40)', 
                textShadowRadius: 1, 
                textShadowOffset: 
                  {
                    width: 2, 
                    height: 2,
                  }
              }
            ]}
          >
            {t(item.name)}
          </Text>
          <Text style={[HomeStyle.textContainertwo, {textShadowColor: 'gray', textShadowRadius: 1, textShadowOffset: {width: 1.5, height: 1.5,}}]}>{t(item.categoryName)}</Text>
          {/* <Text style={HomeStyle.textContainerthree}>{t(item.averageRating)}</Text> */}
          <Rating 
            type='custom'
            ratingColor={Colors.amber_color}
            ratingBackgroundColor={'transparent'}
            ratingCount={5}
            imageSize={20}
            startingValue={item.averageRating}
            style={[HomeStyle.textContainertwo, {paddingTop:100, color: 'transparent'}]}
            isDisabled={false}
            readonly 
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Carousel
      ref={c => (_slider1Ref = c)}
      data={courses}
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
