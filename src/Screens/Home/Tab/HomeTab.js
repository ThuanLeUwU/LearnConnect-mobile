import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HomeStyles, Style} from '../../../style';
import {
  HomeImageData,
  SH,
  NewCoursesData,
  PopularCoursesData,
  InstructorData,
} from '../../../Utiles';
import {Container} from '../../../Components';
import LinearGradient from 'react-native-linear-gradient';
import {
  HomeSmallImageView,
  Spacing,
  PopularCoursesView,
  InstructorView,
  HomeCarouselSlider,
  NewCoursesView,
} from '../../../Components';
import {useTranslation} from 'react-i18next';
import {RouteName} from '../../../routes';
import {useTheme} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Loading from '../../../Components/CommonComponets/Loading';

const HomeTab = props => {
  const {token} = useSelector(state => state.authReducer) || {};
  const {t} = useTranslation();
  const {navigation} = props;
  const {Colors} = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

  const [loading, setLoading] = useState(true);
  const [topCourse, setTopCourse] = useState([]);
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const getListCourse = async () => {
      await axios.get('https://learnconnectapitest.azurewebsites.net/api/course/get-courses-paging?currentPage=1&pageSize=6')
        .then(res => {
          console.log('List Course: ', res?.data.listCourse);
          setListCourse(res?.data.listCourse);
          // setLoading(false);
        })
        .catch(err => console.log('Error at getListCourse(): ', err));
    };
    getListCourse();

    const getTopCourse = async () => {
      await axios.get('https://learnconnectapitest.azurewebsites.net/api/course/get-top-enrolled-courses')
        .then(res => {
          console.log('Top Course: ', res?.data);
          setTopCourse(res?.data);
          // setLoading(false);
        })
        .catch(err => console.log('Error at getTopCourse(): ', err));
    };
    getTopCourse();
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) :(
    <>
      <Container>
        <View style={HomeStyle.minstyleviewphotograpgy}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={Style.scrollviewstyle}>
            <KeyboardAvoidingView enabled>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}>
                <View style={HomeStyle.minflexview}>
                  <View style={HomeStyle.minviewsigninscreen}>
                    <HomeCarouselSlider
                      courses={topCourse}
                      onPress={(data) =>
                        navigation.navigate(RouteName.COURSES_DETAILS_SCREEN,{
                          data: data,
                        })
                      }
                    />
                    <Spacing space={SH(30)} />
                    <View>
                      <FlatList
                        data={HomeImageData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                          <HomeSmallImageView
                            item={item}
                            onPress={() =>
                              // navigation.navigate(RouteName.WATCH_TRAILER_SCREEN)
                              // navigation.navigate(RouteName.REVIEWS_SCREEN)
                              navigation.navigate(RouteName.COURSE_LEARN_SCREEN)

                            }
                          />
                        )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={HomeStyle.leftrightpadding}
                      />
                    </View>
                    <Spacing space={SH(30)} />
                    <TouchableOpacity>
                      <Text style={HomeStyle.popularcourcetexttwo}>
                        {t('Popular_Courses')}
                      </Text>
                    </TouchableOpacity>
                    <Spacing space={SH(10)} />
                    <FlatList
                      data={topCourse}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <PopularCoursesView
                          item={item}
                          onPress={() =>
                            navigation.navigate(RouteName.COURSES_DETAILS_SCREEN,{
                              data: item.id,
                            })
                          }
                        />
                      )}
                      keyExtractor={item => item.id}
                      contentContainerStyle={HomeStyle.leftrightpadding}
                    />
                    <Spacing space={SH(30)} />
                    <Text style={HomeStyle.popularcourcetexttwo}>
                      {t('List Courses')}
                    </Text>
                    <Spacing space={SH(10)} />
                    <FlatList
                      data={listCourse}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <NewCoursesView
                          item={item}
                          onPress={(data) =>
                            navigation.navigate(RouteName.COURSES_DETAILS_SCREEN,{
                              data: item.id,
                            })
                          }
                        />
                      )}
                      keyExtractor={item => item.id}
                      contentContainerStyle={HomeStyle.leftrightpadding}
                    />
                    <Spacing space={SH(30)} />
                    <Text style={HomeStyle.popularcourcetexttwo}>
                      {t('Instructor_Text')}
                    </Text>
                    <Spacing space={SH(10)} />
                    <FlatList
                      data={InstructorData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <InstructorView
                          item={item}
                          onPress={() =>
                            navigation.navigate(
                              RouteName.INTRUDUCTION_PROFILE_SCREEN,
                            )
                          }
                        />
                      )}
                      keyExtractor={item => item.id}
                      contentContainerStyle={HomeStyle.leftrightpadding}
                    />
                    <Spacing space={SH(30)} />
                  </View>
                </View>
              </LinearGradient>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Container>
    </>
  );
};
export default HomeTab;
