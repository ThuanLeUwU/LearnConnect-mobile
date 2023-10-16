import React, { useState, useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { View, Image, ScrollView, KeyboardAvoidingView, } from "react-native";
import images from '../../index';
import { Button, Container, Input, ConfirmationAlert } from '../../Components';
import { Style, Otpstyle, CreaditCardStyle } from "../../style";
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";

const SaveCardScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const CreaditCardStyles = useMemo(() => CreaditCardStyle(Colors), [Colors]);
  const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);

  const { t } = useTranslation();
  const stateArray = {
    username: "",
    cardnumber: "",
    validity: "",
    cvvnumber: "",
  };
  const [state, setState] = useState(stateArray);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'paymentsuccess': t("Payments_Title_7"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.CONGREJULATION_SCREEN)
  }
  return (
    <Container>
      <View style={CreaditCardStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={CreaditCardStyles.minflexview}>
              <View style={CreaditCardStyles.minviewsigninscreen}>
                <View style={CreaditCardStyles.minviewsigninscreen}>
                  <View style={CreaditCardStyles.setwidthimage}>
                    <Image source={images.Crideit_card} resizeMode='cover' style={CreaditCardStyles.creditcard} />
                  </View>
                  <Input
                    title={t("photography_Title_51")}
                    placeholder={t("photography_Title_52")}
                    onChangeText={(text) => setState({ ...state, username: text })}
                    value={state.username}
                    inputStyle={CreaditCardStyles.bgwhiteinput}
                    placeholderStyle={CreaditCardStyles.placeholdertext}
                  />
                  <Input
                    title={t("photography_Title_53")}
                    inputType={'numeric'}
                    placeholder={"6878 4634 3443 3432"}
                    onChangeText={(text) => setState({ ...state, cardnumber: text })}
                    value={state.cardnumber}
                    inputStyle={CreaditCardStyles.bgwhiteinput}
                  />
                  <View style={CreaditCardStyles.flexrowsetinput}>
                    <View style={CreaditCardStyles.inputwidthsetnew}>
                      <Input
                        title={t("photography_Title_54")}
                        inputType={'numeric'}
                        placeholder={"08/25"}
                        onChangeText={(text) => setState({ ...state, validity: text })}
                        value={state.validity}
                        inputStyle={CreaditCardStyles.bgwhiteinput}
                      />
                    </View>
                    <View style={CreaditCardStyles.inputwidthsetnew}>
                      <Input
                        title={t("photography_Title_55")}
                        placeholder={"502"}
                        inputType={'numeric'}
                        onChangeText={(text) => setState({ ...state, cvvnumber: text })}
                        value={state.cvvnumber}
                        inputStyle={CreaditCardStyles.bgwhiteinput}
                      />
                    </View>
                  </View>
                  <View style={CreaditCardStyles.setbuttonstyle}>
                    <Button onPress={() => {
                      setAlertVisible(true);
                      setAlertMessage(alertdata.paymentsuccess);
                    }} title={t("photography_Title_56")} />
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          buttonminview={Otpstyles.buttonotp}
          iconVisible={true}
          buttonText={t("Ok")}
        />
      </View>
    </Container>
  );
};
export default SaveCardScreen;
