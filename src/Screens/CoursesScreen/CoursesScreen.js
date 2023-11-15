import React, { useMemo, useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import { Style, CoursesStyle } from '../../style';
import { Container, CoursesView, AppHeader } from '../../Components';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

import Loading from '../../Components/CommonComponets/Loading';

import axios from 'axios';
import {useSelector} from 'react-redux';

const CoursesScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const CoursesStyles = useMemo(() => CoursesStyle(Colors), [Colors]);
	const {token, userLogin} = useSelector(state => state.authReducer) || {};
  const [listCourse, setListCourse] = useState();
  const [loading, setLoading] = useState(true);

  const getListCourse = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    let url = `https://learnconnectapitest.azurewebsites.net/api/course`;
    if(userLogin){
      url = `https://learnconnectapitest.azurewebsites.net/api/course/courses-with-favorite?userId=${userLogin.id}`;
    }
    await axios.get(url)
    .then(res => {
      console.log('Course List: ', res?.data);
      setListCourse(res?.data);
    })
    .catch(err => console.log('Error at getListCourse(): ', err));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListCourse()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <View style={CoursesStyles.minstyleviewphotograpgy}>
        {/* <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}> */}
          <View style={CoursesStyles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={CoursesStyles.minviewsigninscreen}>
                <FlatList
                  data={listCourse}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (<CoursesView
                    item={item}
                    onPress={(itemheart) => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN,{
                      data: item.id,
                      heart: itemheart
                    })}
                  />)}
                  keyExtractor={item => item.id}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        {/* </ScrollView> */}
      </View>
    </Container>
  );
};

export default CoursesScreen;
