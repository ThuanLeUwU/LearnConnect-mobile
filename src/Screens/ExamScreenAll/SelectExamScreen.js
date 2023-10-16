import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
import { AppHeader, Button, Container, SelectExamView } from '../../Components';
import { SelectExmaData } from "../../Utiles";
import { Style, SelectExamScreenStyle } from "../../style";
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const SelectExamScreen = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const SelectExamScreenStyles = useMemo(() => SelectExamScreenStyle(Colors), [Colors]);

    return (
        <Container>
            <View style={SelectExamScreenStyles.minstyleviewphotograpgy}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.scrollviewstyles}>
                    <KeyboardAvoidingView enabled>
                        <View style={SelectExamScreenStyles.minflexview}>
                            <View style={SelectExamScreenStyles.minviewsigninscreen}>
                                <View style={SelectExamScreenStyles.marginbottomspace}>
                                    <FlatList
                                        data={SelectExmaData}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) => (<SelectExamView
                                            item={item}
                                            onPress={() => navigation.navigate(RouteName.EXAM_QUESTION_SCREEN)}
                                        />)}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={SelectExamScreenStyles.ButtonSelectExamScreenStyle}>
                    <Button title={t("View_All_Text")} onPress={() => navigation.navigate(RouteName.EXAM_QUESTION_SCREEN)} />
                </View>
            </View>
        </Container>
    );
};
export default SelectExamScreen;
