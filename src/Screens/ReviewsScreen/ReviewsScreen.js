import React, { useState, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { ReviewsStyle, Style } from '../../style';
import { Button, ConfirmationAlert, Lottie, Spacing, Rating, Container, Input } from '../../Components';
import images from "../../index";
import { RouteName } from "../../routes";
import { SH } from "../../Utiles";
import { useTranslation } from "react-i18next";

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const { Colors } = useTheme();
  const ReviewsStyles = useMemo(() => ReviewsStyle(Colors), [Colors]);

  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  return (
    <Container>
      <View style={ReviewsStyles.MinViewScreenTwo}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={ReviewsStyles.KeyBordTopViewStyle}>
              <View style={ReviewsStyles.MinFlexView}>
                <View style={ReviewsStyles.MinContentView}>
                  <Spacing space={SH(30)} />
                  <Lottie Lottiewidthstyle={ReviewsStyles.PostionReView} source={images.Reviewsimage_screen} />
                  <Spacing space={SH(30)} />
                  <Text style={ReviewsStyles.AccountTextTwo}>{t("Please_OnDemand_Service")}</Text>
                  <View style={ReviewsStyles.FlexRowStarSignup}>
                    <Rating tintColor={Colors.reviews_color} />
                  </View>
                  <Text style={ReviewsStyles.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                  <Spacing space={SH(10)} />
                  <View style={ReviewsStyles.InputUnderLineReviews}>
                    <Input
                      inputStyle={ReviewsStyles.PositionStyleInput}
                      onChangeText={onChangeText}
                      value={text}
                      numberOfLines={3}
                      placeholder={t("Reviews_Enter_Your_Commenet")}
                      placeholderTextColor={Colors.black_text_color}
                    />
                  </View>
                  <Spacing space={SH(20)} />
                  <View style={ReviewsStyles.AccountButton}>
                    <Button onPress={() => {
                      setAlertVisible(true);
                      setAlertMessage(alertdata.logout);
                    }} title={t("Reviews_Submit")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          buttonminview={ReviewsStyles.ButtonView}
          iconVisible={true}
          buttonText={t("Ok_Text")}
        />
      </View>
    </Container>
  );
};
export default ReviewsScreen;
