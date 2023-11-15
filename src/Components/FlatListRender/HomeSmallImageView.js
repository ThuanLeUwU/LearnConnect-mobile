import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeStyles } from '../../style';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const HomeSmallImageView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={HomeStyle.rounftextviewsmall}>
                <Image style={HomeStyle.ImageSmallView} resizeMode='cover' backgroundColor={Colors.theme_backgound} />
                <Text style={HomeStyle.roundimagtitletextset}>
                    {t(item.roundimagtitle)}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
export default HomeSmallImageView;