import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Style, CoursesStyle } from '../../style';
import { Container, CoursesView, AppHeader } from '../../Components';
import { CoursesDataview } from '../../Utiles';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const CoursesScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const { t } = useTranslation();
  const CoursesStyles = useMemo(() => CoursesStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={CoursesStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <View style={CoursesStyles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={CoursesStyles.minviewsigninscreen}>
                <FlatList
                  data={CoursesDataview}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<CoursesView
                    item={item}
                    onPress={() => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN)}
                  />)}
                  keyExtractor={item => item.id}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default CoursesScreen;
