import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeStyles } from '../../style';
import { useTranslation } from "react-i18next";

const DescriptionTabSliderView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    return (
        <View style={HomeStyle.lastmarginview}>
            <TouchableOpacity onPress={() => onPress()}>
                <View style={HomeStyle.rounftextview}>
                    <Image style={HomeStyle.Imageviewstyle} source={item.imge} />
                    <Text style={HomeStyle.roundimagtitletextset}>
                        {t(item.roundimagtitle)}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default DescriptionTabSliderView;