import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    // backgroundColor: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 30,
    // flex:1,
    // fontSize: 10,
    color: "white",
    // margin: 10
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    width: 300,
    maxWidth: "80%",
  },
});

export default Title;
