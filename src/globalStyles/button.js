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
    backgroundColor: colorScheme.buttonTrue,
    borderRadius: 5

    // paddingTop: 5vh ,
    // paddingBottom: 5vh ,
    // paddingLeft: 10vw,
    // paddingRight: 10vw,
  },

  btnFalse: {
    ...btn,
    backgroundColor: colorScheme.buttonFalse,
    borderRadius: 5

    // paddingTop: 5vh ,
    // paddingBottom: 5vh ,
    // paddingLeft: 10vw,
    // paddingRight: 10vw,
  },

  btnExit: {
    ...btn,
    color: colorScheme.buttonPrimary,
    backgroundColor: colorScheme.primary
  }
};

export default btnStyles;
