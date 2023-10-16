import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ReviewsTabStyle } from '../../style';
import { useTranslation } from "react-i18next";

const ReviewsTabView = (props) => {
    const { t } = useTranslation();
    const { item } = props;
    const { Colors } = useTheme();
    const ReviewsTabStyles = useMemo(() => ReviewsTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={ReviewsTabStyles.whiteboxwhishlist}>
            <View style={ReviewsTabStyles.reviewflex}>
                <Image style={ReviewsTabStyles.setreviesstyleimage} resizeMode='cover'
                    source={item.imge} />
                <View style={ReviewsTabStyles.textviewsetwhishlist}>
                    <View style={ReviewsTabStyles.flexratingandtext}>
                        <Text style={ReviewsTabStyles.datetextrstyle}>{t(item.datetext)}</Text>
                        <View style={ReviewsTabStyles.iconview}>
                            {item.rating}
                        </View>
                    </View>
                    <Text style={ReviewsTabStyles.dolardigittext}>{t(item.username)}</Text>
                </View>
            </View>
            <Text style={ReviewsTabStyles.setdollardtextset}>{t(item.paregraphtext)}</Text>
        </TouchableOpacity>
    );
}
export default ReviewsTabView;