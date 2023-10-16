import React, { useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { Login, Style } from '../../../style';
import { Button, Spacing, Lottie, Container } from '../../../Components';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { SH } from '../../../Utiles';
import { useTranslation } from "react-i18next";

const RegistrationSuccessful = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const OnLoginssPress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={Logins.KeyBordTopViewStyle}>
              <View style={Logins.MinFlexView}>
                <View style={Logins.MinViewSecond}>
                  <Lottie
                    resizeMode="contain"
                    autoPlay={true}
                    source={images.Account_created}
                  />
                  <Spacing space={SH(50)} />
                  <View style={Logins.AccountButton}>
                    <Button
                      title={t("Get_Started")}
                      onPress={() => OnLoginssPress()}
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default RegistrationSuccessful;
