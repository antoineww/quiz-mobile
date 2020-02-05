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
  quizNotFoundIcon: {
    fontSize: Math.round(width * 0.2)
  },

  AppHeader: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    color: colorScheme.secondary,
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: Math.round(height * 0.03)
  },

  home: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  quiz: {
    backgroundColor: colorScheme.secondary,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: Math.round(width * 0.05),
    marginRight: Math.round(width * 0.05),
    minWidth: Math.round(width * 0.9),
    maxWidth: Math.round(width * 0.9)
  },

  results: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    color: colorScheme.secondary,
    fontWeight: "bold"
  },

  quizContent: {
    flex: 1,
    flexDirection: "column",
    marginTop: Math.round(height * 0.05)
    // justifyContent: "center",
    // alignItems: "center"
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
    justifyContent: "space-between",
    marginTop: Math.round(height * 0.1)
  },

  question: {
    marginTop: 0,
    marginBottom: 0
    // marginLeft: 1vw,
    // marginRight: 1vw,
  },

  booleanButtonsSection: {
    flexDirection: "row",
    justifyContent: "space-around"
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
