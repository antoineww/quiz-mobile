import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import * as Animatable from "react-native-animatable"
import strings from "./../resources/strings"
import { loadQuiz } from "../helpers/navigationHooks"
import globalStyles from "../globalStyles"

export const LoaderIcon = (props = {}) => {
  const { style, ...restOfProps } = props

  return (
    <Animatable.View
      animation={{
        from: {
          rotate: "0deg",
        },
        to: {
          rotate: "360deg",
        },
      }}
      duration={2000}
      easing="linear"
      iterationCount="infinite"
      {...restOfProps}
    >
      <Icon name="atom" style={[globalStyles.loaderLogo, style]} />
    </Animatable.View>
  )
}
export const LoadingButton = (props = {}) => (
  <TouchableOpacity style={[globalStyles.btnLoading]}>
    <LoaderIcon />
    <Text style={globalStyles.textBtnLoading}>{strings.home_loading}</Text>
    <LoaderIcon />
  </TouchableOpacity>
)

export const BeginButton = (props = {}) => (
  <TouchableOpacity style={globalStyles.btn} {...props}>
    <Text style={globalStyles.textBtn}>{strings.home_begin}</Text>
  </TouchableOpacity>
)

const Home = (props = {}) => {
  const {
    setStateQuiz,
    progress: { gettingQuestions },
  } = props

  return (
    <View style={[globalStyles.container, globalStyles.home]}>
      <Text style={globalStyles.textHeader}>{strings.home_header}</Text>
      <LoaderIcon duration={20000} style={globalStyles.appLogo} />
      <View>
        <Text style={globalStyles.textHeader}>
          {strings.home_description_p1}
        </Text>
        <Text style={globalStyles.textHeader}>
          {strings.home_description_p2}
        </Text>
      </View>
      <Text style={globalStyles.textHeader}>{strings.home_challenge}</Text>

      {gettingQuestions ? (
        <LoadingButton />
      ) : (
        <BeginButton onPress={() => loadQuiz(setStateQuiz, true)} />
      )}
    </View>
  )
}

export default Home
