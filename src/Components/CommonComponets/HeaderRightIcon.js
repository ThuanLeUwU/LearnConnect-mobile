import React from "react";
import { View, TouchableOpacity, } from "react-native";
import { Style } from '../../style';
import { ColorPicker, VectorIcons } from '../../Components';
import { Colors, SF } from "../../Utiles";

const HeaderRightIcon = (props) => {
    const { OnlineClass, ChatOnpress, CheckOutOnPress } = props;
    return (
        <View style={Style.notificationivonandimhflexview}>
            <ColorPicker />
            <TouchableOpacity onPress={() => OnlineClass()}>
                <VectorIcons
                    size={SF(25)}
                    icon="MaterialCommunityIcons"
                    name="television-classic"
                    color={Colors.theme_backgound}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Style.postionset} onPress={() => ChatOnpress()}>
                <VectorIcons
                    size={SF(25)}
                    icon="Ionicons"
                    name="chatbox-ellipses-outline"
                    color={Colors.theme_backgound}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => CheckOutOnPress()}>
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
export default HeaderRightIcon;