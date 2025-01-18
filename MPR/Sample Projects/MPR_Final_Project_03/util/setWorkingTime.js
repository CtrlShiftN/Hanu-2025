import { Alert } from "react-native";
export function setWorkingTime(time, updates, authCtx, value) {
  const timer = setTimeout(() => {
    authCtx.deleteWorking(value);
    Alert.alert("Congratulations", `You finished the job ${value.name}`, [
      {
        text: "OK",
        onPress: () => {
          authCtx.updateIndex(updates);
        },
      },
    ]);
  }, parseInt(time));
  return () => clearTimeout(timer);
}
