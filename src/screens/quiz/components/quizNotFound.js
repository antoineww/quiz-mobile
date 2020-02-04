import React from "react";
import { FaBroadcastTower } from "react-icons/fa";
import strings from "./../../../resources/strings";

export const QuizNotFound = () => (
  <View className="quiz-not-found">
    <FaBroadcastTower /> <Text>{strings.quiz_not_found}</Text>
  </View>
);
