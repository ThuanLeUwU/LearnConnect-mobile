import React, { useMemo,useState } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { VectorIcons } from "../CommonComponets";
import { useTranslation } from "react-i18next";
import { SF } from "../../Utiles";
import { MyCoursesTabStyle } from "../../style";
import { useTheme } from '@react-navigation/native';

const MyCoursesView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const [hearticon, sethearticon] = useState(0);
  const { Colors } = useTheme();
  const MyCoursesTabStyles = useMemo(() => MyCoursesTabStyle(Colors), [Colors]);

  return (
    <View style={MyCoursesTabStyles.whiteboxwhishlist}>
      <View style={MyCoursesTabStyles.flexDirectiwhilist}>
        <TouchableOpacity onPress={() => onPress()}>
          <Image style={MyCoursesTabStyles.setimagestykle} resizeMode='cover' source={item.image} />
        </TouchableOpacity>
        <View style={MyCoursesTabStyles.textviewsetwhishlist}>
          <View style={MyCoursesTabStyles.flexrowheart}>
            <Text style={MyCoursesTabStyles.designfonttext}>{t(item.Title)}</Text>
            {hearticon === 0 ?
              <TouchableOpacity onPress={() => sethearticon(1)}>
                <VectorIcons
                  icon="AntDesign"
                  size={SF(25)}
                  name="hearto"
                  style={MyCoursesTabStyles.setheart}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => sethearticon(0)}>
                <VectorIcons
                  icon="AntDesign"
                  size={SF(25)}
                  name="heart"
                  style={MyCoursesTabStyles.setheart}
                />
              </TouchableOpacity>
            }
          </View>
          <View style={MyCoursesTabStyles.videoandtextsetup}>
            <View style={MyCoursesTabStyles.settimevideo}>
              <VectorIcons
                icon="AntDesign"
                size={SF(15)}
                name="clockcircleo"
                style={MyCoursesTabStyles.clockimage}
              />
              <Text style={MyCoursesTabStyles.timevodeoset}>{t(item.TimeText)}</Text>
            </View>
            <View>
              <Text style={MyCoursesTabStyles.videotextstyle}>{t(item.VideoText)}</Text>
            </View>
          </View>
          <View style={MyCoursesTabStyles.flexrowheartsettwo}>
            <View>
              {item.rating}
            </View>
            <Text style={MyCoursesTabStyles.dolardigittext}>{item.PriceText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default MyCoursesView;