import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {CongratulationStyle, Style} from '../../style';
import {Container, Button, Spacing} from '../../Components';
import {SH} from '../../Utiles';
import {RouteName} from '../../routes';
import {useTranslation} from 'react-i18next';
import images from '../../index';

const CongrejulationScreen = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {Colors} = useTheme();
  const CongratulationStyles = useMemo(
    () => CongratulationStyle(Colors),
    [Colors],
  );

  return (
    <Container>
      <View style={CongratulationStyles.minstyleviewphotograpgytwo}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={CongratulationStyles.keybordtopviewstyle}>
              <View style={CongratulationStyles.minflexview}>
                <View style={CongratulationStyles.minviewsigninscreen}>
                  <View style={CongratulationStyles.succefullimgviewtwo}>
                    <Image
                      style={CongratulationStyles.succefullyimg}
                      resizeMode="contain"
                      source={images.Successfully_Images}
                    />
                  </View>
                  <Spacing space={SH(50)} />
                  <Text style={CongratulationStyles.accounttext}>
                    {t('photography_Title_57')}
                  </Text>
                  <Spacing space={SH(30)} />
                  <Text style={CongratulationStyles.accounttextsuccessfully}>
                    {t('photography_Titles_111')}
                  </Text>
                  <Spacing space={SH(50)} />
                  <View style={CongratulationStyles.accountbutton}>
                    <Button
                      title={t('photography_Titles_2')}
                      onPress={() =>
                        navigation.navigate(RouteName.REVIEWS_SCREEN)
                      }
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
export default CongrejulationScreen;
