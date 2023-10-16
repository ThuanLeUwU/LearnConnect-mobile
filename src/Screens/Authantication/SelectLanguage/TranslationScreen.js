import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import '../SelectLanguage/i18n';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Lottie, Spacing, Button, ModalLanguage, VectorIcons } from '../../../Components';
import { LanguageStyles } from '../../../style';
import { RouteName } from '../../../routes';
import images from '../../../index';
import { SH, SF } from '../../../Utiles';

const Translation = (props) => {
  const { navigation } = props;
  const { t, i18n } = useTranslation();
  let englishLanguage = t("English");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectLabel, setSelectLabel] = useState(englishLanguage);
  const { Colors } = useTheme();
  const LanguageStyle = useMemo(() => LanguageStyles(Colors), [Colors]);

  const changeLang = (e) => {
    setSelectLabel(e)
  }

  return (
    <Container>
      <View style={LanguageStyle.MinView}>
        <Lottie source={images.Languageanimation} />
        <Spacing space={SH(50)} />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={LanguageStyle.SelectTagWrap}>
          <Text style={LanguageStyle.SelectText}>{selectLabel}</Text>
          <View style={LanguageStyle.DropDownIcon}>
            <VectorIcons icon="Feather" name="chevron-down" color={Colors.theme_backgound} size={SF(25)} /></View>
        </TouchableOpacity>
        <Spacing space={SH(20)} />
        <ModalLanguage modalVisible={modalVisible}
          setModalVisible={() => {
            setModalVisible(!modalVisible);
          }}
          close={() => setModalVisible(!modalVisible)}
          OnClose={() => setModalVisible(false)}
          changeLang={changeLang}
        />
        <View style={LanguageStyle.BtnVieStyle}>
          <Button title={t("Confirm_Text")} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
        </View>
      </View>
    </Container>
  );
};
export default Translation;