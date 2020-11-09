import colorScheme from "./colorScheme"
import { Dimensions } from "react-native"
const { height, width } = Dimensions.get("window") // Only use here in a fixed Orientation

const textRatioIncrease = Math.round(width * 0.02)

const text = {
  fontSize: 10 + textRatioIncrease,
  textAlign: "center",
  color: colorScheme.secondary,
  fontWeight: "bold",
}

const text2 = {
  ...text,
  color: colorScheme.primary,
}

const textBtn = {
  ...text,
  fontSize: text.fontSize * 2,
  color: colorScheme.primary,
}

export const textStyles = {
  text,
  text2,
  textBtn,
  textSubHeader: {
    ...text,
    fontSize: 14 + textRatioIncrease,
  },
  textHeader: {
    ...text,
    fontSize: 20 + textRatioIncrease,
  },

  textQuestion: {
    marginLeft: Math.round(width * 0.05),
    marginRight: Math.round(width * 0.05),
  },

  textProgress: {
    marginTop: Math.round(height * 0.02),
    marginBottom: Math.round(height * 0.01),
  },

  textBtnLoading: {
    ...textBtn,
    color: colorScheme.buttonPrimary,
  },
  textBtnExit: {
    ...textBtn,
    fontSize: Math.round(text.fontSize * 1.5),
    color: colorScheme.buttonPrimary,
  },
  textResultsListItem: {
    ...text,
    textAlign: "left",

    marginTop: Math.round(height * 0.01),
    marginBottom: Math.round(height * 0.01),
    marginLeft: Math.round(width * 0.05),
    marginRight: Math.round(width * 0.05),
  },
}

export default textStyles
