import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {CoursesStyle} from '../../style';
import {useTranslation} from 'react-i18next';
import {Rating} from '../../Components';

const CoursesView = props => {
  const {t} = useTranslation();
  const {item, onPress} = props;
  const {Colors} = useTheme();
  const CoursesStyles = useMemo(() => CoursesStyle(Colors), [Colors]);

  return (
    <TouchableOpacity
      style={CoursesStyles.whiteboxwhishlist}
      onPress={() => onPress()}>
      <View style={CoursesStyles.flexDirectiwhilist}>
        <View>
          <Image
            style={CoursesStyles.imagesetios}
            resizeMode="cover"
            source={item.images}
          />
        </View>
        <View style={CoursesStyles.textviewsetwhishlist}>
          <Text style={CoursesStyles.designfonttext}>{t(item.gittext)}</Text>
          <Text style={CoursesStyles.setreviewstext}>{t(item.reviewtext)}</Text>
          <View style={CoursesStyles.setstartanddolardtext}>
            <View style={CoursesStyles.stariconview}>
              <Rating imageSize={17} />
            </View>
            <View>
              <Text style={CoursesStyles.dolardigittext}>
                {t(item.digittext)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CoursesView;
