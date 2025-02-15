import { Image, StyleSheet, Platform, Pressable, KeyboardAvoidingView, StatusBar, ImageBackground, ActivityIndicator, View, Text } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
	const [cityName, setCityName] = useState("Hanoi");
	const [weatherDesc, setWeatherDesc] = useState(null);
	const [weatherTemperature, setWeatherTemperature] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getWeather();
	}, [])
  const getWeather = () => {
	// fetch weather data from API
	const url = "https://api.openweathermap.org/data/2.5/weather";
	axios.get(url, {
	  params: {
		q: cityName,
		appid: "ee6de521fda3d6518c1c40e36c8ccb7a"
	  }
	})
	.then(function (response) {
		setCityName(response.data.name);
		setWeatherDesc(response.data.weather[0].description);
		setWeatherTemperature(response.data.main.temp);
		setLoading(false);
	})
	.catch(function (error) {
	  console.log(error);
	})
	.finally(function () {
	  // always executed
	});
  }
  const onChangeHandler = (e) => {
	setCityName(e);
	setLoading(true);
	setWeatherDesc(null);
	setWeatherTemperature(null);
  }
  return (
	  <KeyboardAvoidingView behavior='height' style={{flex: 1}}>
		<StatusBar />
		<ImageBackground 
			source={require('@/assets/images/weatherDesc/snow.png')}
			resizeMode="cover"
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<ActivityIndicator animating={loading} size="large" />
			<View style={styles.viewContainer}>
				<Text style={[styles.text, {fontSize: 36}]}>{cityName}</Text>
				<Text style={[styles.text, {fontSize: 20}]}>{weatherDesc}</Text>
				<Text style={[styles.text, {fontSize: 36}]}>{weatherTemperature}</Text>
				<TextInput style={styles.textPromt} value={cityName} onChangeText={onChangeHandler} onSubmitEditing={getWeather} placeholder='Enter any city' placeholderTextColor={Colors.silver}></TextInput>
			</View>
		</ImageBackground>
	  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	imageBackground: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		color: '#333',
		fontWeight:'900'
	},
	textPromt: {
		marginTop: 10,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.black,
		color: Colors.white
	},
	viewContainer: {
		paddingHorizontal: '10%',
	}
});
