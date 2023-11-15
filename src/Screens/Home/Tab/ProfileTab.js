import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView } from "react-native";
import { ProfileTabStyles, Style } from '../../../style';
import { Button, Spacing, Input, VectorIcons, ConfirmationAlert, Container } from '../../../Components';
import { SH, SF } from '../../../Utiles';
import images from "../../../index";
import { RouteName } from "../../../routes";
import { useTranslation } from "react-i18next";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../../redux/action/AuthAction";
import axios from 'axios';

const ProfileTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const { userLogin, token } = useSelector(state => state.authReducer) || {};
  const dispatch = useDispatch();


  const stateArray = {
    name: '',
    email: '',
    number: null,
  };
  const [state, setState] = useState(stateArray);

  useEffect(() => {
    setState({
      name: userLogin.fullName,
      email: userLogin.email,
      number: userLogin.phoneNumber,
    });
    console.log('name: ', state);
  }, [])

  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
  }, [navigation]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }

  const onoknutton = async () => {
    try {
      await GoogleSignin.signOut();
      await auth().signOut();
      dispatch(setUserLogin('', ''));

      console.log("Sign out");
      navigation.navigate(RouteName.LOGIN_SCREEN);
    }
    catch (err) {
      console.log('Error at onoknutton(): ', err);
    }
  };
  const editProfile = async () => {
    const updateUser = {
      ...userLogin,
      fullName: state.name,
      email: state.email,
      phoneNumber: state.number,
    };
    dispatch(setUserLogin(updateUser, token));
    try {
      await axios.put(`https://learnconnectapitest.azurewebsites.net/api/user/${userLogin.id}`,
        updateUser,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then(res => {
          console.log('Edit success');
        })
        .catch(err => console.log('Error at editProfile(): ', err));
    }
    catch (err) {
      console.log('Error at editProfile(): ', err);
    }
  };
  return (
    <Container>
      <ScrollView>
        <View style={ProfileTabStyle.BackgroundWhite}>
          <View style={ProfileTabStyle.whilistminbody}>
            <View style={ProfileTabStyle.ImagCenter}>
              <View style={{alignItems:'center'}}>
                <Image style={[ProfileTabStyle.ImageStyles]} resizeMode='cover' source={{ uri: `${userLogin.profilePictureUrl}`, }} />
                <Text style={ProfileTabStyle.UserName}>{state.name}</Text>
              </View>
            </View>
            <View style={ProfileTabStyle.ProfileDetailesMinview}>
              <Text style={ProfileTabStyle.EditProFile}>
                {t("Edit_Profile")}
              </Text>
              <View style={ProfileTabStyle.PhoneNumberAndIcon}>
                <View style={ProfileTabStyle.BgWhiteShadow}>
                  <View>
                    <Text style={ProfileTabStyle.PhoneNumberText}>{t("Full_Name_Text")}</Text>
                    <Text style={ProfileTabStyle.DigitNumberText}>{state.name}</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(3) }} >
                      <View>
                        <VectorIcons
                          icon="EvilIcons"
                          size={SF(30)}
                          name="pencil"
                          color={Colors.gray_text_color}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => { setModalVisible(!modalVisible) }}
                >
                  <View style={ProfileTabStyle.CenteredView}>
                    <View style={ProfileTabStyle.ModalView}>
                      <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                        <View style={ProfileTabStyle.AllPaddingModal}>
                          <TouchableOpacity style={ProfileTabStyle.IconClose} onPress={() => setModalVisible(!modalVisible)}>
                            <VectorIcons
                              icon="AntDesign"
                              size={SF(25)}
                              name="close"
                              color={Colors.black_text_color}
                            />
                          </TouchableOpacity>
                          {modalcontent === 1 ?
                            <View>
                              <Text style={ProfileTabStyle.ModalText}>{t("Change_Phone_Number")}</Text>
                              <Spacing space={SH(10)} />
                              <Input
                                style={ProfileTabStyle.input}
                                onChangeText={(text) => setState({ ...state, number: text })}
                                value={state.number}
                                placeholder="9603456878"
                                placeholderTextColor={Colors.gray_text_color}
                                keyboardType="numeric"
                              />
                            </View>
                            :
                            modalcontent === 2 ?
                              <View>
                                <Text style={ProfileTabStyle.ModalText}>{t("Change_Email")}</Text>
                                <Spacing space={SH(10)} />
                                <View>
                                  <Input
                                    style={ProfileTabStyle.BgWhiteShadowInputModal}
                                    onChangeText={(text) => setState({ ...state, email: text })}
                                    value={state.email}
                                    placeholder={t("Exam_Email_Text")}
                                    placeholderTextColor={Colors.gray_text_color}
                                  />
                                </View>
                              </View>
                              :
                              modalcontent === 3 ?
                                <View>
                                  <Text style={ProfileTabStyle.ModalText}>{t("Change Full Name")}</Text>
                                  <Spacing space={SH(10)} />
                                  <View>
                                    <Input
                                      style={ProfileTabStyle.BgWhiteShadowInputModal}
                                      onChangeText={(text) => setState({ ...state, name: text })}
                                      value={state.name}
                                      placeholder={t("Full_Name_Text")}
                                      placeholderTextColor={Colors.gray_text_color}
                                    />
                                  </View>
                                </View>
                                :
                                modalcontent === 4 ?
                                  <Text style={ProfileTabStyle.ModalText}>{t("Are_You_Sure")}</Text>
                                  :
                                  null}
                          {modalcontent === 1 || modalcontent === 2 || modalcontent === 3 ?
                            // <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                              <Button
                                onPress={() => {
                                  setModalVisible(!modalVisible),
                                    editProfile()
                                }}
                                buttonTextStyle={{ color: Colors.white_text_color }}
                                title={t("Ok_Text")} />
                            </View>
                            // <View style={ProfileTabStyle.Marginright}>
                            //   <Button buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                            // </View>
                            // </View>
                            :
                            <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                              <View style={ProfileTabStyle.MarginRightView}>
                                <Button title={t("Log_Out")} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
                              </View>
                              <View style={ProfileTabStyle.MarginRightView}>
                                <Button title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText}
                                />
                              </View>
                            </View>
                          }
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View style={ProfileTabStyle.PhoneNumberAndIcon}>
                <View style={ProfileTabStyle.BgWhiteShadow}>
                  <View style={ProfileTabStyle.setpadiingtext}>
                    <Text style={ProfileTabStyle.PhoneNumberText}>{t("Email_Text")}</Text>
                    <Text style={ProfileTabStyle.DigitNumberText}>{state.email}</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(2) }}>
                      <View>
                        <VectorIcons
                          icon="EvilIcons"
                          size={SF(30)}
                          name="pencil"
                          color={Colors.gray_text_color}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={ProfileTabStyle.PhoneNumberAndIcon}>
                <View style={ProfileTabStyle.BgWhiteShadow}>
                  <View>
                    <Text style={ProfileTabStyle.PhoneNumberText}>{t("Phone_Number_Text")}</Text>
                    <Text style={ProfileTabStyle.DigitNumberText}>{state.number}</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(1) }} >
                      <View>
                        <VectorIcons
                          icon="EvilIcons"
                          size={SF(30)}
                          name="pencil"
                          color={Colors.gray_text_color}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Spacing space={SH(20)} />
              <TouchableOpacity onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
              }}>
                <View style={ProfileTabStyle.IconAndTextFlex}>
                  <View>
                    <Text style={ProfileTabStyle.LogOutView}>{t("Log_Out")}</Text>
                  </View>
                  <View>
                    <VectorIcons
                      icon="AntDesign"
                      size={SF(27)}
                      name="arrowright"
                      color={Colors.black_text_color}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                cancelButtonText={t("Cancel_Button")}
                buttonText={t("Ok_Text")}
              />
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.SETTINGS_SCREEN)}>
                <View style={ProfileTabStyle.IconAndTextFlex}>
                  <View>
                    <Text style={ProfileTabStyle.LogOutView}>{t("Setting_Text")}</Text>
                  </View>
                  <View>
                    <VectorIcons
                      icon="AntDesign"
                      size={SF(27)}
                      name="arrowright"
                      color={Colors.black_text_color}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default ProfileTab;