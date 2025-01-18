import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { getFormattedDate } from "../../../../utils/date";

function TransactionItem({transactionType, id, description, transactionCoin, date}) {

  const dateObject = new Date(date)
  
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View style={styles.itemLeft}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(dateObject)}</Text>
        </View>
        <View style={styles.itemRight}>
          <Image 
            style={styles.moneyImage}
            source={require("../../../../assets/money.png")}
          />
          <Text style={styles.amount}> {transactionCoin}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default TransactionItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    backgroundColor: "#D9D9D9",
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  textBase: {
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  itemLeft: {
    width: "65%",
    // borderColor: "blue", borderWidth: 1,
  },
  itemRight: {
    // borderColor: "red", borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: "auto"
  },
  moneyImage: {
    width: 30, height: 30,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "blue"
  },
});
