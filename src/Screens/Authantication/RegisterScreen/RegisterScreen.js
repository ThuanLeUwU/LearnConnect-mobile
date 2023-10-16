import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode, PasswordInput, Container } from '../../../Components';
import { SH } from '../../../Utiles';
import { RouteName } from '../../../routes';
import { Login, Style } from '../../../style';
import { useTranslation } from "react-i18next";

const Register = (props) => {
    const { navigation } = props;
    const stateArray = {
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
    };
    const [state, setState] = useState(stateArray);
    const { t } = useTranslation();
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);

    return (
        <Container>
            <View style={Logins.MinViewBgColor}>
                <ScrollView
                    contentContainerStyle={Style.scrollviewstyles}>
                    <View style={Logins.Container}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.TopSpaceRegister}>
                                <Text style={Logins.RegisterText}>{t("Register_Text")}</Text>
                            </View>
                            <Input
                                title={t("Enter_Your_Name")}
                                placeholder={t("Enter_Your_Name")}
                                onChangeText={(text) => setState({ ...state, username: text })}
                                value={state.username}
                            />
                            <Spacing space={SH(20)} />
                            <View style={Style.FlexRowPassword}>
                                <View style={Style.InputViewWidth}>
                                    <View style={Style.CountryCodeIconCenter} >
                                        <Countrycode />
                                    </View>
                                    <Input
                                        title={t("Mobile_Number")}
                                        placeholder={t("Mobile_Number")}
                                        onChangeText={(text) => setState({ ...state, mobileNumber: text })}
                                        value={state.mobileNumber}
                                        maxLength={10}
                                        inputType="numeric"
                                        placeholderTextColor={Colors.gray_text_color}
                                        inputStyle={Style.PaddingLeftCountryInput}
                                    />
                                </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <Input
                                title={t("Email_Text")}
                                placeholder={t("Email_Text")}
                                onChangeText={(text) => setState({ ...state, emailId: text })}
                                value={state.emailId}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                            <PasswordInput label={t("Password_Text")}
                                placeholder={t("Password_Text")}
                            />
                            <Spacing space={SH(20)} />
                            <PasswordInput label={t("Confirm_Password_Text")}
                                placeholder={t("Confirm_Password_Text")}
                            />
                            <View style={Logins.FlexRowChekBox}>
                                <View style={Logins.CheckBoxView}>
                                    <CheckBox
                                        checked={checked}
                                        onPress={toggleCheckbox}
                                        iconType="material-community"
                                        checkedIcon="checkbox-marked"
                                        uncheckedIcon="checkbox-blank-outline"
                                        checkedColor={Colors.theme_backgound}
                                    />
                                </View>
                                <Text style={Logins.SimpleTextStyle}>{t("I_Agree_Text")} <Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://myaccount.google.com/')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_text")}  <Text onPress={() => Linking.openURL('https://myaccount.google.com/')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.ButtonView}>
                                <Button
                                    title={t("Register_Text")}
                                    onPress={() => navigation.navigate(RouteName.REGISTER_SUCCESSFULLY)}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Logins.TopSpace}>
                                <View style={Logins.AlredyAndLoginBox}>
                                    <Text style={Logins.MemberTextStyle}>{t("Already_Member")}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                                        <Text style={Logins.LoginScreenText}>{t("Login_Text")}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
};
export default Register;
