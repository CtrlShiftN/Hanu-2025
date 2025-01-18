import { Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import CustomText from "../components/CustomText/CustomText"
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { db, auth } from "../firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";
import Player from "../data/models/Player"
import { ActivityIndicator } from "react-native";
const RegisterScreen = () => {
    const [err, setErr] = useState(null)
    const [pending, setPending] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessgae, setErrorMessage] = useState(null)
    const [rePassword, setRePassword] = useState("")
    const [username, setUsername] = useState("")
    const navigation = useNavigation()

    const signUp = async () => {
        const collectionRef = collection(db, "users")
        if (email != "" && password != "" && username != "" && rePassword != "") {
            if (password === rePassword) {
                setPending(true);
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        const data = {
                                "email": user.email,
                                "player": {...new Player(user.email)}
                            }

                        setDoc(doc(collectionRef, user.email), data)
                            .then(() => {
                                setPending(false)
                                alert("Sign up success! Please login!")
                                navigation.navigate("LoginScreen")
                                })
                            .catch((err) => {
                                setPending(false)
                                alert("Create player failed")
                            })
                    })

                    .catch((error => {
                        setPending(false);
                        setErrorMessage(error.message);
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 3000)
                    }))
            } else {
                setErrorMessage("Re-enter password is not the same")
                setTimeout(() => {
                    setErrorMessage(null)
                }, 3000)
            }
        } else {
            setErrorMessage("Input is not empty")
            setTimeout(()=>{
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
                <CustomText style={styles.error} align="center" fontSize={12}>
                    {errorMessgae}
                </CustomText>
                :
                null}
            <CustomText style={styles.name}>
                Register
            </CustomText>
            <View style={styles.inputWrapper}>
                <View style={styles.inputItem}>
                    <AntDesign name="user" size={20} color="black" style={styles.icon} />
                    <TextInput placeholderTextColor="#ffffff" value={email} onChangeText={(val) => setEmail(val)} placeholder="Email" style={styles.input} />
                </View>
                <View style={styles.inputItem}>
                    <AntDesign name="user" size={20} color="black" style={styles.icon} />
                    <TextInput placeholderTextColor="#ffffff" value={username} onChangeText={(val) => setUsername(val)} placeholder="Username" style={styles.input} />
                </View>
                <View style={styles.inputItem}>
                    <Ionicons name="key-outline" size={20} color="black" style={styles.icon}/>
                    <TextInput placeholderTextColor="#ffffff" value={password} onChangeText={(val) => setPassword(val)} placeholder="Password" secureTextEntry={true} style={styles.input} />
                </View>
                <View style={styles.inputItem}>
                    <Ionicons name="key-outline" size={20} color="black" style={styles.icon}/>
                    <TextInput placeholderTextColor="#ffffff" value={rePassword} onChangeText={(val) => setRePassword(val)} placeholder="Re-enter Password" secureTextEntry={true} style={styles.input} />
                </View>

            </View>
            <Pressable onPress={signUp} style={styles.pressable}>
                <CustomText style={styles.signUp} fontSize={16}>Sign Up</CustomText>
            </Pressable>
            <CustomText style={styles.question}>
                Already have an account?
            </CustomText>
            <Pressable onPress={() => navigation.navigate("LoginScreen")} style={styles.pressable}>
                <CustomText style={styles.link}>Sign In</CustomText>
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
        left: '13%'
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
        alignItems: 'center'
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
export default RegisterScreen