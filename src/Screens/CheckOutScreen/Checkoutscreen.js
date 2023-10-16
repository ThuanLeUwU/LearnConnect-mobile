import React, { useState, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, TextInput, } from "react-native";
import { Button, Container, CheckOutView, Spacing, VectorIcons, ConfirmationAlert } from '../../Components';
import { ChexckoutData, SH, SF, Colors } from '../../Utiles';
import { Style, Otpstyle, Checkoutscreenstyle } from "../../style";
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";

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
	const { navigation } = props;
	const { Colors } = useTheme();
	const Checkoutscreenstyles = useMemo(() => Checkoutscreenstyle(Colors), [Colors]);
	const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);

	return (
		<Container>
			<View style={Checkoutscreenstyles.minstyleviewphotograpgy}>
				<StatusBar barStyle="light-content" backgroundColor="rgba(254,238,245,1)" />
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={Style.scrollviewCheckoutscreenstyles}>
					<KeyboardAvoidingView enabled>
						<View style={Checkoutscreenstyles.minflexview}>
							<View>
								<View style={Checkoutscreenstyles.minviewsigninscreen}>
									<View style={Checkoutscreenstyles.flerxrowsettitle}>
										<Text style={Checkoutscreenstyles.totaltextset}>{t("photography_Title_41")}</Text>
										<Text style={Checkoutscreenstyles.dolardtextstyle}>$499.09</Text>
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
									<Text style={Checkoutscreenstyles.promotiontextset}>{t("photography_Title_47")}</Text>
									<FlatList
										data={ChexckoutData}
										showsHorizontalScrollIndicator={false}
										renderItem={({ item }) => (<CheckOutView
											item={item}
											removeonpress={() => {
												setAlertVisible(true);
												setAlertMessage(alertdata.remove);
												Setokbutton(1);
											}}
											movetowishilist={() => {
												setAlertVisible(true);
												setAlertMessage(alertdata.movetowishilist);
												Setokbutton(2);
											}}
										/>)}
										keyExtractor={item => item.id}
									/>
								</View>
								<Spacing space={SH(60)} />
							</View>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
				<View style={Checkoutscreenstyles.whitecolorsetbgcolor}>
					<Button title={t("photography_Titles_3")} onPress={() => navigation.navigate(RouteName.PAYMENTS_SCREEN)} />
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
