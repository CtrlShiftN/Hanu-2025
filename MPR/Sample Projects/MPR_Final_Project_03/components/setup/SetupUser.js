import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";

import Button from "../ui/buttons/Button";
import Input from "../Auth/Input";

function SetupUser({ onSubmit, credentialsInvalid }) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [value, setValue] = useState("Male");

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const { userName: userNameIsValid } =
  credentialsInvalid;
  
  const data = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "userName":
        setEnteredUserName(enteredValue);
        break;
      }
    }
    
  function submitHandler() {
    onSubmit({
      userName: enteredUserName,
      gender: value,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Player's Name"
          onUpdateValue={updateInputValueHandler.bind(this, "userName")}
          value={enteredUserName}
          isInvalid={userNameIsValid}
          keyboardType="default"
          placeholder={"name"}
        />
        <Dropdown
        style={styles.dropdown}
        itemTextStyle={styles.itemTextStyle}
        itemContainerStyle={styles.itemContainerStyle}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        />
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>Start now</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttons: {
    marginTop: 15,
  },
  dropdown: {
    height: 55,
    marginTop: 15,
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'UnboundedSemibold',
    borderRadius: 30,
  },
  containerStyle: {
    borderRadius: 30,
    
  },
  itemContainerStyle: {
    borderRadius: 30,
  },
  itemTextStyle: {
    fontFamily: 'NTSomicMedium',
  },
});
export default SetupUser;
