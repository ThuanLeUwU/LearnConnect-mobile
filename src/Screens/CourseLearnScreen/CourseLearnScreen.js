import React, { useState, useMemo, useEffect } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, Dimensions, View, StatusBar, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { CoursesDetailStyle } from '../../style';
import { LessonsTab, ReviewsTab, DescriptionTab } from '../../Screens';
import { Container, Button, ColorPicker, Spacing, VectorIcons, VideoView } from '../../Components';
import { RouteName } from "../../routes";
import { SF, SH } from "../../Utiles";
import { useTranslation } from "react-i18next";
import { Rating } from 'react-native-ratings';

import axios from "axios";
import {useSelector} from 'react-redux';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 80 : 260) : 260;
const HEADER_SETHEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 55;


const CourseLearnScreen = (props) => {
	
	const [tabShow, setTabshow] = useState('1');
	const { Colors } = useTheme();
	const CoursesDetailStyles = useMemo(() => CoursesDetailStyle(Colors), [Colors]);
	const { navigation, route } = props;
	const { t } = useTranslation();
	const {token, userLogin} = useSelector(state => state.authReducer) || {};
	const [course, setCourse] = useState('');
	const [listLecture, setListLecture] = useState('');
	const [currentLecture, setCurrentLecture] = useState();

    const handleOnPressLecture = (lecture) => {
        setCurrentLecture(lecture);
        setTabshow('1');
        console.log('Lecture: ', lecture)
    }

	useEffect(() => {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		// const courseId = route?.params?.data;
		const courseId = 1;
		const getCourseDetail = async () => {
		  await axios.get(`https://learnconnectapitest.azurewebsites.net/api/course/${courseId}`)
			.then(res => {
			  console.log('Course Detail: ', res?.data);
			  setCourse(res?.data);
			})
			.catch(err => console.log('Error at getCourseDetail(): ', err));
		};
		getCourseDetail();
		
		const getCourseLectures = async () => {
		  await axios.get(`https://learnconnectapitest.azurewebsites.net/api/lecture/by-course/${courseId}`)
			.then(res => {
			  console.log('List lecture: ', res?.data);
			  setListLecture(res?.data);
			})
			.catch(err => console.log('Error at getCourseLectures(): ', err));
		};
		getCourseLectures();

	}, []);

	const renderNavBar = () => (
		<View style={CoursesDetailStyles.navContainer} >
			<TouchableOpacity style={CoursesDetailStyles.hoveraerrorset} onPress={() => navigation.goBack()}>
				<View>
					<VectorIcons
						icon="Entypo"
						size={SF(40)}
						name="chevron-small-left"
						color={Colors.theme_backgound}
					/>
				</View>
			</TouchableOpacity>
			<ColorPicker />
		</View>
	);
	const title = () => {
		return (
			<>
                {(currentLecture) ? 
                    <View style={{width: '100%', marginTop: SH(50)}}>
				        <VideoView sourceUrl={currentLecture?.contentUrl}/>
                    </View>
                    :
                    <View style={CoursesDetailStyles.computerscrimceview}>
                        <Text style={CoursesDetailStyles.computertext}>{t(course.categoryName)}</Text>
                        <Text style={CoursesDetailStyles.longtextset}>{t(course.name)}</Text>
                        <Spacing space={SH(17)} />
                        <View style={CoursesDetailStyles.accountbuttontwo}>
                            {/* <Button
                                title={t("Courses_Detail_title_3")}
                                onPress={
                                    () => navigation.navigate('WatchTrailerScreen')
                                }
                                iconnametwo="playcircleo"
                                buttonStyle={CoursesDetailStyles.buttonStyle}
                                buttonTextStyle={CoursesDetailStyles.buttonTextStyle}
                            /> */}
                            <Spacing space={SH(50)} />
                        </View>
                        <View style={CoursesDetailStyles.flexrowsetus}>
                            <View style={{flexDirection: 'column', marginTop: SH(15), alignItems: 'flex-start'}}>
                                <Rating 
                                    type='custom'
                                    ratingColor={Colors.amber_color}
                                    ratingBackgroundColor={'transparent'}
                                    ratingCount={5}
                                    imageSize={20}
                                    startingValue={course.averageRating}
                                    style={{color: 'transparent'}}
                                    isDisabled={false}
                                    readonly 
                                />
                                <Spacing space={SH(5)} />
                                <Text style={CoursesDetailStyles.computertext}>{t(course.totalRatingCount + ' Reviewer')}</Text>
                            </View>
                            <View>
                                <Text style={[CoursesDetailStyles.computertext, {marginRight:SH(0), marginTop: SH(10), textAlign: 'right'}]}>{t(course.totalEnrollment + ' Enrolled')}</Text>
                                <Text style={[CoursesDetailStyles.computertext, {marginRight:SH(0), fontSize: SF(22), textAlign: 'right'}]}>{t(course.price === 0 ? 'Free' : course.price + ' VND')}</Text>
                            </View>
                        </View>
                    </View>
                }    
			</>
		);
	}
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<ReactNativeParallaxHeader
				alwaysShowTitle={false}
				alwaysShowNavBar={true}
				headerMaxHeight={HEADER_HEIGHT}
				headerMinHeight={HEADER_SETHEIGHT}
                backgroundImage={(currentLecture) ? {} : {uri:course.imageUrl}}
				backgroundColor='transparent'
				extraScrollHeight={0}
				title={title()}
				navbarColor="rgba(254,238,245,1)"
				backgroundImageScale={1}
				renderNavBar={renderNavBar}
				renderContent={() => {
					return (
						<Container>
							<View>
                                {/* <Button title={t("Exam Test")} onPress={() => navigation.navigate(RouteName.CHECKOUT_SCREEN, {course:course})}/> */}
								<View style={CoursesDetailStyles.whiteboxwhishlist}>
									<TouchableOpacity onPress={() => setTabshow('1')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Overview")}</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setTabshow('2')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Lectures")}</Text>
									</TouchableOpacity>
									{/* <TouchableOpacity onPress={() => setTabshow('3')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Description_title_3")}</Text>
									</TouchableOpacity> */}
								</View>
								{tabShow == '1' ? 
                                    (currentLecture) ?
									<View>
										<Text style={[CoursesDetailStyles.borderlineone, {width: '50%',}]} />
										<DescriptionTab course={course} onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)} />
									</View>
                                        :
                                        <View>
                                            <Text style={[CoursesDetailStyles.borderlineone, {width: '50%',}]} />
                                            <DescriptionTab course={course} onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)} />
                                        </View>
                                    : null}
								{tabShow == '2' ?
									<View>
										<Text style={[CoursesDetailStyles.borderlineonetwo, {width: '50%', right: 0,}]}></Text>
										<LessonsTab listLecture={listLecture} onPress={(data) => handleOnPressLecture(data)} />
                                        <Button title={t("Exam Test")} onPress={() => navigation.navigate(RouteName.CHECKOUT_SCREEN, {course:course})}/>
									</View>
									: null}
								{/* {tabShow == '3' ?
									<View>
										<Text style={[CoursesDetailStyles.borderlineonethree, {width: '33%',}]}></Text>
										<ReviewsTab onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)}/>
									</View>
									: null} */}                                
							</View>
						</Container>
					);
				}}
			/>
			{/* <View style={CoursesDetailStyles.positionabsolutesetbutton}>
				<View style={CoursesDetailStyles.accountbutton}>
					<View style={CoursesDetailStyles.textcenyet}>
						<Text style={CoursesDetailStyles.dolardtextset}>{t(course.price === 0 ? 'Free' : course.price + ' VND')}</Text>
					</View>
					<View style={CoursesDetailStyles.setbuttonwidthview}>
						
						<Button title={t("Enroll Now")}
							onPress={() => navigation.navigate(RouteName.CHECKOUT_SCREEN, {course:course})}
						/>
					</View>
				</View>
			</View> */}
		</>
	);
}
export default CourseLearnScreen;





