import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    // flex: 1, // Allows the container to take up available space
    justifyContent: "center", // Centers children vertically
    alignItems: "center", // Centers children horizontally
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 20, // Android property for shadowing
    // next are ios properties for shadwoing
    shadowColor: "balck",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // borderColor: 'white',
    backgroundColor: Colors.primary500,
    // textAlign: "center"
  },
});
export default Card;
