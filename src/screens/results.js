import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import strings from "./../resources/strings";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getQuizScore } from "./../helpers/common";
import { beginQuiz, exitQuiz } from "../helpers/navigationHooks";

const getScoreSymbol = is_correct => {
  switch (is_correct) {
    case true:
      return <Icon name="plus" />;
    case false:
      return <Icon name="minus" />;
    default:
      return <Icon name="circle" />;
  }
};

const getScoreClass = is_correct => {
  switch (is_correct) {
    case true:
      return "result-true";
    case false:
      return "result-false";
    default:
      return "";
  }
};

const Results = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const { questionsWithAnswers } = stateQuiz;

  const { fraction, percentage } = getQuizScore(questionsWithAnswers);
  const header = percentage ? `${strings.results_header} ${percentage} %` : "";
  const resultItems = questionsWithAnswers.map((questionWithAnswer, index) => (
    <View
      key={`resultItem${index}`}
      className={`listItem ${getScoreClass(questionWithAnswer.is_correct)}`}
    >
      <View className="resultIcon">
        {getScoreSymbol(questionWithAnswer.is_correct)}
      </View>
      <Text className="resultAnswer">{questionWithAnswer.question}</Text>
    </View>
  ));

  return (
    <View className="container results">
      <Text>{header}</Text>
      <Text>{fraction}</Text>
      <View id="list">{resultItems}</View>
      <View className="footer">
        <TouchableOpacity
          className="btn"
          onPress={() => beginQuiz(setStateQuiz)}
        >
          <Text>{strings.results_try_again}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="btn btn-exit"
          onPress={() => exitQuiz(setStateQuiz)}
        >
          <Text>{strings.results_play_again}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;
