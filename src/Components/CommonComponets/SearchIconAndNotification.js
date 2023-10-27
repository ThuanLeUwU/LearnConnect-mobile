import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Style} from '../../style';
import {ColorPicker, VectorIcons} from '../../Components';
import {Colors, SF} from '../../Utiles';

const SearchIconAndNotification = props => {
  const {SearchOnpress, NotificationOnpress, CheckOutOnPress} = props;
  return (
    <View style={Style.notificationivonandimhflexview}>
      <ColorPicker />
      <TouchableOpacity onPress={() => SearchOnpress()}>
        <VectorIcons
          size={SF(25)}
          icon="AntDesign"
          name="search1"
          color={Colors.theme_backgound}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Style.marginleftandrightsettext}
        onPress={() => NotificationOnpress()}>
        <VectorIcons
          size={SF(25)}
          icon="Ionicons"
          name="notifications-outline"
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
  );
};
export default SearchIconAndNotification;
