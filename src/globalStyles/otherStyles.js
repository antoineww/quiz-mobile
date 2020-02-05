import colorScheme from "./colorScheme";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window"); // Only use here in a fixed Orientation

export const styles = {
  root: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  home: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  loaderLogo: {
    // animation: App-logo-spin infinite 5s linear,
    // height: 4vmin,
    // pointer-events: none,
    fontSize: Math.round(width * 0.1),
    color: colorScheme.buttonPrimary,

    paddingLeft: Math.round(width * 0.02),
    paddingRight: Math.round(width * 0.02)
  },

  appLogo: {
    fontSize: Math.round(width * 0.5)
  },

  AppLink: {
    color: colorScheme.buttonPrimary
  },

  AppHeader: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    color: colorScheme.secondary,
    fontWeight: "bold"
  },
  results: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    color: colorScheme.secondary,
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    flexDirection: "column"
    // "padding-bottom": 5vh,
  },

  quiz: {
    backgroundColor: colorScheme.secondary,
    marginTop: 0,
    marginBottom: 0
    // marginLeft: 10vw,
    // marginRight: 10vw,
    // min-width: 80vw,
    // max-width: 80vw,
  },

  quizContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  quizNotFound: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  box: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  question: {
    marginTop: 0,
    marginBottom: 0
    // marginLeft: 1vw,
    // marginRight: 1vw,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  list: {
    paddingTop: 0,
    paddingBottom: 0
    // paddingLeft: 5vw,
    // paddingRight: 5vw,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center"
    // paddingBottom: 5vh,
    // fontSize: calc(18px + 2vmin),
  },

  resultsListItem: {
    textAlign: "left",
    flexDirection: "row"
  },

  resultIcon: {
    // min-width: 8vw,
  },

  resultTrue: {
    color: colorScheme.buttonTrue
  },

  resultFalse: {
    color: colorScheme.buttonFalse
  }
};

export default styles;
