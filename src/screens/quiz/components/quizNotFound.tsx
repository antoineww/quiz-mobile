import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import strings from "./../../../constants/strings"
import globalStyles from "../../../constants/globalStyles"

export const QuizNotFound = () => (
  <View style={globalStyles.quizNotFound}>
    <Icon name="broadcast-tower" style={globalStyles.quizNotFoundIcon} />
    <Text style={globalStyles.text2}>{strings.quiz_not_found}</Text>
  </View>
)
