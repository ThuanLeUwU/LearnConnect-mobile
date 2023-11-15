import React, { useMemo, useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CoursesStyle } from '../../style';
import { useTranslation } from 'react-i18next';
import { Rating } from 'react-native-ratings';
import { VectorIcons } from '../CommonComponets';
import { SF } from '../../Utiles';

import {useSelector} from 'react-redux';
import axios from 'axios';

const CoursesView = props => {
  const { t } = useTranslation();
  const { item, onPress } = props;
  const { Colors } = useTheme();
  const CoursesStyles = useMemo(() => CoursesStyle(Colors), [Colors]);
	const {token, userLogin} = useSelector(state => state.authReducer) || {};
  const [heartIcon, setHeartIcon] = useState(item.isFavorite);

  const handlePressHeart = (heartSet) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		const addFavoriteCourse = async () => {
			await axios.post(`https://learnconnectapitest.azurewebsites.net/api/favorite-course`,
				{
					courseId: item.id,
          userId: userLogin.id
				}
			)
			  .then(res => {
				console.log('Set Heart Success: ', res?.data);
				setHeartIcon(true);
			  })
			  .catch(err => console.log('Error at addFavoriteCourse(): ', err));
		};
		const removeFavoriteCourse = async () => {
			await axios.delete(`https://learnconnectapitest.azurewebsites.net/api/favorite-course/un-set-favorite?userId=${userLogin.id}&courseId=${item.id}`)
			  .then(res => {
				console.log('UnSet Heart Success: ', res?.data);
				setHeartIcon(false);
			  })
			  .catch(err => console.log('Error at addFavoriteCourse(): ', err));
		};
		if(heartSet){
			addFavoriteCourse();
		} else {
			removeFavoriteCourse();
		};
	}

  useEffect(() => {
    setHeartIcon(item.isFavorite);
  }, [item.isFavorite]);

  return (
    <TouchableOpacity
      style={CoursesStyles.whiteboxwhishlist}
      onPress={() => onPress(heartIcon)}>
      <View style={CoursesStyles.flexDirectiwhilist}>
        <View>
          <Image
            style={CoursesStyles.imagesetios}
            resizeMode="cover"
            source={{ uri: `${item.imageUrl}`, }}
          />
        </View>
        <View style={CoursesStyles.textviewsetwhishlist}>
          <View style={CoursesStyles.flexrowheart}>
            <Text style={CoursesStyles.designfonttext}>{t(item.name)}</Text>
            {heartIcon ?
              <TouchableOpacity onPress={() => handlePressHeart(false)}>
                <VectorIcons
                  icon="AntDesign"
                  size={SF(25)}
                  name="heart"
                  style={CoursesStyles.setheart}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => handlePressHeart(true)}>
                <VectorIcons
                  icon="AntDesign"
                  size={SF(25)}
                  name="hearto"
                  style={CoursesStyles.setheart}
                />
              </TouchableOpacity>
            }
          </View>
          <Text style={CoursesStyles.setreviewstext}>{t(item.shortDescription)}</Text>
          <View style={CoursesStyles.setstartanddolardtext}>
            <View style={CoursesStyles.stariconview}>
              <Rating
                type='custom'
                ratingColor={Colors.amber_color}
                ratingBackgroundColor={'gainsboro'}
                ratingCount={5}
                imageSize={17}
                startingValue={item.averageRating}
                style={{ color: 'transparent', }}
                isDisabled={false}
                readonly
              />
            </View>
            <View>
              <Text style={CoursesStyles.dolardigittext}>
                {t(item.price === 0 ? 'Free' : item.price + '₫')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CoursesView;
