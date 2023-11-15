import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeStyles } from '../../style';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';

const NewCoursesView = (props) => {
    const { t } = useTranslation();
    const { item,onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

    return (
        <View style={HomeStyle.whiteshadowimgbottom}>
            <TouchableOpacity onPress={() => onPress()}>
                <Image style={HomeStyle.imagsetstylesetthreeslider} resizeMode='cover' source={{uri: `${item.imageUrl}`}} />
            </TouchableOpacity>
            <View style={HomeStyle.alltextleftset}>
                <Text style={HomeStyle.whitebodyimagetextstyletwo2}>
                    {t(item.name)}
                </Text>
                <Text style={HomeStyle.whitebodyimagetextstyles}>
                    {t(item.shortDescription)}
                </Text>
                <View style={HomeStyle.flexrowsettext}>
                    <View style={HomeStyle.flexsettileimgview}>
                        <Rating 
                            type='custom'
                            ratingColor={Colors.amber_color}
                            ratingBackgroundColor={Colors.chinese_silver}
                            ratingCount={5}
                            imageSize={17}
                            startingValue={item.averageRating}
                            isDisabled={false}
                            ratingStyle={HomeStyle.whitebodyimagetextstyletwo}
                            readonly 
                        />
                        <Text style={HomeStyle.whitebodyimagetextstyletwo}>
                            {t(item.price==0 ? 'Free' : item.price+' VND')}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default NewCoursesView;