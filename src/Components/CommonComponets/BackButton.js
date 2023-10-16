import React, { useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

function RowComponent({ children, rowStyle, flex, backgroundColor, width, height, alignItems, touchable, onPress }) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyles: {
          flexDirection: 'row',
          flex: flex,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          alignItems: alignItems,
          ...rowStyle,
        },
      }),
    [flex, rowStyle, backgroundColor, width, height, alignItems],
  );

  return (
    <TouchableOpacity style={Style.hoveraerrorset} onPress={() => navigation.navigate('HomeScsreen', {
    })}>
      <IconF
        size={40}
        name="chevron-small-left"
        color={colorrdata}
        style={Style.iconlessthanback}
      />
    </TouchableOpacity>
  );
}

export default RowComponent;
