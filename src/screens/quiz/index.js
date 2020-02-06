import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import strings from "./../../resources/strings";

import { onQuestionAnswered } from "./helpers";
import { quitQuiz } from "../../helpers/navigationHooks";
import { QuizContent } from "./components";
import globalStyles from "../../globalStyles";

const Quiz = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;
  const { goToQuestion } = stateQuiz;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => onQuestionAnswered(stateQuiz, setStateQuiz), [goToQuestion]);
  /* eslint-enable */

  return (
    <View style={[globalStyles.container, globalStyles.quiz]}>
      <QuizContent {...props} />
      <View style={globalStyles.footer}>
        <TouchableOpacity
          style={[
            globalStyles.btn,
            globalStyles.btnExit,
            ,
            globalStyles.btnSlim,
            { borderWidth: 0 }
          ]}
          onPress={() => quitQuiz(stateQuiz, setStateQuiz)}
        >
          <Text
            style={[
              globalStyles.textBtnExit,
              { fontSize: globalStyles.text.fontSize }
            ]}
          >
            {strings.quiz_quit}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;
