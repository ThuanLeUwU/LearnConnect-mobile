import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { Style } from '../../style';
import images from '../../index';
import { Colors } from '../../Utiles';
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';
import { Container } from '../../Components';

const SplashScreen = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(RouteName.SWIPER_SCREEN)
      );
    }, 2500);
    {
      colorrdata != '' ?
        dispatch(color_picker_set_action(colorrdata))
        :
        dispatch(color_picker_set_action(Colors.theme_backgound))
    }
  }, []);
  return (
    <Container>
      <View style={Style.setbgimage}>
        <View>
          <Image style={Style.valuxlogoimg} resizeMode="contain" source={images.Spalsh_Logo} />
        </View>
      </View>
    </Container>
  );
};
export default SplashScreen;
