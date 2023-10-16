import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList } from "react-native";
import { LessonsTabStyle } from '../../style';
import { Container, LessonsTabViews, Spacing } from '../../Components';
import { LessonsTabData, SH } from '../../Utiles';

const LessonsTab = (props) => {
  const { Colors } = useTheme();
  const LessonsTabStyles = useMemo(() => LessonsTabStyle(Colors), [Colors]);
  const { onPress } = props;

  return (
    <Container>
      <View style={LessonsTabStyles.overviewtabminview}>
        <View>
          <Spacing space={SH(20)} />
          <FlatList
            data={LessonsTabData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<LessonsTabViews
              item={item}
              onPress={() => onPress()}
            />)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </Container>
  );
}
export default LessonsTab;





