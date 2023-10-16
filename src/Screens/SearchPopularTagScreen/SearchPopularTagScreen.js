import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, StatusBar, TouchableOpacity, TextInput } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { Container, Search, VectorIcons } from '../../Components';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { SerchPopularTagStyle } from '../../style';
import { SF } from '../../Utiles';

const SearchPopularTagScreen = (props) => {
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const SerchPopularTagStyles = useMemo(() => SerchPopularTagStyle(Colors), [Colors]);

  const { navigation } = props;
  const title = () => {
    return (
      <View style={SerchPopularTagStyles.flexdirectioninputsearchtab}>
        <View style={SerchPopularTagStyles.flexdirectioninputsearchtab}>
          <Search />
        </View>
      </View>
    );
  }
  const renderNavBar = () => (
    <View style={SerchPopularTagStyles.navContainer}>
      <View style={SerchPopularTagStyles.navBar}>
        <TouchableOpacity style={SerchPopularTagStyles.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
        })}>
          <VectorIcons
            icon="Entypo"
            size={SF(40)}
            name="chevron-small-left"
            color={Colors.theme_backgound}
            style={SerchPopularTagStyles.iconSerchPopularTagStyleseacrch}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderContent = () => {
    return (
      <Container>
        <View style={SerchPopularTagStyles.whilistminbody}>
          <Text style={SerchPopularTagStyles.populartagstyle}>
            {t("Search_Title_1")}
          </Text>
          <View style={SerchPopularTagStyles.businessstyle}>
            <Text style={SerchPopularTagStyles.businessgraytextsetborderbottom}>
              {t("Search_Title_2")}
            </Text>
          </View>
          <Text style={SerchPopularTagStyles.businessgraytextsetone}>
            {t("Search_Title_3")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextset}>
            {t("Search_Title_4")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextsetone}>
            {t("Search_Title_5")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextset}>
            {t("Search_Title_6")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextset}>
            {t("Search_Title_7")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextsetone}>
            {t("Search_Title_8")}
          </Text>
          <Text style={SerchPopularTagStyles.businessgraytextset}>
            {t("Search_Title_9")}
          </Text>
        </View>
      </Container>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        alwaysShowTitle={false}
        alwaysShowNavBar={true}
        headerMaxHeight={200}
        headerMinHeight={55}
        backgroundImage={images.Searchbg_Image}
        navbarColor="rgba(254,238,245,1)"
        titleStyle={SerchPopularTagStyles.titleStyle}
        title={title()}
        backgroundImageScale={1.1}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={SerchPopularTagStyles.container}
        contentContainerStyle={SerchPopularTagStyles.contentContainer}
        innerContainerStyle={SerchPopularTagStyles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
          onScrollEndDrag: () => console.log("onScrollEndDrag"),
          showsVerticalScrollIndicator: false
        }}
      />
    </>
  );
};
export default SearchPopularTagScreen;
