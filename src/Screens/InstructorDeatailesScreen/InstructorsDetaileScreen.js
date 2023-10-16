import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, Image, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { Container, VectorIcons, InstructorDetailView, Rating, Spacing } from '../../Components';
import images from '../../index';
import { Style, InstructorsDetaileStyle } from "../../style";
import { InstructorDetailData, SF, SH } from "../../Utiles";
import { useTranslation } from "react-i18next";

const InstructorsDetaileScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const InstructorsDetaileStyles = useMemo(() => InstructorsDetaileStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={InstructorsDetaileStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewInstructorsDetaileStyles}>
          <KeyboardAvoidingView enabled>
            <View style={InstructorsDetaileStyles.minflexview}>
              <View style={InstructorsDetaileStyles.minviewsigninscreen}>
                <View style={InstructorsDetaileStyles.justicenterview}>
                  <Image style={InstructorsDetaileStyles.imagsetstyle} resizeMode="cover" source={images.videocall_four_img} />
                </View>
                <Text style={InstructorsDetaileStyles.texctstyles}>{t("Instructor_Title_18")}</Text>
                <Spacing space={SH(10)} />
                <Rating
                  imageSize={20}
                  tintColor={Colors.lavender_blush_colors}
                />
                <View style={InstructorsDetaileStyles.minflexviewstyle}>
                  <View>
                    <TouchableOpacity style={InstructorsDetaileStyles.bgcolorwhiteset}>
                      <VectorIcons icon="AntDesign" name="copy1" size={SF(30)} color={Colors.theme_backgound} />
                    </TouchableOpacity>
                    <Text style={InstructorsDetaileStyles.texctstyles}>5</Text>
                    <Text style={InstructorsDetaileStyles.corsestextstyle}>{t("Instructor_Title_19")}</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={InstructorsDetaileStyles.bgcolorwhiteset}>
                      <VectorIcons icon="FontAwesome" name="user" size={35} color={Colors.theme_backgound} />
                    </TouchableOpacity>
                    <Text style={InstructorsDetaileStyles.texctstyles}>600</Text>
                    <Text style={InstructorsDetaileStyles.corsestextstyle}>{t("Instructor_Title_20")}</Text>
                  </View>
                  <View>
                    <TouchableOpacity style={InstructorsDetaileStyles.bgcolorwhiteset}>
                      <VectorIcons icon="FontAwesome5" name="users" size={30} color={Colors.theme_backgound} />
                    </TouchableOpacity>
                    <Text style={InstructorsDetaileStyles.texctstyles}>135</Text>
                    <Text style={InstructorsDetaileStyles.corsestextstyle}>{t("Instructor_Title_21")}</Text>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={InstructorDetailData}
                    renderItem={({ item, index }) => (<InstructorDetailView
                      item={item}
                      index={index}
                    />)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={InstructorsDetaileStyles.setflex}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default InstructorsDetaileScreen;
