import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, FlatList, TouchableOpacity, } from "react-native";
import { Container, VectorIcons,AppHeader } from '../../Components';
import { Style, ExamMarksheetStyle } from "../../style";
import { useTranslation } from "react-i18next";
import { SF } from '../../Utiles';
import { RouteName } from '../../routes';

const ExamMarkSheetNumberScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    let GridListItems = [
        { key: "1" },
        { key: "2" },
        { key: "3" },
        { key: "4" },
        { key: "5" },
        { key: "6" },
        { key: "7" },
        { key: "8" },
        { key: "9" },
        { key: "10" },
        { key: "11" },
        { key: "12" },
        { key: "13" },
        { key: "14" },
        { key: "15" },
        { key: "16" },
        { key: "17" },
        { key: "18" },
        { key: "19" },
        { key: "20" },
        { key: "21" },
        { key: "22" },
        { key: "23" },
        { key: "24" },
        { key: "25" },
        { key: "26" },
        { key: "27" },
        { key: "28" },
    ]
    const GetGridViewItem = (item) => {
    }
    const { Colors } = useTheme();
    const ExamMarksheetStyles = useMemo(() => ExamMarksheetStyle(Colors), [Colors]);
    return (
        <Container>
            <View style={ExamMarksheetStyles.minstyleviewphotograpgy}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.scrollviewstyles}>
                    <View style={ExamMarksheetStyles.keybordtopviewstyle}>
                        <KeyboardAvoidingView enabled>
                            <View style={ExamMarksheetStyles.minflexview}>
                                <View style={ExamMarksheetStyles.minviewsigninscreen}>
                                    <View style={ExamMarksheetStyles.questionview}>
                                        <TouchableOpacity style={ExamMarksheetStyles.questionpapewrset}>
                                            <Text style={ExamMarksheetStyles.boxintitle}>{t("Exam_question_1")}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ExamMarksheetStyles.boxstyleminview}>
                                        <View style={ExamMarksheetStyles.whiteboxwhishlist}>
                                            <View style={ExamMarksheetStyles.minviewaboxin}>
                                                <View style={ExamMarksheetStyles.dotsetview}>
                                                    <View style={ExamMarksheetStyles.dotcolorset}></View>
                                                    <Text style={ExamMarksheetStyles.textcolorset}>{t("Exam_question_3")}</Text>
                                                </View>
                                                <View style={ExamMarksheetStyles.dotsetview}>
                                                    <View style={ExamMarksheetStyles.wrongdot}></View>
                                                    <Text style={ExamMarksheetStyles.textcolorset}>{t("Exam_question_4")}</Text>
                                                </View>
                                            </View>
                                            <View style={ExamMarksheetStyles.minviewaboxin}>
                                                <View style={ExamMarksheetStyles.dotsetview}>
                                                    <View style={ExamMarksheetStyles.notvisiteddot}></View>
                                                    <Text style={ExamMarksheetStyles.textcolorset}>{t("Exam_question_5")}</Text>
                                                </View>
                                                <View style={ExamMarksheetStyles.dotsetview}>
                                                    <View style={ExamMarksheetStyles.reviluterdot}></View>
                                                    <Text style={ExamMarksheetStyles.textcolorset}>{t("Exam_question_6")}</Text>
                                                </View>
                                            </View>
                                            <View style={ExamMarksheetStyles.centerviewset}>
                                                <View style={ExamMarksheetStyles.dotsetviewTWO}>
                                                    <View style={ExamMarksheetStyles.reviluterdot}>
                                                        <VectorIcons
                                                            icon="EvilIcons"
                                                            size={SF(15)}
                                                            name="check"
                                                            style={ExamMarksheetStyles.iconstylebox}
                                                        />
                                                    </View>
                                                    <Text style={ExamMarksheetStyles.answerlastfontsize}>{t("Exam_question_7")}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={ExamMarksheetStyles.mcqminviewset}>
                                            <View style={ExamMarksheetStyles.whiteboxwhishlistmcq}>
                                                <View>
                                                    <View style={ExamMarksheetStyles.bgvolorsetphysic}>
                                                        <Text style={ExamMarksheetStyles.physistextset}>{t("Exam_question_8")}</Text>
                                                    </View>
                                                    <View style={ExamMarksheetStyles.container}>
                                                        <FlatList
                                                            data={GridListItems}
                                                            renderItem={({ item }) =>
                                                                <View style={ExamMarksheetStyles.widthsetround}>
                                                                    <View style={ExamMarksheetStyles.GridViewContainer}>
                                                                        <TouchableOpacity style={item.key < 18 ? ExamMarksheetStyles.bgvolosetdigitall : item.key < 20 ? ExamMarksheetStyles.bgvolosetdigitalltwo : item.key < 22 ? ExamMarksheetStyles.bgvolosetdigitallthree : ExamMarksheetStyles.bgvolosetdigitallfour}>
                                                                            <Text style={ExamMarksheetStyles.GridViewTextLayout} onPress={GetGridViewItem.bind(this, item.key)} > {item.key}
                                                                            </Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            }
                                                            numColumns={5}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
};

export default ExamMarkSheetNumberScreen;
