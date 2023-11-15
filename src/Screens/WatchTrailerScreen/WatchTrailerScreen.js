import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { WatchTrailerStyle } from '../../style';
import { Container, VectorIcons, VideoView } from '../../Components';
import {  SF } from "../../Utiles";
import { LessonsTab } from '../../Screens';
import { RouteName } from "../../routes";

const WatchTrailerScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const WatchTrailerStyles = useMemo(() => WatchTrailerStyle(Colors), [Colors]);

  const title = () => {
    return (
      <View style={WatchTrailerStyles.nindivset}>
        <VideoView />
      </View>
    );
  }
  const renderNavBar = () => (
    <View style={WatchTrailerStyles.navContainer}>
      <View style={WatchTrailerStyles.navBar}>
        <TouchableOpacity style={WatchTrailerStyles.hoveraerrorset} onPress={() => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN)}>
          <VectorIcons
            icon="Entypo"
            size={SF(40)}
            name="chevron-small-left"
            color={Colors.theme_backgound}
            style={WatchTrailerStyles.iconlessthanback}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderContent = () => {
    return (
      <Container>
        <View style={WatchTrailerStyles.overviewtabminview}>
          <Text style={WatchTrailerStyles.trailertextset}>Trailer</Text>
          <Text style={WatchTrailerStyles.paregraphtext}>Lorem Ipsum is simply dummy text of the printing and typeseting industry</Text>
          <LessonsTab onPress={() => navigation.navigate(RouteName.COURSES_SCREEN)} />
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
        headerMaxHeight={340}
        headerMinHeight={55}
        // extraScrollHeight={0}
        navbarColor="rgba(223,238,255,1)"
        titleStyle={WatchTrailerStyles.titleStyle}
        title={title()}
        backgroundColor={'transparent'}
        backgroundImageScale={1.1}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={WatchTrailerStyles.container}
        contentContainerStyle={WatchTrailerStyles.contentContainer}
        innerContainerStyle={WatchTrailerStyles.container}
        // scrollViewProps={{
        //   onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
        //   onScrollEndDrag: () => console.log("onScrollEndDrag"),
        //   showsVerticalScrollIndicator: false
        // }}
      />
    </>
  );
}
export default WatchTrailerScreen;

