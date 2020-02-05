import colorScheme from "./colorScheme";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window"); // Only use here in a fixed Orientation

const textRatioIncrease = Math.round(width * 0.02);

const text = {
  fontSize: 10 + textRatioIncrease,
  textAlign: "center",
  color: colorScheme.secondary,
  fontWeight: "bold"
};

const textBtn = {
  ...text,
  fontSize: text.fontSize * 2,
  color: colorScheme.primary
};

export const textStyles = {
  text,
  textSubHeader: {
    ...text,
    fontSize: 14 + textRatioIncrease
  },
  textHeader: {
    ...text,
    fontSize: 20 + textRatioIncrease
  },
  textBtnLoading: {
    ...textBtn,
    color: colorScheme.buttonPrimary
  }
};

export default textStyles;
