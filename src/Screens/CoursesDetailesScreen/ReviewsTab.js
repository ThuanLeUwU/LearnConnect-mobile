import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList } from "react-native";
import { ReviewsTabStyle } from '../../style';
import { Container, ReviewsTabView, Spacing } from '../../Components';
import { ReviewsTabData, SH } from '../../Utiles';

const ReviewsTab = (props) => {
  const { Colors } = useTheme();
  const ReviewsTabStyles = useMemo(() => ReviewsTabStyle(Colors), [Colors]);
  return (
    <Container>
      <Spacing space={SH(20)} />
      <View style={ReviewsTabStyles.overviewtabminview}>
        <FlatList
          data={ReviewsTabData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (<ReviewsTabView
            item={item}
          />)}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
export default ReviewsTab;





