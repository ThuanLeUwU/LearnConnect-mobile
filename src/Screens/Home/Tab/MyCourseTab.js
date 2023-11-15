import React, { useMemo, useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
import { Style, MyCoursesTabStyle } from "../../../style";
import { Container, MyCoursesView } from '../../../Components';
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';

import axios from 'axios';
import {useSelector} from 'react-redux';

const MyCourseTab = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const MyCoursesTabStyles = useMemo(() => MyCoursesTabStyle(Colors), [Colors]);

  const {token, userLogin} = useSelector(state => state.authReducer) || {};
  const [listMyCourse, setListMyCourse] = useState('');


  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const getListMyCourse = async () => {
    await axios.get(`https://learnconnectapitest.azurewebsites.net/api/course/user-courses-with-favorite?userId=${userLogin.id}`)
    .then(res => {
      console.log('My Course List: ', res?.data);
      setListMyCourse(res?.data);
    })
    .catch(err => console.log('Error at getListMyCourse(): ', err));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListMyCourse()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <View style={MyCoursesTabStyles.minstyleviewphotograpgy}>
        {/* <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}> */}
          <KeyboardAvoidingView enabled>
            <View style={MyCoursesTabStyles.minflexview}>
              <View style={MyCoursesTabStyles.minviewsigninscreen}></View>
              <View style={MyCoursesTabStyles.whilistminbody}>
                <FlatList
                  data={listMyCourse}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<MyCoursesView
                    item={item}
                    onPress={() => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN,{
                      data: item.course.id,
                      heart: item.isFavorite,
                    })}
                  />)}
                  keyExtractor={item => item.course.id}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        {/* </ScrollView> */}
      </View>
    </Container>
  );
};
export default MyCourseTab;

