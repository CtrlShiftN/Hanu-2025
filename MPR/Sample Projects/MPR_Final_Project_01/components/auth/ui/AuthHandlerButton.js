import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { Colors } from '../../../constants/styles';

function AuthHandlerButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Image 
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={require("../../../assets/authButtonBackground.png")}
      />
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
      
    </Pressable>
  );
}

export default AuthHandlerButton;

const styles = StyleSheet.create({
  button: {
    position: "relative",
    borderRadius: 6,
    paddingVertical: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 25,
    fontWeight: 'bold'
  },
  backgroundImage: {
    position: "absolute",
    width: "100%", height: 50,
    // borderWidth: 1, borderColor: "red",
    // width: "100
  }
});