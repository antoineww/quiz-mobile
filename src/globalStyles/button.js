import colorScheme from "./colorScheme";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window"); // Only use here in a fixed Orientation

const btn = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontWeight: "bold",

  paddingTop: Math.round(height * 0.03),
  paddingBottom: Math.round(height * 0.03),
  paddingLeft: Math.round(width * 0.05),
  paddingRight: Math.round(width * 0.05),

  backgroundColor: colorScheme.buttonPrimary,
  borderRadius: 300
};

const answerButton = {
  borderRadius: 5,

  paddingTop: Math.round(height * 0.05),
  paddingBottom: Math.round(height * 0.05),
  paddingLeft: Math.round(width * 0.1),
  paddingRight: Math.round(width * 0.1)
};

export const btnStyles = {
  btn,

  btnLoading: {
    ...btn,
    borderWidth: 1,
    borderColor: colorScheme.buttonPrimary,
    backgroundColor: colorScheme.primary
  },

  btnTrue: {
    ...btn,
    ...answerButton,
    backgroundColor: colorScheme.buttonTrue
  },

  btnFalse: {
    ...btn,
    ...answerButton,
    backgroundColor: colorScheme.buttonFalse
  },

  btnExit: {
    ...btn,
    backgroundColor: colorScheme.primary,

    paddingTop: 5,
    paddingBottom: 5
  }
};

export default btnStyles;
