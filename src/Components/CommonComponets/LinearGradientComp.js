import React, { useMemo } from "react";
import { StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utiles';

function LinearGradientComp(props) {
    const { LinearGradientStyle, start, end, colors, Content } = props;
    const styles = useMemo(
        () =>
            StyleSheet.create({
                LinearGradientStyle: {
                    width: '100%',
                    height: '100%'
                },
            }),
    );
    return (
        // <LinearGradient
        //     start={start} end={end}
        //     colors={colors}
        //     style={[styles.LinearGradientStyle, { ...LinearGradientStyle }]}>
        //     {Content}
        // </LinearGradient>
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={['#feeef5', '#feeef5']}>
            {Content}
        </LinearGradient>
    );
};
export default LinearGradientComp;