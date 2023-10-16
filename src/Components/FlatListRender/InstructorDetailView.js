import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image } from "react-native";
import { Button, Spacing, VectorIcons } from '../../Components';
import { InstructorsDetaileStyle } from "../../style";
import { Colors, SF, SH } from "../../Utiles";
import { useTranslation } from "react-i18next";

const InstructorDetailView = (props) => {
    const { t } = useTranslation();
    const { item, index, onPress } = props;
    const { Colors } = useTheme();
    const InstructorsDetaileStyles = useMemo(() => InstructorsDetaileStyle(Colors), [Colors]);
    return (
        <View style={InstructorsDetaileStyles.whiteboxwhishlist} onPress={() => onPress()}>
            <View style={InstructorsDetaileStyles.flexDirectiwhilist}>
                <View>
                    <Image style={InstructorsDetaileStyles.setimagestyle} resizeMode='cover' source={item.image} />
                </View>
                <View style={InstructorsDetaileStyles.textviewsetwhishlist}>
                    <Text style={InstructorsDetaileStyles.simplatextstyle}>{t(item.text)}</Text>
                    <View style={InstructorsDetaileStyles.flexrowsetusericon}>
                        <VectorIcons icon="FontAwesome" name={item.usericon} size={SF(25)} color={Colors.theme_backgound} />
                        <Text style={InstructorsDetaileStyles.usertextstyle}>{t(item.usertext)}</Text>
                    </View>
                    <View style={InstructorsDetaileStyles.flexrowsetusericon}>
                        <VectorIcons icon="AntDesign" name={item.clockicon} size={SF(19)} />
                        <Text style={InstructorsDetaileStyles.usertextstyle}>{t(item.timetextset)}</Text>
                    </View>
                    <View style={InstructorsDetaileStyles.ratingviewstyle}>{item.rating}</View>
                </View>
            </View>
            <View style={InstructorsDetaileStyles.twobuttoncenter}>
                {index === 0 || index === 2 ?
                    <View style={InstructorsDetaileStyles.wisthsetbutton}>
                        <Spacing space={SH(10)} />
                        <Button title={t(item.buttonset)} /></View>
                    :
                    null
                }
                {index === 1 ?
                    <View style={InstructorsDetaileStyles.flexrowsettext}>
                        <Text style={InstructorsDetaileStyles.dolardtextsetprice}>$ 100.00</Text>
                        <Text style={InstructorsDetaileStyles.simplatextstyle}>$ 80.00</Text>
                    </View>
                    :
                    null
                }
                {index === 0 || index === 1 || index === 2 ?
                    <View style={InstructorsDetaileStyles.wisthsetbutton}>
                        <Spacing space={SH(10)} />
                        <Button title={t(item.buttonsettwo)} />
                    </View>
                    :
                    null
                }
            </View>
        </View>
    );
}
export default InstructorDetailView;