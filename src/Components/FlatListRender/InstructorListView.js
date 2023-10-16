import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Spacing, VectorIcons} from '../CommonComponets';
import {SF, SH} from '../../Utiles';
import {useTranslation} from 'react-i18next';
import {ProfileStyles} from '../../style';

const InstructorListView = props => {
  const {t} = useTranslation();
  const {item, index, onPress} = props;
  const {Colors} = useTheme();
  const ProfileStyle = useMemo(() => ProfileStyles(Colors), [Colors]);

  return (
    <TouchableOpacity
      style={ProfileStyle.marginrightsetwidth}
      onPress={() => onPress()}>
      <View style={ProfileStyle.profilebgwhiteset}>
        <View>
          <View style={ProfileStyle.centimagebottomview}>
            <View style={ProfileStyle.centerviewstyle}>
              <Image
                style={ProfileStyle.imagsetstyle}
                resizeMode="cover"
                source={item.image}
              />
              <Text style={ProfileStyle.centerviewstyletwostyle}>
                <VectorIcons
                  icon="Octicons"
                  name={item.icon}
                  size={SF(43)}
                  color={item.colors}
                />
              </Text>
            </View>
          </View>
          <Text style={ProfileStyle.textsetsimple}>{t(item.text)}</Text>
          <Text style={ProfileStyle.jobtextstyle}>{t(item.jobtextset)}</Text>
          <Spacing space={SH(7)} />
          {item.rating}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default InstructorListView;
