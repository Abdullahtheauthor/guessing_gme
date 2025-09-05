import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.textStyle}> {children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width; // scren or window, window wxcludes the status bar in Android
const styles = StyleSheet.create({
  outerContainer: {
    borderColor: Colors.accent500,
    borderWidth: 5,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    padding: 24,
    // fontWeight: "bold"
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
