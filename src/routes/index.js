import React from "react";
import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "./../redux/actions";
import ScreenRouter from "./screenRouter";
import globalStyles from "../globalStyles";

const Routes = (props = {}) => {
  return (
    <View style={globalStyles.root}>
      <ScreenRouter {...props} />
    </View>
  );
};

export default connect(
  state => {
    const {
      app: { questionsWithAnswers },
      progress: { gettingQuestions }
    } = state;

    return {
      app: { questionsWithAnswers },
      progress: { gettingQuestions }
    };
  },
  dispatch => ({
    actionsGroup: bindActionCreators(
      {
        getQuestionsAction: actions.getQuestionsAction
      },
      dispatch
    )
  })
)(Routes);
