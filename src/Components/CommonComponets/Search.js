import React, { useState, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { SF, SH, Colors } from '../../Utiles';
import { Input, VectorIcons } from '../../Components';
import { useTranslation } from "react-i18next";

const SearchScreenset = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const { t } = useTranslation();
    const { placeholder } = props;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                WidthSet: {
                    width: '100%',
                },
                SearchInputBorder: {
                    borderWidth: SH(0),
                    fontSize: SF(17)
                },
                BorderWidth: {
                    borderWidth: SH(0),
                    width: '100%',
                    borderColor: Colors.theme_backgound,
                    height: SH(55),
                    borderRadius: SH(300),
                    backgroundColor: Colors.white_text_color,
                },
            }),
        [],
    );
    return (
        <View style={styles.BorderWidth}>
            <TouchableOpacity style={styles.WidthSet}>
                <Input
                    placeholder={'Search'}
                    onChangeText={(value) => setMobileNumber(value)}
                    value={mobileNumber}
                    maxLength={10}
                    leftIcon={<VectorIcons name="search1" icon="AntDesign" color={Colors.theme_backgound} size={SF(25)} />}
                    placeholderTextColor={Colors.black_text_color}
                    inputStyle={styles.SearchInputBorder}
                />
            </TouchableOpacity>
        </View>
    );
};
export default SearchScreenset;
