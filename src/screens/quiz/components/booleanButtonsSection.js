import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import strings from "./../../../resources/strings"
import { ANSWER_TYPES } from "./../../../resources/constants"
import { applyAnswer } from "./../helpers"
import globalStyles from "../../../globalStyles"

export const BooleanButtonsSection = ({
  stateQuiz,
  setStateQuiz,
  questionCurrentIndex,
  questionsWithAnswers,
  currentQuestion,
}) => {
  let section = null

  // Only boolean available
  const questionTypeFound = ANSWER_TYPES[currentQuestion.type]

  if (questionTypeFound) {
    const answerQuestion = (attempted_answer) =>
      applyAnswer(
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        attempted_answer
      )

    const trueButton = (
      <TouchableOpacity
        style={globalStyles.btnTrue}
        onPress={() => answerQuestion(ANSWER_TYPES.boolean.True)}
      >
        <Text style={globalStyles.textBtn}>{strings.quiz_true}</Text>
      </TouchableOpacity>
    )

    const falseButton = (
      <TouchableOpacity
        style={globalStyles.btnFalse}
        onPress={() => answerQuestion(ANSWER_TYPES.boolean.False)}
      >
        <Text style={globalStyles.textBtn}>{strings.quiz_false}</Text>
      </TouchableOpacity>
    )

    section = (
      <View style={globalStyles.booleanButtonsSection}>
        {trueButton}
        {falseButton}
      </View>
    )
  }

  return section
}
