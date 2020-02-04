import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import strings from "./../resources/strings";
import { loadQuiz } from "../helpers/navigationHooks";

export const LoadingButton = (props = {}) => (
  <TouchableOpacity className="btn btn-loading">
    {/* <img src="logo.svg" alt="logo" className="loader-logo" /> */}
    <Text>{strings.home_loading}</Text>
    {/* <img src="logo.svg" alt="logo" className="loader-logo" /> */}
  </TouchableOpacity>
);

export const BeginButton = (props = {}) => (
  <TouchableOpacity className="btn" {...props}>
    <Text>{strings.home_begin}</Text>
  </TouchableOpacity>
);

const Home = (props = {}) => {
  const {
    setStateQuiz,
    progress: { gettingQuestions }
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>{strings.home_header}</Text>
      {/* <img src="logo.svg" alt="logo" className="App-logo" /> */}
      <Text>{strings.home_description_p1}</Text>
      <Text>{strings.home_description_p2}</Text>
      <Text>{strings.home_challenge}</Text>

      {gettingQuestions ? (
        <LoadingButton />
      ) : (
        <BeginButton onPress={() => loadQuiz(setStateQuiz, true)} />
      )}
    </View>
  );
};

export default Home;
