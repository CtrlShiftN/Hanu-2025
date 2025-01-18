import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native';

const LogoScreen = ({navigation}) => {
    const [positionValue] = useState(new Animated.Value(0))
    const windowHeight =Dimensions.get('window').height

    const [elementHeight, setElementHeight] = useState(0);

    function onLayout(event) {
        const { height } = event.nativeEvent.layout;
        setElementHeight(height);
    }

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("SignInScreen")
        }, 5000)
    }, [])

    useEffect(() => {
      Animated.timing(positionValue, {
        toValue: windowHeight/2,
        duration: 2000,
        useNativeDriver: false, 
      }).start();
    }, [])
  
    const introElementsWrapperStyle = {
        marginTop: positionValue,
        transform: [{translateY: -elementHeight/2}],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", alignItems: "center",
    }

    return (
        <View style={styles.container}>
            <Animated.View style={introElementsWrapperStyle} onLayout={onLayout}>
                <Image style={styles.image} source={require("../../assets/logo.png")} />
                <Animated.Text style={[styles.nameGame]}>I Am Developer</Animated.Text>
            </Animated.View>
        </View>
    )
}

export default LogoScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "black" },
    image: {
        width: 200,
        height: 200,
    },
    nameGame: {
        marginTop: 10,
        fontSize: 24, fontWeight: "bold",
        color: "white",
    }, 
})