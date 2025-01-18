import { ImageBackground, StatusBar, View } from "react-native";
import ChooseLayout from './ChooseLayout'
import Footer from "../components/layout/Footer"
import HeaderApp from "../components/layout/Header";

function MainLayout({ children, player }) {


    // <ImageBackground source={require("../assets/images/bg.png")} style = {{flex: 1}} resizeMode="cover">

    // </ImageBackground>
    return (
        // <ChooseLayout>
            <View style={{ backgroundColor: "#171921", paddingTop: "10%" }}>
                <StatusBar></StatusBar>
                <HeaderApp />
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <Footer />
            </View>

        // </ChooseLayout>
    );
}

export default MainLayout;



