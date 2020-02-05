import { StyleSheet } from "react-native";

export const colorScheme = {
  primary: "#282c34",
  secondary: "#ffffff",
  buttonPrimary: "#61dafb",
  buttonTrue: "#cdfb61",
  buttonFalse: "#fbc261"
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colorScheme.primary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"

    // min-height: 100vh,
    // fontSize: calc(10px + 2vmin),
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

  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",

    fontWeight: 500,
    // fontSize: 15em,
    fontWeight: "bold",

    color: colorScheme.primary,

    // paddingTop: 3vh ,
    // paddingBottom: 5vh ,
    // paddingLeft: 3vh,
    // paddingRight: 5vh,

    backgroundColor: colorScheme.buttonPrimary,
    borderRadius: 300
  },

  btnLoading: {
    borderColor: colorScheme.buttonPrimary,
    backgroundColor: colorScheme.primary,
    color: colorScheme.buttonPrimary
  },

  btnTrue: {
    backgroundColor: colorScheme.buttonTrue,
    borderRadius: 5

    // paddingTop: 5vh ,
    // paddingBottom: 5vh ,
    // paddingLeft: 10vw,
    // paddingRight: 10vw,
  },

  btnFalse: {
    backgroundColor: colorScheme.buttonFalse,
    borderRadius: 5

    // paddingTop: 5vh ,
    // paddingBottom: 5vh ,
    // paddingLeft: 10vw,
    // paddingRight: 10vw,
  },

  resultTrue: {
    color: colorScheme.buttonTrue
  },

  resultFalse: {
    color: colorScheme.buttonFalse
  },

  btnExit: {
    color: colorScheme.buttonPrimary,
    backgroundColor: colorScheme.primary
  }
});

export default styles;
