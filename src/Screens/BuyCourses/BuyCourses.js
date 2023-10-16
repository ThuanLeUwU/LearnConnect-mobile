import React, { useMemo } from "react";
import { useTheme } from '@react-navigation/native';
import { View, Text, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { BuyCoursesStyle } from '../../style';
import { Container, Button, ColorPicker, VectorIcons } from '../../Components';
import { SF } from "../../Utiles";
import images from "../../index";
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 210) : 200;
const HEADER_SETHEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 55;

const BuyCourses = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const BuyCoursesStyles = useMemo(() => BuyCoursesStyle(Colors), [Colors]);

    const title = () => {
        return (
            <View style={BuyCoursesStyles.allheadertitleminview}>
                <View style={BuyCoursesStyles.computerscrinceview} >
                    <Text style={BuyCoursesStyles.consoledeclopmenttextheader}>{t("Description_ten")}</Text>
                </View>
            </View>
        );
    }

    const { navigation } = props;
    const renderNavBar = () => (
        <View style={BuyCoursesStyles.navContainer}>
            <View style={BuyCoursesStyles.navBar}>
                <TouchableOpacity style={BuyCoursesStyles.hoveraerrorset} onPress={() => navigation.navigate(RouteName.COURSES_DETAILS_SCREEN)}>
                    <VectorIcons
                        icon="Entypo"
                        size={SF(40)}
                        name="chevron-small-left"
                        color={Colors.theme_backgound}
                    />
                </TouchableOpacity>
                <View style={BuyCoursesStyles.backarrowwork}>
                    <ColorPicker />
                    <TouchableOpacity style={BuyCoursesStyles.plusiconandtextview} onPress={
                        () => navigation.navigate('Checkoutscreen')
                    }>
                        <VectorIcons
                            icon="AntDesign"
                            size={SF(25)}
                            name="shoppingcart"
                            color={Colors.theme_backgound}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    const renderContent = () => {
        return (
            <Container>
                <View style={BuyCoursesStyles.whilistminbody}>
                    <View style={BuyCoursesStyles.whiteboxwhishlist}>
                        <View style={BuyCoursesStyles.flexDirectiwhilist}>
                            <View style={BuyCoursesStyles.textviewsetwhishlist}>
                                <Text style={BuyCoursesStyles.designfonttext}>{t("Description_title_one")}</Text>
                                <View style={BuyCoursesStyles.heightset}>
                                    <Text style={BuyCoursesStyles.dolardigittext}>{t("Description_title_two")}</Text>
                                </View>
                                <View style={BuyCoursesStyles.flexrowyearlybutton}>
                                    <View>
                                        <Text style={BuyCoursesStyles.onlydigittext}>{t("Description_three")}</Text>
                                    </View>
                                    <View style={BuyCoursesStyles.setbuttonwidth}>
                                        <Button
                                            title={t("Description_four")}
                                            onPress={
                                                () => navigation.navigate('Checkoutscreen')
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={BuyCoursesStyles.whiteboxwhishlist}>
                        <View style={BuyCoursesStyles.flexDirectiwhilist}>
                            <View style={BuyCoursesStyles.textviewsetwhishlist}>
                                <Text style={BuyCoursesStyles.designfonttext}>{t("Description_five")}</Text>
                                <View style={BuyCoursesStyles.heightset}>
                                    <Text style={BuyCoursesStyles.dolardigittext}>{t("Description_six")}</Text>
                                </View>
                                <View style={BuyCoursesStyles.flexrowyearlybutton}>
                                    <View>
                                        <Text style={BuyCoursesStyles.onlydigittext}>{t("Description_saven")}</Text>
                                    </View>
                                    <View style={BuyCoursesStyles.setbuttonwidth}>
                                        <Button
                                            title={t("Description_aeight")}
                                            buttonStyle={{ borderColor: Colors.theme_backgound, backgroundColor: Colors.theme_backgound, }}
                                            onPress={
                                                () => navigation.navigate('Checkoutscreen')
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
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
                headerMaxHeight={HEADER_HEIGHT}
                headerMinHeight={HEADER_SETHEIGHT}
                navbarColor="rgba(223,238,255,1)"
                titleStyle={BuyCoursesStyles.titleStyle}
                title={title()}
                backgroundImage={images.Buy_Courses_Image}
                backgroundImageScale={1.1}
                renderNavBar={renderNavBar}
                renderContent={renderContent}
                containerStyle={BuyCoursesStyles.container}
                contentContainerStyle={BuyCoursesStyles.contentContainer}
                innerContainerStyle={BuyCoursesStyles.container}
                scrollViewProps={{
                    onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
                    onScrollEndDrag: () => console.log("onScrollEndDrag"),
                    showsVerticalScrollIndicator: false
                }}
            />
        </>
    );
};
export default BuyCourses;


