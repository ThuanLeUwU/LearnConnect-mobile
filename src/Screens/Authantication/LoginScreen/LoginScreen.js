import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {
  Button,
  Container,
  Input,
  Spacing,
  PasswordInput,
} from '../../../Components';
import {RouteName} from '../../../routes';
import {Style, Login} from '../../../style';
import {SH} from '../../../Utiles';
import images from '../../../index';
import {useTranslation} from 'react-i18next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Loginscreen = props => {
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');
  const {t} = useTranslation();
  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  };
  const {Colors} = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <View style={Logins.Container}>
            <View style={Style.MinViewContent}>
              <View style={Logins.ManViewLogin}>
                <Image
                  style={Logins.ImageSet}
                  resizeMode="contain"
                  source={images.App_Logo}
                />
              </View>
              <Spacing space={SH(30)} />
              <Text style={Logins.LoginText}>{t('Login_Text')}</Text>
              <Spacing space={SH(20)} />
              <View style={Logins.InputSpaceView}>
                <Input
                  title={t('Mobile_Number')}
                  placeholder={t('Mobile_Number')}
                  onChangeText={value => setMobileNumber(value)}
                  value={mobileNumber}
                  inputType="numeric"
                  maxLength={10}
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <PasswordInput
                label={t('Password_Text')}
                placeholder={t('Password_Text')}
              />
              <View style={Logins.ViewTextStyle}>
                <Text style={Logins.TextStyle}>
                  {t('Dont_Have_Account')}{' '}
                  <Text
                    style={Logins.registerTextStyle}
                    onPress={() => OnRegisterPress()}>
                    {' '}
                    {t('Register_Text')}
                  </Text>
                </Text>
              </View>
              <Spacing space={SH(40)} />
              <View style={Logins.LoginButton}>
                <Button
                  title="Login by Email"
                  onPress={() =>
                    onGoogleButtonPress().then(() =>
                      console.log('Signed in with Google!'),
                    )
                  }
                />
              </View>
              <Spacing space={SH(10)} />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.FORGET_PASSWORD_SCREEN)
                }>
                <Text style={Logins.ForgetPasswordStyles}>
                  {t('Forgot_Password')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default Loginscreen;
