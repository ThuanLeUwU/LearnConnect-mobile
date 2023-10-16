import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeStyles } from '../../style';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const InstructorView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

    return (
        <TouchableOpacity style={HomeStyle.whiteshadowimgbottomtwo} onPress={() => onPress()}>
            <View style={HomeStyle.flexiconviewsetIntructer}>
                <Image style={HomeStyle.instructorimage} resizeMode='cover' source={item.imge} />
            </View>
            <Text
                style={HomeStyle.usernametext}>
                {t(item.username)}
            </Text>
            <Text
                style={HomeStyle.usernamejobtext}>
                {t(item.userjob)}
            </Text>
            <View style={HomeStyle.flexrowstyleset}>
                {item.rating}
                <Text style={HomeStyle.usernamerenkintexttwo}>
                    {t(item.userrankingtwo)}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
export default InstructorView;