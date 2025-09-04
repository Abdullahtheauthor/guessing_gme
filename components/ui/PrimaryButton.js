import { Pressable, Text, View, StyleSheet } from "react-native";
// import { ImageBackground } from "react-native-web";
function PrimaryButton({ children, onPress, ripple_color }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={[
          ({ pressed }) =>
            pressed
              ? [styles.innerContainer, styles.pressed]
              : styles.innerContainer,
        ]}
        onPress={onPress}
        // android_ripple={{ color: "green" }}
        android_ripple={{ color: ripple_color }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    borderRadius: 28,
    margin: 4,
    backgroundColor: "#b993a6ff",
  },
  innerContainer: {
    backgroundColor: "#b993a6ff",
    margin: 4,
    padding: 8,

    elevation: 2,
    // textAlign: 'center'
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    padding: 8,
    color: "white",
  },
  // for ios
  pressed: {
    opacity: 0.75,
  },
});
// Using of presses is mainly fot ios
// And for this, we can changed this style prop a little bit.Because as I as I mentioned before,
// the style prop for this Pressable componenttakes either a styling object
// as we're currently passing it in,
// or it takes a function, for example, an arrow function here,
// which will be called automatically by react-native,
// whenever the Pressable is pressed.
// So whenever the press event occurs.
// And then, this style object receives some data
// about the press event,
// which is an object with essentially one property.
// And therefore, we can also use object destructuring here
// to pull out that one property.
// And that one property is a pressed property.
// And this name is not up to you.
// This is a property named pressed,
// which is part of that object
// which is automatically passed into this function
// by react-native for this Pressable component.
// And pressed is a Boolean which is true,
// if we currently are pressing the button
// or the element in general, and false otherwise.
// So now, pressed can be used here
// in the body of this arrow function
// to determine which style objects should be applied.
// And for this I'll check,
// if press is truthy,
// in which case I wanna apply different styles
// than it's not true.
// If it's not true,
// after the colon here,
// I wanna apply the default button in our container style.
// But if it is true, then I wanna apply multiple styles.
// I do wanna apply the default button styles,
// but I also want to add my pressed style object here.
// And this can be achieved by passing an array of styles.
// And in general, in any place where you use the style prop,
// even if it's not Pressable component.
// You can pass style objects like this.
// But you can also pass arrays of style objects.
// And in that case,
// all the style objects in that array
// would be considered by react-native.
// So here, I then want to add
// my buttonInnerContainer style here.
// But I also want to add the press style.
// So, if pressed is true,
// then this array of style objects
// will be applied to the button.
// If it's false, this single style object will be applied.
// And with that, if we save this.
// We now got this feedback here as well.
// Because we got some transparency going on,
// when we click this
// On Android, we now also have this effect. And for the moment that is fine for me here,you will learn in the next section,how you can differentiate between platforms
