import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Colors } from '../../constants/styles';
import { useEffect, useState } from 'react';

function Input({ label, keyboardType, secure, onUpdateValue, value, isInvalid, }) {
  const [imageURL, setImageURL] = useState(require("../../assets/lock.png"))
  
  useEffect(() => { 
    switch(label) {
      case "Email Address": {
        setImageURL(require("../../assets/email.png"))
        break;
      }
      case "Confirm Email Address": {
        setImageURL(require("../../assets/email.png"))
        break;
      }
      case "Password": {
        setImageURL(require("../../assets/lock.png"))
        break;
      } 
      case "Confirm Password": {
        setImageURL(require("../../assets/lock.png"))
        break;
      } 
    }
  }, [])
  
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={[styles.input, isInvalid && styles.inputInvalid]}
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          value={value}
        />
        <Image
          style={styles.iconImage}
          source={imageURL}
        />
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.authText,
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.errorText,
  },
  textInputWrapper: {
    position: "relative",
    // borderColor: "red", borderWidth: 1,
    justifyContent: "center", alignItems: "flex-end"
  },
  input: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 6,
    // backgroundColor: Colors.authInputBoxBackground,
    borderBottomWidth: 2, borderColor: Colors.authText,
    borderRadius: 4,
    fontSize: 16,
    color: "white"
  },
  inputInvalid: {
    // backgroundColor: Colors.error100,
    borderColor: Colors.errorText,
    color: "red",
  },
  iconImage: {
    position: "absolute", 
    width: 20, height: 20
  }
});