import { StyleSheet } from "react-native"
import textStyles from "./text"
import buttonStyles from "./button"
import otherStyles from "./otherStyles"
import _colorScheme from "./colorScheme"

export const colorScheme = _colorScheme

export const styles = StyleSheet.create({
  ...textStyles,
  ...buttonStyles,
  ...otherStyles,
})

export default styles
