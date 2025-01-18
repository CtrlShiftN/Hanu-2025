import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import shop from '../data/shop.json'
import ChooseLayout from '../layout/ChooseLayout';
import CustomText from '../components/CustomText/CustomText';
import ShopItem from '../components/Shop/ShopItem';
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
const ShopScreen = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
    },[dispatch])
    return (
        <ChooseLayout>
            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    <CustomText color="white">
                        Shopping
                    </CustomText>
                </View>
            </View>
            <View style={styles.scrollView}>
                <ScrollView style={{width: "100%"}}>
                        {shop.map(item => {
                            return (
                                <ShopItem
                                    key={item.id}
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    benefit={item.benefits}
                                    dispatch={dispatch}
                                />
                            )
                        })}
                </ScrollView>
            </View>
        </ChooseLayout>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    scrollView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        color: 'white',
        width: '35%',
        height: 40,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})
export default ShopScreen