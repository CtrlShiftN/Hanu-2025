import { StyleSheet, View, Text } from "react-native";
import { bank } from "./../../data/investment/bank";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { Colors } from "../../constants/styles";
import { useFonts } from "expo-font";

import Title from "../../components/ui/Title";
import BankItem from "../../components/ui/items/BankItem";

function BankScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;
  const [isOldEnough, setIsOldEnough] = useState(false);

  useEffect(() => {
    const requirementsSatisfied = age >= 16;
    setIsOldEnough(requirementsSatisfied);
  }, [authCtx?.userData]);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const isHaveLoanRepayment = authCtx.userData?.loan > 0;
  const loanRepaymentItemIndex = bank.findIndex(
    (item) => item.name === "Loan Repayment"
  );

  if (isHaveLoanRepayment && loanRepaymentItemIndex === -1) {
    bank.push({
      name: "Loan Repayment",
      isLoanRepayment: true,
    });
  } else if (!isHaveLoanRepayment && loanRepaymentItemIndex !== -1) {
    bank.splice(loanRepaymentItemIndex, 1);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Bank</Title>
      {isOldEnough ? (
        bank.map((item, index) => {
          return (
            <BankItem
              key={index}
              name={item.name}
              isDeposit={item.isDeposit}
              interest={item.interest}
              isLoan={item.isLoan}
              isLoanRepayment={item.isLoanRepayment}
            />
          );
        })
      ) : (
        <Text style={styles.require}>
          You must be older than 16 years old!
        </Text>
      )}
    </View>
  );
}

export default BankScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  require: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20
  },
});
