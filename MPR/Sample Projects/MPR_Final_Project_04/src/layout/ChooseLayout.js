import { StatusBar, StyleSheet, View } from "react-native"
import Footer from "../components/layout/Footer"
import HeaderApp from "../components/layout/Header"

const ChooseLayout = ({children})=> {
    return(
        <View style={styles.choseScreen}>
            <StatusBar></StatusBar>
            <View>
                <HeaderApp />
            </View>
            <View style={styles.children}>
                {children}
            </View>
            <View>
                <Footer />
            </View>
            <StatusBar></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    choseScreen: {
        flex:1,
        backgroundColor:'#161920',
    },
    children: {
        flex:1,
    }
})
export default ChooseLayout