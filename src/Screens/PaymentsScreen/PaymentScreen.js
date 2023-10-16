import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, StatusBar, Image, TouchableOpacity, } from 'react-native';
import { PaymentStyles, Otpstyle } from '../../style';
import { Container, VectorIcons, ConfirmationAlert } from '../../Components';
import { SF } from '../../Utiles';
import images from '../../index';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../routes';

const PaymentScreen = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyle = useMemo(() => PaymentStyles(Colors), [Colors]);
  const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const { navigation } = props;

  var alertdata = {
    'paymentsuccess': t("Payments_Title_7"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.CONGREJULATION_SCREEN)
  }
  return (
    <Container>
      <View style={PaymentStyle.setbgcolor}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(254,238,245,1)" />
        <View style={PaymentStyle.container}>
          <View style={PaymentStyle.setviewstyle}>
            <View style={PaymentStyle.setminviewwidth}>
              <View style={PaymentStyle.chideContainer}>
                <View style={PaymentStyle.sectionView}>
                  <Text style={PaymentStyle.leblaStyle}><Text style={PaymentStyle.datasciencewidth}>{t("Payments_Title_6")}</Text> </Text>
                </View>
                <View style={PaymentStyle.sectionView}>
                  <Image source={images.Paymrny_Image_1} style={PaymentStyle.iconStyle} resizeMode={'stretch'} />
                  <Text style={PaymentStyle.leblaStyle}>{t("Payments_Title_1")}  <Text style={PaymentStyle.datasciencewidth}>$ 220.09</Text></Text>
                </View>
              </View>
              <Text style={PaymentStyle.paywithstyles}>{t("Payments_Title_2")}</Text>
              <View style={PaymentStyle.whitebgcolor}>
                <View style={PaymentStyle.setnormalborderview}>
                  <TouchableOpacity onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.paymentsuccess);
                  }} style={PaymentStyle.flexrowsetnew}>
                    <View style={PaymentStyle.flexrowsimpleimagtext}>
                      <View style={PaymentStyle.setimagewidth}>
                        <Image source={images.Paymrny_Image_2} style={PaymentStyle.app_icon} />
                      </View>
                      <Text style={PaymentStyle.upi_label}>{t("Payments_Title_3")}</Text>
                    </View>
                    <View>
                      <VectorIcons icon="AntDesign" name="right" size={SF(20)} color={Colors.gray_text_color} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={PaymentStyle.setnormalborderview}>
                  <TouchableOpacity onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.paymentsuccess);
                  }} style={PaymentStyle.flexrowsetnew}>
                    <View style={PaymentStyle.flexrowsimpleimagtext}>
                      <View style={PaymentStyle.setimagewidth}>
                        <Image source={images.Paymrny_Image_3} style={PaymentStyle.app_icontwo} />
                      </View>
                      <Text style={PaymentStyle.upi_label}>{t("Payments_Title_4")}</Text>
                    </View>
                    <View>
                      <VectorIcons icon="AntDesign" name="right" size={SF(20)} color={Colors.gray_text_color} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={PaymentStyle.setnormalborderview}>
                  <TouchableOpacity style={PaymentStyle.flexrowsetnew} onPress={() => navigation.navigate(RouteName.CRIDITCARD_SCREEN)}>
                    <View style={PaymentStyle.flexrowsimpleimagtext}>
                      <View style={PaymentStyle.setimagewidth}>
                        <VectorIcons icon="AntDesign" name="creditcard" style={PaymentStyle.app_iconthree} size={SF(25)} />
                      </View>
                      <Text style={PaymentStyle.upi_label}>{t("Payments_Title_5")}</Text>
                    </View>
                    <View>
                      <VectorIcons icon="AntDesign" name="right" size={SF(20)} color={Colors.gray_text_color} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <ConfirmationAlert
            message={alertMessage}
            modalVisible={alertVisible}
            setModalVisible={setAlertVisible}
            onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
            buttonminview={Otpstyles.buttonotp}
            iconVisible={true}
            buttonText={t("Ok_Text")}
          />
        </View>
      </View>
    </Container>
  );
};
export default PaymentScreen;
