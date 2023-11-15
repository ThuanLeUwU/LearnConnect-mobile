import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Sidemenu} from '../../style';
import {RouteName} from '../../routes';
import {ConfirmationAlert, Container, VectorIcons} from '../../Components';
import {Colors, SF} from '../../Utiles';
import {useTranslation} from 'react-i18next';

const CustomSidebarMenu = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };
  return (
    <Container>
      <View style={Sidemenu.setheightview}>
        <ScrollView>
          <View style={Sidemenu.customslidebarmenu}>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
              <VectorIcons
                icon="Feather"
                size={SF(19)}
                name="home"
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_18')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.COURSES_SCREEN)}>
              <VectorIcons
                icon="AntDesign"
                size={SF(19)}
                name="copy1"
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Course')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.MY_COURSES_TAB)}>
              <VectorIcons
                icon="AntDesign"
                size={SF(19)}
                name="file-markdown"
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_19')}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.EXAM_TAB)}>
              <VectorIcons
                icon="Entypo"
                size={SF(19)}
                name="open-book"
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_20')}
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.WHISHILIST_TAB)}>
              <VectorIcons
                icon="AntDesign"
                name="hearto"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
                size={SF(20)}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_21')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.PROFILE_TAB)}>
              <VectorIcons
                icon="FontAwesome"
                size={SF(19)}
                name="user-circle"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_22')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.NOTIFICATION_SCREEN)}>
              <VectorIcons
                icon="Ionicons"
                size={SF(19)}
                name="notifications-outline"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_23')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.SETTINGS_SCREEN)}>
              <VectorIcons
                icon="AntDesign"
                size={SF(19)}
                name="setting"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_17')}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.ONLINE_CLASS_SCREEN)}>
              <VectorIcons
                icon="MaterialCommunityIcons"
                size={SF(19)}
                name="television-classic"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_24')}
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.CHAT_SCREEN)}>
              <VectorIcons
                icon="Ionicons"
                size={SF(19)}
                name="chatbox-ellipses-outline"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_13')}
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => Onpressfunction(RouteName.INSTRUCTOR_SCREEN)}>
              <VectorIcons
                icon="FontAwesome"
                size={SF(19)}
                name="user-circle-o"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_8')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() =>
                Onpressfunction(RouteName.Purchased_History_Screen)
              }>
              <VectorIcons
                icon="Octicons"
                size={SF(19)}
                name="history"
                style={Sidemenu.logoimage}
                color={Colors.theme_backgound}
              />
              <Text style={Sidemenu.hometextstyle}>
                {t('Customesidebar_title_25')}
              </Text>
            </TouchableOpacity>
            <View style={Sidemenu.settingandlogout}>
              <TouchableOpacity
                style={Sidemenu.flexrowset}
                onPress={() => {
                  setAlertVisible(true);
                  setAlertMessage(alertdata.logout);
                }}>
                <VectorIcons
                  icon="Entypo"
                  name="log-out"
                  color={Colors.theme_backgound}
                  size={SF(23)}
                />
                <Text style={Sidemenu.hometextstyle}>{t('Log_Out')}</Text>
              </TouchableOpacity>
            </View>
            <ConfirmationAlert
              message={alertMessage}
              modalVisible={alertVisible}
              setModalVisible={setAlertVisible}
              onPressCancel={() => setAlertVisible(!alertVisible)}
              onPress={() => {
                setAlertVisible(!alertVisible), onoknutton();
              }}
              cancelButtonText={t('Cancel_Button')}
              buttonText={t('Ok_Text')}
            />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default CustomSidebarMenu;
