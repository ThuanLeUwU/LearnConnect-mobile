import React from 'react';
import { RouteName } from '../routes';
import { CustomSidebarMenu, AppHeader, ColorPicker, ColorPickerandCheckoutIcon } from '../Components';
import { Colors } from '../Utiles';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from "react-i18next";
import { TabNavigator } from '../routes';
import { ChatScreen, Checkoutscreen, InstructorsScreen, NotificationScreen, OnlineClassScreen, PurchasedHistoryScreen, ReviewsScreen, SettingsScreen } from '../Screens';
import { Style } from '../style';

const SideNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const { t } = useTranslation();
  const { navigation } = props;
  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.theme_backgound,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
  };

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={RouteName.TAB_NAVIGATOR} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.ONLINE_CLASS_SCREEN} component={OnlineClassScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_11")} />,
          ...HeaderArray,
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICATION_SCREEN} component={NotificationScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_12")} />,
          ...HeaderArray,
          headerRight: () => (
            <ColorPickerandCheckoutIcon onPress={() => navigation.navigate(RouteName.CHECKOUT_SCREEN)} />
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN} component={ChatScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_13")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.INSTRUCTOR_SCREEN} component={InstructorsScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_14")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.Purchased_History_Screen} component={PurchasedHistoryScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_15")} />,
          ...HeaderArray,
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.CHECKOUT_SCREEN} component={Checkoutscreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_16")} />,
          ...HeaderArray,
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTINGS_SCREEN} component={SettingsScreen}
        options={{
          headerTitle: (props) => <AppHeader {...props} headerTitle={t("Customesidebar_title_17")} />,
          ...HeaderArray,
        }}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;