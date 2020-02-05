import { StyleSheet } from "react-native";
import textStyles from "./text";
import buttonStyles from "./button";
import otherStyles from "./otherStyles";

export const styles = StyleSheet.create({
  ...textStyles,
  ...buttonStyles,
  ...otherStyles
});

export default styles;
