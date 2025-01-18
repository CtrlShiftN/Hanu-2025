import { ScrollView, Alert } from "react-native";
import SideJobScreen from "./Work/SideJobScreen";
import MainJobScreen from "./Work/MainJobScreen";
import CrimeScreen from "./Work/CrimeScreen";
import ScreenLayout from "./GeneralComs/ScreenLayout";
function WorkScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <SideJobScreen />
        <MainJobScreen />
        <CrimeScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default WorkScreen;
