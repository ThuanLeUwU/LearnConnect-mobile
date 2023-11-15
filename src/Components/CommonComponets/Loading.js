import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import images from '../../index';
import {Container} from '../../Components';
import {Style} from '../../style';

const Loading = () => {
    return (
        <Container>
            <View style={Style.setbgimage}>
                <View>
                <Image
                    style={Style.valuxlogoimg}
                    resizeMode="contain"
                    source={images.Spalsh_Logo}
                />
                <ActivityIndicator size="large" color="gray" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], paddingTop: 20 }} />
                </View>
            </View>
        </Container>
    );
};

export default Loading;