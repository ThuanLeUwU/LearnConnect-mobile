import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors, SF } from '../../Utiles';
import { VectorIcons } from '../../Components';

function HeaderLeftMenuIcon(props) {
    const { navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <VectorIcons
                color={Colors.theme_backgound}
                name="navicon"
                icon="EvilIcons"
                size={SF(35)}
            />
        </TouchableOpacity>
    );
};

export default HeaderLeftMenuIcon;