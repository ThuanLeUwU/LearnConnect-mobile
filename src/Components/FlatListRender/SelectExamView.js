import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, TouchableOpacity, } from "react-native";
import { VectorIcons } from '../../Components';
import { SF } from "../../Utiles";
import { useTranslation } from "react-i18next";
import { SelectExamScreenStyle } from "../../style";

const SelectExamView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const SelectExamScreenStyles = useMemo(() => SelectExamScreenStyle(Colors), [Colors]);

  return (
    <TouchableOpacity onPress={() => onPress()} style={SelectExamScreenStyles.whiteboxwhishlist}>
      <View style={SelectExamScreenStyles.flexDirectiwhilist}>
        <View style={SelectExamScreenStyles.selecticvonview}>
          <VectorIcons
            icon="AntDesign"
            size={SF(33)}
            name="filetext1"
            color={Colors.white_text_color}
          />
        </View>
        <View style={SelectExamScreenStyles.textandiconflexview}>
          <View style={SelectExamScreenStyles.textviewwidthset}>
            <Text style={SelectExamScreenStyles.designfonttext}>{t(item.Title)}</Text>
            <Text style={SelectExamScreenStyles.dolardigittext}>{t(item.Titletwo)}</Text>
          </View>
          <View style={SelectExamScreenStyles.iconview}>
            <VectorIcons
              icon="AntDesign"
              size={SF(33)}
              name="right"
              color={Colors.theme_backgound}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SelectExamView;