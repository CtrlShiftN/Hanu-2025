import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const movies = [
    {
        id: 1,
        title: "Avatar 2",
        genre: "Sci-Fi",
        year: "2022",
        rating: "8.1",
        poster: require("../assets/images/avatar.jpg"),
        desc: "This is a short desc of Avatar"
    },
    {
        id: 2,
        title: "Natra 2",
        genre: "Cartoon",
        year: "2024",
        rating: "8.8",
        poster: require("../assets/images/avatar.jpg"),
        desc: "This is a short desc of Natra"
    }
];

const HomeScreen = ({navigation}) => {
    return (
        <View className="flex-1">
            <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("MovieDetail", {movie: item})} className="flex-1 flex-row p-4">
                    <Image source={item.poster} className="w-30 rounded-lg me-3" />
                    <Text className="">{item.title}</Text>

                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default HomeScreen;