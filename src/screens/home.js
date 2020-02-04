import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import strings from "./../resources/strings";
import { loadQuiz } from "../helpers/navigationHooks";

export const LoadingButton = (props = {}) => (
  <TouchableOpacity className="btn btn-loading">
    {/* <img src="logo.svg" alt="logo" className="loader-logo" /> */}
    {strings.home_loading}
    {/* <img src="logo.svg" alt="logo" className="loader-logo" /> */}
  </TouchableOpacity>
);

export const BeginButton = (props = {}) => (
  <TouchableOpacity className="btn" {...props}>
    {strings.home_begin}
  </TouchableOpacity>
);

const Home = (props = {}) => {
  const {
    setStateQuiz,
    progress: { gettingQuestions }
  } = props;

  return (
    <View className="App-header">
      <Text>{strings.home_header}</Text>
      {/* <img src="logo.svg" alt="logo" className="App-logo" /> */}
      <Text>
        {strings.home_description_p1} <br /> {strings.home_description_p2}
      </Text>
      <Text>{strings.home_challenge}</Text>

      {gettingQuestions ? (
        <LoadingButton />
      ) : (
        <BeginButton onClick={() => loadQuiz(setStateQuiz, true)} />
      )}
    </View>
  );
};

export default Home;
