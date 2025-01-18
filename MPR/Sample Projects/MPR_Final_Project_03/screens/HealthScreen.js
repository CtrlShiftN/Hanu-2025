import { ScrollView, Alert } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import HealthListScreen from "./Health/HealthListScreen";
function HealthScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <HealthListScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default HealthScreen;
