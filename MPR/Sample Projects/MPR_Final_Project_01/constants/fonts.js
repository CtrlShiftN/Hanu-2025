import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

export const loadFonts = () => {
  return useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
};
