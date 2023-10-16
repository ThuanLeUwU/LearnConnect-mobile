import React, { useMemo } from 'react';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
import { MyCoursesData } from "../../../Utiles";
import { Style, MyCoursesTabStyle } from "../../../style";
import { Container, MyCoursesView } from '../../../Components';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';

const MyCourseTab = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const MyCoursesTabStyles = useMemo(() => MyCoursesTabStyle(Colors), [Colors]);
  return (
    <Container>
      <View style={MyCoursesTabStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={MyCoursesTabStyles.minflexview}>
              <View style={MyCoursesTabStyles.minviewsigninscreen}></View>
              <View style={MyCoursesTabStyles.whilistminbody}>
                <FlatList
                  data={MyCoursesData}
                  numColumns={1}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<MyCoursesView
                    item={item}
                    onPress={() => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN)}
                  />)}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default MyCourseTab;

