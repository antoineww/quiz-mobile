import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import strings from "./../../resources/strings";

import { onQuestionAnswered } from "./helpers";
import { quitQuiz } from "../../helpers/navigationHooks";
import { QuizContent } from "./components";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const { goToQuestion } = stateQuiz;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => onQuestionAnswered(stateQuiz, setStateQuiz), [goToQuestion]);
  /* eslint-enable */

  return (
    <View className="container quiz">
      <QuizContent {...props} />
      <View className="footer">
        <TouchableOpacity
          className="btn btn-exit"
          onPress={() => quitQuiz(stateQuiz, setStateQuiz)}
        >
          {strings.quiz_quit}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;
