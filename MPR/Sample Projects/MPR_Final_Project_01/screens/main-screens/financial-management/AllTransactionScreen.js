import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import TransactionOutput from './components/TransactionOutput'
import { CharacterContext } from "../../../store/character-context"
import ExitButton from '../../../components/main/ExitButton'

const AllTransactionScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext)

  var expensesData = characterCtx.financialManagement.filter((transaction) => transaction.transactionType === "expense")

  var incomesData = characterCtx.financialManagement.filter((transaction) => transaction.transactionType === "income")
  
  expensesData = expensesData.sort((a, b) => new Date(b.date) - new Date(a.date));
  incomesData = incomesData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View style={styles.container}>
      <ExitButton 
        onPress={() => navigation.goBack()}
      />
      <Image 
        style={styles.headerImage}
        resizeMode='contain'
        source={require("../../../assets/financialManagementHeader.png")}
      /> 
      <TransactionOutput expensesData={expensesData} incomesData={incomesData}/>
    </View>
  )
}

  export default AllTransactionScreen

  const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      flex: 1,
      backgroundColor: "#FFFFFF",
  },
  headerImage: {
    position: "relative", 
    zIndex: -1,
}
})