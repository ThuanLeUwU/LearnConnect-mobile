import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { SH, ExamTabData } from "../../../Utiles";
import { Style, ExamScreenStyle } from "../../../style";
import { Search, Spacing, ExamView, Container } from '../../../Components';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';

const ExamScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const ExamScreenStyles = useMemo(() => ExamScreenStyle(Colors), [Colors]);
    return (
        <Container>
            <View style={ExamScreenStyles.minstyleviewphotograpgy}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.scrollviewstyles}>
                    <KeyboardAvoidingView enabled>
                        <View style={ExamScreenStyles.minflexview}>
                            <View style={ExamScreenStyles.minviewsigninscreen}>
                                <Text style={ExamScreenStyles.examtitle}>{t("Exam_Title_1")}</Text>
                                <Spacing space={SH(20)} />
                                <Search />
                                <Spacing space={SH(10)} />
                                <View style={ExamScreenStyles.marginbottomspace}>
                                    <FlatList
                                        data={ExamTabData}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) => (<ExamView
                                            item={item}
                                            onPress={() => navigation.navigate(RouteName.SELECT_EXAM_SCREEN)}
                                        />)}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </Container >
    );
};

export default ExamScreen;
