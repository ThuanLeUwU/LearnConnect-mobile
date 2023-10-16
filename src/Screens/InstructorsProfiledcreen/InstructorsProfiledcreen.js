import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, Image, } from 'react-native';
import { InstructoStyle, Style } from '../../style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, VectorIcons } from '../../Components';
import { SF } from '../../Utiles';
import images from '../../index';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../routes';

const DonHartScreen = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const InstructoStyles = useMemo(() => InstructoStyle(Colors), [Colors]);
  
  return (
    <Container>
      <View style={InstructoStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <View style={InstructoStyles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={InstructoStyles.minviewsigninscreen}>
                <View style={InstructoStyles.imagcenter}>
                  <View>
                    <Image style={InstructoStyles.imagestylesdonhurt} resizeMode='cover' source={images.Profile_Image} />
                    <Text style={InstructoStyles.allisonperry}>{t("Instructor_Title_1")}</Text>
                  </View>
                </View>
                <View style={InstructoStyles.userdetailesview}>
                  <View style={InstructoStyles.bornandbirtdateviewtwo}>
                    <View style={InstructoStyles.widthsetalldetailes}>
                      <Text style={InstructoStyles.borntext}>{t("Instructor_Title_2")}</Text>
                    </View>
                    <View style={InstructoStyles.widthtwosetsevanty}>
                      <Text style={InstructoStyles.birthdatetext}>{t("Instructor_Title_3")}</Text>
                    </View>
                  </View>
                  <View style={InstructoStyles.bordersetbottom}>
                    <View style={InstructoStyles.bornandbirtdateviewtwo}>
                      <View style={InstructoStyles.widthsetalldetailes}>
                        <Text style={InstructoStyles.borntext}>{t("Instructor_Title_4")}</Text>
                      </View>
                      <View style={InstructoStyles.widthtwosetsevanty}>
                        <Text style={InstructoStyles.birthdatetext}>{t("Instructor_Title_5")}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={InstructoStyles.bornandbirtdateviewtwo}>
                    <View style={InstructoStyles.widthsetalldetailes}>
                      <Text style={InstructoStyles.borntext}>{t("Instructor_Title_6")}</Text>
                    </View>
                    <View style={InstructoStyles.widthtwosetsevanty}>
                      <Text style={InstructoStyles.birthdatetext}>{t("Instructor_Title_7")}</Text>
                    </View>
                  </View>
                  <View style={InstructoStyles.bordersetbottom}>
                    <View style={InstructoStyles.bornandbirtdateviewtwo}>
                      <View style={InstructoStyles.widthsetalldetailes}>
                        <Text style={InstructoStyles.borntext}>{t("Instructor_Title_8")}</Text>
                      </View>
                      <View style={InstructoStyles.widthtwosetsevanty}>
                        <View style={InstructoStyles.stariconview}>
                          <Text style={InstructoStyles.onlydigittexttwo3}>4.0</Text>
                          <VectorIcons
                            icon="Entypo"
                            size={SF(15)}
                            name="star"
                            style={InstructoStyles.stariconstyle}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={InstructoStyles.bornandbirtdateviewtwo}>
                    <View style={InstructoStyles.widthsetalldetailes}>
                      <Text style={InstructoStyles.borntext}>{t("Instructor_Title_9")}</Text>
                    </View>
                    <View style={InstructoStyles.widthtwosetsevanty}>
                      <Text style={InstructoStyles.birthdatetext}>{t("Instructor_Title_10")}</Text>
                    </View>
                  </View>
                  <View style={InstructoStyles.paregraphsettextview}>
                    <Text style={InstructoStyles.paregraphtextset}>
                      {t("Instructor_Title_11")}
                    </Text>
                  </View>
                  <Text style={InstructoStyles.coursestitle}>{t("Instructor_Title_12")}</Text>
                  <TouchableOpacity style={InstructoStyles.whiteboxwhishlist} onPress={
                    () => navigation.navigate(RouteName.COURSES_SCREEN)
                  }>
                    <View style={InstructoStyles.flexDirectiwhilist}>
                      <View>
                        <Image style={InstructoStyles.coursesimagestyle} resizeMode='cover'
                          source={images.Course_Image_1} />
                      </View>
                      <View style={InstructoStyles.textviewsetwhishlist}>
                        <Text style={InstructoStyles.designfonttext}>{t("Instructor_Title_13")}</Text>
                        <Text style={InstructoStyles.paregraphtext}>{t("Instructor_Title_16")}</Text>
                        <View style={InstructoStyles.stariconview}>
                          <Text style={InstructoStyles.Videtext}>{t("Instructor_Title_14")}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={InstructoStyles.whiteboxwhishlist} nPress={
                    () => navigation.navigate(RouteName.COURSES_SCREEN)
                  }>
                    <View style={InstructoStyles.flexDirectiwhilist}>
                      <View>
                        <Image style={InstructoStyles.coursesimagestyle} resizeMode='cover'
                          source={images.Course_Image_2} />
                      </View>
                      <View style={InstructoStyles.textviewsetwhishlist}>
                        <Text style={InstructoStyles.designfonttext}>{t("Instructor_Title_15")}</Text>
                        <Text style={InstructoStyles.paregraphtext}>{t("Instructor_Title_16")}</Text>
                        <View style={InstructoStyles.stariconview}>
                          <Text style={InstructoStyles.Videtext}>{t("Instructor_Title_17")}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default DonHartScreen;
