import React from "react";
import { View, Text } from "react-native";
import { getQuizProgess } from "../../../helpers/common";
import { BooleanButtonsSection } from "./booleanButtonsSection";
import { QuizNotFound } from "./quizNotFound";
import globalStyles from "../../../globalStyles";

export const QuizContent = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;

  if (!Array.isArray(questionsWithAnswers) || questionsWithAnswers.length < 1)
    return <QuizNotFound />;

  const currentQuestion = questionsWithAnswers[questionCurrentIndex];

  const booleanButtonsSection = (
    <BooleanButtonsSection
      {...{
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        currentQuestion
      }}
    />
  );

  const quizProgress = getQuizProgess(
    questionCurrentIndex,
    questionsWithAnswers
  );

  return (
    <View style={globalStyles.quizContent}>
      <Text
        style={[globalStyles.textHeader, { color: globalStyles.text2.color }]}
      >
        {currentQuestion.category}
      </Text>
      <View style={globalStyles.box}>
        <Text
          style={[
            globalStyles.textHeader,
            globalStyles.textQuestion,
            { color: globalStyles.text2.color }
          ]}
        >
          {currentQuestion.question}
        </Text>
        {booleanButtonsSection}
      </View>
      <Text style={[globalStyles.text2, globalStyles.textProgress]}>
        {quizProgress}
      </Text>
    </View>
  );
};
