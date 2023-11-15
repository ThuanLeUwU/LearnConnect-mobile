import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, FlatList, Image } from "react-native";
import { CoursesDetailStyle } from '../../style';
import { Container, VectorIcons, DescriptionTabSliderView, Spacing } from '../../Components';
import { SF, SH, SW, DescriptionSliderData } from '../../Utiles';
import { useTranslation } from "react-i18next";

const DescriptionTab = (props) => {
    const { t } = useTranslation();
    const { onPress, course } = props;
    const { Colors } = useTheme();
    const CoursesDetailStyles = useMemo(() => CoursesDetailStyle(Colors), [Colors]);
    return (
        <Container>
            <View style={CoursesDetailStyles.overviewtabminview}>
                <Text style={CoursesDetailStyles.textstylesfonts}>{t('Description_title_1')}</Text>
                <Text style={CoursesDetailStyles.loremlongparegraph}>
                    {t(course.description)}
                </Text>
                <View style={CoursesDetailStyles.scetiontwoview}>
                    <Text style={CoursesDetailStyles.textstylesfonts}>{t("Information details")}</Text>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <Image style={{width: SW(100), height: SH(105), borderRadius: SH(200),  marginLeft: '10%',}} 
                            resizeMode='cover' 
                            source={{uri: `${course.mentorProfilePictureUrl}`,}} />
                    </View>
                    
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            icon="AntDesign"
                            size={SF(25)}
                            name="user"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t(course.mentorName)}</Text>
                    </View>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            size={SF(25)}
                            icon="AntDesign"
                            name="book"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t(course.lectureCount + ' lectures')}</Text>
                    </View>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            size={SF(25)}
                            icon="AntDesign"
                            name="clockcircleo"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t(`${Math.floor(course.contentLength / 60)} hours ${course.contentLength % 60} minutes`)}</Text>
                    </View>
                </View>
                <Text style={CoursesDetailStyles.textstylesfonts}>{t("Description_5")}</Text>
                <View>
                    <Spacing space={SH(20)} />
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            icon="AntDesign"
                            size={SF(17)}
                            name="checkcircleo"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t(course.categoryName + '(Major)')}</Text>
                    </View>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            size={SF(17)}
                            icon="AntDesign"
                            name="checkcircleo"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t(course.categoryName + ' (Field)')}</Text>
                    </View>
                </View>
                <Spacing space={SH(100)} />
            </View>
        </Container>
    );
}
export default DescriptionTab;





