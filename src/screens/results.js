import React from "react";
import strings from "./../resources/strings";
import { FaPlus, FaMinus, FaCircle } from "react-icons/fa";
import { getQuizScore } from "./../helpers/common";
import { beginQuiz, exitQuiz } from "../helpers/navigationHooks";

const getScoreSymbol = is_correct => {
  switch (is_correct) {
    case true:
      return <FaPlus />;
    case false:
      return <FaMinus />;
    default:
      return <FaCircle />;
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
      <View className="resultAnswer">{questionWithAnswer.question}</View>
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
          onClick={() => beginQuiz(setStateQuiz)}
        >
          {strings.results_try_again}
        </TouchableOpacity>
        <TouchableOpacity
          className="btn btn-exit"
          onClick={() => exitQuiz(setStateQuiz)}
        >
          {strings.results_play_again}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;
