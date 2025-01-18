import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import TransactionOutput from './components/TransactionOutput'
import { CharacterContext } from "../../../store/character-context"
import { getDateMinusDays } from '../../../utils/date'
import ExitButton from '../../../components/main/ExitButton'

const RecentTransactionsScreen = ( { navigation }) => {
    const characterCtx = useContext(CharacterContext)

    const expensesData = characterCtx.financialManagement.filter((transaction) => transaction.transactionType === "expense")

    const incomesData = characterCtx.financialManagement.filter((transaction) => transaction.transactionType === "income")

    var recentExpenses = expensesData.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        const dateObj = new Date(expense.date)
        return dateObj >= date7DaysAgo && dateObj <= today;
      });
    
      var recentIncomes = incomesData.filter((income) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        const dateObj = new Date(income.date)
        return dateObj >= date7DaysAgo && dateObj <= today;
      });
    
      recentExpenses = recentExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
      recentIncomes = recentIncomes.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <View style={styles.container}>
            <ExitButton onPress={() => navigation.goBack()}/>
            <Image 
                style={styles.headerImage}
                resizeMode='contain'
                source={require("../../../assets/financialManagementHeader.png")}
            /> 
            <TransactionOutput expensesData={recentExpenses} incomesData={recentIncomes}/>
        </View>
    )
}

export default RecentTransactionsScreen

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