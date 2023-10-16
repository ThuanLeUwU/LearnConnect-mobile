import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { Button, Container } from '../../Components';
import { Style, ExamResultsStyle } from "../../style";

const ExamResultsScreen = (props) => {
    const { navigation } = props;
    const { Colors } = useTheme();
    const ExamResultsStyles = useMemo(() => ExamResultsStyle(Colors), [Colors]);

    return (
        <Container>
            <View style={ExamResultsStyles.minstyleviewphotograpgy}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.scrollviewstyles}>
                    <KeyboardAvoidingView enabled>
                        <View style={ExamResultsStyles.keybordtopviewstyle}>
                            <View style={ExamResultsStyles.minflexview}>
                                <View style={ExamResultsStyles.minviewsigninscreen}>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Exam name</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Sample exam 004</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Started at</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Thu,Apr 30,2020 10:42:42 AM</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Ended at</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Thu,Apr 30,2020 7:44:21 PM</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Total number of answer</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}><Text style={ExamResultsStyles.textcolorchengeset}>62</Text> / 62</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Total Time</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}><Text style={ExamResultsStyles.textcolorchengeset}>317:25</Text> / 295:57</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Average answer time</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}><Text style={ExamResultsStyles.textcolorchengeset}>0:5:07</Text> / 23:03</Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.examresultsview}>
                                        <View style={ExamResultsStyles.widthsettext}>
                                            <Text style={ExamResultsStyles.alltextstyle}>Accuracy rate</Text>
                                        </View>
                                        <View style={ExamResultsStyles.widthsetrighttext}>
                                            <Text style={ExamResultsStyles.alltextstyle}><Text style={ExamResultsStyles.textcolorchengeset}>43.55%</Text></Text>
                                        </View>
                                    </View>
                                    <View style={ExamResultsStyles.accountbutton}>
                                        <Button title="Check answers"
                                            onPress={() => navigation.navigate('ExamMarkSheetNumberScreen')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </Container>
    );
};

export default ExamResultsScreen;
