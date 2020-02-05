import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import strings from "./../../../resources/strings";

export const QuizNotFound = () => (
  <View className="quiz-not-found">
    <Icon name="broadcast-tower" />
    <Text>{strings.quiz_not_found}</Text>
  </View>
);
