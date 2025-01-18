import { ScrollView, Alert } from "react-native";
import SportsScreen from "./Relax/SportsScreen";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LeisureScreen from "./Relax/LeisureScreen";
import TravelScreen from "./Relax/TravelScreen";
function RelaxScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <LeisureScreen />
        <SportsScreen />
        <TravelScreen />
      </ScrollView>
    </ScreenLayout>
  );
}

export default RelaxScreen;
