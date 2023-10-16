import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Otpstyle} from '../../../style';
import {RouteName} from '../../../routes';
import {
  Button,
  ConfirmationAlert,
  OTPInput,
  Spacing,
} from '../../../Components';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import {SH} from '../../../Utiles';

const OtpScreenset = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  var alertdata = {
    logout: t('Resend_Otp_Text_Modal'),
    loginSuccess: t('Login_Successful'),
  };
  const onoknutton = () => {
    if (okbutton === false) okbutton;
    if (okbutton === true) navigation.navigate(RouteName.BUY_COURSES_SCREEN);
  };
  const {Colors} = useTheme();
  const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
      <View style={Otpstyles.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Otpstyles.ScrollViewStyle}>
          <KeyboardAvoidingView enabled>
            <View style={Otpstyles.MinFlexView}>
              <View style={Otpstyles.MinViewSecond}>
                <Text style={Otpstyles.EnterSixDigitText}>
                  {t('Enter_Six_Digit_OTP')}
                </Text>
                <Text style={Otpstyles.paregraph}>
                  {t('Enter_The_Otp_Title')}
                </Text>
                <OTPInput
                  style={Otpstyles.OtpViewStyles}
                  pinCount={6}
                  autoFocusOnLoad={false}
                  codeInputFieldStyle={Otpstyles.CodeInputStyles}
                  codeInputHighlightStyle={Otpstyles.CodeInputStyles}
                />
                <View style={Otpstyles.FlexRowText}>
                  <Text style={Otpstyles.ParegraPhotpBottom}>
                    {t('Didnt_Recevip_Otp')}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setAlertVisible(true);
                      setAlertMessage(alertdata.logout);
                      Setokbutton(false);
                    }}>
                    <Text style={Otpstyles.ResendTextBold}>{t('Resend')}</Text>
                  </TouchableOpacity>
                </View>
                <Spacing space={SH(50)} />
                <View>
                  <Button
                    onPress={() => {
                      setAlertVisible(true);
                      setAlertMessage(alertdata.loginSuccess);
                      Setokbutton(true);
                    }}
                    title={t('Veryfy')}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPress={() => {
            setAlertVisible(!alertVisible), onoknutton();
          }}
          buttonminview={Otpstyles.buttonotp}
          iconVisible={true}
          buttonText={t('Ok_Text')}
        />
      </View>
    </LinearGradient>
  );
};
export default OtpScreenset;
