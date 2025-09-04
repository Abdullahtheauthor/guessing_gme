import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { View, Image } from "react-native";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
function GameOver({ guess, onRestart, numberOfTrials }) {
  console.log(guess);
  function pressHandler() {
    onRestart(true);
  }

  return (
    <View style={styles.rootScreen}>
      <Title>Game is over!</Title>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={pressHandler} ripple_color="red">
          Play Again!
        </PrimaryButton>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        your chosen number is <Text style={styles.highlightText}>{guess} </Text>{" "}
        and it took pc to{" "}
        <Text style={styles.highlightText}>{numberOfTrials} </Text>
        number of rounds
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 24,
  },
  textContainer: {
    margin: 50,
    color: Colors.accent500,
    fontSize: 15,
    fontFamily: "open-sans",
  },
  buttonContainer: {
    margin: 20,
  },
  imageContainer: {
    // marginTop: 20,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
    // marginLeft: 60,
  },
  image: {
    width: "100%",
    height: "100%",
    // margin: 20,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 26,
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOver;
