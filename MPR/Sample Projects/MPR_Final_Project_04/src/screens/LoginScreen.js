import { ActivityIndicator, Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomText from "../components/CustomText/CustomText";
import { Ionicons } from '@expo/vector-icons';
import { collection, doc, getDoc } from "firebase/firestore";
import { db, auth} from "../firebase/config";
import {useDispatch} from 'react-redux'
const LoginScreen = () => {
    const [pending, setPending] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessgae, setErrorMessage] = useState(null)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const signUp = async () => {
        if (email != "" && password != "") {
            setPending(true);
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    getDoc(doc(db, 'users', user.email))
                        .then((res) => {
                            dispatch({type: "SET_PLAYER", payload: res.data().player})
                            setPending(false);
                            navigation.navigate("GameScreen")
                        })
                        .catch((err) => {
                            setPending(false);
                            setErrorMessage(err.messages)
                        })
                })

                .catch((error => {
                    setPending(false);
                    setErrorMessage(error.message);
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 3000)
                }))
        }

        else {
            setErrorMessage("Input is not empty")
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
        }
    };

    return (

        <ImageBackground style={styles.register} source={require('../assets/images/auth_background.png')}>
            {pending && <View style={{minHeight: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#00000080"}}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>}
            <CustomText style={styles.title}>
                Welcome
            </CustomText>
            <CustomText style={styles.title}>
                I AM A DEVELOPER
            </CustomText>
            {errorMessgae ?
                <CustomText style={styles.error} fontSize={12}>
                    {errorMessgae}
                </CustomText>
                :
                null}
            <CustomText style={styles.name}>
                Login
            </CustomText>
            <View style={styles.inputWrapper}>
                <View style={styles.inputItem}>
                    <AntDesign name="user" size={20} color="black" style={styles.icon} />
                    <TextInput placeholderTextColor="#ffffff" value={email} onChangeText={(val) => setEmail(val)} placeholder="Email" style={styles.input} />
                </View>

                <View style={styles.inputItem}>
                    <Ionicons name="key-outline" size={20} color="black" style={styles.icon}/>
                    <TextInput placeholderTextColor="#ffffff" value={password} onChangeText={(val) => setPassword(val)} placeholder="Password" secureTextEntry={true} style={styles.input} />
                </View>
            </View>
            <Pressable onPress={signUp} style={styles.pressable}>
                <Text style={styles.signUp} fontSize="16">Sign In</Text>
            </Pressable>
            <CustomText style={styles.question}>
                Do not have an account ?
            </CustomText>
            <Pressable onPress={() => navigation.navigate("RegisterScreen")} style={styles.pressable}>
                <CustomText style={styles.link}>Sign Up</CustomText>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    register: {
        textAlign: 'center',
        backgroundColor: '#ffffff',
        flex: 1
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 70
    },
    name: {
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 20
    },
    inputWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        color: '#ffffff',
        top: "48%",
        left: '13%',
    
    },
    input: {
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingHorizontal: 40,
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        color: '#ffffff'
    },
    inputItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUp: {
        marginTop: 20,
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontWeight: 'bold',
        backgroundColor: '#00c67e',
        textAlign: 'center',
        borderRadius: 20,
        color: 'white'
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10
    },
    question: {
        marginTop: 30,
        textAlign: 'center',
        color: '#ffffff'
    },
    link: {
        color: '#00c67e',
        marginTop: 5
    }
})
export default LoginScreen