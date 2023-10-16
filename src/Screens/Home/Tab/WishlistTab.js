import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList,  KeyboardAvoidingView, ScrollView } from "react-native";
import { MyCoursesData } from '../../../Utiles';
import { Style, WishilistTabStyle } from "../../../style";
import { WishiListView } from '../../../Components';
import { RouteName } from '../../../routes';

const WishlistTab = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const WishilistTabStyles = useMemo(() => WishilistTabStyle(Colors), [Colors]);

  return (
    <View style={WishilistTabStyles.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.scrollviewstyles}>
        <KeyboardAvoidingView enabled>
          <View style={WishilistTabStyles.minflexview}>
            <View style={WishilistTabStyles.whilistminbody}>
              <FlatList
                data={MyCoursesData}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<WishiListView
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
  );
}
export default WishlistTab;