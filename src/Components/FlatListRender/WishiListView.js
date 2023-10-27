/* eslint-disable no-undef */
import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MyCoursesTabStyle} from '../../style';
import {VectorIcons} from '../CommonComponets';
import {useTranslation} from 'react-i18next';
import {SF} from '../../Utiles';

const WishiListView = props => {
  const {item, onPress} = props;
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const MyCoursesTabStyles = useMemo(() => MyCoursesTabStyle(Colors), [Colors]);

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={MyCoursesTabStyles.whiteboxwhishlist}>
      <View style={MyCoursesTabStyles.flexDirectiwhilist}>
        <View>
          <Image
            style={MyCoursesTabStyles.setimagestykle}
            resizeMode="cover"
            source={item.image}
          />
        </View>
        <View style={MyCoursesTabStyles.textviewsetwhishlist}>
          <View style={MyCoursesTabStyles.flexrowheart}>
            <Text style={MyCoursesTabStyles.designfonttext}>
              {t(item.Title)}
            </Text>
            <TouchableOpacity onPress={() => sethearticon(0)}>
              <VectorIcons
                icon="AntDesign"
                size={SF(25)}
                name="heart"
                style={MyCoursesTabStyles.setheart}
              />
            </TouchableOpacity>
          </View>
          <View style={MyCoursesTabStyles.videoandtextsetup}>
            <View style={MyCoursesTabStyles.settimevideo}>
              <VectorIcons
                icon="AntDesign"
                size={SF(15)}
                name="clockcircleo"
                style={MyCoursesTabStyles.clockimage}
              />
              <Text style={MyCoursesTabStyles.timevodeoset}>
                {t(item.TimeText)}
              </Text>
            </View>
          </View>
          <View style={MyCoursesTabStyles.flexrowheartsettwo}>
            <View>{item.rating}</View>
            <Text style={MyCoursesTabStyles.dolardigittext}>
              {item.PriceText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default WishiListView;
