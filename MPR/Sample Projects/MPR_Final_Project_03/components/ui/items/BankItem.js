import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../../constants/styles";
import { useFonts } from "expo-font";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { formatNumber } from "../../../util/formatNumber";

import ButtonItem from "../buttons/ButtonItem";

function BankItem({ name, isDeposit, interest, isLoan, isLoanRepayment }) {
  const authCtx = useContext(AuthContext);
  const savings = authCtx.userData?.savings;
  const money = authCtx.userData?.money;
  const loanMoney = authCtx.userData?.loan;

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const depositAndWithdrawalHandler = (percentage) => {
    isDeposit ? depositHandler(percentage) : withdrawalHandler(percentage);
  };

  const withdrawalHandler = (percentage) => {
    const withdrawalAmount = savings * percentage;
    authCtx.updateMoney({ value: withdrawalAmount, action: "withdrawal" });
  };

  const depositHandler = (percentage) => {
    const depositAmount = money * percentage;
    authCtx.updateMoney({ value: -depositAmount, action: "deposit" });
  };

  const loanHandler = (amount) => {
    authCtx.updateMoney({ value: amount, action: "loan" });
  };

  const loanRepaymentHandler = (percentage) => {
    const loanRepaymentAmount = -(loanMoney * percentage);
    authCtx.updateMoney({
      value: loanRepaymentAmount,
      action: "loanRepayment",
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.inforContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          {interest && (
            <Text style={styles.interest}>
              Interest:{" "}
              <Text
                style={[styles.interest, isDeposit ? styles.green : styles.red]}
              >
                {isDeposit ? `${interest}%/year` : `${interest}%/year`}
              </Text>
            </Text>
          )}
        </View>
        {isLoan ? (
          <Text></Text>
        ) : isLoanRepayment ? (
          <Text style={styles.money}>${formatNumber(loanMoney)}</Text>
        ) : (
          <Text style={styles.money}>
            {isDeposit
              ? `$${formatNumber(money)}`
              : `$${formatNumber(savings)}`}
          </Text>
        )}
      </View>
      {isLoan ? (
        <View style={styles.buttonContainer}>
          <ButtonItem onPress={() => loanHandler(100)}>$100</ButtonItem>
          <ButtonItem onPress={() => loanHandler(1000)}>$1000</ButtonItem>
          <ButtonItem onPress={() => loanHandler(100000)}>$100K</ButtonItem>
        </View>
      ) : isLoanRepayment ? (
        <View style={styles.buttonContainer}>
          <ButtonItem onPress={() => loanRepaymentHandler(0.1)}>10%</ButtonItem>
          <ButtonItem onPress={() => loanRepaymentHandler(0.5)}>50%</ButtonItem>
          <ButtonItem onPress={() => loanRepaymentHandler(1)}>100%</ButtonItem>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <ButtonItem onPress={() => depositAndWithdrawalHandler(0.1)}>
            10%
          </ButtonItem>
          <ButtonItem onPress={() => depositAndWithdrawalHandler(0.5)}>
            50%
          </ButtonItem>
          <ButtonItem onPress={() => depositAndWithdrawalHandler(1)}>
            100%
          </ButtonItem>
        </View>
      )}
    </View>
  );
}

export default BankItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },

  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },

  name: {
    fontFamily: "NTSomicMedium",
    fontSize: 23,
    color: Colors.black,
    marginBottom: 3,
  },

  interest: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    marginRight: 30,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
    color: Colors.gray,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },
  pressed: {
    opacity: 0.7,
  },
});
