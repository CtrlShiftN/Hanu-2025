import { FlatList, StyleSheet } from 'react-native';

import TransactionItem from './TransactionItem';

function renderExpenseItem(itemData, transactionType) {
  return <TransactionItem {...itemData.item} transactionType={transactionType} />;
}

function TransactionList({transactionType, transactionTypeData }) {
    return (
        <FlatList
          style={styles.flatList}
          data={transactionTypeData}
          renderItem={(transactionData) => renderExpenseItem(transactionData, transactionType)}
        />
    );
}

export default TransactionList;

const styles = StyleSheet.create({
  flatList: {
    marginTop: 10,
    marginHorizontal: "5%", 
    // backgroundColor: "white"

  }
})
