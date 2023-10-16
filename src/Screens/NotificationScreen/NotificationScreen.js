import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { Container, VectorIcons } from '../../Components';
import { Style, NotificationStyle } from '../../style';
import { useTranslation } from "react-i18next";
import { SF } from '../../Utiles';

const NotificationScreen = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const NotificationStyles = useMemo(() => NotificationStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={NotificationStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={NotificationStyles.keybordtopviewstyle}>
              <View style={NotificationStyles.minflexview}>
                <View style={NotificationStyles.minviewsigninscreen}>
                  <TouchableOpacity style={NotificationStyles.whiteboxwhishlist}>
                    <View style={NotificationStyles.flexDirectiwhilist}>
                      <View style={NotificationStyles.notificationimageview}>
                        <VectorIcons name="notifications" icon="Ionicons" color={Colors.white_text_color} size={SF(32)} />
                      </View>
                      <View style={NotificationStyles.textviewsetwhishlist}>
                        <Text style={NotificationStyles.designfonttext}>{t("photography_Titles_31")}</Text>
                        <Text style={NotificationStyles.dolardigittext}>{t("photography_Titles_32")}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={NotificationStyles.whiteboxwhishlist} >
                    <View style={NotificationStyles.flexDirectiwhilist}>
                      <View style={NotificationStyles.notificationimageview}>
                        <VectorIcons name="notifications" icon="Ionicons" color={Colors.white_text_color} size={SF(32)} />
                      </View>
                      <View style={NotificationStyles.textviewsetwhishlist}>
                        <Text style={NotificationStyles.designfonttext}>{t("photography_Titles_33")}</Text>
                        <Text style={NotificationStyles.dolardigittext}>{t("photography_Titles_34")}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default NotificationScreen;
