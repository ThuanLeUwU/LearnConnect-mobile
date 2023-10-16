import React from "react";
import { View, TouchableOpacity, } from "react-native";
import { Style } from '../../style';
import { ColorPicker, VectorIcons } from '../../Components';
import { Colors, SF } from "../../Utiles";

const ColorPickerandCheckoutIcon = (props) => {
    const { onPress } = props;
    return (
        <View style={Style.flecoloransdiocn}>
            <ColorPicker />
            <TouchableOpacity onPress={() => onPress()}>
                <VectorIcons
                    size={SF(25)}
                    icon="AntDesign"
                    name="shoppingcart"
                    color={Colors.theme_backgound}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ColorPickerandCheckoutIcon;