import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import TransactionList from './TransactionList';
import TransactionSummary from './TransactionSummary';
import { useState } from 'react';

function TransactionOutput({ expensesData, incomesData, fallbackText }) {
  let content;
  const [isExpenseFocus, setIsExpenseFocus] = useState(true)

  function switchPart() {
    setIsExpenseFocus((prevValue) => !prevValue)
  }

  if (expensesData.length > 0 || incomesData.length > 0) {
    if (isExpenseFocus) {
      content = <TransactionList transactionType="expense" transactionTypeData={expensesData} />
    } else { 
      content = <TransactionList transactionType="income" transactionTypeData={incomesData} />
    }
  } else {
      content = <Text style={styles.infoText}>{fallbackText}</Text>;
  }

  return (
    <View style={styles.container}>
      <Image 
          style={styles.cloudImage}
          source={require("../../../../assets/opacityCloud.png")}
      />
      <TransactionSummary expensesData={expensesData} incomesData={incomesData} switchPart={switchPart} isExpenseFocus=
      {isExpenseFocus} />
        {content}
      
    </View>
  );
}

export default TransactionOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    // borderColor: "red", borderWidth: 1,
    backgroundColor: "#243E3E"
  },
  financialAmount: {
    paddingTop: 24,
    width: "100%"
  },
  balanceOverview: {
    alignItems: "center"
  },
  categoriesWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  cloudImage: {
    position: "absolute", bottom: 0,
  }
});
