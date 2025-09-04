import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function LogRounds({ item }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>1</Text>
      <Text> {item} </Text>
    </View>
  );
}
export default LogRounds;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    padding: 12,
    borderColor: "blue",
    borderRadius: 40,
    marginVertical: 8,
    justifyContent: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
