import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import strings from "./../../../resources/strings";
import { ANSWER_TYPES } from "./../../../resources/constants";
import { applyAnswer } from "./../helpers";

export const BooleanButtonsSection = ({
  stateQuiz,
  setStateQuiz,
  questionCurrentIndex,
  questionsWithAnswers,
  currentQuestion
}) => {
  let section = null;

  // Only boolean available
  const questionTypeFound = ANSWER_TYPES[currentQuestion.type];

  if (questionTypeFound) {
    const answerQuestion = attempted_answer =>
      applyAnswer(
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        attempted_answer
      );

    const trueButton = (
      <TouchableOpacity
        className="btn btn-true"
        onPress={() => answerQuestion(ANSWER_TYPES.boolean.True)}
      >
        <Text>{strings.quiz_true}</Text>
      </TouchableOpacity>
    );

    const falseButton = (
      <TouchableOpacity
        className="btn btn-false"
        onPress={() => answerQuestion(ANSWER_TYPES.boolean.False)}
      >
        <Text>{strings.quiz_false}</Text>
      </TouchableOpacity>
    );

    section = (
      <View className="boolean-buttons-section">
        {trueButton}
        {falseButton}
      </View>
    );
  }

  return section;
};
