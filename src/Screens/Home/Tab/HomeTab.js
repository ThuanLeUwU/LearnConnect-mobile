import React, {useMemo} from 'react';
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

const HomeTab = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const {Colors} = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

  return (
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
                      onPress={() =>
                        navigation.navigate(RouteName.COURSES_DETAILS_SCREEN)
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
                              navigation.navigate(RouteName.COURSES_SCREEN)
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
                      data={PopularCoursesData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <PopularCoursesView
                          item={item}
                          onPress={() =>
                            navigation.navigate(
                              RouteName.COURSES_DETAILS_SCREEN,
                            )
                          }
                        />
                      )}
                      keyExtractor={item => item.id}
                      contentContainerStyle={HomeStyle.leftrightpadding}
                    />
                    <Spacing space={SH(30)} />
                    <Text style={HomeStyle.popularcourcetexttwo}>
                      {t('New_Courses')}
                    </Text>
                    <Spacing space={SH(10)} />
                    <FlatList
                      data={NewCoursesData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => (
                        <NewCoursesView
                          item={item}
                          onPress={() =>
                            navigation.navigate(
                              RouteName.COURSES_DETAILS_SCREEN,
                            )
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
