import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Footer from "../components/layout/Footer";
import Avatar from "../components/Avatar/Avatar";
import { getPlayerRedux } from "../redux/data";
import ProfileRow from "../components/common/ProfileRow";
import { AntDesign, FontAwesome, Entypo, Feather   } from '@expo/vector-icons';
import CustomText from "../components/CustomText/CustomText";
function ProfileScreen() {
    const player = getPlayerRedux()
    const playerData = [
        {title: "Name",
        content: player.name,
        icon: <AntDesign name="user" size={24} color="white" />
        },
        {title: "Age",
        content: player.age,
        icon: <AntDesign name="clockcircleo" size={24} color="white" />
        },
        {title: "Gender",
        content: player.sex,
        icon: <FontAwesome name="transgender" size={24} color="white" />
        },
        {title: "Amount",
        content: player.amount,
        icon: <FontAwesome name="dollar" size={24} color="white" />
        },
        {title: "Bank",
        content: player.bank,
        icon: <FontAwesome name="dollar" size={24} color="white" />
        },
        {title: "Happiness",
        content: player.happiness,
        icon: <Entypo name="emoji-happy" size={24} color="white" />
        },
        {title: "Health",
        content: player.health,
        icon: <AntDesign name="hearto" size={24} color="white" />
        },
        {title: "Smart",
        content: player.smart,
        icon: <FontAwesome name="lightbulb-o" size={24} color="white" />
        },{title: "Appearance",
        content: player.look,
        icon: <FontAwesome name="sun-o" size={24} color="white" />
        },
        {title: "University",
        content: player.university,
        icon: <FontAwesome name="university" size={24} color="white" />
        },
        {title: "Current job",
        content: player.currentJob ? player.currentJob.name : "None",
        icon: <Feather name="briefcase" size={24} color="white" />
        },
        {title: "Friends Connection",
        content: `${player.friendList.length} friends`,
        icon: <AntDesign name="addusergroup" size={24} color="white" />
        },
    ]
    return ( 
    <View style={{backgroundColor: "#000000", flex: 1}}>
        <StatusBar></StatusBar>
        <View style={{paddingHorizontal: 20, flex: 1, justifyContent: "space-between"}}>
            <View style={{paddingTop: 10}}>
                <Avatar sex={player.sex} age={player.age} style={{width: 100, height: 100}}/>
                {player.deathReason.length > 0 && <CustomText color="white" align="center" fontStyle={"italic"}>(Death reason: {player.deathReason})</CustomText>}
            </View>

            <View style={{flex: 1, paddingVertical: 30}}>
                <ScrollView contentContainerStyle={{flexDirection: "column", gap: 20}}>
                    {playerData.map((data, index) => {
                        return  <ProfileRow
                        key={index}
                        icon = {data.icon}
                        title={data.title} 
                        content={data.content} />
                    })}
                </ScrollView>
            </View>
            </View>
                <View>
            <Footer/>
        </View>
    </View> );
}

export default ProfileScreen;
const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    }
})