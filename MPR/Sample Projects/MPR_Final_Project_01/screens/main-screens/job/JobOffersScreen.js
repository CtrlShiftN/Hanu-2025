import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { JobScreenHeader } from "./JobMainScreen";
import { jobOffersData } from "../../../constants/jobOffersData";
import ExitButton from "../../../components/main/ExitButton";
import { useNavigation } from "@react-navigation/native";

const JobOffersScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ExitButton zIndexSetting={1} onPress={() => navigation.goBack()}/>
      <JobScreenHeader title="Job Offers" />
      <ScrollView style={{ padding: 20 }}>
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 20,
            paddingVertical: 20,
          }}
        >
          Recommended for you
        </Text>
        <View style={styles.grid}>
          {jobOffersData.map((job, index) => (
            <OfferItem
              key={index}
              image={job.logo}
              jobName={job.title}
              company={job.company}
              address={job.location}
              daysAgo={3}
              bgColor={job.bg}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const OfferItem = ({
  image,
  jobName,
  company,
  address,
  daysAgo,
  bgColor,
}) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();

  function navigateJobOfferDetailsScreen() {
    navigation.navigate("JobOfferDetailsScreen", {companyName: company})
  }

  return (
    <View style={{ ...styles.itemContainer, backgroundColor: bgColor }}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.companyImage} />
      </View>
      <Text style={{ ...styles.jobName, fontFamily: "Inter_400Regular" }}>
        {jobName}
      </Text>
      <Text style={{ ...styles.companyName, fontFamily: "Inter_400Regular" }}>
        {company}
      </Text>
      <Text style={{ ...styles.address, fontFamily: "Inter_400Regular" }}>
        {address}
      </Text>
      <Text style={{ ...styles.address, fontFamily: "Inter_400Regular" }}>
        (Remote)
      </Text>
      <View style={styles.footer}>
        <Text style={{ ...styles.daysAgo, fontFamily: "Inter_400Regular" }}>
          {daysAgo + " days ago"}
        </Text>
        <Pressable
          style={{ ...styles.detailsButton, fontFamily: "Inter_400Regular" }}
        >
          <Text style={styles.details} onPress={navigateJobOfferDetailsScreen}>
            Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default JobOffersScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  itemContainer: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.25,
    padding: 5,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 16,
    paddingTop: 16,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: Dimensions.get("window").width / 7.5,
    height: Dimensions.get("window").width / 7.5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddddd",
    borderRadius: 100,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-between",
  },
  jobName: {
    fontSize: 16,
    marginBottom: 5,
  },
  companyName: {
    fontSize: 12,
  },
  address: {
    fontSize: 10,
    color: "#626262",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  daysAgo: {
    fontSize: 10,
    color: "#415EB6",
  },
  detailsButton: {
    backgroundColor: "#86C5FF",
    borderRadius: 10,
  },
  details: {
    // color: 'white',
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
