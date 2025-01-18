import { Alert } from "react-native";
export function setItemTime(name, time, money, updates, authCtx, setIsProcessing) {
  const value = money === "Free" ? 0 : -(money);
  authCtx.updateMoney({ value: value });
  setIsProcessing(true);
  const timer = setTimeout(() => {
    Alert.alert("Congratulations", `You finished ${name}`, [
      {
        text: "OK",
        onPress: () => {
          authCtx.updateIndex(updates);
        },
      },
    ]);
    setIsProcessing(false);
  }, parseInt(time));
  return () => clearTimeout(timer);
}
