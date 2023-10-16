import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import images from '../../index';
import { Button, Container } from '../../Components'
import { Style, EndcallStyle } from '../../style';
import { useTranslation } from "react-i18next";

const EndCallScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const EndcallStyles = useMemo(() => EndcallStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={EndcallStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={EndcallStyles.minflexview}>
              <View style={EndcallStyles.minviewsigninscreen}>
                <View style={EndcallStyles.setflexview}>
                  <View>
                    <Image source={images.videocall_two_img}
                      style={EndcallStyles.seimagstyleendcall}
                      resizeMode={'cover'} />
                  </View>
                  <View style={EndcallStyles.leftimage}>
                    <Image source={images.videocall_one_img}
                      style={EndcallStyles.seimagstyleendcall}
                      resizeMode={'cover'} />
                  </View>
                </View>
                <View style={EndcallStyles.flexcentertext}>
                  <Text style={EndcallStyles.callendtextstyle}>{t("Videocall_title_9")}</Text>
                  <Text style={EndcallStyles.callendtextstyle}>13:43</Text>
                </View>
                <Button onPress={
                  () => navigation.navigate('ReviewsScreen')
                } title={t("Ok_Text")}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
}
export default EndCallScreen;