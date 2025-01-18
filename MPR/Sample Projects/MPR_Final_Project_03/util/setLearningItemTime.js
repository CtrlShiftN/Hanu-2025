import { Alert } from "react-native";
export function setLearningItemTime(
  name,
  time,
  value,
  progress,
  year,
  times,
  updates,
  authCtx,
  setIsLearning,
  setProgress,
  setYear
) {
  // authCtx.updateMoney({ value: value });
  setIsLearning(true);
  const timer = setTimeout(() => {
    Alert.alert("Congratulations", `You finished ${name}`, [
      {
        text: "OK",
        onPress: () => {
          authCtx.updateIndex(updates);
        },
      },
    ]);
    setIsLearning(false);
    if (progress < 1 && year < times) {
      setProgress(progress + 1 / times);
      setYear(year + 1);
    }
  }, parseInt(time));
  return () => clearTimeout(timer);
}
