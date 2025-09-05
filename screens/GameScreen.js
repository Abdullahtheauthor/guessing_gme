// function GameScreen(){
// return(
//     <Text>Hello</Text>
// )
// }

// export default GameScreen;
import {
  View,
  StyleSheet,
  Alert,
  Text,
  Item,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/ui/InstructionText";

// expo
import Ionicons from "@expo/vector-icons/Ionicons";
import LogRounds from "../components/ui/LogRounds";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNum, isGameOver }) {
  const intialGuess = createRandomNumber(1, 100, userNum);

  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessRounds, setguessRounds] = useState([intialGuess]);

  useEffect(() => {
    if (currentGuess === userNum) {
      // setCurrentGuess(currentGuess);
      isGameOver(currentGuess, guessRounds.length);
    }
  }, [currentGuess, userNum, isGameOver]);

  useEffect(() => {
    minBoundary = 0;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // lower or higher
    if (currentGuess === userNum) {
      console.log("Guessed correctly! pc wins");
      return;
    }
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "higher" && currentGuess > userNum)
    ) {
      Alert.alert("Busted!", "You are cheating", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const nextGuess = createRandomNumber(
      minBoundary,
      maxBoundary,

      currentGuess
    );
    setCurrentGuess(nextGuess);
    setguessRounds((prevGuessRounds) => [nextGuess, ...prevGuessRounds]);
  }

  function createRandomNumber(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber === exclude) {
      return createRandomNumber(min, max, exclude);
    }
    return rndNumber;
  }

  return (
    // // <LinearGradient colors={[Colors.primary500,Colors.accent500]}
    // style={styles.container}
    // >

    <View style={styles.container}>
      <Title>Opponnent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.innerContainer}>
          <InstructionText style={styles.instructionText}>
            Higher or Lower
          </InstructionText>
          <View style={styles.butonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPress={nextGuessHandler.bind(this, "higher")}
                ripple_color={"blue"}
              >
                <Ionicons name="add-sharp" size={24} color="blue" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPress={nextGuessHandler.bind(this, "lower")}
                ripple_color={"red"}
              >
                <Ionicons name="remove-circle" size={24} color="pink" />
              </PrimaryButton>
            </View>
          </View>
          {/* <Ionicons name="checkmark-circle" size={32} color="green" /> */}
        </View>

        {/* <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton> */}
      </Card>

      <View>
        <Title>Guesses</Title>
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => <LogRounds item={item}></LogRounds>}
          keyExtractor={(item) => item}
        />

        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
      </View>
    </View>

    // </LinearGradient>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 200,
    // backgroundColor: "white",
    borderColor: "black",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: 28,
    padding: 15,
    // width:300
    // flexDirection: 'row',
  },
  instructionText: {
    marginBottom: 20,
  },
  innerContainer: {
    // margin: 10,
    padding: 10,
    // backgroundColor: "green",
    // flex: 1,
  },
  butonsContainer: {
    // flex: 1,
    // width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    // width: 200,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  outerContainer: {
    borderColor: Colors.accent500,
    borderWidth: 5,
    padding: 24,
    margin: 12,
    borderRadius: 15,
  },
  textStyle: {
    color: Colors.accent500,
    textAlign: "center",
    fontSize: 17,
    padding: 24,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    // backgroundColor: "white",
  },
});

export default GameScreen;

// useEffect

// Once a new game starts

// we will need to reset the min and max boundary.

// Now I'm managing these values as regular variables

// outside of the component function

// because they actually should be independent

// from the component function.

// When the component function is re-executed,

// those variables

// shouldn't be reset back to their initial values

// all the time.

// That's why I manage them outside of the component function.

// But I do want to reset them

// if a new game started

// To achieve this,

// we can again use use effect in the game screen component.

// There I have an effect which I wanna execute

// whenever this game screen component

// is rendered for the first the time.

// So whenever it was not part of the rendered user interface

// and now became part of the interface.

// And this can be achieved by

// adding an empty array of dependencies to use effect.

// Then this effect function will only execute

// the first time this component is evaluated.

// And then if it is removed from the UI and re added later,

// this will execute again

// but it will not execute

// If this component was already on the UI

// and now just updated

// because for example a new guess was made.
