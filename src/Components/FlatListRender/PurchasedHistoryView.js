import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View, Image} from 'react-native';
import {Button} from '../../Components';
import {PurchasedHistoryStyle} from '../../style';
import {useTranslation} from 'react-i18next';

const PurchasedHistoryView = props => {
  const {t} = useTranslation();
  const {item, onPress} = props;
  const {Colors} = useTheme();
  const PurchasedHistoryStyles = useMemo(
    () => PurchasedHistoryStyle(Colors),
    [Colors],
  );

  return (
    <View
      style={PurchasedHistoryStyles.whiteboxwhishlist}
      onPress={() => onPress()}>
      <View style={PurchasedHistoryStyles.flexDirectiwhilist}>
        <View>
          <Image
            style={PurchasedHistoryStyles.setimagestyle}
            resizeMode="cover"
            source={item.image}
          />
        </View>
        <View style={PurchasedHistoryStyles.textviewsetwhishlist}>
          <Text style={PurchasedHistoryStyles.historytextstyle}>
            {t(item.text)}
          </Text>
          <View style={PurchasedHistoryStyles.flexrowsetusericon}>
            <Text style={PurchasedHistoryStyles.timetexststyle}>
              {t(item.timetextset)}
            </Text>
            <Text style={PurchasedHistoryStyles.settextusert}>
              {t(item.usertext)}
            </Text>
          </View>
          <View style={PurchasedHistoryStyles.flexrowsetusericon}>
            <Text style={PurchasedHistoryStyles.totaltextprice}>
              {t(item.totalprice)}
            </Text>
            <Text style={PurchasedHistoryStyles.settextusert}>
              {item.dolardprice}
            </Text>
          </View>
        </View>
      </View>
      <View style={PurchasedHistoryStyles.minviewsetpaymenttype}>
        <View style={PurchasedHistoryStyles.flexrowsetrpayment}>
          <Text style={PurchasedHistoryStyles.paymenttypetext}>
            {t(item.paymenttypetext)}
          </Text>
          <Text style={PurchasedHistoryStyles.settextusert}>
            {t(item.googlepay)}
          </Text>
        </View>
        <View style={PurchasedHistoryStyles.serftbuttonwidth}>
          <Button
            buttonStyle={PurchasedHistoryStyles.buttonheight}
            title={t(item.buttonset)}
            buttonTextStyle={PurchasedHistoryStyles.buttontextset}
          />
        </View>
      </View>
    </View>
  );
};
export default PurchasedHistoryView;
