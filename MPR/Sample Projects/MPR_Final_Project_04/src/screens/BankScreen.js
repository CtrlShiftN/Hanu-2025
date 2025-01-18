import { View, StyleSheet, TextInput, Pressable } from "react-native";
import ChooseLayout from "../layout/ChooseLayout";
import CustomText from "../components/CustomText/CustomText";
import { useState, useRef } from "react";
import { getPlayerRedux } from "../redux/data";
import {useDispatch, useSelector} from "react-redux";
function BankScreen() {
    const player = useSelector(state => state.playerReducer.player)
    const dispatch = useDispatch()
    const [withdraw, setWithdraw] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [input, setInput] = useState("")
    const inputRef = useRef()
    const validateString = (input) => {
        // Remove spaces from the input string
        const stringWithoutSpaces = input.replace(/\s/g, '');
    
        // Check if the string consists of only numbers
        if (/^\d+$/.test(stringWithoutSpaces)) {
            return true; // All numbers
        }
    
        // Check if the string consists of only numbers separated by spaces
        if (/^\d+(\s\d+)*$/.test(input)) {
            return true; // Numbers with spaces
        }
    
        return false; // Not all numbers or numbers with spaces
    }
    const validateInput = () => {
        if(validateString(input)) {
            return true
        } else {
            alert("Please enter only numbers or numbers separated by spaces.")
            return false
        }
    }

    function convertToNumbers(input) {
        // Remove spaces from the input string
        const stringWithoutSpaces = input.replace(/\s/g, '');
    
        const number = parseInt(stringWithoutSpaces, 10);
    
        return number;
    }

    const handleDeposit = () => {
        const inputNumb = convertToNumbers(input)
        if(validateInput()){
            if(getPlayerRedux().amount < inputNumb) {
                alert("You don't have enough money to deposit!")
            } else {
                dispatch({type: "DEPOSIT", payload: inputNumb})
                alert("You have deposit successfully")
            }
        }
    }
    const handleWithdraw = () => {
        const inputNumb = convertToNumbers(input)
        if(validateInput()){
            if(getPlayerRedux().bank < inputNumb) {
                alert("You don't have enough money to withdraw!")
            } else {
                dispatch({type: "WITHDRAW", payload: inputNumb})
                alert("You have deposit successfully")
            }
        }
    }
    return ( 
        <ChooseLayout>
            <View style={{flex: 1}}>
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <CustomText color="white">
                            Bank
                        </CustomText>
                    </View>
                </View>

                <View style = {{backgroundColor: "white", flex: 1, alignItems: "center", paddingTop: 20}}>
                    <CustomText fontStyle="italic" fontSize={14}>**You will get 6% of your original deposit per year**</CustomText>
                    <CustomText fontSize={20} style={{paddingTop: 20}}>Account balance: ${Math.floor(player.bank)}</CustomText>
                    <TextInput placeholderTextColor="#000000" 
                                value={input} 
                                onChangeText={(val) => setInput(val)} 
                                placeholder="Enter amount" style={styles.input} 
                                ref={inputRef}
                                onLayout={() => {inputRef.current.focus()}}
                                />
                    
                    <View style = {{flexDirection: "row", gap: 20, paddingTop: 20}}>
                        <Pressable style = {styles.button} onPress={() => {handleWithdraw()}}>
                            <CustomText color="white">Withdraw</CustomText>
                        </Pressable>

                        <Pressable style = {styles.button} onPress={() => {handleDeposit()}}>
                            <CustomText color="white">Deposit</CustomText>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </ChooseLayout>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop:10,
        marginLeft:10,
        paddingBottom:10
    },
    relationScreen: {
        flex: 1
    },
    scrollView:{
        flex:1,
    },
    buttonWrapper: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    button: {
        color: 'white',
        width: '35%',
        height: 40,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: "white"
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        color: '#000000'
    },
})
export default BankScreen;