import React from "react";
import { Rating } from 'react-native-ratings';
import { Colors } from '../../Utiles';

function RatingScreen(props) {
  const { ratingCount, imageSize, tintColor } = props;
  return (
    <Rating
      type='custom'
      ratingColor={Colors.amber_color}
      ratingBackgroundColor={Colors.chinese_silver}
      ratingCount={ratingCount}
      tintColor={tintColor}
      imageSize={imageSize}
      startingValue={5.5}
      isDisabled={false}
    />
  );
};
export default RatingScreen;