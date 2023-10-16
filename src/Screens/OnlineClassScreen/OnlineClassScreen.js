import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, FlatList, } from "react-native";
import { OnlineClassStyle, Style } from '../../style';
import { Container, OnlineClassView } from '../../Components';
import { OnlineClassData } from '../../Utiles';

const OnlineClassScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const OnlineClassStyles = useMemo(() => OnlineClassStyle(Colors), [Colors]);

  return (
    <Container>
      <View style={OnlineClassStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={OnlineClassStyles.minflexview}>
              <View style={OnlineClassStyles.minviewsigninscreen}>
                <FlatList
                  data={OnlineClassData}
                  renderItem={({ item, index }) => (<OnlineClassView
                    item={item}
                    onPress={() => navigation.navigate(item.navigationpass)}
                    index={index}
                  />)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={OnlineClassStyles.setflex}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default OnlineClassScreen;
