import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LessonsTabStyle } from '../../style';
import { VectorIcons } from '../../Components';
import { SF } from "../../Utiles";
import { useTranslation } from "react-i18next";
import images from '../../images/index';

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
                        source={images.My_Courses_Image_1} />
                </View>
                <View style={LessonsTabStyles.textviewsetwhishlist}>
                    <Text style={LessonsTabStyles.designfonttext}>{t(item.title)}</Text>
                    <Text style={LessonsTabStyles.dolardigittext}>{t(item.contentType === 1 ? 'Video' : 'Document')}</Text>
                    <View style={LessonsTabStyles.stariconview}>
                        <VectorIcons
                            icon="EvilIcons"
                            size={SF(32)}
                            name='lock'
                            color={Colors.theme_backgound}
                        />
                        <Text style={LessonsTabStyles.unlocktextstyle}>{t('photography_Title_9')}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default LessonsTabViews;