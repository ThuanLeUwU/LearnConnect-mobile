import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LessonsTabStyle } from '../../style';
import { VectorIcons } from '../../Components';
import { SF } from "../../Utiles";
import { useTranslation } from "react-i18next";

const LessonsTabViews = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;
    const { Colors } = useTheme();
    const LessonsTabStyles = useMemo(() => LessonsTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={LessonsTabStyles.whiteboxwhishlist} onPress={() => onPress()}>
            <View style={LessonsTabStyles.flexDirectiwhilist}>
                <View>
                    <Image style={LessonsTabStyles.setimageborser} resizeMode='cover'
                        source={item.imge} />
                </View>
                <View style={LessonsTabStyles.textviewsetwhishlist}>
                    <Text style={LessonsTabStyles.designfonttext}>{t(item.roundimagtitle)}</Text>
                    <Text style={LessonsTabStyles.dolardigittext}>{t(item.roundimagtitletwo)}</Text>
                    <View style={LessonsTabStyles.stariconview}>
                        <VectorIcons
                            icon="EvilIcons"
                            size={SF(32)}
                            name={item.iconname}
                            color={Colors.theme_backgound}
                        />
                        <Text style={LessonsTabStyles.unlocktextstyle}>{t(item.Unlockedtext)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default LessonsTabViews;