import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Spacing } from "../CommonComponets";
import { useTranslation } from "react-i18next";
import { ExamScreenStyle } from "../../style";
import { SH } from "../../Utiles";

const ExamView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ExamScreenStyles = useMemo(() => ExamScreenStyle(Colors), [Colors]);
  return (
    <View style={ExamScreenStyles.flexexamboxview}>
      <TouchableOpacity onPress={() => onPress()} style={ExamScreenStyles.whiteboxwhishlist}>
        <View style={ExamScreenStyles.flexDirectiwhilist}>
          <View style={ExamScreenStyles.examimagview}>
            {item.IconMin}
          </View>
          <Spacing space={SH(10)} />
          <Text style={ExamScreenStyles.boxintitle}>{t(item.Title)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={ExamScreenStyles.whiteboxwhishlist}>
        <View style={ExamScreenStyles.flexDirectiwhilist}>
          <View style={ExamScreenStyles.examimagview}>
            {item.IconMintwo}
          </View>
          <Spacing space={SH(10)} />
          <Text style={ExamScreenStyles.boxintitle}>{t(item.Titletwo)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ExamView;