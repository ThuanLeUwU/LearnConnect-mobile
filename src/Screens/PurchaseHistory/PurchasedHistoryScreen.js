import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, FlatList, } from "react-native";
import { Container, PurchasedHistoryView } from '../../Components';
import { Style, PurchasedHistoryStyle } from "../../style";
import { PurchasedHistoryData } from '../../Utiles';

const PurchasedHistoryScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const PurchasedHistoryStyles = useMemo(() => PurchasedHistoryStyle(Colors), [Colors]);
  return (
    <Container>
      <View style={PurchasedHistoryStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <KeyboardAvoidingView enabled>
            <View style={PurchasedHistoryStyles.minflexview}>
              <View style={PurchasedHistoryStyles.minviewsigninscreen}>
                <View>
                  <FlatList
                    data={PurchasedHistoryData}
                    renderItem={({ item }) => (<PurchasedHistoryView
                      item={item}
                    />)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={PurchasedHistoryStyles.setflex}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default PurchasedHistoryScreen;
