import React, { useState, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, StatusBar, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from "react-native";
import { Button, Container, Spacing, VectorIcons, ConfirmationAlert } from '../../Components';
import { ChexckoutData, SH, SF, Colors } from '../../Utiles';
import { Style, Otpstyle, Checkoutscreenstyle } from "../../style";
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";
import { Rating } from 'react-native-ratings';
import { WebView } from "react-native-webview";

const Checkoutscreen = (props) => {
	const { t } = useTranslation();
	const [alertVisible, setAlertVisible] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [okbutton, Setokbutton] = useState('');

	var alertdata = {
		'remove': t("photography_Title_48"),
		'movetowishilist': t("photography_Title_49"),
		'Applysuccess': t("photography_Title_50"),
	}

	const onoknutton = () => {
		if (okbutton === 1) okbutton;
		if (okbutton === 2) okbutton;
		if (okbutton === 3) okbutton;
	}
	const [Cuponshow, setCuponshow] = useState(0);
	const { navigation, route } = props;
	const { Colors } = useTheme();
	const Checkoutscreenstyles = useMemo(() => Checkoutscreenstyle(Colors), [Colors]);
	const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
	const course = route?.params?.course;


	return (
		<Container>
			<View style={Checkoutscreenstyles.minstyleviewphotograpgy}>
				<StatusBar barStyle="light-content" backgroundColor="rgba(254,238,245,1)" />
				<ScrollView
					keyboardShouldPersistTaps="handled">
					<KeyboardAvoidingView enabled>
						<View style={Checkoutscreenstyles.minflexview}>
							<View>
								<View style={Checkoutscreenstyles.minviewsigninscreen}>
									<View style={Checkoutscreenstyles.flerxrowsettitle}>
										<Text style={Checkoutscreenstyles.totaltextset}>{t("photography_Title_41")}</Text>
										<Text style={Checkoutscreenstyles.Textdigit}>{t(course.price + ' VND')}</Text>
										<VectorIcons icon="MaterialIcons" name="local-offer" size={SF(23)} color={Colors.theme_backgound} />
									</View>
									<Text style={Checkoutscreenstyles.promotiontextset}>{t("photography_Title_42")}</Text>
									{Cuponshow === 0 ?
										null
										: <TouchableOpacity style={Checkoutscreenstyles.minviewflexset}>
											<View>
												<VectorIcons icon="AntDesign" name="close" size={SF(23)} color={'black'} />
											</View>
											<View style={Checkoutscreenstyles.keeptextflexset}>
												<Text style={Checkoutscreenstyles.keeplearningtextsety}>{t("photography_Title_43")}</Text>
												<Text>{t("photography_Title_44")}</Text>
											</View>
										</TouchableOpacity>
									}
									<TouchableOpacity style={Checkoutscreenstyles.flexbuttonset}>
										<View style={Checkoutscreenstyles.settextinputwidth}>
											<TextInput
												placeholder={t("photography_Title_45")}
												placeholderTextColor={Colors.black_text_color}
												style={Checkoutscreenstyles.textinputstyle}
											/>
										</View>
										<View style={Checkoutscreenstyles.setbuttonwidth}>
											<Button onPress={() => {
												setAlertVisible(true);
												setAlertMessage(alertdata.Applysuccess);
												Setokbutton(3);
												setCuponshow(1)
											}} title={t("photography_Title_46")} />
										</View>
									</TouchableOpacity>
									<Text style={Checkoutscreenstyles.promotiontextset}>{t("Confirm Course Details")}</Text>
									<View style={Checkoutscreenstyles.whiteboxwhishlist}>
										<View style={Checkoutscreenstyles.flexDirectiwhilist}>
											<View>
												<Image style={Checkoutscreenstyles.imagesetios} resizeMode='cover'
													source={{ uri: course.imageUrl }} />
											</View>
											<View style={Checkoutscreenstyles.textviewsetwhishlist}>
												<Text style={Checkoutscreenstyles.textstylebeginners}>{t(course.name)}</Text>
												<Text style={Checkoutscreenstyles.setreviewstext}>{t(course.categoryName)}</Text>

											</View>
										</View>
										<Text style={[Checkoutscreenstyles.setreviewstext, {paddingTop:10}]} >{t(course.mentorName)}</Text>
										<View style={Checkoutscreenstyles.setflextextrow}>
											<View style={Checkoutscreenstyles.flexrowiconset}>
												<Rating
													type='custom'
													ratingColor={Colors.amber_color}
													ratingBackgroundColor={'transparent'}
													backgroundColor={'transparent'}
													ratingCount={5}
													imageSize={15}
													startingValue={course.averageRating}
													style={{ color: 'transparent' }}
													isDisabled={false}
													readonly
												/>
											</View>
											<Text style={Checkoutscreenstyles.ratingstextstyle}>{t(course.totalRatingCount + ' Ratings')}</Text>
										</View>
										<Text style={Checkoutscreenstyles.simpletxtset}>{t(course.totalEnrollment + ' Enrollments')}</Text>
										<Text style={Checkoutscreenstyles.simpletxtset}>{t(`${Math.floor(course.contentLength / 60)} hours ${course.contentLength % 60} minutes`)}</Text>
										<Text style={Checkoutscreenstyles.simpletxtset}>{t(course.lectureCount + ' Lectures')}</Text>
									</View>
									<View>
										<Text style={{paddingTop:10, fontSize:18, color:'black', fontStyle:'italic'}}>{course.description}</Text>
									</View>
								</View>
								<Spacing space={SH(60)} />
							</View>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
				<View style={[Checkoutscreenstyles.whitecolorsetbgcolor,{
						flexDirection: 'row',
						justifyContent: 'space-between',
						position: 'absolute',
						bottom: SH(0),
						width: '100%',
						backgroundColor: Colors.white_text_color,
						paddingVertical: SH(10),
						paddingHorizontal: SH(20),
				}]}>
					<View style={{width: '38%', left:0}}>
						<Button title={t("Cancel")} buttonStyle={{backgroundColor:'gray'}} onPress={() => navigation.goBack()} />
					</View>
					<View style={{width: '58%', right:0}}>
						<Button title={t("Payment")} onPress={() => navigation.navigate(RouteName.VNPAY_SCREEN,{course:course})} />
					</View>
				</View>
				<ConfirmationAlert
					message={alertMessage}
					modalVisible={alertVisible}
					setModalVisible={setAlertVisible}
					onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
					buttonminview={Otpstyles.buttonotp}
					iconVisible={true}
					buttonText={t("Ok_Text")}
				/>
			</View>
		</Container>
	);
};

export default Checkoutscreen;
