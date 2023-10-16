import React, { useState, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, Dimensions, View, StatusBar, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { CoursesDetailStyle } from '../../style';
import { LessonsTab, ReviewsTab, DescriptionTab } from '../../Screens';
import { Container, Button, ColorPicker, Rating, Spacing } from '../../Components';
import { RouteName } from "../../routes";
import { VectorIcons } from '../../Components';
import { SF, SH } from "../../Utiles";
import { useTranslation } from "react-i18next";
import images from "../../index";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 280) : 280;
const HEADER_SETHEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 55;


const CoursesDetailesScreen = (props) => {
	const [tabShow, setTabshow] = useState('1');
	const { Colors } = useTheme();
	const CoursesDetailStyles = useMemo(() => CoursesDetailStyle(Colors), [Colors]);
	const { navigation } = props;
	const { t } = useTranslation();

	const renderNavBar = () => (
		<View style={CoursesDetailStyles.navContainer} >
			<TouchableOpacity style={CoursesDetailStyles.hoveraerrorset} onPress={() => navigation.navigate(RouteName.HOME_TAB)}>
				<View>
					<VectorIcons
						icon="Entypo"
						size={SF(40)}
						name="chevron-small-left"
						color={Colors.theme_backgound}
					/>
				</View>
			</TouchableOpacity>
			<View style={CoursesDetailStyles.backarrowwork}>
				<ColorPicker />
				<TouchableOpacity style={CoursesDetailStyles.plusiconandtextview} onPress={
					() => navigation.navigate(RouteName.CHECKOUT_SCREEN)
				}>
					<VectorIcons
						size={SF(25)}
						icon="AntDesign"
						name="shoppingcart"
						color={Colors.theme_backgound}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
	const title = () => {
		return (
			<View style={CoursesDetailStyles.computerscrimceview}>
				<Text style={CoursesDetailStyles.computertext}>{t("Courses_Detail_title_1")}</Text>
				<Text style={CoursesDetailStyles.longtextset}>{t("Courses_Detail_title_2")}</Text>
				<Spacing space={SH(17)} />
				<View style={CoursesDetailStyles.accountbuttontwo}>
					<Button
						title={t("Courses_Detail_title_3")}
						onPress={
							() => navigation.navigate('WatchTrailerScreen')
						}
						iconnametwo="playcircleo"
						buttonStyle={CoursesDetailStyles.buttonStyle}
						buttonTextStyle={CoursesDetailStyles.buttonTextStyle}
					/>
				</View>
				<View style={CoursesDetailStyles.flexrowsetus}>
					<View style={CoursesDetailStyles.minviewfoerecious}>
						<Text style={CoursesDetailStyles.computertext}>{t("Courses_Detail_title_4")}</Text>

						<Rating tintColor={Colors.start_rating_color}
							imageSize={18}
						/>
					</View>
					<View>
						<Text style={CoursesDetailStyles.longtextsetdigit}>$49</Text>
					</View>
				</View>
			</View>
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
				backgroundImage={images.Courses_details_image_1}
				extraScrollHeight={0}
				titleStyle={CoursesDetailStyles.titleStyle}
				title={title()}
				navbarColor="rgba(254,238,245,1)"
				backgroundImageScale={1.1}
				renderNavBar={renderNavBar}
				renderContent={() => {
					return (
						<Container>
							<View>
								<View style={CoursesDetailStyles.whiteboxwhishlist}>
									<TouchableOpacity onPress={() => setTabshow('1')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Description_title_1")}</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setTabshow('2')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Description_title_2")}</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => setTabshow('3')}>
										<Text style={CoursesDetailStyles.disprictionstyle}>{t("Description_title_3")}</Text>
									</TouchableOpacity>
								</View>
								{tabShow == '1' ?
									<View>
										<Text style={CoursesDetailStyles.borderlineone} />
										<DescriptionTab onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)} />
									</View>
									: null}
								{tabShow == '2' ?
									<View>
										<Text style={CoursesDetailStyles.borderlineonetwo}></Text>
										<LessonsTab onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)} />
									</View>
									: null}
								{tabShow == '3' ?
									<View>
										<Text style={CoursesDetailStyles.borderlineonethree}></Text>
										<ReviewsTab />
									</View>
									: null}
							</View>
						</Container>
					);
				}}
			/>
			<View style={CoursesDetailStyles.positionabsolutesetbutton}>
				<View style={CoursesDetailStyles.accountbutton}>
					<View style={CoursesDetailStyles.textcenyet}>
						<Text style={CoursesDetailStyles.dolardtextset}>$498.00</Text>
					</View>
					<View style={CoursesDetailStyles.setbuttonwidthview}>
						<Button title={t("Buy_Now_Text")}
							onPress={
								() => navigation.navigate(RouteName.LOGIN_SCREEN)
							}
						/>
					</View>
				</View>
			</View>
		</>
	);
}
export default CoursesDetailesScreen;





