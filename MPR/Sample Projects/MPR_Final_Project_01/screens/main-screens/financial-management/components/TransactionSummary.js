import { View, StyleSheet } from 'react-native';

// import Category from '../UI/Category';
import Category from './Category';

function TransactionSummary({expensesData, incomesData, switchPart, isExpenseFocus}) {
  var expensesSum = expensesData.reduce((sum, expense) => {
    return sum + expense.transactionCoin;
  }, 0) 

  var incomesSum = incomesData.reduce((sum, income) => {
    return sum + income.transactionCoin;
  }, 0)

  var balance = incomesSum - expensesSum;

  return (
    <>
        <View style={styles.container}>
          <View style={styles.financialAmount}>
            <View style={styles.balanceOverview}>
              <Category title="Balance Overview" amount={balance} />
            </View>
            <View style={styles.categoriesWrapper}>
              <Category title="Expense" amount={expensesSum} onPress={switchPart} isExpenseFocus={isExpenseFocus}/>
              <Category title="Income" amount={incomesSum} onPress={switchPart} isExpenseFocus={!isExpenseFocus}/>
            </View>
          </View>
        </View>
    </>
  );
}

export default TransactionSummary;

const styles = StyleSheet.create({

financialAmount: {
  paddingTop: 24,
  backgroundColor: "white"
},
balanceOverview: {
  alignItems: "center",
},
categoriesWrapper: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 10
},
});
