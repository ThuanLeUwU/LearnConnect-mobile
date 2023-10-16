import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, FlatList, KeyboardAvoidingView, } from "react-native";
import { Container, InstructorListView } from '../../Components';
import { InstructerData } from '../../Utiles';
import { Style, ProfileStyles } from "../../style";
import { RouteName } from "../../routes";

const InstructorsProfileScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const ProfileStyle = useMemo(() => ProfileStyles(Colors), [Colors]);

  return (
    <Container>
      <View style={ProfileStyle.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={ProfileStyle.minflexview}>
              <View style={ProfileStyle.minviewsigninscreen}>
                <FlatList
                  data={InstructerData}
                  renderItem={({ item }) => (<InstructorListView
                    item={item}
                    onPress={() => navigation.navigate(RouteName.INSTRUCTOR_DETAILS_SCREEN)}
                  />)}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  style={ProfileStyle.setflex}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default InstructorsProfileScreen;
