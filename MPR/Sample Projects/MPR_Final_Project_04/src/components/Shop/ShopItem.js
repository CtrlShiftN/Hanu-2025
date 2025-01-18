import { Image, Pressable, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
import { getPlayerRedux } from "../../redux/data"

const ShopItem = ({ name, category, price, benefit,dispatch }) => {
    const genImage = () => {
        if (category === "FOOD") {
            return <Image source={require('../../assets/images/food.png')} style={{ width: 40, height: 40 }} />
        } else if (category === "TRANSPORTATION") {
            return <Image source={require('../../assets/images/transport.jpg')} style={{ width: 40, height: 40 }}/>
        } else if (category == "REAL_ESTATE") {
            return <Image source={require('../../assets/images/house.png')} style={{ width: 40, height: 40 }}/>
        } else {
            return <Image source={require('../../assets/images/electric_device.jpg')} style={{ width: 40, height: 40 }}/>
        }
    }
    const handleBuy =()=> {
        const player = getPlayerRedux()
        if(player.amount >= price) {
            dispatch({
                type: "ADD_PRODUCT",
                payload: {
                    name : name,
                    category: category,
                    price: price,
                    benefit: benefit
                }
            })
            if(benefit.type === "health"){
                dispatch({
                    type:"MODIFY_STATISTIC",
                    payload: {
                        health: benefit.value,
                        amount: -price
                    }
                })
            } else {
                dispatch({
                    type:"MODIFY_STATISTIC",
                    payload: {
                        happiness: benefit.value,
                        amount: -price
                    }
                })
            }
            alert("Buy product success! Let enjoy it!")
        } else {
            alert("Earn more money to buy what you want!")
        }
    }
    return (
        <View style={styles.shopItem}>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    {genImage()}
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <CustomText>
                                {name}
                            </CustomText>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <CustomText color="#059862">
                                    + {benefit.value}{benefit.type}
                                </CustomText>
                                <CustomText color="#FF5151">
                                    -{price}$
                                </CustomText>
                            </View>
                        </View>
                        <Pressable style={styles.button} onPress={()=> handleBuy()}>
                            <CustomText color="white" fontSize={14}>
                                Buy
                            </CustomText>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shopItem: {
        padding: 20,
        backgroundColor: '#DFF2FF',
        marginTop: 20,
        borderRadius: 20,
        width: '90%',
        marginLeft: '5%'
    },
    button: {
        color: 'white',
        width: '25%',
        height: 30,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})

export default ShopItem