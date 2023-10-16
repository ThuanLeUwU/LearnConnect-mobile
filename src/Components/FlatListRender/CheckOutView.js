import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { Checkoutscreenstyle } from "../../style";
import { Button, VectorIcons } from '../../Components';
import { SF } from '../../Utiles';
import { useTranslation } from "react-i18next";

const CheckOutView = (props) => {
    const { t } = useTranslation();
    const { item, removeonpress, movetowishilist } = props;
    const { Colors } = useTheme();
    const Checkoutscreenstyles = useMemo(() => Checkoutscreenstyle(Colors), [Colors]);

    return (
        <View style={Checkoutscreenstyles.whiteboxwhishlist}>
            <View style={Checkoutscreenstyles.flexDirectiwhilist}>
                <View>
                    <Image style={Checkoutscreenstyles.imagesetios} resizeMode='cover'
                        source={item.image} />
                </View>
                <View style={Checkoutscreenstyles.textviewsetwhishlist}>
                    <Text style={Checkoutscreenstyles.textstylebeginners}>{t(item.mintitle)}</Text>
                    <Text style={Checkoutscreenstyles.setreviewstext}>{t(item.mintitletwo)}</Text>
                    <View style={Checkoutscreenstyles.setstartanddolardtext}>
                        <TouchableOpacity style={Checkoutscreenstyles.setstartanddolardtext}>
                            <Text style={Checkoutscreenstyles.Textdigit}>$875.00</Text>
                            <VectorIcons icon="MaterialIcons" name="local-offer" size={SF(23)} color={Colors.theme_backgound} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={Checkoutscreenstyles.setbuttontwowidth}>
                <Button title={t(item.buttontext)} />
            </View>
            <View style={Checkoutscreenstyles.setflextextrow}>
                <Text style={Checkoutscreenstyles.fourpointtext}>4.5</Text>
                <View style={Checkoutscreenstyles.flexrowiconset}>
                    {item.ratingview}
                </View>
                <Text style={Checkoutscreenstyles.ratingstextstyle}>{t(item.digitrating)}</Text>
            </View>
            <Text style={Checkoutscreenstyles.simpletxtset}>{t(item.hoursetext)}</Text>
            <View style={Checkoutscreenstyles.flexbuttonsetstyle}>
                <TouchableOpacity onPress={() => removeonpress()}>
                    <Text style={Checkoutscreenstyles.RemoveTextStyle}>{t(item.removetext)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => movetowishilist()}>
                    <Text style={Checkoutscreenstyles.movetowishilist}>{t(item.movetowishilisttwxt)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CheckOutView;