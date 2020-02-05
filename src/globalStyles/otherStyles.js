import colorScheme from "./colorScheme";
import textStyles from "./text";
import buttonStyles from "./button";

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

  App: {
    textAlign: "center"
  },

  AppLogo: {
    //   animation: App-logo-spin infinite 20s linear,
    //   height: 40vmin,
    //   pointer-events: none,
  },

  loaderLogo: {
    // animation: App-logo-spin infinite 5s linear,
    // height: 4vmin,
    // pointer-events: none,
    color: colorScheme.primary
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
