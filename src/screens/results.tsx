import React from "react"
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { PieChart } from "react-native-chart-kit"

import strings from "./../constants/strings"

import { getQuizScore } from "../helpers/common"
import { beginQuiz, exitQuiz } from "../helpers/navigationHooks"
import globalStyles, { colorScheme } from "../constants/globalStyles"
import { ANSWER_TYPES, QuestionFormat } from "../constants/constants"

const getScoreSymbol: React.FC<QuestionFormat> = (questionWithAnswer) => {
  const { is_correct, correct_answer } = questionWithAnswer
  const props = {
    style: {
      ...globalStyles.text,

      ...globalStyles[getScoreClass(questionWithAnswer)],
    },
  }

  switch (correct_answer) {
    case ANSWER_TYPES.boolean.True:
      return <Icon name="plus" {...props} />
    case ANSWER_TYPES.boolean.False:
      return <Icon name="minus" {...props} />
    default:
      return <Icon name="circle" style={[globalStyles.text]} />
  }
}

const getScoreClass: React.FC<QuestionFormat> = ({
  is_correct,
  correct_answer,
}) => {
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
      {getScoreSymbol(questionWithAnswer)}
    </View>
    <Text
      style={[
        globalStyles.textResultsListItem,
        globalStyles[getScoreClass(questionWithAnswer)],
      ]}
    >
      {questionWithAnswer.question}
    </Text>
  </View>
)

const ResultsChart = ({ counts }) => {
  const { correct, incorrect, unanswered } = counts
  const data = [
    {
      name: "Correct",
      population: correct,
      color: colorScheme.buttonTrue,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Incorrect",
      population: incorrect,
      color: colorScheme.buttonFalse,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ]

  if (unanswered > 0)
    data.push({
      name: "Unanswered",
      population: unanswered,
      color: "#7F7F7F",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    })
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }

  return (
    <PieChart
      data={data}
      width={Math.round(Dimensions.get("window").width * 0.8)}
      height={Math.round(Dimensions.get("window").height * 0.2)}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  )
}

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props
  const { questionsWithAnswers } = stateQuiz

  const { fraction, percentage, counts } = getQuizScore(questionsWithAnswers)
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

      <ResultsChart counts={counts} />

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
