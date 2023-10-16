import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import questions from '../../Components/QuizComponets/questions1.json'
import QuesAnsPair from '../../Components/QuizComponets/QuesAnsPair';
import { writeScore } from '../../Components/QuizComponets/scoreStorage';
import { Button, Container, AppHeader } from '../../Components';
import { Style, ExamQuestionStyle } from '../../style';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../routes';

const Quiz = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({})

  const { Colors } = useTheme();
  const ExamQuestionStyles = useMemo(() => ExamQuestionStyle(Colors), [Colors]);

  const handleQuizTraversal = () => {
    if (questionIndex === questions['questions'].length - 1) {
      writeScore(`${score} out of ${questions['questions'].length}`);
      props.navigation.navigate('Downloadcertyficate', { score: score });
      return
    }
    setQuestionIndex((questionIndex) => questionIndex + 1);
    setShowNext(true);
    console.log(questions['questions'].length, questionIndex)
  }
  const is_next = () => {
    setShowNext(true);
  }
  const get_Score = (score) => {
    setScore(score);
  }
  const getSelected = (selected) => {
    setSelected(selected);
  }

  return (
    <Container>
      <View style={ExamQuestionStyles.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.scrollviewstyles}>
          <View style={ExamQuestionStyles.keybordtopviewstyle}>
            <KeyboardAvoidingView enabled>
              <View style={ExamQuestionStyles.minviewsigninscreen}>
                <QuesAnsPair
                  question={questions['questions'][questionIndex]['questionText']}
                  answers={questions['questions'][questionIndex]['answers']}
                  is_next={is_next}
                  getScore={get_Score}
                  length={questions['questions'].length}
                  get_selected={getSelected}
                  index={questions['questions'][questionIndex]['index']}
                />
                <View style={ExamQuestionStyles.buttonflexminview}>
                  <View style={ExamQuestionStyles.submitbuttonstyleset}>
                    {
                      showNext && questionIndex > 0 || (selected[questionIndex] !== undefined && questionIndex > 0) ?
                        <Button onPress={() => setQuestionIndex((index) => index - 1)} title={t("photography_Titles_26")} />
                        : null
                    }
                  </View>
                  <View style={ExamQuestionStyles.submitbuttonstyleset}>
                    <Button onPress={handleQuizTraversal} title={questionIndex === questions['questions'].length - 1 ? 'end ' : t("photography_Titles_27")} />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
export default Quiz;