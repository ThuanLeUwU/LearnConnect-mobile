import React, { useMemo, useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList, KeyboardAvoidingView, ScrollView } from "react-native";
import { MyCoursesData } from '../../../Utiles';
import { Style, WishilistTabStyle } from "../../../style";
import { WishiListView, Container } from '../../../Components';
import { RouteName } from '../../../routes';

import axios from 'axios';
import { useSelector } from 'react-redux';

const WishlistTab = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const WishilistTabStyles = useMemo(() => WishilistTabStyle(Colors), [Colors]);
  const { token, userLogin } = useSelector(state => state.authReducer) || {};
  const [listFavorite, setListFavorite] = useState('');

  const getMyFavoriteList = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios.get(`https://learnconnectapitest.azurewebsites.net/api/favorite-course/get-favorite-courses-by-user?userId=${userLogin.id}`)
      .then(res => {
        console.log('My Favorite List: ', res?.data);
        setListFavorite(res?.data);
      })
      .catch(err => console.log('Error at getMyFavoriteList(): ', err));
  };

  // useEffect(() => {
  //   getMyFavoriteList();
  // }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMyFavoriteList()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <View style={{ height: '100%', width: '100%', }}>
        <View style={WishilistTabStyles.whilistminbody}>
          <FlatList
            data={listFavorite}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<WishiListView
              item={item}
              onPress={(itemHeart) => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN, {
                data: item.course.id,
                heart: itemHeart,
              })}
            />)}
            keyExtractor={item => item.id}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={Style.scrollviewstyles}>
              <KeyboardAvoidingView enabled>



              </KeyboardAvoidingView>
            </ScrollView>
          </FlatList>
        </View>
      </View>
    </Container>
  );
}
export default WishlistTab;