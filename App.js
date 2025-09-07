// packages installed
// npx expo install expo-font
// npx expo install expo-app-loading    // to load a screen while fonts are istalled
// must be i the root app compoent
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [guess, setGuess] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [onRestart, setOnRestart] = useState(false);
  const [rounds, setRounds] = useState(0);
  //   Now to find out if we are still loading, useFunds, thankfully returns an array, where the first element
  // which we can extract with array destructuring, as we did it for useState,where the first element is actually a boolean,
  // that indicates whether the fonts have been loaded yet or not. So we can now use this boolean to render our app loading component,
  // which will then show the splash screen until the fonts have been loaded. So here I'll check if not fonts loaded,
  // so if we are still loading, and in that case, I will return AppLaoding like this. So in that case, I will show the splash screen,
  // and once the fonts have been loaded the component will be re-executed, and then we will not show the splash screen anymore.
  const [useFont] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!useFont) {
    return <AppLoading />;
  }
  function pickedNumberHandler(userNumber) {
    setPickedNumber(userNumber);
    setGameOver(false);
    setOnRestart(false);
  }

  function gameOverHandler(rigthGuess, numberOfRounds) {
    setGameOver(true);
    setGuess(rigthGuess);
    setRounds(numberOfRounds);
  }

  function gameRestartHandler(gameOver) {
    setGuess(null);

    setOnRestart(true);
    // setGuess(rigthGuess);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  console.log(`picked ${pickedNumber}`);

  if (!gameOver && pickedNumber && !onRestart) {
    screen = <GameScreen userNum={pickedNumber} isGameOver={gameOverHandler} />;
  }

  if (gameOver && pickedNumber && !onRestart) {
    screen = (
      <GameOver
        guess={guess}
        onRestart={gameRestartHandler}
        numberOfTrials={rounds}
      ></GameOver>
    );
  }

  // if (!gameOver && onRestart && pickedNumber) {
  //   screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  // } else if (gameOver && pickedNumber && !onRestart) {
  //   console.log("inside app", guess);

  //   screen = <GameOver guess={guess} onRestart={gameRestartHandler}></GameOver>;
  // } else if (pickedNumber && !gameOver && onRestart) {
  //   screen = <GameScreen userNum={pickedNumber} isGameOver={gameOverHandler} />;
  // }

  return (
    <>
      <StatusBar style="light-content" />
      <LinearGradient
        colors={[Colors.primary500, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: Colors.accent500,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// and that's really important to memorize.

// Views only take as much space

// as they need to fit their content into themselves.

// And the content of this root View is this StartGameScreen

// which in turn is just this input area.

// So it's this input box

// plus the margin reserved by this input box.

// Now, if I wanna apply this color to the entire screen

// what can we do?

// Well, we can use flex: 1.

// After the above paragraph I used LinearGradient instead of view

{
  /* <ImageBackground>
Now we learned about the image component before already,

image background is quite similar

but as the names suggests, it renders a image

in the background instead of the foreground.

Now I wanna have that above the linear gradient

so that the linear gradient shimmers through the image

but below all the other UI elements.

So therefore now here I'll add image background

like this and wrap my other content with it

so that the other content is inside the background image

and therefore above the background image visually.

And now on this image background,
Now image background also takes another prop

which is very important.

And that's the resize mode.

It's very likely that the image you're using is too small

or too big for the screen size

of the device on which the app is running.

And resize mode controls how the image will be resized

if it doesn't have this same dimensions

as the underlying device.
and I will use cover, which will make sure

that the image always covers up all the available space

but not by distorting it, but instead by zooming in or out.

</ImageBackground> */
}
