import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utiles';

function ContainerComponent({
  children,
  fullScreen,
  statusBarPropStyle,
  containerPropStyle,
}) {

  const styles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor: 'transparent',
        },
        containerStyle: {
          flex: 1,
          backgroundColor: 'transparent',
        },
        linearGradient: {
          flex: 1
        },
      }),
    [Colors],
  );
  return fullScreen ? (
    <View style={[styles.containerStyle, { ...containerPropStyle }]}>
      {children}
    </View>
  ) : (
    <View style={[styles.containerStyle, { ...containerPropStyle }]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['rgba(254,238,245,1)', 'rgba(223,238,255,1)']}
        style={styles.linearGradient}>
        <SafeAreaView
          style={[
            styles.statusBarStyle,
            { statusBarPropStyle },
          ]}
        />
        <SafeAreaView style={[styles.containerStyle, { ...containerPropStyle }]}>
          {children}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

ContainerComponent.defaultProps = {
  fullScreen: false,
  statusBarPropStyle: {},
  containerPropStyle: {},
};

ContainerComponent.propTypes = {
  fullScreen: propTypes.bool,
  statusBarPropStyle: propTypes.shape({}),
  containerPropStyle: propTypes.shape({}),
};

export default ContainerComponent;
