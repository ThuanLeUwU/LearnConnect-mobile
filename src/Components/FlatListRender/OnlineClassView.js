import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from "react-native";
import { OnlineClassStyle } from '../../style';
import { Button } from '../../Components';
import { useTranslation } from "react-i18next";

const OnlineClassView = (props) => {
  const { item, onPress, index } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const OnlineClassStyles = useMemo(() => OnlineClassStyle(Colors), [Colors]);

  return (
    <View style={OnlineClassStyles.bgcolorwhiteset}>
      <View style={OnlineClassStyles.flexrowsettextandbutton}>
        <View style={OnlineClassStyles.textwidth}>
          <Text style={OnlineClassStyles.mintitlestyle}>{t(item.text)}</Text>
        </View>
        <View style={OnlineClassStyles.setbuttonwidthstyle}>
          <Button onPress={() => onPress()} title={t(item.buttontitle)} buttonTextStyle={index === 1 || index === 3 || index === 4 ? OnlineClassStyles.redtextcolor : null} buttonStyle={index === 0 || index === 2 || index === 5 ? OnlineClassStyles.buttonStyle : OnlineClassStyles.endbuttonstyles} />
        </View>
      </View>
      <View style={OnlineClassStyles.flexrowsettextandbuttontwoset}>
        <View style={OnlineClassStyles.dateviewstyle}>
          <Text style={OnlineClassStyles.datetextstyles}>{t(item.Datetext)} </Text>
          <Text style={OnlineClassStyles.datetextstyles}>{t(item.Date)}</Text>
        </View>
        <View>
          <Text>{t(item.simpleline)}</Text>
        </View>
        <View style={OnlineClassStyles.dateviewstyle}>
          <Text style={OnlineClassStyles.datetextstyles}>{t(item.starttime)} </Text>
          <Text style={OnlineClassStyles.datetextstyles}>{t(item.settime)}</Text>
        </View>
      </View>
    </View>
  );
};
export default OnlineClassView;