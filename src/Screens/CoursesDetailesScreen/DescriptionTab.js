import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, FlatList } from "react-native";
import { CoursesDetailStyle } from '../../style';
import { Container, VectorIcons, DescriptionTabSliderView, Spacing } from '../../Components';
import { SF, SH, DescriptionSliderData } from '../../Utiles';
import { useTranslation } from "react-i18next";

const DescriptionTab = (props) => {
    const { t } = useTranslation();
    const { onPress } = props;
    const { Colors } = useTheme();
    const CoursesDetailStyles = useMemo(() => CoursesDetailStyle(Colors), [Colors]);
    return (
        <Container>
            <View style={CoursesDetailStyles.overviewtabminview}>
                <Text style={CoursesDetailStyles.textstylesfonts}>{t("Instructor_Title_16")}</Text>
                <Text style={CoursesDetailStyles.loremlongparegraph}>
                    {t("Paregraph_Text_1")}
                </Text>
                <View style={CoursesDetailStyles.scetiontwoview}>
                    <Text style={CoursesDetailStyles.textstylesfonts}>{t("Description_1")}</Text>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            icon="EvilIcons"
                            size={SF(25)}
                            name="navicon"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t("Description_2")}</Text>
                    </View>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            icon="Entypo"
                            size={SF(25)}
                            name="star"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t("Description_3")}</Text>
                    </View>
                    <View style={CoursesDetailStyles.flexrowiconandtextview}>
                        <VectorIcons
                            size={SF(25)}
                            icon="AntDesign"
                            name="check"
                            style={CoursesDetailStyles.marginrightset}
                        />
                        <Text style={CoursesDetailStyles.textsetvideo}>{t("Description_4")}</Text>
                    </View>
                </View>
                <Text style={CoursesDetailStyles.textstylesfonts}>{t("Description_5")}</Text>
                <View>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={DescriptionSliderData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<DescriptionTabSliderView
                            item={item}
                            onPress={() => onPress()}
                        />)}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Spacing space={SH(100)} />
            </View>
        </Container>
    );
}
export default DescriptionTab;





