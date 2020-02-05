import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import strings from "./../../../resources/strings";
import globalStyles from "../../../globalStyles";

export const QuizNotFound = () => (
  <View style={globalStyles.quizNotFound}>
    <Icon name="broadcast-tower" style={globalStyles.quizNotFoundIcon} />
    <Text style={globalStyles.text2}>{strings.quiz_not_found}</Text>
  </View>
);
