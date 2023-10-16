import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { SF } from '../../Utiles';
import { VectorIcons } from '../../Components';
import { LanguageStyles } from '../../style';
import { useTranslation } from 'react-i18next';

const LanguageSelectFlat = (props) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = data => {
        console.log('value', data)
        i18n
            .changeLanguage(data)
            .then(() => setLanguage(data))
            .catch(err => console.log(err));
        {
            setIsFocus(false);
        }
    };
    const { Colors } = useTheme();
    const LanguageStyle = useMemo(() => LanguageStyles(Colors), [Colors]);
    const { onPress, setSelectLanguage, item, index, IconChange, setIsFocus, SetIconChange } = props;
    return (
        <TouchableOpacity style={LanguageStyle.LanguageMinView} onPress={() => {
            setSelectLanguage(item.value); changeLanguage(item.value);
            SetIconChange(index); onPress();
        }}>
            <View>
                <Text style={LanguageStyle.TextStyle}>{t(item.label)}</Text>
            </View>
            <View>
                <VectorIcons icon="Fontisto" name={IconChange == index ? 'radio-btn-active' : 'radio-btn-passive'} color={Colors.theme_backgound} size={SF(25)} />
            </View>
        </TouchableOpacity>
    )
}
export default LanguageSelectFlat;