import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",

    fontSize: 32,
  },
});
export default InstructionText;
