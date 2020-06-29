import React from "react"
import { View, FlatList, Text, TouchableOpacity } from "react-native"
import strings from "./../resources/strings"
import Icon from "react-native-vector-icons/FontAwesome5"

import { getQuizScore } from "./../helpers/common"
import { beginQuiz, exitQuiz } from "../helpers/navigationHooks"
import globalStyles, { colorScheme } from "../globalStyles"

const getScoreSymbol = (is_correct) => {
  switch (is_correct) {
    case true:
      return (
        <Icon
          name="plus"
          style={[globalStyles.text, globalStyles.resultTrue]}
        />
      )
    case false:
      return (
        <Icon
          name="minus"
          style={[globalStyles.text, globalStyles.resultFalse]}
        />
      )
    default:
      return <Icon name="circle" style={[globalStyles.text]} />
  }
}

const getScoreClass = (is_correct) => {
  switch (is_correct) {
    case true:
      return "resultTrue"
    case false:
      return "resultFalse"
    default:
      return ""
  }
}

const renderItem = ({ item: questionWithAnswer, index }) => (
  <View style={[globalStyles.listItem]}>
    <View style={globalStyles.resultIcon}>
      {getScoreSymbol(questionWithAnswer.is_correct)}
    </View>
    <Text
      style={[
        globalStyles.textResultsListItem,
        globalStyles[getScoreClass(questionWithAnswer.is_correct)],
      ]}
    >
      {questionWithAnswer.question}
    </Text>
  </View>
)

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props
  const { questionsWithAnswers } = stateQuiz

  const { fraction, percentage } = getQuizScore(questionsWithAnswers)
  const header =
    typeof percentage === "number"
      ? `${strings.results_header} ${percentage} %`
      : ""

  const resultItems = (
    <FlatList
      style={globalStyles.resultItems}
      data={questionsWithAnswers}
      renderItem={renderItem}
      keyExtractor={(item, index) => `resultItem${index}`}
    />
  )

  return (
    <View style={[globalStyles.container, globalStyles.results]}>
      <Text style={globalStyles.textHeader}>{header}</Text>
      <Text style={globalStyles.textHeader}>{fraction}</Text>
      <View id="list">{resultItems}</View>
      <View style={globalStyles.resultFooter}>
        <TouchableOpacity
          style={[globalStyles.btn, globalStyles.btnSlim]}
          onPress={() => beginQuiz(setStateQuiz)}
        >
          <Text
            style={[
              globalStyles.textBtn,
              { fontSize: globalStyles.text.fontSize },
            ]}
          >
            {strings.results_try_again}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.btn, globalStyles.btnExit, globalStyles.btnSlim]}
          onPress={() => exitQuiz(setStateQuiz)}
        >
          <Text
            style={[
              globalStyles.textBtnExit,
              { fontSize: globalStyles.text.fontSize },
            ]}
          >
            {strings.results_play_again}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Results
