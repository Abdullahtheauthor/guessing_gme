import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions(); // Thius hook is much better than using Dimensions.get("window").height as this hook will render each time the device rotates

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function confirmInputHandler() {
    // console.log("confriming");
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      //  console.log("nnnnnnnnnnnnnnnnn Number");
      Alert.alert("Invalid Number !", "Number must be between 0 and 99", [
        { text: "okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    console.log("Valid Number");
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const marginTopDistance = height < 914 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>

          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              on
              onChangeText={numberInputHandler}
            />

            {/* auto correct and autocaptialize used with text as it is good for user experience */}
            {/* maxLength dictates that the user only can input two digits */}
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const deviceHeight = Dimensions.get("window").height;
console.log("device height is " + deviceHeight);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 500 ? 30 : 100,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "black",
  },
  container: {
    // flex: 1, // Allows the container to take up available space
    justifyContent: "center", // Centers children vertically
    alignItems: "center", // Centers children horizontally
    padding: 16,
    marginTop: 50,
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
  numberInput: {
    // backgroundColor: '#f0ffff',
    borderBottomColor: "#ff8c00",
    borderBottomWidth: 4,
    // flex:1,
    // width: '100%''
    color: "#ff8c00",
    height: 60,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center", // make the writabletext in the middle

    // width:200
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 32,
  },
});

export default StartGameScreen;
